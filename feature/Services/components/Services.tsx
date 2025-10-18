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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black leading-tight">
            {data.servies.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10 mt-6 md:mt-8 lg:mt-10">
          {data.servies.data.map(({ id, description, title }) => (
            <div
              className="col-span-1 bg-background p-6 space-y-2 md:space-y-3 rounded-lg shadow-primary shadow-[0px_10px]"
              key={id}
            >
              <div className="bg-primary w-10 h-10 md:w-12 md:h-12 rounded-full font-semibold flex justify-center items-center text-sm md:text-base">
                {id.toString().padStart(2, "0")}
              </div>
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {title}
              </h5>
              <p className="leading-relaxed text-muted-foreground text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
