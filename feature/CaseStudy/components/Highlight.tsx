import { Container, SectionWrapper } from "@/shared/common";
import Image, { StaticImageData } from "next/image";

interface HighlightProps {
  title: string;
  descriptions: string[];
  image: StaticImageData;
}

export const HighLight = ({ descriptions, image, title }: HighlightProps) => {
  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-6xl mx-auto lg:text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:font-black">
            {title}
          </h2>
          <div className="space-y-3 md:space-y-4">
            {descriptions.map((para) => (
              <p key={para} className="text-base lg:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full mt-8 md:mt-12 lg:mt-20 flex justify-center">
          <div className="w-full max-w-4xl">
            <Image src={image} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
