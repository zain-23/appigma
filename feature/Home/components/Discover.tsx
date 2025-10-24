import { Button, Container, SectionWrapper } from "@/shared/common";
import AiRevolution from "../../../public/assets/ai-revolution.webp";
import Image from "next/image";
import Link from "next/link";

export const Discover = () => {
  return (
    <SectionWrapper>
      <Container className="space-y-4 md:space-y-6">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
          What&apos;s New at Appigma
        </h2>
        <div className="px-4 py-6 md:px-6 lg:px-10 rounded-2xl md:rounded-3xl relative overflow-hidden lg:py-0 lg:h-[60vh] flex items-center bg-accent-foreground">
          {/* Bg Image */}
          <Image
            src={AiRevolution}
            className="absolute lg:block hidden top-0 left-0 w-full h-full object-cover"
            alt="ai-revolution"
            fill
          />

          <div className="col-span-1 text-primary-foreground space-y-4 md:space-y-6 relative z-[1] w-full md:max-w-[70%] lg:max-w-[50%]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold">
              Discover What <span className="text-primary">Rev AI</span> Can Do
              For You
            </h3>
            <p className="leading-relaxed text-base md:text-lg lg:text-xl">
              A groundbreaking initiative designed to supercharge productivity
              by merging human creativity with AI precision. Whether it&apos;s
              automating tasks or making smarter decisions faster, Rev AI is
              built to empower your teams like never before
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
              <Button asChild className="w-full sm:w-auto">
                <Link href={"/services/ai-development"}>Explore Rev AI</Link>
              </Button>
              <Button asChild variant={"outline"} className="w-full sm:w-auto">
                <Link href={"/contact-us"}>Talk To Our Innovators</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
