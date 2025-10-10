import { AwardRecognization, Faq } from "@/shared/common";
import {
  Demand,
  Expertise,
  Hero,
  Industry,
  Innovation,
  LeadingBusiness,
  MultiDomain,
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
      <Industry />
      <Innovation />
      <AwardRecognization />
      <Faq />
    </>
  );
};
