"use client";
import { Container, SectionWrapper } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";
import Image from "next/image";

export const Expertise = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <SectionWrapper className="bg-muted-foreground/5 relative">
      <Image
        src={data.expertise.bgImg}
        alt={"Expertise bg image"}
        fill
        className="absolute top-0 left-0 z-[-1] object-cover"
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black leading-tight text-background">
            {data.expertise.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 mt-8 md:mt-10 lg:mt-14">
          {data.expertise.stack.map(({ id, img, name }) => (
            <div
              className="col-span-1 space-y-2 md:space-y-3 lg:space-y-4 text-center flex flex-col items-center"
              key={id}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative flex items-center justify-center">
                <Image src={img} alt={name} className="object-contain" />
              </div>
              <p className="text-base lg:text-lg text-background">{name}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
