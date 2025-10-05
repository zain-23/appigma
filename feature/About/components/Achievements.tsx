import { Container, SectionWrapper } from "@/shared/common";
import { ACIVEMENTS } from "../lib";

export const Achievements = () => {
  return (
    <SectionWrapper className="bg-muted">
      <Container>
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-6 space-y-8">
            <h2 className="text-5xl font-black leading-tight">
              In Pursuit Of Scaling The Digital Ecosystem Through Top-Tier
              Product Teams
            </h2>
            <h4 className="text-2xl font-semibold">OUR STORY</h4>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis accusamus, dignissimos ad placeat, consequuntur suscipit
              iusto necessitatibus repellendus cupiditate cum sed possimus
              accusantium unde rerum harum maiores, molestiae veniam?
            </p>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis accusamus, dignissimos ad placeat, consequuntur suscipit
              iusto necessitatibus repellendus cupiditate cum sed possimus
              accusantium unde rerum harum maiores, molestiae veniam?
            </p>
          </div>
          <div className="col-span-6">
            <div className="grid grid-cols-2">
              {ACIVEMENTS.map(({ total, description }) => (
                <div
                  className="col-span-1 text-center p-16 flex flex-col items-center"
                  key={total}
                >
                  <h4 className="text-9xl font-black">{total}+</h4>
                  <p className="text-lg">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
