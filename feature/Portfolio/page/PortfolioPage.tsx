import { CaseStudy, Featured, Hero } from "../components";
// import { Portfolio } from "../components/Portfolio"; // Commented out old portfolio
import { CaseStudies } from "@/feature/Home/components"; // Import case studies from homepage

export const PortfolioPage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <CaseStudy />
      <CaseStudies /> {/* Use case studies from homepage */}
      {/* <Portfolio /> */} {/* Commented out old portfolio */}
    </>
  );
};
