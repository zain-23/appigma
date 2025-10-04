import { Button, Container } from "@/shared/common";
import AiRevolution from "../../../public/assets/ai-revolution.webp";
import Image from "next/image";

export const Discover = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-6xl font-black">What&apos;s New at Appigma</h2>
        <div className="px-10 py-16 bg-primary mt-6 rounded-3xl relative">
          {/* Bg Image */}
          <Image
            src={AiRevolution}
            className="absolute top-0 left-0 w-full h-full"
            alt="ai-revolution"
            fill
          />
          <div className="col-span-1 text-primary-foreground space-y-6 relative z-[1] max-w-[50%]">
            <h3 className="text-5xl leading-tight font-bold">
              Discover What Rev AI Can Do For You
            </h3>
            <p className="leading-relaxed text-xl">
              A groundbreaking initiative designed to supercharge productivity
              by merging human creativity with AI precision. Whether it&apos;s
              automating tasks or making smarter decisions faster, Rev AI is
              built to empower your teams like never before
            </p>
            <div className="flex items-center gap-x-2">
              <Button variant={"secondary"}>Explore Rev AI</Button>
              <Button variant={"secondary"}>Talk To Our Innovators</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
