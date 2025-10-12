import { Container, SectionWrapper, WatermarkContent } from "@/shared/common";
import { OUR_JOURNEY } from "../lib";

export const Journey = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="flex flex-col justify-center items-center text-center space-y-4 md:space-y-6 lg:space-y-8 max-w-5xl mx-auto relative pb-8 md:pb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Our journey of building success
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-0">
            We thrive on accelerating the path to disruption and implementing
            agile methodologies to design, build, deliver, and scale digital
            solutions. Our future-proof, growth-centric tech has earned us
            notable awards and recognition across industries and regions.
          </p>
          <WatermarkContent
            frontText=""
            backText="Awards"
            className="absolute z-[-1] bottom-0"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {OUR_JOURNEY.map(({ number, title }) => (
            <div
              key={number}
              className="col-span-1 space-y-2 flex items-center flex-col"
            >
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-semibold">
                {number}
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl">{title}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
