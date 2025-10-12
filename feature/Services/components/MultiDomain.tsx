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
        <div className="max-w-7xl mx-auto lg:text-center space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black leading-tight">
            {data.multiDomain.title}
          </h2>
          <p className="text-base lg:text-lg leading-relaxed">
            {data.multiDomain.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 lg:mt-16">
          {data.multiDomain.data.map(({ description, icon, id, title }) => (
            <div
              className="col-span-1 bg-muted p-4 md:p-6 min-h-[320px] md:min-h-[350px] lg:h-96 space-y-2 md:space-y-3 rounded-xl flex flex-col"
              key={id}
            >
              <div className="bg-primary w-16 h-16 md:w-20 md:h-20 rounded-full font-semibold flex justify-center items-center [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10">
                {icon()}
              </div>
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {title}
              </h5>
              <p className="leading-relaxed text-muted-foreground text-base lg:text-lg flex-1">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
