"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Container,
  SectionWrapper,
} from "@/shared/common";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";

export const TopBrand = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <SectionWrapper className="bg-muted py-8 md:py-10">
      <Container>
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl">
          {data.trustedBrands.title}
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mt-4 md:mt-6"
        >
          <CarouselContent className="-ml-2 md:-ml-4 items-center">
            {data.trustedBrands.logo.map(({ id, img }) => (
              <CarouselItem
                key={id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/8"
              >
                <div className="p-3 md:p-4 flex justify-center items-center">
                  <Image
                    src={img}
                    alt={"Brands"}
                    width={100}
                    height={50}
                    className="w-auto h-auto max-w-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
