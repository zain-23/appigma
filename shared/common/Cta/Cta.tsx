import { Button, Container, SectionWrapper } from "@/shared/common";
import Image, { StaticImageData } from "next/image";

interface LeadingBusinessProps {
  img: StaticImageData;
  title: string;
  description: string;
  btnText: string;
}

export const Cta = ({
  btnText,
  description,
  img,
  title,
}: LeadingBusinessProps) => {
  return (
    <SectionWrapper className="relative py-28">
      <Image
        src={img}
        alt={"Leading ai"}
        fill
        className="absolute top-0 left-0 z-[-1] object-cover"
      />

      <Container>
        <div className="max-w-4xl text-background space-y-6">
          <h2 className="text-5xl font-black leading-tight">{title}</h2>
          <p className="text-lg leading-relaxed">{description}</p>
          <Button size={"lg"}>{btnText}</Button>
        </div>
      </Container>
    </SectionWrapper>
  );
};
