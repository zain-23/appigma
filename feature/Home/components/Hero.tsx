import { Button, Container, SectionWrapper } from "@/shared/common";

export const Hero = () => {
  return (
    <SectionWrapper className="h-[90vh] py-0 relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-foreground after:opacity-65 after:z-[-1]">
      {/* Background Video */}
      <video
        src="https://bfd6tumtbx.ufs.sh/f/LxNvt5anRP0UrnQQUAklLVYnWKPF0ajmzq6T9xyiUAQkhJBr"
        loop
        autoPlay
        muted
        className="w-full h-full absolute top-0 left-0 object-cover z-[-2]"
      />

      <Container className="h-full">
        <div className="flex justify-center items-center text-center flex-col space-y-6 h-full max-w-5xl mx-auto text-background">
          <p>Digital Transformation Company</p>
          <h2 className="text-6xl font-semibold leading-tight">
            Full-Stack Tech Enablement For Future-Ready Businesses
          </h2>
          <p>
            From adaption to expansion, we are your partners throughout the
            digital growth cycle.
          </p>
          <Button className="h-12 px-8 rounded-full text-lg">
            Schedule a Call
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
};
