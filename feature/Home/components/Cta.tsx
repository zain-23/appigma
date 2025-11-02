import { Button, Container, SectionWrapper } from "@/shared/common";
import Cta1 from "../../../public/assets/cta-1.webp";
import Image from "next/image";
import Link from "next/link";

export const Cta = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="px-4 md:px-6 lg:px-10 h-[40vh] lg:h-[65vh] bg-accent-foreground mt-4 md:mt-6 rounded-2xl md:rounded-3xl overflow-hidden relative flex items-center justify-start">
          {/* Bg Image */}
          <Image
            src={Cta1}
            className="absolute top-0 left-0 w-full h-full object-cover lg:block hidden"
            alt="ai-revolution"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 100vw"
            placeholder="blur"
          />
          <div className="col-span-1 text-primary-foreground space-y-4 md:space-y-6 relative z-[1] w-full md:max-w-[70%] lg:max-w-[50%]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
              Great Products Start With Bold Decisions And The Right Tech
              Partner
            </h3>
            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              At TekRevol, we transform your digital vision into scalable,
              high-performance solutions - on time, on brand, and beyond
              expectations.
            </p>
            <Button asChild variant={"secondary"} className="w-full sm:w-auto">
              <Link href={"/contact-us"}>Talk To Our Innovators</Link>
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
