"use client";
import { ACCORDION } from "@/feature/Home/lib";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
  SectionWrapper,
  WatermarkContent,
} from "@/shared/common";

export const Faq = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col items-center relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black">
            Frequently Asked Questions
          </h2>
          <WatermarkContent
            frontText=""
            backText="FAQS"
            className="absolute z-[-1] -top-3"
          />
        </div>
        <Accordion type="single" collapsible className="mt-6 md:mt-24 lg:mt-36">
          {ACCORDION.map(({ question, answer, id }) => (
            <AccordionItem key={id} value={id.toString()}>
              <AccordionTrigger className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium lg:font-semibold py-4 md:py-5 lg:py-6 text-left">
                {question}
              </AccordionTrigger>
              <AccordionContent className="space-y-4 md:space-y-6 lg:space-y-8 pt-2 md:pt-3 lg:pt-4">
                <h3 className="text-base md:text-lg lg:text-xl font-medium">
                  {answer.title}
                </h3>
                <ul className="space-y-2 md:space-y-3 lg:space-y-4 list-disc list-inside pl-2">
                  {answer.list.map((item) => (
                    <li
                      key={item}
                      className="text-sm md:text-base lg:text-lg leading-relaxed"
                    >
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
