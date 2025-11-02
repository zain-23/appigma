import { HomePage } from "@/feature/Home/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appigma: Top Mobile App Development Company in USA",
  description: "Appigma is a leading mobile app development company specializing in iOS, Android, and cross-platform applications. We create innovative digital solutions that drive business growth and deliver exceptional user experiences across all platforms.",
  keywords: [
    "mobile app development",
    "iOS app development", 
    "Android app development",
    "cross-platform development",
    "web application development",
    "AI development services",
    "software development company",
    "app development USA",
    "mobile app developers",
    "custom mobile apps"
  ],
  openGraph: {
    title: "Appigma: Top Mobile App Development Company in USA",
    description: "Leading mobile app development company specializing in iOS, Android, and cross-platform applications. We create innovative digital solutions that drive business growth.",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
