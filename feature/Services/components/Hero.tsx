"use client";
import { Breadcrumb, Button, Container, SectionWrapper } from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  
  return (
    <SectionWrapper className="py-0 lg:h-screen h-[80vh] relative">
      <Image
        src={data.heroSection.heroBgImg}
        alt={data.heroSection.title}
        fill
        className="absolute top-0 left-0 object-cover z-[-1]"
      />
      <Container className="flex flex-col justify-center h-full py-16 md:py-20 lg:py-0">
        <Breadcrumb />
        <div className="max-w-4xl text-background space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black">
            {data.heroSection.title}
          </h1>
          <p className="leading-relaxed md:leading-loose text-base lg:text-lg">
            {data.heroSection.description}
          </p>
          <Button asChild size={"lg"} className="w-auto">
            <Link href={"/contact-us"}>{data.heroSection.btnContent}</Link>
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
};
