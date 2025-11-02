"use client";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container,
  SectionWrapper,
  WatermarkContent,
} from "@/shared/common";
import Image from "next/image";
import { SERVICES } from "../lib";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/shared/lib";

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <SectionWrapper>
      <Container>
        <WatermarkContent
          backText="Core Servies"
          frontText="Core Services We Provide"
        />

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {SERVICES.map(({ title, description, img, id, icon }) => (
              <CarouselItem
                key={id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  className="relative overflow-hidden shadow-sm py-4 md:py-6 rounded-xl bg-muted"
                  onHoverStart={() => setHoveredCard(id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredCard === id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={img}
                      alt={title}
                      className="object-cover"
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </motion.div>

                  <motion.div
                    className="aspect-square flex flex-col justify-center items-start gap-y-3 md:gap-y-4 px-4 md:px-6 lg:px-8"
                    animate={{
                      y: hoveredCard === id ? -10 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="[&>svg]:w-12 [&>svg]:h-12">{icon()}</div>
                    <h3
                      className={cn(
                        "text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-300",
                        hoveredCard === id && "text-background"
                      )}
                    >
                      {title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm md:text-base lg:text-lg leading-relaxed transition-colors duration-300",
                        hoveredCard === id && "text-background"
                      )}
                    >
                      {description}
                    </p>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 md:mt-6 flex justify-center gap-2">
            <CarouselPrevious className="relative left-0 translate-x-0" />
            <CarouselNext className="relative right-0 translate-x-0" />
          </div>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
