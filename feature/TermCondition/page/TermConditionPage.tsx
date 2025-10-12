import { Container, SectionWrapper } from "@/shared/common";
import { TERM_AND_CONDITION } from "../lib";

export const TermConditionPage = () => {
  return (
    <SectionWrapper className="py-24 lg:py-36">
      <Container>
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
          {TERM_AND_CONDITION.map(({ id, paragraph, title }) => (
            <div className="space-y-3 md:space-y-4" key={id}>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                {title}
              </h2>
              <div className="space-y-3 md:space-y-4">
                {paragraph.map((item) => (
                  <p
                    className="text-base lg:text-lg leading-relaxed md:leading-loose text-muted-foreground"
                    key={item.id}
                  >
                    {item.description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
