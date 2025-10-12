"use client";
import { Container, SectionWrapper } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";
import Image from "next/image";

export const Demand = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <SectionWrapper>
      <Container className="relative min-h-[60vh] md:min-h-[70vh] lg:h-[75vh] rounded-xl overflow-hidden flex flex-col justify-center text-background py-12 md:py-16 lg:py-0">
        <Image
          src={data.demand.bgImg}
          alt="Trusted brands"
          fill
          className="object-cover z-[-1]"
        />
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {data.demand.title}
          </h2>
          <p className="text-base lg:text-lg leading-relaxed">
            {data.demand.para}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8 lg:mt-10 max-w-7xl mx-auto px-4">
          {data.demand.demands.map(({ id, data, description }) => (
            <div
              className="col-span-1 text-center px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 space-y-2 border border-primary rounded-xl"
              key={id}
            >
              <h5 className="text-primary text-2xl md:text-3xl lg:text-4xl font-semibold">
                {data}
              </h5>
              <p className="text-sm md:text-base">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
