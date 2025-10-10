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
        <div className="grid grid-cols-12">
          <div className="space-y-6 col-span-6">
            <h2 className="text-5xl font-black">Awards & Recognitions</h2>
            <p className="leading-relaxed text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quia laborum beatae vero ipsa esse odio ab qui,
              enim modi dignissimos tempore vitae quidem aut voluptatum quae
              illum nihil! Quisquam. Odio ab qui, enim modi dignissimos tempore
              vitae quidem aut voluptatum quae illum nihil!
            </p>
            <Button>Check Reviews</Button>
          </div>
          <div className="col-span-2" />
          <div className="col-span-4 flex flex-col items-end">
            <p className="text-primary text-2xl">75+ reviews on cluteh</p>
            <h4 className="text-[12rem] leading-50 font-black">4.8</h4>
            <Rating rating={5} className="size-10" />
          </div>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mt-6"
        >
          <CarouselContent className="-ml-1 mt-10">
            {AWARDS.map(({ id, description, img, title }) => (
              <CarouselItem key={id} className="basis-1/6 pl-4">
                <div className="bg-muted rounded-2xl flex flex-col items-center justify-center group text-center p-4 space-y-2 h-80">
                  <Image
                    src={img}
                    alt={title}
                    className="grayscale group-hover:grayscale-0 duration-300"
                  />
                  <h4 className="text-xl">{title}</h4>
                  <p className="text-sm">{description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
