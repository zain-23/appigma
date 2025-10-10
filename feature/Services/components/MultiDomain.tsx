"use client";
import { Container, SectionWrapper } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";

export const MultiDomain = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h2 className="text-5xl font-black leading-tight">
            {data.multiDomain.title}
          </h2>
          <p className="text-lg leading-relaxed">
            {data.multiDomain.description}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-16">
          {data.multiDomain.data.map(({ description, icon, id, title }) => (
            <div
              className="col-span-1 bg-muted p-6 h-96 space-y-3 rounded-xl"
              key={id}
            >
              <div className="bg-primary w-20 h-20 rounded-full font-semibold flex justify-center items-center">
                {icon()}
              </div>
              <h5 className="text-2xl font-semibold">{title}</h5>
              <p className="leading-relaxed text-muted-foreground text-lg">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
