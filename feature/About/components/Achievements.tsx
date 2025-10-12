import { Container, SectionWrapper } from "@/shared/common";
import { ACIVEMENTS } from "../lib";

export const Achievements = () => {
  return (
    <SectionWrapper className="bg-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="col-span-1 lg:col-span-6 space-y-4 md:space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black leading-tight">
              In Pursuit Of Scaling The Digital Ecosystem Through Top-Tier
              Product Teams
            </h2>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold">
              OUR STORY
            </h4>
            <p className="text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis accusamus, dignissimos ad placeat, consequuntur suscipit
              iusto necessitatibus repellendus cupiditate cum sed possimus
              accusantium unde rerum harum maiores, molestiae veniam?
            </p>
            <p className="text-base lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis accusamus, dignissimos ad placeat, consequuntur suscipit
              iusto necessitatibus repellendus cupiditate cum sed possimus
              accusantium unde rerum harum maiores, molestiae veniam?
            </p>
          </div>
          <div className="col-span-1 lg:col-span-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
              {ACIVEMENTS.map(({ total, description }) => (
                <div
                  className="col-span-1 text-center p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center justify-center"
                  key={total}
                >
                  <h4 className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-semibold lg:font-black">
                    {total}+
                  </h4>
                  <p className="text-lg mt-2 md:mt-3">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
