import { Container, WatermarkContent } from "@/shared/common";
import { AWARDS } from "../lib";
import Image from "next/image";

export const Awards = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col justify-center items-center text-center space-y-8 max-w-5xl mx-auto relative pb-10">
          <h2 className="text-6xl font-black">Awards & Recognition</h2>
          <p className="text-lg leading-relaxed">
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
        <div className="flex flex-wrap justify-center divide-y divide-x">
          {AWARDS.map(({ description, id, img, title }) => (
            <div
              className="w-60 h-72 p-4 space-y-4 flex flex-col items-center justify-center"
              key={id}
            >
              <div className="w-[90%] h-36 relative">
                <Image src={img} alt={title} fill />
              </div>
              <div className="space-y-1 text-center">
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
