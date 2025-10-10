"use client";
import { Container, SectionWrapper } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";

export const Services = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <SectionWrapper className="bg-muted-foreground/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black leading-tight">
            {data.servies.title}
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-10">
          {data.servies.data.map(({ id, description, title }) => (
            <div
              className="col-span-1 bg-background p-6 h-80 space-y-3"
              key={id}
            >
              <div className="bg-primary w-10 h-10 rounded-full font-semibold flex justify-center items-center">
                {id.toString().padStart(2, "0")}
              </div>
              <h5 className="text-2xl font-semibold">{title}</h5>
              <p className="leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
