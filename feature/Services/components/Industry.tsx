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
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-5xl font-black leading-tight">
            {data.powered_solution.title}
          </h2>
          <p className="text-lg leading-relaxed">
            {data.powered_solution.description}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          {data.powered_solution.industry.map(({ id, icon, title }) => (
            <div
              className="col-span-1 bg-background p-10 space-y-3 flex flex-col items-center justify-center rounded-xl"
              key={id}
            >
              {icon()}
              <p className="text-2xl font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
