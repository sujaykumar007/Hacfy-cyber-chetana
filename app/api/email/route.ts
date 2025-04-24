import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import chromium from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

// HTML template generator
const generateCertificateHTML = (firstName: string, lastName: string) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Certificate</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
        }
        .certificate {
          border: 10px solid #ccc;
          padding: 50px;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <h1>Certificate of Registration</h1>
        <p>This certifies that</p>
        <h2>${firstName} ${lastName}</h2>
        <p>has successfully registered.</p>
      </div>
    </body>
  </html>
`;

export async function POST(req: NextRequest) {
  try {
    // Extract input data from the request body
    const { firstName, lastName, email, phoneNumber } = await req.json();

    // Check if all required fields are present
    if (!firstName || !lastName || !email || !phoneNumber) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Generate the HTML content for the certificate
    const htmlContent = generateCertificateHTML(firstName, lastName);

    // Set up Puppeteer options based on the environment
    let browser;
    if (process.env.NODE_ENV === 'production') {
      // If running in production (e.g., Vercel), use chrome-aws-lambda and Puppeteer core
      browser = await puppeteer.launch({
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        args: chromium.args,
      });
    } else {
      // If in development (e.g., locally), use the standard Puppeteer setup
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
    }

    // Create a new page in the browser
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Generate PDF from the HTML content
    const pdfBuffer = await page.pdf({ format: 'a4' });
    await browser.close();

    // Set up the email transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Send the email with the PDF attachment
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Registration Certificate',
      text: 'Attached is your certificate of registration.',
      attachments: [
        {
          filename: 'certificate.pdf',
          content: Buffer.from(pdfBuffer), // Attach PDF directly as buffer
          contentType: 'application/pdf',
        },
      ],
    });

    // Return a success response
    return NextResponse.json({ message: 'PDF sent to email' });
  } catch (error: unknown) {
    console.error('Email PDF error:', error);
    // Return an error response if something goes wrong
    if (error instanceof Error) {
      return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to send email: Unknown error' }, { status: 500 });
  }
}
