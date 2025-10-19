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
          align="start"
        />

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mt-4 md:mt-6"
        >
          <CarouselContent className="-ml-2 md:-ml-4 mt-6 md:mt-8 lg:mt-10">
            {FEATURED.map(({ id, icon }) => (
              <CarouselItem
                key={id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 md:h-40 h-20"
              >
                <HoverCard className="flex items-center justify-center p-4 md:p-6 lg:p-8 hover:bg-muted/50 transition-colors h-full">
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
