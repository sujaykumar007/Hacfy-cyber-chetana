import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const generatePDF = async (htmlContent: string, userId: string) => {
    const browser = await puppeteer.launch({
        headless: true, // Fixed headless mode
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const pdfPath = path.join(process.cwd(), `certificate_${userId}.pdf`);
    await page.pdf({ path: pdfPath, format: "A4" });

    await browser.close();
    return pdfPath;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { firstName, lastName, email } = req.body;
    
    if (!firstName || !lastName || !email) {
        console.error("Validation Error: Missing fields");
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        console.log("✅ Incoming Request:", req.body);

        const htmlContent = `
            <h1>Certificate of Completion</h1>
            <p>Congratulations, ${firstName} ${lastName}!</p>
        `;

        const userId = Date.now().toString();
        console.log("📄 Generating PDF...");
        const pdfPath = await generatePDF(htmlContent, userId);
        console.log("✅ PDF Generated:", pdfPath);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your Certificate",
            text: `Dear ${firstName},\n\nHere is your certificate.\n\nBest regards,\nYour Company`,
            attachments: [{ filename: "certificate.pdf", path: pdfPath }],
        };

        console.log("📧 Sending Email...");
        await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent Successfully!");

        fs.unlinkSync(pdfPath); // Delete the PDF after sending
        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error: any) {
        console.error("❌ Error Occurred:", error);
        return res.status(500).json({ error: "Something went wrong!", details: error.message });
    }
}
