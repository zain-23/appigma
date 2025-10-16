"use client";
import {
  Button,
  Container,
  MagneticButton,
  SectionWrapper,
} from "@/shared/common";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
export const Hero = () => {
  const router = useRouter();
  return (
    <SectionWrapper className="h-screen py-0 relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-foreground after:opacity-65 after:z-[-1]">
      {/* Background Video */}
      <video
        src="https://bfd6tumtbx.ufs.sh/f/LxNvt5anRP0UrnQQUAklLVYnWKPF0ajmzq6T9xyiUAQkhJBr"
        loop
        autoPlay
        muted
        className="w-full h-full absolute top-0 left-0 object-cover z-[-2]"
      />

      <Container className="h-full">
        <div className="flex justify-end items-start flex-col space-y-4 md:space-y-6 h-full max-w-4xl mx-auto text-background">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold">
            We are a <span className="text-primary">Software Development</span>{" "}
            Company
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eius laudantium quos nemo cupiditate, cum ab nulla eveniet corporis
            cumque nisi numquam quisquam neque odit, impedit soluta.
            Accusantium, pariatur error.
          </p>
          <div className="flex justify-between w-full">
            <Button
              className={"lg:invisible visible"}
              onClick={() => router.push("/contact-us")}
            >
              Let's Discuss
            </Button>
            <MagneticButton
              onClick={() => router.push("/contact-us")}
              className="w-40 hidden h-40 bg-primary rounded-full lg:flex justify-center gap-2 flex-col items-center text-foreground text-lg text-center font-semibold"
            >
              <ArrowUpRight size={30} />
              Let's Discuss Your Idea
            </MagneticButton>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
