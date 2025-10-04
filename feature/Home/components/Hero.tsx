import { Button, Container } from "@/shared/common";

export const Hero = () => {
  return (
    <section className="h-[90vh] relative">
      {/* Background Video */}
      <video
        src="https://bfd6tumtbx.ufs.sh/f/LxNvt5anRP0UrnQQUAklLVYnWKPF0ajmzq6T9xyiUAQkhJBr"
        loop
        autoPlay
        muted
        className="w-full h-full absolute top-0 left-0 object-cover z-[-2]"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-background to-transparent z-[-1]" />

      <Container className="h-full">
        <div className="flex justify-center items-start flex-col space-y-6 h-full w-[65%] text-background">
          <p>Digital Transformation Company</p>
          <h2 className="text-6xl font-semibold leading-tight">
            Full-Stack Tech Enablement For Future-Ready Businesses
          </h2>
          <p>
            From adaption to expansion, we are your partners throughout the
            digital growth cycle.
          </p>
          <Button className="h-14 px-8 rounded-full">Schedule a Call</Button>
        </div>
      </Container>
    </section>
  );
};
