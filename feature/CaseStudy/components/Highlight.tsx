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
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-6xl font-black">{title}</h2>
          {descriptions.map((para) => (
            <p key={para} className="text-lg">
              {para}
            </p>
          ))}
        </div>
        <div className="w-full mt-20 flex justify-center">
          <Image src={image} alt={title} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
