"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "../Container";

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Map of slugs to their display names
const SLUG_MAP: Record<string, string> = {
  // Services
  "ai-development": "AI Development",
  "web-application-development": "Web Application Development",
  "mobile-application-development": "Mobile Application Development",
  // Case Studies
  "truth-gpt": "TruthGPT",
  "amj-wellness": "AMJ Wellness",
  // Pages
  "about-us": "About Us",
  "contact-us": "Contact Us",
  "case-studies": "Case Studies",
  "privacy-policy": "Privacy Policy",
  "terms-condition": "Terms & Conditions",
  services: "Services",
  portfolio: "Portfolio",
};

// Function to format slug to readable text
const formatSlug = (slug: string): string => {
  if (SLUG_MAP[slug]) {
    return SLUG_MAP[slug];
  }
  // Fallback: capitalize and replace hyphens with spaces
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const Breadcrumb = () => {
  const pathname = usePathname();

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null;
  }

  // Split pathname and filter out empty strings
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  // Build breadcrumb path progressively
  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbItems.push({
      label: formatSlug(segment),
      href: currentPath,
    });
  });

  // Check if pathname includes "service" or "case-stud"
  const isServicePage =
    pathname.includes("/service") || pathname.includes("/case-stud");

  return (
    <Container className="px-0 absolute lg:top-32 top-16">
      <nav aria-label="Breadcrumb" className="py-3 md:py-4">
        <ol className="flex items-center space-x-2 text-sm md:text-base">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isHome = index === 0;

            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight
                    className={`w-4 h-4 mx-2 ${
                      isServicePage ? "text-background/60" : "text-gray-400"
                    }`}
                  />
                )}
                {isLast ? (
                  <span
                    className={`font-medium flex items-center ${
                      isServicePage ? "text-background" : "text-gray-900"
                    }`}
                  >
                    {isHome && <Home className="w-4 h-4 mr-1" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors flex items-center ${
                      isServicePage
                        ? "text-background/80 hover:text-background"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {isHome && <Home className="w-4 h-4 mr-1" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
};
