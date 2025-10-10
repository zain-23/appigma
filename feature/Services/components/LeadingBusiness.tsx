"use client";
import { Cta } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";

export const LeadingBusiness = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <Cta
      btnText={data.leading_business.btnContent}
      description={data.leading_business.description}
      img={data.leading_business.bgImg}
      title={data.leading_business.title}
    />
  );
};
