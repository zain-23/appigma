"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  Container,
  HoverCard,
  SectionWrapper,
  WatermarkContent,
} from "@/shared/common";
import Autoplay from "embla-carousel-autoplay";
import { FEATURED } from "../lib";

export const Featured = () => {
  return (
    <SectionWrapper>
      <Container>
        <WatermarkContent
          frontText="We're Featured In"
          backText="Featured"
          align="center"
        />

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mt-6"
        >
          <CarouselContent className="-ml-1 mt-10">
            {FEATURED.map(({ id, icon }) => (
              <CarouselItem key={id} className="basis-1/6 border pl-0">
                <HoverCard className="flex items-center justify-center">
                  {icon()}
                </HoverCard>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
