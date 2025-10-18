import { Button, Container, SectionWrapper } from "@/shared/common";
import heroImage from "../../../public/assets/services/ai/banner-ai.webp";
import Image from "next/image";

export const Hero = () => {
  return (
    <SectionWrapper className="py-0 h-screen relative">
      <Image
        src={heroImage}
        alt="AI Automation"
        fill
        className="absolute top-0 left-0 object-cover z-[-1]"
      />
      <Container className="flex items-center h-full py-16 md:py-20 lg:py-0">
        <div className="max-w-4xl text-background space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:font-black">
            AI Development Services
          </h1>
          <p className="leading-relaxed md:leading-loose text-base lg:text-lg">
            Tekrevol is a renowned AI development services company in the USA,
            trusted worldwide for its automation solutions. We develop
            artificial intelligence software and apps for businesses of all
            sizes to discard manual processes. Our AI solutions are designed to
            streamline workflows and augment operations for measurable results
            without unnecessary delays.
          </p>
          <Button size={"lg"} className="w-full sm:w-auto">
            Talk To Your AI Consultant
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
};
