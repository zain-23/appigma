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
    <SectionWrapper className="h-screen">
      <Container className="h-full">
        <div className="grid grid-cols-12 h-full gap-6 items-center">
          <div className="col-span-8 space-y-4 relative pr-20">
            {/* Watermark Content */}
            <WatermarkContent
              frontText=""
              backText="Get A Quote"
              className="absolute top-5 left-0 z-[-1]"
            />
            <h2 className="text-6xl font-black leading-tight">
              Passion-Fueled Innovation: Where Dreams Become Reality
            </h2>
            <p className="text-lg leading-loose">
              Appigma is not just a service provider; we are an invaluable
              extension of your marketing team, bringing a powerful combination
              of strategic thinking, expertise, and flawless execution to the
              areas where you need it the most.
            </p>
            <ul className="list-disc grid grid-cols-2 gap-y-4">
              {HERO_CONTENT.planning.map((item) => (
                <li className="col-span-1 text-lg" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4">
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="text-5xl font-black leading-tight">
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
