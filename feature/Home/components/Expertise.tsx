"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container,
  SectionWrapper,
  WatermarkContent,
} from "@/shared/common";
import { cn } from "@/shared/lib";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { EXPERTISE } from "../lib";

export const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <SectionWrapper>
      <Container>
        <WatermarkContent
          backText="Expertise"
          frontText="Expertise Across Domains"
        />

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {EXPERTISE.map(({ title, description, img, id, icon }) => (
              <CarouselItem
                key={id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  className="relative overflow-hidden shadow-sm py-6 md:py-8 lg:py-10 px-4 md:px-6 lg:px-8 rounded-xl bg-muted"
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
                    />
                  </motion.div>

                  <motion.div
                    className="aspect-video flex flex-col justify-center items-start gap-y-3 md:gap-y-4"
                    animate={{
                      y: hoveredCard === id ? -10 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <span className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full text-background flex justify-center items-center [&>svg]:w-6 [&>svg]:h-6">
                      {icon()}
                    </span>
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
