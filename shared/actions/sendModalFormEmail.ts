"use server";
import { modalFormSchema, TModalForm } from "@/shared/schemas";
import { ModalFormEmail } from "@/shared/emails";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

export async function sendModalFormEmail(data: TModalForm) {
  try {
    // Validate the data
    const validatedData = modalFormSchema.parse(data);

    // Create transporter (you can configure this based on your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Render React Email component
    const emailHtml = await render(
      ModalFormEmail({
        full_name: validatedData.full_name,
        email: validatedData.email,
        phone_number: validatedData.phone_number,
        budget: validatedData.budget,
        description: validatedData.description,
      })
    );

    // Send email
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: process.env.EMAIL_FROM_ADDRESS,
      subject: `New Modal Form Submission - Appigma`,
      html: emailHtml,
    });

    return {
      success: true,
      message: "Thank you for your submission! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending modal form email:", error);

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
