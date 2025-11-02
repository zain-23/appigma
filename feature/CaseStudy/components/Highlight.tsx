import { Container, SectionWrapper } from "@/shared/common";
import Image, { StaticImageData } from "next/image";

interface HighlightProps {
  title: string;
  descriptions: string[];
  image: StaticImageData | string;
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
            <Image 
              src={image} 
              alt={title} 
              className="w-full h-auto" 
              width={800}
              height={600}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
