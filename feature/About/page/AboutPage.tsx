import { AwardRecognization, Clients } from "@/shared/common";
import { Achievements, Hero, Mission, OurImpact } from "../components";

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
