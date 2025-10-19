"use server";

import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { contactForm, TContactForm } from "../schema";
import ContactFormEmail from "@/shared/emails/ContactFormEmail";

export async function sendContactEmail(data: TContactForm) {
  try {
    // Validate the form data
    const validatedData = contactForm.parse(data);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Render the email template
    const emailHtml = await render(
      ContactFormEmail({
        full_name: validatedData.full_name,
        email: validatedData.email,
        phone_number: validatedData.phone_number,
        description: validatedData.description,
      })
    );

    // Send the email
    const info = await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: process.env.EMAIL_FROM_ADDRESS,
      subject: `New Contact Form Submission from ${validatedData.full_name}`,
      html: emailHtml,
    });

    transporter.close();
    return {
      success: true,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
