"use client";
import { Cta } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";

export const Innovation = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <Cta
      btnText={data.innovation.btnContent}
      description={data.innovation.description}
      img={data.innovation.bgImg}
      title={data.innovation.title}
    />
  );
};
