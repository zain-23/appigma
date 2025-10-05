import { Container, SectionWrapper } from "@/shared/common";
import Aboutbg from "../../../public/assets/about-us/about-bg.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <SectionWrapper className="h-[80vh] py-0">
      <Container className="h-full">
        <div className="grid grid-cols-12 gap-6 h-full items-center">
          <div className="col-span-6 space-y-6">
            <h2 className="text-6xl font-black">About TekRevol</h2>
            <h2 className="text-lg leading-relaxed">
              TekRevol is an enterprise software development company helping
              startups and organizations build and implement digital
              transformation solutions tailored to their demand and needs.
            </h2>
            <ul className="grid grid-cols-2 list-disc gap-6 text-lg">
              <li className="col-span-1">Tech Integrated Solutions</li>
              <li className="col-span-1">Tech Integrated Solutions</li>
              <li className="col-span-1">Tech Integrated Solutions</li>
              <li className="col-span-1">Tech Integrated Solutions</li>
            </ul>
          </div>
          <div className="col-span-6 relative h-[60%]">
            <Image src={Aboutbg} alt="world" fill />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
