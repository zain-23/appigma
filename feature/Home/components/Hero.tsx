import { Button, Container } from "@/shared/common";

export const Hero = () => {
  return (
    <section className="h-[70vh]">
      <Container className="h-full">
        <div className="flex justify-center items-start flex-col space-y-6 h-full w-[65%]">
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
