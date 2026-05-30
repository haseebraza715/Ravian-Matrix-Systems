import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    const data = contentType.includes('multipart/form-data')
      ? Object.fromEntries((await request.formData()).entries())
      : await request.json();
    
    const isQuote = data.formType === 'quote';
    const missingContactFields =
      !data.firstName || !data.lastName || !data.email || !data.subject || !data.inquiryType || !data.message;
    const missingQuoteFields =
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.company ||
      !data.serviceRequired ||
      !data.projectType ||
      !data.projectDetails ||
      !data.expectedTimeline ||
      !data.estimatedBudget;

    // Server-side validation. Phone and uploaded files remain optional.
    if (isQuote ? missingQuoteFields : missingContactFields) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Typical integration point for Resend/SendGrid/Formspree goes here.
    // e.g. await resend.emails.send({ ... })
    
    // Simulating API delay for realism
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
