"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Container, SectionWrapper } from "@/shared/common";
import { DEVELOPMENT_PROCESS } from "../lib";

export const DevelopmentProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <SectionWrapper className="bg-foreground text-background">
      <Container className="max-w-6xl relative space-y-8 md:space-y-16 lg:space-y-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Our product{" "}
            <span className="text-primary">development process</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row relative">
          {/* LEFT SIDE */}
          <div
            ref={containerRef}
            className="flex-1 relative space-y-16 md:space-y-24 lg:space-y-40 pl-4 md:pl-6 pb-10 lg:pb-36"
          >
            {DEVELOPMENT_PROCESS.map((step) => (
              <div
                key={step.id}
                className="space-y-3 md:space-y-4 before:content-[''] before:h-full before:w-[2px] before:absolute before:left-0 before:top-0 before:bg-muted-foreground before:rounded-full"
              >
                <p className="text-sm md:text-base lg:text-xl">
                  {String(step.id).padStart(2, "0")}/
                  {DEVELOPMENT_PROCESS.length.toString().padStart(2, "0")}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="max-w-md text-sm md:text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - STICKY IMAGE CONTAINER */}
          <div className="flex-1 sticky top-20 md:top-32 lg:top-40 h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-[250px] md:w-[300px] lg:w-[400px] h-full rounded-full overflow-hidden">
              {DEVELOPMENT_PROCESS.map((step, index) => {
                const start = index / DEVELOPMENT_PROCESS.length;
                const end = (index + 1) / DEVELOPMENT_PROCESS.length;

                const y = useTransform(
                  scrollYProgress,
                  [start, end],
                  index === 0 ? ["0%", "0%"] : ["100%", "0%"]
                );

                return (
                  <motion.div
                    key={step.id}
                    style={{ y }}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
