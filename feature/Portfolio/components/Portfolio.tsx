"use client";

import { Container, SectionWrapper } from "@/shared/common";
import { PortfolioCard } from "./PortfolioCard";
import { PORTFOLIOS } from "../lib/constant";

export const Portfolio = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {PORTFOLIOS.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              title={portfolio.title}
              description={portfolio.description}
              frontImg={portfolio.frontImg}
              backImg={portfolio.backImg}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
