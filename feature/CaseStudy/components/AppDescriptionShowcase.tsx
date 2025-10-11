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
    <SectionWrapper className="py-0 h-screen">
      <Container className="h-full">
        <div className="grid grid-cols-2 gap-6 h-full items-center">
          <div
            className={cn(
              "col-span-1 space-y-6",
              imagePreview === "odd" ? "order-2" : "order-1"
            )}
          >
            <h2 className="text-6xl font-black">{title}</h2>
            {descriptions.map((des) => (
              <p key={des} className="text-lg leading-relaxed">
                {des}
              </p>
            ))}
          </div>
          <div
            className={cn(
              "col-span-1 flex justify-center",
              imagePreview === "odd" ? "order-1" : "order-2"
            )}
          >
            <Image src={image} alt="Project description" />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
