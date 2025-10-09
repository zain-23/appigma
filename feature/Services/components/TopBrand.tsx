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
    <SectionWrapper className="bg-muted py-10">
      <Container>
        <h2 className="font-semibold text-3xl">{data.trustedBrands.title}</h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mt-6"
        >
          <CarouselContent className="-ml-1 items-center">
            {data.trustedBrands.logo.map(({ id, img }) => (
              <CarouselItem key={id} className="basis-1/8 pl-4">
                <div className="p-4 flex justify-center items-center">
                  <Image src={img} alt={"Brands"} width={100} height={50} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
