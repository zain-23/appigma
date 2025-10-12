import { Container, SectionWrapper } from "@/shared/common";
import { ACHIEVEMENT } from "../lib";

export const Achievement = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          {ACHIEVEMENT.map(({ id, item, numbers }) => (
            <div
              className="col-span-1 flex md:flex-row flex-col items-center justify-center py-6 px-4 md:px-6 lg:px-8 gap-4"
              key={id}
            >
              <h5 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary">
                {numbers}
              </h5>
              <p className="text-xl lg:text-3xl text-muted-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
