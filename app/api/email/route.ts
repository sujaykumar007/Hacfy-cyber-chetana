import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Buffer } from 'buffer';
import puppeteer from 'puppeteer-core';


const generateCertificateHTML = (firstName: string, lastName: string) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Certificate of Completion</title>
    <style>
      body { font-family: 'Times New Roman', serif; text-align: center; padding: 50px; background-color: #f8f9fa; }
      .certificate-container { width: 800px; height: 600px; background: white; padding: 50px; border: 10px solid #2c3e50; display: inline-block; position: relative; }
      .certificate-title { font-size: 22px; font-weight: bold; text-transform: uppercase; color: #2c3e50; }
      .certificate-subtitle { font-size: 20px; text-transform: uppercase; margin-bottom: 20px; color: #34495e; }
      .certificate-body { font-size: 18px; margin-top: 20px; }
      .certificate-name { font-size: 28px; font-weight: bold; font-style: italic; margin-top: 10px; color: #2c3e50; }
      .certificate-footer { margin-top: 50px; font-size: 16px; display: flex; justify-content: space-between; padding: 0 50px; }
      .certificate-footer div { width: 40%; border-top: 2px solid black; padding-top: 5px; text-align: center; }
    </style>
  </head>
  <body>
    <div class="certificate-container">
      <h1 class="certificate-title">Certificate of Completion</h1>
      <p class="certificate-subtitle">This Certificate is proudly presented to</p>
      <p class="certificate-name">${firstName} ${lastName}</p>
      <p class="certificate-body">for successfully completing the course.</p>
      <div class="certificate-footer">
        <div><p>Date</p>[Date]</div>
        <div><p>Signature</p>[Authorized Signatory]</div>
      </div>
    </div>
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
    const browser = await puppeteer.launch({
      executablePath: 'C:/Users/info/.cache/puppeteer/chrome/win64-135.0.7049.95/chrome-win64/chrome.exe',
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({ format: 'a4' });

    await browser.close();

    const buffer = Buffer.from(pdfBuffer);

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
      subject: 'Your Certificate of Completion',
      text: 'Please find your certificate attached.',
      attachments: [
        {
          filename: 'certificate.pdf',
          content: buffer,
          contentType: 'application/pdf',
        },
      ],
    });

    return NextResponse.json({ message: 'Certificate sent to email' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
    } else {
      console.error('Unknown error', error);
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
  
}

    // const isWindows = os.platform() === 'win32';

    
    // const browser = await puppeteer.launch({
    //   executablePath: 'C:\Users\info\.cache\puppeteer\chrome\win64-135.0.7049.95\chrome-win64\chrome.exe',
    // });
  