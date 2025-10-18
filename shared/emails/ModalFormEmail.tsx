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

interface ModalFormEmailProps {
  full_name: string;
  email: string;
  phone_number: string;
  budget: number;
  description: string;
}

export const ModalFormEmail = ({
  full_name,
  email,
  phone_number,
  budget,
  description,
}: ModalFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Modal Form Submission from {full_name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Modal Form Submission</Heading>

          <Section style={highlightSection}>
            <Text style={highlightText}>
              This submission was made through the delayed modal form on the
              website.
            </Text>
          </Section>

          <Section style={section}>
            <Text style={sectionTitle}>Contact Information</Text>

            <Text style={label}>Full Name:</Text>
            <Text style={value}>{full_name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Phone Number:</Text>
            <Text style={value}>{phone_number}</Text>
          </Section>

          <Section style={section}>
            <Text style={sectionTitle}>Project Details</Text>

            <Text style={label}>Budget:</Text>
            <Text style={budgetValue}>${budget.toLocaleString()}</Text>

            <Text style={label}>Project Brief:</Text>
            <Text style={descriptionValue}>{description}</Text>
          </Section>

          <Text style={footer}>
            This email was sent from the Appigma website modal form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ModalFormEmail;

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
  color: "#2563eb",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0 40px",
  borderBottom: "2px solid #2563eb",
  paddingBottom: "10px",
};

const highlightSection = {
  backgroundColor: "#fef3c7",
  padding: "15px 40px",
  margin: "20px 0",
  borderRadius: "8px",
};

const highlightText = {
  color: "#92400e",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const section = {
  padding: "0 40px",
  marginBottom: "24px",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#1e293b",
  margin: "0 0 16px 0",
  paddingBottom: "8px",
  borderBottom: "1px solid #e5e7eb",
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

const budgetValue = {
  fontSize: "18px",
  color: "#2563eb",
  fontWeight: "600",
  margin: "0 0 16px 0",
  lineHeight: "24px",
};

const descriptionValue = {
  fontSize: "16px",
  color: "#333",
  margin: "0 0 16px 0",
  lineHeight: "24px",
  backgroundColor: "#f8fafc",
  padding: "15px",
  borderRadius: "4px",
  borderLeft: "4px solid #2563eb",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "0 40px",
  marginTop: "32px",
};
