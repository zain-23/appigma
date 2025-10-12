"use client";
import { Container, SectionWrapper } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";

export const Industry = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <SectionWrapper className="bg-muted-foreground/5">
      <Container>
        <div className="max-w-4xl mx-auto lg:text-center space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {data.powered_solution.title}
          </h2>
          <p className="text-base lg:text-lg leading-relaxed">
            {data.powered_solution.description}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mt-6 md:mt-8 lg:mt-10">
          {data.powered_solution.industry.map(({ id, icon, title }) => (
            <div
              className="col-span-1 bg-background p-6 md:p-8 lg:p-10 space-y-2 md:space-y-3 flex flex-col items-center justify-center rounded-xl min-h-[140px] md:min-h-[160px] [&>svg]:w-10 [&>svg]:h-10 md:[&>svg]:w-12 md:[&>svg]:h-12 lg:[&>svg]:w-14 lg:[&>svg]:h-14"
              key={id}
            >
              {icon()}
              <p className="text-base md:text-lg lg:text-2xl font-semibold text-center">
                {title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
