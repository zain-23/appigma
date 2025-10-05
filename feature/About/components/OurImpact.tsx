import { Container, SectionWrapper } from "@/shared/common";
import ImpactImg from "../../../public/assets/about-us/Our-Impact.webp";
import Image from "next/image";

export const OurImpact = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-5">
            <Image src={ImpactImg} alt="Our Impact" />
          </div>
          <div className="col-span-7 space-y-6 pl-20">
            <h2 className="text-5xl font-black">Our Impact</h2>
            <p>Impact 2023 & Beyond!</p>
            <p className="text-lg leading-relaxed">
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
