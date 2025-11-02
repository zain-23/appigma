import { AwardRecognization, Faq, Testimonial } from "@/shared/common";
import { CaseStudies } from "@/feature/Home/components";
import {
  Demand,
  Expertise,
  Hero,
  Industry,
  Innovation,
  LeadingBusiness,
  MultiDomain,
  Services,
} from "../components";

export const ServicePage = () => {
  return (
    <>
      <Hero />
      <Demand />
      <Services />
      <Expertise />
      <MultiDomain />
      <LeadingBusiness />
      {/* <Portfolio /> */}
      <CaseStudies />
      <Industry />
      <Innovation />
      <Testimonial />
      <AwardRecognization />
      <Faq />
    </>
  );
};
