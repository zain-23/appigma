import { CASE_STUDY } from "@/feature/CaseStudy/lib";
import { CaseStudyPage } from "@/feature/CaseStudy/page";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pageData = CASE_STUDY[slug as keyof typeof CASE_STUDY];
  
  if (!pageData) {
    return {
      title: "Case Study Not Found | Appigma",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${pageData.hero.title} - Case Study | Appigma`,
    description: pageData.hero.description,
    keywords: [
      "mobile app development",
      "case study",
      "app development portfolio",
      "software development",
      pageData.hero.title.toLowerCase(),
    ],
    openGraph: {
      title: `${pageData.hero.title} - Case Study | Appigma`,
      description: pageData.hero.description,
      type: "article",
    },
  };
}

export default async function CaseStudies({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const pageData = CASE_STUDY[slug as keyof typeof CASE_STUDY];
  if (!pageData) notFound();
  return <CaseStudyPage slug={slug} />;
}
