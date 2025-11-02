import { Container, SectionWrapper } from "@/shared/common";

export const CaseStudy = () => {
  return (
    <SectionWrapper className="bg-muted">
      <Container className="space-y-4 md:space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Our Portfolio
        </h2>
        <p className="text-base lg:text-lg leading-relaxed max-w-5xl">
          Explore our comprehensive portfolio of successful projects across mobile app development, web design, and innovative digital solutions. Each case study showcases our expertise in transforming complex business requirements into user-friendly, scalable applications that drive real results for our clients.
        </p>
      </Container>
    </SectionWrapper>
  );
};
