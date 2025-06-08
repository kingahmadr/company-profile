// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// The function is named POST, so it only runs for POST requests.
// No need for `if (req.method !== 'POST')`
export async function POST(request: Request) {
  try {
    // Get the form data from the request body.
    const { name, email, subject, message } = await request.json();

    // Environment variables are still loaded the same way.
    const user = process.env.NEXT_PUBLIC_MAIL_USER;
    const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;
    const to = process.env.NEXT_PUBLIC_YOUR_EMAIL;

    console.log("Form submitted:", name, email, subject, message)
    console.log("Environment variables:", user, pass, to)

    // Make sure all required environment variables are present.
    if (!user || !pass || !to) {
      console.error("Missing environment variables for nodemailer");
      // Don't leak implementation details to the client.
      return NextResponse.json({ success: false, message: 'Server configuration error.' }, { status: 500 });
    }

    // Create the Nodemailer transporter.
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: user,
        pass: pass,
      },
    });

    // Define the email options.
    const mailOptions = {
      from: email,
      to: to,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from your Website Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email.
    await transporter.sendMail(mailOptions);

    // In the App Router, you RETURN a NextResponse object.
    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error in /api/send-email:', error);
    // Return a JSON response for errors as well.
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}