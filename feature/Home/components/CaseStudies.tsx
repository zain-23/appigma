"use client";

import {
  Container,
  Portfolio,
  SectionWrapper,
  WatermarkContent,
} from "@/shared/common";
import { PORTFOLIOS } from "../lib";

export const CaseStudies = () => {
  return (
    <SectionWrapper>
      <Container>
        <WatermarkContent backText="Our Portfolio" frontText="Case Studies" />
        <div className="mt-4 md:mt-6 flex flex-col gap-y-16 md:gap-y-32 lg:gap-y-48">
          {PORTFOLIOS.map((data, idx) => (
            <Portfolio index={idx} key={data.title} {...data} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
