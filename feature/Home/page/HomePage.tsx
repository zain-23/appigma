import { Faq } from "@/shared/common";
import {
  Achievement,
  Discover,
  Hero,
  Services,
  Expertise,
  CaseStudies,
  Cta,
  Awards,
  Testimonial,
  Technologies,
  DevelopmentProcess,
} from "../components";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Achievement />
      <Discover />
      <Services />
      <Expertise />
      <CaseStudies />
      <Cta />
      <Awards />
      <DevelopmentProcess />
      <Technologies />
      <Testimonial />
      <Faq />
    </>
  );
};
