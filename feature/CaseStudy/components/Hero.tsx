import { Container, SectionWrapper } from "@/shared/common";
import image from "../../../public/assets/case-study/1/banner_img.webp";
import Image from "next/image";

export const Hero = () => {
  return (
    <SectionWrapper className="py-0 h-screen bg-purple-gradient">
      <Container className="h-full">
        <div className="grid grid-cols-2 gap-8 items-center h-full">
          <div className="col-span-1 space-y-6 text-background xl:pr-20">
            <h2 className="text-6xl font-black">TruthGPT</h2>
            <p className="text-lg leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores quidem optio commodi voluptatem, qui pariatur nobis
              velit consectetur corporis doloribus earum quaerat necessitatibus
              reprehenderit soluta. Laboriosam vero dignissimos nobis. Eveniet?
            </p>
          </div>
          <div className="col-span-1 flex justify-center">
            <Image src={image} alt="Banner image" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
