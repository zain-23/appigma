"use client";
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  Container,
  SectionWrapper,
} from "@/shared/common";
import { useParams } from "next/navigation";
import { SERVICES } from "../lib";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const Portfolio = () => {
  const { slug } = useParams() as { slug: keyof typeof SERVICES };
  const data = SERVICES[slug];
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-7xl mx-auto lg:text-center space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black leading-tight">
            {data.portoflio.title}
          </h2>
          <p className="text-base lg:text-lg leading-relaxed">
            {data.portoflio.description}
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mt-4 md:mt-6"
        >
          <CarouselContent className="mt-6 -ml-1 md:mt-8 lg:mt-10 space-x-2 md:space-x-4">
            {data.portoflio.portoflios.map(
              ({ id, details, logo, img, title, bgColor }) => (
                <CarouselItem
                  key={id}
                  className="w-full border-2 rounded-2xl overflow-hidden shadow basis-full md:basis-4/5 lg:basis-2/3 pl-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] md:min-h-[70vh] lg:h-[80vh] items-center">
                    <div className="col-span-1 space-y-4 md:space-y-6 lg:space-y-8 p-4 md:p-6 lg:p-8">
                      <Image
                        className="w-20 md:w-24 lg:w-28"
                        src={logo}
                        width={500}
                        height={500}
                        alt={title}
                      />
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                        {title}
                      </h3>
                      <p className="text-lg md:text-xl lg:text-2xl font-medium">
                        Results?
                      </p>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {details.map(({ id, rate, title }) => (
                          <div className="col-span-1" key={id}>
                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
                              {rate}
                            </h4>
                            <p className="text-sm md:text-base text-muted-foreground">
                              {title}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full sm:w-56 md:w-60 h-12 md:h-14 text-base md:text-lg lg:text-xl font-semibold">
                        Read Case Study
                      </Button>
                    </div>
                    <div
                      className={`col-span-1 h-64 md:h-80 lg:h-full flex justify-center items-center p-4 ${bgColor}`}
                    >
                      <Image
                        src={img}
                        className="w-full h-full object-contain"
                        alt={title}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
