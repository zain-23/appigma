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
        <div>
          <WatermarkContent frontText="Our Clients" backText="Clients" />
          <p className="text-lg leading-relaxed">
            We contribute to these partnership programs, supported by global
            technology experts. Partnering with industry leaders, we offer
            quality technology solutions that meet your business needs.
          </p>
        </div>
        {/* Logos */}
        <div className="grid grid-cols-6 mt-10 border">
          {COMPANY_LOGO.map((img, index) => (
            <HoverCard key={index}>
              <Image src={img} alt={`Company-logo-${index + 1}`} />
            </HoverCard>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
