import { ServicePage } from "@/feature/Services/page";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  
  const serviceTitles: Record<string, string> = {
    "ai-development": "AI Development Services | Appigma",
    "mobile-application-development": "Mobile App Development Services | Appigma", 
    "web-application-development": "Web Application Development Services | Appigma",
  };

  const serviceDescriptions: Record<string, string> = {
    "ai-development": "Professional AI development services including machine learning, generative AI, and custom AI solutions. Transform your business with cutting-edge artificial intelligence technology.",
    "mobile-application-development": "Expert mobile app development for iOS and Android. We create custom mobile applications that drive business growth and deliver exceptional user experiences.",
    "web-application-development": "Custom web application development services. We build responsive, scalable web applications using modern technologies and best practices.",
  };

  return {
    title: serviceTitles[slug] || "Services | Appigma",
    description: serviceDescriptions[slug] || "Professional software development services including mobile apps, web applications, and AI solutions.",
    keywords: [
      "mobile app development",
      "web application development", 
      "AI development services",
      "software development company",
      "app development USA"
    ],
  };
}

export default async function ServicesDetails() {
  return <ServicePage />;
}
