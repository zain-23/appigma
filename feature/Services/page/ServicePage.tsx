import { AwardRecognization, Faq, Testimonial } from "@/shared/common";
import {
  Demand,
  Expertise,
  Hero,
  Industry,
  Innovation,
  LeadingBusiness,
  MultiDomain,
  Portfolio,
  Services,
  TopBrand,
} from "../components";

export const ServicePage = () => {
  return (
    <>
      <Hero />
      <TopBrand />
      <Demand />
      <Services />
      <Expertise />
      <MultiDomain />
      <LeadingBusiness />
      <Portfolio />
      <Industry />
      <Innovation />
      <Testimonial />
      <AwardRecognization />
      <Faq />
    </>
  );
};
