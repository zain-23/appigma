import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  full_name: string;
  email: string;
  phone_number: string;
  description: string;
}

export const ContactFormEmail = ({
  full_name,
  email,
  phone_number,
  description,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {full_name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          <Section style={section}>
            <Text style={label}>Full Name:</Text>
            <Text style={value}>{full_name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Phone Number:</Text>
            <Text style={value}>{phone_number}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Project Description:</Text>
            <Text style={value}>{description}</Text>
          </Section>

          <Text style={footer}>
            This email was sent from your website contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0 40px",
};

const section = {
  padding: "0 40px",
  marginBottom: "24px",
};

const label = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#666",
  margin: "0 0 8px 0",
};

const value = {
  fontSize: "16px",
  color: "#333",
  margin: "0 0 16px 0",
  lineHeight: "24px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "0 40px",
  marginTop: "32px",
};
