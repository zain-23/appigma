import { CASE_STUDY } from "@/feature/CaseStudy/lib";
import { CaseStudyPage } from "@/feature/CaseStudy/page";
import { notFound } from "next/navigation";

export default async function CaseStudies({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const pageData = CASE_STUDY[slug as keyof typeof CASE_STUDY];
  if (!pageData) notFound();
  return <CaseStudyPage slug={slug} />;
}
