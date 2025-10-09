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
        className="absolute top-0 left-0 z-[-1]"
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black leading-tight text-background">
            {data.expertise.title}
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-6 mt-14">
          {data.expertise.stack.map(({ id, img, name }) => (
            <div
              className="col-span-1 space-y-4 text-center flex flex-col items-center"
              key={id}
            >
              <Image src={img} alt={name} />
              <p className="text-lg text-background">{name}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
