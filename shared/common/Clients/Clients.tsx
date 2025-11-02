import { COMPANY_LOGO } from "@/shared/lib";
import { Container } from "../Container";
import { SectionWrapper } from "../SectionWrapper";
import { WatermarkContent } from "../WatermarkContent";
import Image from "next/image";
import { HoverCard } from "../HoverCard";

export const Clients = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="space-y-4 md:space-y-6">
          <WatermarkContent frontText="Our Clients" backText="Clients" />
          <p className="text-base lg:text-lg leading-relaxed">
            We contribute to these partnership programs, supported by global
            technology experts. Partnering with industry leaders, we offer
            quality technology solutions that meet your business needs.
          </p>
        </div>
        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-6 md:mt-8 lg:mt-10 border border-border/50 rounded-lg overflow-hidden">
          {COMPANY_LOGO.map((img, index) => (
            <HoverCard
              key={index}
              className="p-4 md:p-6 hover:bg-muted/50 transition-colors flex justify-center items-center"
            >
              <Image
                src={img}
                alt={`Company-logo-${index + 1}`}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                width={120}
                height={60}
                priority
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              />
            </HoverCard>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
