"use client";

import { Button, Container } from "@/shared/common";
import { TECHNOLOGIES } from "../lib";
import { useState } from "react";

export const Technologies = () => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<keyof typeof TECHNOLOGIES>("Mobile Apps");
  const technologies = Object.keys(TECHNOLOGIES);

  const tecnologiesStack: Record<string, string[]> =
    TECHNOLOGIES[selectedTechnology];
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-4xl space-y-6">
          <h2 className="text-6xl font-black">Technologies we use</h2>
          <p className="text-2xl leading-relaxed">
            Hire from our pool of 350+ specialized experts in web, mobile, and
            software engineering, specializing in the latest technologies and
            frameworks, ready to scale your development teams effortlessly.
          </p>
        </div>
        {/* Technologies */}
        <div className="grid grid-cols-12 mt-10">
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
              <div className="space-y-4">
                <h4 className="text-3xl font-medium">{tech}</h4>
                <div className="grid grid-cols-3 gap-6">
                  {tecnologiesStack[tech].map((item) => (
                    <Button
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
      </Container>
    </section>
  );
};
