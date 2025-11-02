import { Footer, Navbar, TextUs } from "@/feature/Layout/components";
import { DelayedModalWrapper, Toaster } from "@/shared/common";
import { QueryProvider } from "@/shared/provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TawkChat } from "@/shared/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

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
  authors: [{ name: "Appigma" }],
  creator: "Appigma",
  publisher: "Appigma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://appigma.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png?v=2', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest?v=2' },
    ],
  },
  openGraph: {
    title: "Appigma: Top Mobile App Development Company in USA",
    description: "Leading mobile app development company specializing in iOS, Android, and cross-platform applications. We create innovative digital solutions that drive business growth.",
    url: 'https://appigma.com',
    siteName: 'Appigma',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Appigma - Mobile App Development Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Appigma: Top Mobile App Development Company in USA",
    description: "Leading mobile app development company specializing in iOS, Android, and cross-platform applications.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <TextUs />
        <QueryProvider>
          <Toaster richColors />
          <DelayedModalWrapper />
          <TawkChat />
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
