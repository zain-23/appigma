import { Breadcrumb, Container, SectionWrapper } from "@/shared/common";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeroProps {
  title: string;
  description: string;
  sideImage: StaticImageData | string;
  bgColor: string;
}

export const Hero = ({ title, description, sideImage, bgColor }: HeroProps) => {
  return (
    <SectionWrapper className={`${bgColor} lg:py-0 py-28 lg:h-screen`}>
      <Container className="h-full">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 items-center h-full">
          <div className="col-span-1 space-y-4 md:space-y-6 text-background xl:pr-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:font-black">
              {title}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed md:leading-loose">
              {description}
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="flex items-center w-full max-w-4xl">
              <Image 
                src={sideImage} 
                alt="Banner image" 
                className="w-full h-auto" 
                width={1200}
                height={900}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
