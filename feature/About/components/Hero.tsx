import { Breadcrumb, Container, SectionWrapper } from "@/shared/common";
import Aboutbg from "../../../public/assets/about-us/bannerabout.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <SectionWrapper className="lg:h-screen lg:py-0 lg:pt-0 pt-24">
      <Container className="h-full">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 h-full items-center">
          <div className="col-span-1 lg:col-span-5 space-y-4 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              About Appigma
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              TekRevol is an enterprise software development company helping
              startups and organizations build and implement digital
              transformation solutions tailored to their demand and needs.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 text-sm md:text-base lg:text-lg list-disc list-inside">
              <li className="col-span-1">Tech Integrated Solutions</li>
              <li className="col-span-1">Tech Integrated Solutions</li>
              <li className="col-span-1">Tech Integrated Solutions</li>
              <li className="col-span-1">Tech Integrated Solutions</li>
            </ul>
          </div>
          <div className="lg:col-span-7 col-span-1 relative lg:h-[60%]">
            <Image src={Aboutbg} alt="world" className="object-cover" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
