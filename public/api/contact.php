<?php
declare(strict_types=1);

/**
 * Contact & quote form handler for IONOS shared hosting (static Next.js export).
 */

const CONTACT_TO_EMAIL = 'info@ravianmatrixsystems.de';
const CONTACT_FROM_EMAIL = 'noreply@ravian-matrix.de';
const CONTACT_FROM_NAME = 'Ravian Matrix Systems Website';
const CONTACT_SUBJECT = 'New Website Inquiry - Ravian Matrix Systems';
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MIN_MESSAGE_LENGTH = 10;

const ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx', 'png', 'jpg', 'jpeg'];
const ALLOWED_MIME_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
];

ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'Method not allowed.', 405);
}

$contentLength = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > 0 && empty($_POST) && empty($_FILES)) {
    respond(false, 'Request too large. Maximum file size is 10 MB.', 413);
}

// Honeypot: bots that fill hidden fields get a fake success without sending mail.
if (trim((string) field('website')) !== '') {
    respond(true, 'Message received successfully.');
}

$formType = strtolower(trim((string) field('formType')));
$isQuote = $formType === 'quote';

$firstName = sanitize_text(field('firstName'), 100);
$lastName = sanitize_text(field('lastName'), 100);
$email = sanitize_text(field('email'), 254);
$phone = sanitize_text(field('phone'), 60);

if ($firstName === '' || $lastName === '' || $email === '') {
    respond(false, 'Please provide your name and email address.', 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 400);
}

if ($isQuote) {
    $company = sanitize_text(field('company'), 160);
    $serviceRequired = sanitize_text(field('serviceRequired'), 120);
    $projectType = sanitize_text(field('projectType'), 120);
    $projectDetails = sanitize_text(field('projectDetails'), 2000);
    $expectedTimeline = sanitize_text(field('expectedTimeline'), 120);
    $estimatedBudget = sanitize_text(field('estimatedBudget'), 120);
    $attachmentNote = sanitize_text(field('attachmentNote'), 300);
    $consent = field('consent');

    if (
        $company === '' ||
        $serviceRequired === '' ||
        $projectType === '' ||
        $projectDetails === '' ||
        $expectedTimeline === '' ||
        $estimatedBudget === ''
    ) {
        respond(false, 'Please complete all required quote fields.', 400);
    }

    if ($consent === null || $consent === '') {
        respond(false, 'Please accept the privacy consent to continue.', 400);
    }

    if (mb_strlen($projectDetails) < MIN_MESSAGE_LENGTH) {
        respond(false, 'Please provide more detail about your project (at least ' . MIN_MESSAGE_LENGTH . ' characters).', 400);
    }

    $messageBody = build_quote_body(
        $firstName,
        $lastName,
        $email,
        $phone,
        $company,
        $serviceRequired,
        $projectType,
        $projectDetails,
        $expectedTimeline,
        $estimatedBudget,
        $attachmentNote
    );
} else {
    $subject = sanitize_text(field('subject'), 160);
    $inquiryType = sanitize_text(field('inquiryType'), 120);
    $message = sanitize_text(field('message'), 1000);

    if ($subject === '' || $inquiryType === '' || $message === '') {
        respond(false, 'Please complete all required fields.', 400);
    }

    if (mb_strlen($message) < MIN_MESSAGE_LENGTH) {
        respond(false, 'Please enter a longer message (at least ' . MIN_MESSAGE_LENGTH . ' characters).', 400);
    }

    $messageBody = build_contact_body(
        $firstName,
        $lastName,
        $email,
        $phone,
        $subject,
        $inquiryType,
        $message
    );
}

$attachment = validate_upload('attachment');

if ($attachment !== null) {
    $messageBody .= "\n\n--- Attachment ---\n";
    $messageBody .= 'File: ' . $attachment['safe_name'] . "\n";
    $messageBody .= 'Type: ' . $attachment['mime'] . "\n";
    $messageBody .= 'Size: ' . format_bytes($attachment['size']) . "\n";
}

$sent = send_mail(
    CONTACT_TO_EMAIL,
    CONTACT_SUBJECT,
    $messageBody,
    $email,
    trim($firstName . ' ' . $lastName),
    $attachment
);

if (!$sent) {
    respond(false, 'We could not send your message right now. Please try again later or email us directly.', 500);
}

respond(true, 'Message received successfully.');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function field(string $key): ?string
{
    if (!isset($_POST[$key])) {
        return null;
    }
    $value = $_POST[$key];
    if (!is_string($value)) {
        return null;
    }
    return $value;
}

function sanitize_text(?string $value, int $maxLength): string
{
    if ($value === null) {
        return '';
    }
    $value = str_replace(["\0", "\r"], '', $value);
    $value = trim($value);
    if ($value === '') {
        return '';
    }
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    if (mb_strlen($value) > $maxLength) {
        $value = mb_substr($value, 0, $maxLength);
    }
    return $value;
}

function respond(bool $success, string $message, int $status = 200): void
{
    http_response_code($status);
    if ($success) {
        echo json_encode([
            'success' => true,
            'message' => $message,
        ], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode([
            'success' => false,
            'error' => $message,
        ], JSON_UNESCAPED_UNICODE);
    }
    exit;
}

function build_contact_body(
    string $firstName,
    string $lastName,
    string $email,
    string $phone,
    string $subject,
    string $inquiryType,
    string $message
): string {
    $lines = [
        'Form type: Contact inquiry',
        '',
        'Name: ' . $firstName . ' ' . $lastName,
        'Email: ' . $email,
        'Phone: ' . ($phone !== '' ? $phone : '(not provided)'),
        'Subject: ' . $subject,
        'Inquiry type: ' . $inquiryType,
        '',
        'Message:',
        $message,
    ];
    return implode("\n", $lines);
}

function build_quote_body(
    string $firstName,
    string $lastName,
    string $email,
    string $phone,
    string $company,
    string $serviceRequired,
    string $projectType,
    string $projectDetails,
    string $expectedTimeline,
    string $estimatedBudget,
    string $attachmentNote
): string {
    $lines = [
        'Form type: Quote request',
        '',
        'Name: ' . $firstName . ' ' . $lastName,
        'Email: ' . $email,
        'Phone: ' . ($phone !== '' ? $phone : '(not provided)'),
        'Company: ' . $company,
        'Service required: ' . $serviceRequired,
        'Project type: ' . $projectType,
        'Expected timeline: ' . $expectedTimeline,
        'Estimated budget: ' . $estimatedBudget,
        '',
        'Project details:',
        $projectDetails,
    ];
    if ($attachmentNote !== '') {
        $lines[] = '';
        $lines[] = 'Attachment note / link:';
        $lines[] = $attachmentNote;
    }
    return implode("\n", $lines);
}

/**
 * @return array{path:string,safe_name:string,mime:string,size:int}|null
 */
function validate_upload(string $fieldName): ?array
{
    if (!isset($_FILES[$fieldName]) || !is_array($_FILES[$fieldName])) {
        return null;
    }

    $file = $_FILES[$fieldName];
    $error = $file['error'] ?? UPLOAD_ERR_NO_FILE;

    if ($error === UPLOAD_ERR_NO_FILE) {
        return null;
    }

    if ($error !== UPLOAD_ERR_OK) {
        respond(false, 'File upload failed. Please try again with a smaller file.', 400);
    }

    $tmpPath = $file['tmp_name'] ?? '';
    $originalName = (string) ($file['name'] ?? '');
    $size = (int) ($file['size'] ?? 0);

    if ($tmpPath === '' || !is_uploaded_file($tmpPath)) {
        respond(false, 'Invalid file upload.', 400);
    }

    if ($size <= 0) {
        respond(false, 'Uploaded file is empty.', 400);
    }

    if ($size > MAX_FILE_BYTES) {
        respond(false, 'File is too large. Maximum size is 10 MB.', 400);
    }

    $extension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
    if ($extension === '' || !in_array($extension, ALLOWED_EXTENSIONS, true)) {
        respond(false, 'File type not allowed. Use PDF, DOC, DOCX, PNG, JPG, or JPEG.', 400);
    }

    if (!verify_file_signature($tmpPath, $extension)) {
        respond(false, 'File type not allowed. Use PDF, DOC, DOCX, PNG, JPG, or JPEG.', 400);
    }

    $resolvedMime = resolve_upload_mime($tmpPath, $extension);
    if ($resolvedMime === null) {
        respond(false, 'File type not allowed. Use PDF, DOC, DOCX, PNG, JPG, or JPEG.', 400);
    }

    $safeName = sanitize_filename($originalName, $extension);

    return [
        'path' => $tmpPath,
        'safe_name' => $safeName,
        'mime' => $resolvedMime,
        'size' => $size,
    ];
}

function verify_file_signature(string $path, string $extension): bool
{
    $handle = @fopen($path, 'rb');
    if ($handle === false) {
        return false;
    }

    $header = fread($handle, 8);
    fclose($handle);

    if ($header === false || $header === '') {
        return false;
    }

    return match ($extension) {
        'pdf' => str_starts_with($header, '%PDF'),
        'png' => str_starts_with($header, "\x89PNG\r\n\x1a\n"),
        'jpg', 'jpeg' => strlen($header) >= 3
            && $header[0] === "\xFF"
            && $header[1] === "\xD8"
            && $header[2] === "\xFF",
        'doc' => strlen($header) >= 8
            && $header[0] === "\xD0"
            && $header[1] === "\xCF"
            && $header[2] === "\x11"
            && $header[3] === "\xE0"
            && $header[4] === "\xA1"
            && $header[5] === "\xB1"
            && $header[6] === "\x1A"
            && $header[7] === "\xE1",
        'docx' => str_starts_with($header, "PK\x03\x04") && verify_docx_structure($path),
        default => false,
    };
}

function verify_docx_structure(string $path): bool
{
    if (!class_exists('ZipArchive')) {
        return false;
    }

    $zip = new ZipArchive();
    if ($zip->open($path) !== true) {
        return false;
    }

    $hasContentTypes = $zip->locateName('[Content_Types].xml') !== false;
    $hasWordDocument = $zip->locateName('word/document.xml') !== false;
    $zip->close();

    return $hasContentTypes && $hasWordDocument;
}

function resolve_upload_mime(string $path, string $extension): ?string
{
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $detectedMime = $finfo ? finfo_file($finfo, $path) : false;
    if ($finfo) {
        finfo_close($finfo);
    }

    if ($detectedMime !== false && in_array($detectedMime, ALLOWED_MIME_TYPES, true)) {
        return $detectedMime;
    }

    $canonicalMime = canonical_mime_for_extension($extension);
    if ($canonicalMime !== null && $detectedMime === 'application/octet-stream') {
        return $canonicalMime;
    }

    return null;
}

function canonical_mime_for_extension(string $extension): ?string
{
    return match ($extension) {
        'pdf' => 'application/pdf',
        'doc' => 'application/msword',
        'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'png' => 'image/png',
        'jpg', 'jpeg' => 'image/jpeg',
        default => null,
    };
}

function sanitize_filename(string $originalName, string $extension): string
{
    $base = pathinfo($originalName, PATHINFO_FILENAME);
    $base = preg_replace('/[^a-zA-Z0-9._-]+/', '-', $base) ?? 'upload';
    $base = trim($base, '.-_');
    if ($base === '') {
        $base = 'upload';
    }
    if (mb_strlen($base) > 80) {
        $base = mb_substr($base, 0, 80);
    }
    return $base . '-' . date('Ymd-His') . '.' . $extension;
}

function format_bytes(int $bytes): string
{
    if ($bytes < 1024) {
        return $bytes . ' B';
    }
    if ($bytes < 1024 * 1024) {
        return round($bytes / 1024, 1) . ' KB';
    }
    return round($bytes / (1024 * 1024), 2) . ' MB';
}

/**
 * @param array{path:string,safe_name:string,mime:string,size:int}|null $attachment
 */
function send_mail(
    string $to,
    string $subject,
    string $body,
    string $replyToEmail,
    string $replyToName,
    ?array $attachment
): bool {
    $fromHeader = 'From: ' . encode_mime_header(CONTACT_FROM_NAME) . ' <' . CONTACT_FROM_EMAIL . '>';
    $replyHeader = 'Reply-To: ' . encode_mime_header($replyToName) . ' <' . $replyToEmail . '>';
    $headers = [
        $fromHeader,
        $replyHeader,
        'Return-Path: <' . CONTACT_FROM_EMAIL . '>',
        'MIME-Version: 1.0',
        'X-Mailer: PHP/' . PHP_VERSION,
    ];
    $envelopeSender = mail_envelope_parameter();

    if ($attachment === null) {
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        $headers[] = 'Content-Transfer-Encoding: 8bit';
        return @mail($to, encode_mime_header($subject), $body, implode("\r\n", $headers), $envelopeSender);
    }

    $boundary = '=_' . bin2hex(random_bytes(16));
    $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';

    $message = "--{$boundary}\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $message .= $body . "\r\n\r\n";

    $fileContents = @file_get_contents($attachment['path']);
    if ($fileContents === false) {
        return false;
    }

    $message .= "--{$boundary}\r\n";
    $message .= 'Content-Type: ' . $attachment['mime'] . '; name="' . $attachment['safe_name'] . "\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= 'Content-Disposition: attachment; filename="' . $attachment['safe_name'] . "\"\r\n\r\n";
    $message .= chunk_split(base64_encode($fileContents)) . "\r\n";
    $message .= "--{$boundary}--";

    return @mail($to, encode_mime_header($subject), $message, implode("\r\n", $headers), $envelopeSender);
}

/**
 * Sets the envelope sender / return-path for shared-hosting deliverability (sendmail -f).
 */
function mail_envelope_parameter(): string
{
    return '-f' . CONTACT_FROM_EMAIL;
}

function encode_mime_header(string $text): string
{
    if (preg_match('/[^\x20-\x7E]/', $text)) {
        return '=?UTF-8?B?' . base64_encode($text) . '?=';
    }
    return $text;
}
