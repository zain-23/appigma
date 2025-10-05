import { Clients } from "@/shared/common";
import {
  Achievements,
  AwardRecognization,
  Hero,
  Mission,
  OurImpact,
} from "../components";

export const AboutPage = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Achievements />
      <AwardRecognization />
      <OurImpact />
      <Clients />
    </>
  );
};
