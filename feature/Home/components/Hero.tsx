import {
  Button,
  buttonVariants,
  Container,
  SectionWrapper,
} from "@/shared/common";
import Link from "next/link";

export const Hero = () => {
  return (
    <SectionWrapper className="h-[80vh] lg:h-[90vh] py-0 relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-foreground after:opacity-65 after:z-[-1]">
      {/* Background Video */}
      <video
        src="https://bfd6tumtbx.ufs.sh/f/LxNvt5anRP0UrnQQUAklLVYnWKPF0ajmzq6T9xyiUAQkhJBr"
        loop
        autoPlay
        muted
        className="w-full h-full absolute top-0 left-0 object-cover z-[-2]"
      />

      <Container className="h-full">
        <div className="flex justify-center lg:items-center items-start lg:text-center flex-col space-y-4 md:space-y-6 h-full max-w-5xl mx-auto text-background">
          <p className="text-lg lg:text-xl">Digital Transformation Company</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            We are a Software Development Company
          </h2>
          <p className="text-lg lg:text-xl">
            From adaption to expansion, we are your partners throughou.
          </p>
          <Link
            href={"/contact-us"}
            className={buttonVariants({
              className:
                "h-10 md:h-12 px-6 md:px-8 !rounded-full text-base md:!text-lg",
            })}
          >
            Schedule a Call
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
};
