"use client";

import { Button, Container, SectionWrapper } from "@/shared/common";
import { TECHNOLOGIES } from "../lib";
import { useState } from "react";

export const Technologies = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<keyof typeof TECHNOLOGIES>("Mobile Apps");
  const technologies = Object.keys(TECHNOLOGIES);

  const tecnologiesStack: Record<string, string[]> =
    TECHNOLOGIES[selectedTechnology];
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-4xl space-y-2 md:space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold lg:font-black">
            Technologies we use
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Hire from our pool of 350+ specialized experts in web, mobile, and
            software engineering, specializing in the latest technologies and
            frameworks, ready to scale your development teams effortlessly.
          </p>
        </div>
        {/* Technologies */}
        <div className="mt-6 md:mt-8 lg:mt-10">
          {/* Mobile/Tablet: Horizontal scrollable tabs */}
          <div className="lg:hidden mb-6 md:mb-8">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 md:gap-4 pb-2 min-w-max">
                {technologies.map((item) => (
                  <Button
                    onClick={() =>
                      setSelectedTechnology(item as keyof typeof TECHNOLOGIES)
                    }
                    variant={selectedTechnology === item ? "default" : "ghost"}
                    key={item}
                    className="h-10 md:h-14 px-4 md:px-6 rounded-full text-sm md:text-base lg:text-xl cursor-pointer whitespace-nowrap flex-shrink-0"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Original grid layout */}
          <div className="hidden lg:grid grid-cols-12">
            <div className="col-span-3 p-10 flex flex-col items-start gap-y-4 border-t border-r">
              {technologies.map((item) => (
                <Button
                  onClick={() =>
                    setSelectedTechnology(item as keyof typeof TECHNOLOGIES)
                  }
                  variant={selectedTechnology === item ? "default" : "ghost"}
                  key={item}
                  className="w-52 h-14 rounded-full text-xl cursor-pointer"
                >
                  {item}
                </Button>
              ))}
            </div>
            <div className="col-span-6 border-t p-10 space-y-10">
              {Object.keys(tecnologiesStack).map((tech) => (
                <div className="space-y-4" key={tech}>
                  <h4 className="text-3xl font-medium">{tech}</h4>
                  <div className="grid grid-cols-3 gap-6">
                    {tecnologiesStack[tech].map((item) => (
                      <Button
                        key={item}
                        variant={"outline"}
                        className="h-14 rounded-full text-lg"
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-3" />
          </div>

          {/* Mobile/Tablet: Content area */}
          <div className="lg:hidden border-t pt-6 md:pt-8 space-y-6 md:space-y-8">
            {Object.keys(tecnologiesStack).map((tech) => (
              <div className="space-y-3 md:space-y-4" key={tech}>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">
                  {tech}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {tecnologiesStack[tech].map((item) => (
                    <Button
                      key={item}
                      variant={"outline"}
                      className="h-10 md:h-12 lg:h-14 rounded-full text-sm md:text-base lg:text-lg"
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
