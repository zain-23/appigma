"use client";
import { Button, Container, SectionWrapper } from "@/shared/common";
import { useState } from "react";
import { MISSION, MISSION_IMAGES } from "../lib";
import { Section } from "../types";
import Image from "next/image";

export const Mission = () => {
  const [selected, setSelected] = useState<keyof typeof MISSION>("Mission");

  const tabs = Object.keys(MISSION);
  const activeTabDetails: Record<number, Section> = MISSION[selected];

  const selectedTabImage = MISSION_IMAGES[selected];
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-1 lg:col-span-6 space-y-6 md:space-y-8 lg:space-y-14">
            {/* Tabs - Horizontal scroll on mobile */}
            <div className="grid grid-cols-3 gap-2">
              {tabs.map((tab) => (
                <Button
                  onClick={() => setSelected(tab as keyof typeof MISSION)}
                  key={tab}
                  variant={selected === tab ? "default" : "outline"}
                  className="h-10 md:h-12 lg:h-14 px-4 md:px-6 text-sm md:text-base lg:text-lg cursor-pointer whitespace-nowrap flex-shrink-0 lg:col-span-1"
                >
                  {tab}
                </Button>
              ))}
            </div>
            {/* Data */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {Object.keys(activeTabDetails).map((item) => {
                const toNumber = Number(item);

                return (
                  <div className="space-y-3 md:space-y-4" key={item}>
                    <h4 className="text-xl md:text-2xl font-semibold leading-snug">
                      {activeTabDetails[toNumber].heading}
                    </h4>
                    {activeTabDetails[toNumber].paragraph.map((para) => (
                      <p
                        className=" text-base lg:text-lg leading-relaxed"
                        key={para}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 relative h-[40vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] order-first lg:order-last">
            <Image
              src={selectedTabImage}
              alt={selected}
              fill
              className="object-cover rounded-lg lg:rounded-none"
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
