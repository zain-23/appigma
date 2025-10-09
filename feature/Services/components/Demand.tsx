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
      <Container className="relative h-[75vh] rounded-xl overflow-hidden flex flex-col justify-center text-background">
        <Image
          src={data.demand.bgImg}
          alt="Trusted brands"
          fill
          className="object-cover z-[-1] "
        />
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-5xl font-semibold leading-tight">
            {data.demand.title}
          </h2>
          <p className="text-lg leading-relaxed">{data.demand.para}</p>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto">
          {data.demand.demands.map(({ id, data, description }) => (
            <div
              className="col-span-1 text-center px-8 py-12 space-y-2 border border-primary rounded-xl"
              key={id}
            >
              <h5 className="text-primary text-4xl font-semibold">{data}</h5>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
