import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

function validateFormData(data: any): data is ContactFormData {
    return (
        typeof data.name === "string" && data.name.trim().length > 0 &&
        typeof data.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
        typeof data.message === "string" && data.message.trim().length > 0
    );
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the form data
        if (!validateFormData(body)) {
            return NextResponse.json({
                error: "Invalid form data.",
                status: 400
            });
        }

        const { name, email, message } = body;

        // Create a transporter object using Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${name}`,
            html: `
            <div style="font-family:Arial, sans-serif; max-width:600px; margin:0 auto;">
                <h2 style="color:#333;">New Contact Form Submission</h2>
                <div style="background: #f9f9f9; padding:20px; border-radius:5px;">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: white; padding:15px; border-radius:5px; margin-top: 10px;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
                <p style="margin-top: 20px; color: #666; font-size: 14px;">
                    This message was sent from your portfolio contact form.
                </p>
            `,
            text: `
                New Contact Form Submission

                Name: ${name}
                Email: ${email}
                Message: ${message}
            `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: "Email sent successfully!",
            status: 200
        });
    }
    catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({
            error: "Failed to send email",
            status: 500
        });
    }
}