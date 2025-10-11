import { Container, SectionWrapper } from "@/shared/common";
import { PRIVACY_POLICY } from "../lib";

export const PrivacyPolicyPage = () => {
  return (
    <SectionWrapper className="py-36">
      <Container>
        <div className="space-y-16">
          {PRIVACY_POLICY.map(({ id, paragraph, title }) => (
            <div className="space-y-4" key={id}>
              <h2 className="md:text-4xl text-2xl font-semibold">{title}</h2>
              {paragraph.map((item) => (
                <p
                  className="md:text-lg md:leading-loose leading-relaxed"
                  key={item.id}
                >
                  {item.description}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
