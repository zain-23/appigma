import { Breadcrumb, Container, SectionWrapper } from "@/shared/common";
import image from "../../../public/assets/case-study/1/banner_img.webp";
import Image from "next/image";

export const Hero = () => {
  return (
    <SectionWrapper className="bg-purple-gradient lg:py-0 py-28 lg:h-screen">
      <Container className="h-full">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 items-center h-full">
          <div className="col-span-1 space-y-4 md:space-y-6 text-background xl:pr-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:font-black">
              TruthGPT
            </h2>
            <p className="text-base lg:text-lg leading-relaxed md:leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores quidem optio commodi voluptatem, qui pariatur nobis
              velit consectetur corporis doloribus earum quaerat necessitatibus
              reprehenderit soluta. Laboriosam vero dignissimos nobis. Eveniet?
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <div className="flex items-center w-xl">
              <Image src={image} alt="Banner image" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
