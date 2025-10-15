import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ContactForm,
  Container,
  SectionWrapper,
  WatermarkContent,
} from "@/shared/common";
import { HERO_CONTENT } from "../lib";

export const Hero = () => {
  return (
    <SectionWrapper className="lg:py-0 pt-28 pb-16 lg:h-screen">
      <Container className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-6 md:gap-8 items-center">
          <div className="col-span-1 lg:col-span-8 space-y-4 md:space-y-6 relative pr-0 lg:pr-8 xl:pr-20">
            {/* Watermark Content */}
            <WatermarkContent
              frontText=""
              backText="Get A Quote"
              className="absolute top-3 md:top-5 left-0 z-[-1]"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black leading-tight">
              Passion-Fueled Innovation: Where Dreams Become Reality
            </h2>
            <p className="text-base lg:text-lg leading-relaxed md:leading-loose">
              Appigma is not just a service provider; we are an invaluable
              extension of your marketing team, bringing a powerful combination
              of strategic thinking, expertise, and flawless execution to the
              areas where you need it the most.
            </p>
            <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-3 lg:gap-y-4">
              {HERO_CONTENT.planning.map((item) => (
                <li className="col-span-1 text-base lg:text-lg" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-4 md:pb-6">
                <CardTitle className="text-2xl sm:text-3xl font-semibold lg:font-black leading-tight">
                  Book a Free <span className="text-primary">Consultation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
