"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  SectionWrapper,
  WatermarkContent,
} from "@/shared/common";
import { ACCORDION } from "../lib";

export const Faq = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col items-center relative">
          <h2 className="text-5xl font-black">Frequently Asked Questions</h2>
          <WatermarkContent
            frontText=""
            backText="FAQS"
            className="absolute z-[-1] -top-3"
          />
        </div>
        <Accordion type="single" collapsible className="mt-36">
          {ACCORDION.map(({ question, answer, id }) => (
            <AccordionItem key={id} value={id.toString()}>
              <AccordionTrigger className="text-2xl font-semibold py-6">
                {question}
              </AccordionTrigger>
              <AccordionContent className="space-y-8 pt-4">
                <h3 className="text-xl font-medium">{answer.title}</h3>
                <ul className="space-y-4 list-disc list-inside">
                  {answer.list.map((item) => (
                    <li key={item} className="text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </SectionWrapper>
  );
};
