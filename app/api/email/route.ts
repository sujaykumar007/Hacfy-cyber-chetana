import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import puppeteer from 'puppeteer-core'; // Use puppeteer-core
import chromium from '@sparticuz/chromium'; // Chromium helper for production

const generateCertificateHTML = (firstName: string, lastName: string) => `
  <html>
    <body>
      <h1>Certificate of Registration</h1>
      <p>This certifies that <strong>${firstName} ${lastName}</strong> has successfully registered.</p>
    </body>
  </html>
`;

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber } = await req.json();

    if (!firstName || !lastName || !email || !phoneNumber) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = generateCertificateHTML(firstName, lastName);

    const isProd = process.env.NODE_ENV === 'production';
    let puppeteer: any;
    let chromium: any = null;
    let executablePath: string | undefined = undefined;
    let args: string[] = [];
    
    if (isProd) {
      puppeteer = (await import('puppeteer-core')).default;
      chromium = await import('chrome-aws-lambda');
    
      executablePath = await chromium.executablePath;
      args = chromium.args;
    } else {
      puppeteer = (await import('puppeteer')).default;
      executablePath = undefined; // Local Puppeteer uses its own Chromium
      args = [];
    }
    
    const browser = await puppeteer.launch({
      args,
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'a4' });
    await browser.close();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Registration Certificate',
      text: 'Attached is your certificate of registration.',
      attachments: [
        {
          filename: 'certificate.pdf',
          content: Buffer.from(pdfBuffer), // Convert Uint8Array to Buffer
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ message: 'PDF sent to email' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
      return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to send email: Unknown error' }, { status: 500 });
  }
}
