import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Server-side validation
    if (!data.firstName || !data.email || (!data.projectDetails && !data.message)) {
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
