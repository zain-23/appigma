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
          <CarouselContent>
            {SERVICES.map(({ title, description, img, id, icon }) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="relative overflow-hidden shadow-sm py-6 rounded-xl bg-muted"
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
                    className="aspect-square flex flex-col justify-center items-start gap-y-4 px-8"
                    animate={{
                      y: hoveredCard === id ? -10 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {icon()}
                    <h3
                      className={cn(
                        "text-3xl font-semibold transition-colors duration-300",
                        hoveredCard === id && "text-background"
                      )}
                    >
                      {title}
                    </h3>
                    <p
                      className={cn(
                        "text-lg leading-relaxed transition-colors duration-300",
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
          <div className="mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Container>
    </SectionWrapper>
  );
};
