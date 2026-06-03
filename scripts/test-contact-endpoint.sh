#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/out"
BASE_URL="${BASE_URL:-http://127.0.0.1:18080}"
API="$BASE_URL/api/contact.php"
PASS=0
FAIL=0

pass() { PASS=$((PASS + 1)); echo "PASS: $1"; }
fail() { FAIL=$((FAIL + 1)); echo "FAIL: $1"; echo "  Response: $2"; }

json_get() {
  local key="$1" body="$2"
  echo "$body" | php -r ' $j=json_decode(stream_get_contents(STDIN), true); $k=getenv("K"); echo $j[$k] ?? ""; ' 2>/dev/null || echo "$body" | python3 -c "import json,sys,os; j=json.load(sys.stdin); print(j.get(os.environ['K'],''))" 2>/dev/null
}

assert_status() {
  local expected="$1" actual="$2" name="$3"
  if [ "$actual" = "$expected" ]; then pass "$name (HTTP $actual)"; else fail "$name (expected HTTP $expected, got $actual)" ""; fi
}

assert_json_success() {
  local body="$1" name="$2"
  if echo "$body" | grep -q '"success":true'; then pass "$name"; else fail "$name" "$body"; fi
}

assert_json_error() {
  local body="$1" name="$2" needle="${3:-}"
  if echo "$body" | grep -q '"success":false'; then
    if [ -n "$needle" ] && ! echo "$body" | grep -qi "$needle"; then
      fail "$name (missing error hint: $needle)" "$body"
    else
      pass "$name"
    fi
  else
    fail "$name" "$body"
  fi
}

echo "=== Contact endpoint tests ==="
echo "API: $API"
echo ""

# GET -> 405
resp=$(curl -sS -w "\n%{http_code}" "$API")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "405" "$code" "Reject GET"
assert_json_error "$body" "GET returns JSON error"

# Missing fields -> 400
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" -F "formType=contact" -F "firstName=Only")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "400" "$code" "Contact missing fields"
assert_json_error "$body" "Missing fields message" "email"

# Invalid email -> 400
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=not-an-email" \
  -F "subject=Hi" \
  -F "inquiryType=General Inquiry" \
  -F "message=This is a long enough test message.")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "400" "$code" "Invalid email"
assert_json_error "$body" "Invalid email message" "valid email"

# Short message -> 400
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=test@example.com" \
  -F "subject=Hi" \
  -F "inquiryType=General Inquiry" \
  -F "message=short")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "400" "$code" "Short message"
assert_json_error "$body" "Min length message" "10"

# Honeypot -> fake 200 success
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "website=http://spam.bot" \
  -F "firstName=Bot" \
  -F "lastName=Bot" \
  -F "email=bot@evil.test" \
  -F "subject=Spam" \
  -F "inquiryType=Other" \
  -F "message=This should not send mail but returns success.")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "200" "$code" "Honeypot HTTP"
assert_json_success "$body" "Honeypot fake success"

# Valid contact (no file)
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=test@example.com" \
  -F "phone=+49123456789" \
  -F "subject=Integration Test" \
  -F "inquiryType=General Inquiry" \
  -F "message=This is an integration test message from the local test script.")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
if [ "$code" = "200" ]; then
  assert_json_success "$body" "Valid contact submission"
else
  fail "Valid contact submission (HTTP $code)" "$body"
fi

# Valid quote (no file)
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=quote" \
  -F "firstName=Quote" \
  -F "lastName=Tester" \
  -F "email=quote@example.com" \
  -F "company=Test GmbH" \
  -F "serviceRequired=Web Solutions" \
  -F "projectType=New Project" \
  -F "projectDetails=We need a portfolio website with contact forms and static export hosting on IONOS for our business." \
  -F "expectedTimeline=Within 1-3 months" \
  -F "estimatedBudget=EUR 2,500 - EUR 5,000" \
  -F "consent=yes")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
if [ "$code" = "200" ]; then
  assert_json_success "$body" "Valid quote submission"
else
  fail "Valid quote submission (HTTP $code)" "$body"
fi

# Fake .docx: ZIP magic only, not a real Word document
printf 'PK\x03\x04fake-not-a-docx' > /tmp/contact-test-fake.docx
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=test@example.com" \
  -F "subject=Fake docx" \
  -F "inquiryType=General Inquiry" \
  -F "message=Testing rejection of renamed binary posing as docx." \
  -F "attachment=@/tmp/contact-test-fake.docx;type=application/vnd.openxmlformats-officedocument.wordprocessingml.document")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "400" "$code" "Reject fake .docx (no Word structure)"
assert_json_error "$body" "Fake docx rejected" "not allowed"

# Renamed non-OLE binary as .doc
printf 'not-a-word-document' > /tmp/contact-test-fake.doc
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=test@example.com" \
  -F "subject=Fake doc" \
  -F "inquiryType=General Inquiry" \
  -F "message=Testing rejection of non-OLE file renamed to .doc." \
  -F "attachment=@/tmp/contact-test-fake.doc;type=application/msword")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "400" "$code" "Reject fake .doc (no OLE signature)"
assert_json_error "$body" "Fake doc rejected" "not allowed"

# Invalid file type
printf 'not a real zip' > /tmp/contact-test.zip
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=test@example.com" \
  -F "subject=File test" \
  -F "inquiryType=General Inquiry" \
  -F "message=Testing invalid attachment type rejection in the contact handler." \
  -F "attachment=@/tmp/contact-test.zip;type=application/zip")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "400" "$code" "Reject .zip upload"
assert_json_error "$body" "Zip rejected message" "not allowed"

# File too large (>10MB)
dd if=/dev/zero of=/tmp/contact-test-big.pdf bs=1048576 count=11 2>/dev/null
printf '%%PDF-1.4\n' | dd of=/tmp/contact-test-big.pdf bs=1 count=8 conv=notrunc 2>/dev/null
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=contact" \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=test@example.com" \
  -F "subject=Big file" \
  -F "inquiryType=General Inquiry" \
  -F "message=Testing oversized attachment rejection in the contact handler." \
  -F "attachment=@/tmp/contact-test-big.pdf;type=application/pdf")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
assert_status "400" "$code" "Reject >10MB file"
assert_json_error "$body" "Oversized file message" "too large"

# Valid small PDF attachment
printf '%%PDF-1.4\n%% Test PDF for contact form\n' > /tmp/contact-test-small.pdf
resp=$(curl -sS -w "\n%{http_code}" -X POST "$API" \
  -F "formType=quote" \
  -F "firstName=File" \
  -F "lastName=Upload" \
  -F "email=file@example.com" \
  -F "company=Test Co" \
  -F "serviceRequired=Web Solutions" \
  -F "projectType=New Project" \
  -F "projectDetails=Quote request with a small PDF attachment for integration testing purposes." \
  -F "expectedTimeline=Flexible timeline" \
  -F "estimatedBudget=Not sure yet" \
  -F "consent=yes" \
  -F "attachment=@/tmp/contact-test-small.pdf;type=application/pdf")
code=$(echo "$resp" | tail -1)
body=$(echo "$resp" | sed '$d')
if [ "$code" = "200" ]; then
  assert_json_success "$body" "Valid PDF attachment submission"
else
  fail "Valid PDF attachment (HTTP $code)" "$body"
fi

echo ""
echo "=== Results: $PASS passed, $FAIL failed ==="
MAIL_LOG="${MAIL_LOG:-/tmp/portfolio-mail-capture.eml}"
if [ -f "$MAIL_LOG" ]; then
  mail_count=$(grep -c 'MAIL_SENT' "$MAIL_LOG" 2>/dev/null || echo 0)
  echo "Captured mail() calls: $mail_count (expect 3: contact, quote, PDF — honeypot sends none)"
  if [ "$mail_count" -eq 3 ]; then
    pass "Mail sent exactly 3 times (honeypot excluded)"
  else
    fail "Expected 3 mail() calls, got $mail_count" ""
  fi
else
  fail "Mail capture log missing at $MAIL_LOG" ""
fi
exit "$FAIL"
