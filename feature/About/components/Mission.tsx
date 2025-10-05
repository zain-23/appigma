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
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 space-y-14">
            <div className="grid grid-cols-3 gap-6">
              {tabs.map((tab) => (
                <Button
                  onClick={() => setSelected(tab as keyof typeof MISSION)}
                  key={tab}
                  variant={selected === tab ? "default" : "outline"}
                  className="col-span-1 h-14 text-lg"
                >
                  {tab}
                </Button>
              ))}
            </div>
            {/* Data */}
            <div className="space-y-8">
              {Object.keys(activeTabDetails).map((item) => {
                const toNumber = Number(item);

                return (
                  <div className="space-y-4" key={item}>
                    <h4 className="text-2xl font-semibold leading-snug">
                      {activeTabDetails[toNumber].heading}
                    </h4>
                    {activeTabDetails[toNumber].paragraph.map((para) => (
                      <p className="text-lg leading-relaxed" key={para}>
                        {para}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6 relative h-[60vh]">
            <Image src={selectedTabImage} alt={selected} fill />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
