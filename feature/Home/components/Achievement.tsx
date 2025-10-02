import { Container } from "@/shared/common";
import { ACHIEVEMENT } from "../lib";

export const Achievement = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-3 divi divide-x">
          {ACHIEVEMENT.map(({ id, item, numbers }) => (
            <div
              className="col-span-1 flex items-center justify-center py-6 px-8 gap-x-4"
              key={id}
            >
              <h5 className="text-6xl font-semibold">{numbers}</h5>
              <p className="text-3xl text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
