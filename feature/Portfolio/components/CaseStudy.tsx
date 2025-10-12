import { Container, SectionWrapper } from "@/shared/common";

export const CaseStudy = () => {
  return (
    <SectionWrapper className="bg-muted">
      <Container className="space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:font-black">
          Case Study
        </h2>
        <p className="text-base lg:text-lg leading-relaxed max-w-5xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error hic
          aperiam inventore saepe laboriosam, illum sint perferendis culpa
          voluptate quaerat, a alias pariatur et assumenda nemo eaque tenetur
          praesentium iusto. Error hic aperiam inventore saepe laboriosam, illum
          sint perferendis culpa voluptate quaerat, a alias pariatur et
          assumenda nemo eaque tenetur praesentium iusto.
        </p>
      </Container>
    </SectionWrapper>
  );
};
