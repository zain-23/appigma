"use client";

import { AWARDS } from "@/feature/Home/lib";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  Container,
  Rating,
  SectionWrapper,
} from "@/shared/common";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const AwardRecognization = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6 col-span-1 lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Awards & Recognitions
            </h2>
            <p className="leading-relaxed text-base lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quia laborum beatae vero ipsa esse odio ab qui,
              enim modi dignissimos tempore vitae quidem aut voluptatum quae
              illum nihil! Quisquam. Odio ab qui, enim modi dignissimos tempore
              vitae quidem aut voluptatum quae illum nihil!
            </p>
          </div>
          <div className="hidden lg:block lg:col-span-2" />
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-end space-y-3 md:space-y-4">
            <p className="text-primary text-base md:text-lg lg:text-xl xl:text-2xl text-center lg:text-right">
              75+ reviews on cluteh
            </p>
            <h4 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-tight font-semibold lg:font-black">
              4.8
            </h4>
            <Rating rating={5} className="size-6 md:size-8 lg:size-10" />
          </div>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mt-4 md:mt-6"
        >
          <CarouselContent className="-ml-2 md:-ml-4 mt-6 md:mt-8 lg:mt-10">
            {AWARDS.map(({ id, description, img, title }) => (
              <CarouselItem
                key={id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="bg-muted rounded-xl md:rounded-2xl flex flex-col items-center justify-center group text-center p-3 md:p-4 space-y-2 h-48 md:h-64 lg:h-72 xl:h-80">
                  <Image
                    src={img}
                    alt={title}
                    className="grayscale group-hover:grayscale-0 duration-300 max-w-full h-auto"
                    width={200}
                    height={120}
                    priority
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 16vw"
                  />
                  <h4 className="text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                    {title}
                  </h4>
                  <p className="text-xs md:text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
