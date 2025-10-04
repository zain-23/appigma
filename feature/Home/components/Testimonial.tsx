"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container,
  WatermarkContent,
} from "@/shared/common";
import AutoPlay from "embla-carousel-autoplay";
import { TESTIMONIALS } from "../lib";

export const Testimonial = () => {
  return (
    <section className="py-20">
      <Container>
        <WatermarkContent
          frontText="What Our Clients Say About Us"
          backText="Our Clients"
        />
        <Carousel
          plugins={[
            AutoPlay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="relative border border-black">
            {TESTIMONIALS.map(
              ({ id, video, name, country, description, designation }) => (
                <CarouselItem
                  key={id}
                  className="grid grid-cols-12 gap-20 items-center"
                >
                  <div className="col-span-6 aspect-video overflow-hidden rounded-2xl">
                    <video src={video} controls></video>
                  </div>
                  <div className="col-span-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <h4 className="text-3xl font-semibold">{name}</h4>
                        <span className="text-xl">{designation}</span>
                      </div>
                      <span className="text-xl font-medium">{country}</span>
                    </div>
                    <p className="font-medium leading-loose text-lg">
                      "{description}"
                    </p>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};
