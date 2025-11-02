import { AppDescriptionShowcase, Hero, HighLight } from "../components";
import { CASE_STUDY } from "../lib";

export const CaseStudyPage = ({ slug }: { slug: string }) => {
  const data = CASE_STUDY[slug as keyof typeof CASE_STUDY];
  
  return (
    <>
      <Hero 
        title={data.hero.title}
        description={data.hero.description}
        sideImage={data.hero.sideImage}
        bgColor={data.hero.bgColor}
      />
      <AppDescriptionShowcase
        descriptions={data.project_description.description}
        title={data.project_description.title}
        image={data.project_description.img}
        imagePreview="odd"
      />
      <AppDescriptionShowcase
        descriptions={data.mission.description}
        title={data.mission.title}
        image={data.mission.img}
        imagePreview="even"
      />
      <AppDescriptionShowcase
        descriptions={data.introduction.description}
        title={data.introduction.title}
        image={data.introduction.img}
        imagePreview="odd"
      />
      <AppDescriptionShowcase
        descriptions={data.problem.description}
        title={data.problem.title}
        image={data.problem.img}
        imagePreview="even"
      />
      <HighLight
        descriptions={data.highlight.para}
        image={data.highlight.image}
        title={data.highlight.title}
      />
      <AppDescriptionShowcase
        descriptions={data.target_audience.description}
        title={data.target_audience.title}
        image={data.target_audience.img}
        imagePreview="odd"
      />
      <AppDescriptionShowcase
        descriptions={data.design_challenges.description}
        title={data.design_challenges.title}
        image={data.design_challenges.img}
        imagePreview="even"
      />
      <AppDescriptionShowcase
        descriptions={data.result.description}
        title={data.result.title}
        image={data.result.img}
        imagePreview="odd"
      />
    </>
  );
};
