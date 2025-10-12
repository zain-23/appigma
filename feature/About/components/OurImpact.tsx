import { Container, SectionWrapper } from "@/shared/common";
import ImpactImg from "../../../public/assets/about-us/Our-Impact.webp";
import Image from "next/image";

export const OurImpact = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 md:gap-8">
          <div className="col-span-1 lg:col-span-5 order-first lg:order-first">
            <Image
              src={ImpactImg}
              alt="Our Impact"
              className="w-full h-auto rounded-lg lg:rounded-none"
            />
          </div>
          <div className="col-span-1 lg:col-span-7 space-y-4 md:space-y-6 pl-0 lg:pl-8 xl:pl-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black">
              Our Impact
            </h2>
            <p className="text-base md:text-lg font-medium">
              Impact 2023 & Beyond!
            </p>
            <p className="text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              sapiente consequatur, veniam ipsa, incidunt molestiae ipsam
              voluptas quia nostrum iure nihil in unde hic odio qui ullam
              corporis earum. Nihil. Tempora sapiente consequatur, veniam ipsa,
              incidunt molestiae ipsam voluptas quia nostrum iure nihil in unde
              hic odio qui ullam corporis earum. Nihil.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
