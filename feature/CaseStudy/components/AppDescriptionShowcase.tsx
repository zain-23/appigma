import { Container, SectionWrapper } from "@/shared/common";
import { cn } from "@/shared/lib";
import Image, { StaticImageData } from "next/image";

interface AppDescriptionShowcaseProps {
  title: string;
  descriptions: string[];
  image: StaticImageData;
  imagePreview: "even" | "odd";
}

export const AppDescriptionShowcase = ({
  descriptions,
  image,
  imagePreview,
  title,
}: AppDescriptionShowcaseProps) => {
  return (
    <SectionWrapper className="py-0 min-h-[70vh] md:min-h-[80vh] lg:h-screen">
      <Container className="h-full py-16 md:py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 h-full items-center">
          <div
            className={cn(
              "col-span-1 space-y-4 md:space-y-6",
              imagePreview === "odd" ? "lg:order-2" : "lg:order-1",
              "order-2"
            )}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:font-black">
              {title}
            </h2>
            <div className="space-y-3 md:space-y-4">
              {descriptions.map((des) => (
                <p key={des} className="text-base lg:text-lg leading-relaxed">
                  {des}
                </p>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "col-span-1 flex justify-center",
              imagePreview === "odd" ? "lg:order-1" : "lg:order-2",
              "order-1"
            )}
          >
            <div className="w-full max-w-md lg:max-w-full">
              <Image
                src={image}
                alt="Project description"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
