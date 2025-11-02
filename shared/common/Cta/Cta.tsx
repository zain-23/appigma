import { Button, Container, SectionWrapper } from "@/shared/common";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
    <SectionWrapper className="relative py-16 md:py-20 lg:py-28">
      <Image
        src={img}
        alt={"Leading ai"}
        fill
        className="absolute top-0 left-0 z-[-1] object-cover"
        priority
        sizes="100vw"
        placeholder="blur"
      />

      <Container>
        <div className="max-w-4xl text-background space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black leading-tight">
            {title}
          </h2>
          <p className="text-base lg:text-lg leading-relaxed md:leading-loose">
            {description}
          </p>
          <Button asChild size={"lg"} className="w-full sm:w-auto">
            <Link href={"/contact-us"}>{btnText}</Link>
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
};
