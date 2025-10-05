import { COMPANY_LOGO } from "@/shared/lib";
import { Container } from "../Container";
import { SectionWrapper } from "../SectionWrapper";
import { WatermarkContent } from "../WatermarkContent";
import Image from "next/image";

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
            <div
              className="col-span-1 group aspect-square border-r border-b relative last:border-r-0 [&:nth-child(6n)]:border-r-0 [&:nth-last-child(-n+6)]:border-b-0"
              key={index}
            >
              <Image
                alt={`Company-logo-${index}`}
                className="grayscale group-hover:grayscale-0 duration-200"
                src={img}
                fill
              />
              {/* Top */}
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />

              {/* RIGHT */}
              <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />

              {/* BOTTOM */}
              <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />

              {/* LEFT */}
              <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
