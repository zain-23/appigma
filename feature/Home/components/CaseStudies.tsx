"use client";

import { Container, Portfolio, WatermarkContent } from "@/shared/common";
import { PORTFOLIOS } from "../lib";

export const CaseStudies = () => {
  return (
    <section className="py-20">
      <Container>
        <WatermarkContent backText="Our Portfolio" frontText="Case Studies" />
        <div className="mt-6 flex flex-col gap-y-48">
          {PORTFOLIOS.map((data) => (
            <Portfolio key={data.title} {...data} />
          ))}
        </div>
      </Container>
    </section>
  );
};
