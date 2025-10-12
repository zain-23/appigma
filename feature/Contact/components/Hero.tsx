import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  SectionWrapper,
  WatermarkContent,
  ContactForm,
} from "@/shared/common";

export const Hero = () => {
  return (
    <SectionWrapper className="lg:py-0 py-28 lg:h-screen">
      <Container className="h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-6 md:gap-8 items-center">
          <div className="col-span-1 lg:col-span-8 space-y-4 md:space-y-6 relative pr-0 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold lg:font-black">
              Let&apos;s start a project together
            </h2>
            <p className="text-base lg:text-lg leading-relaxed md:leading-loose">
              We&apos;ll contact you within a couple of hours to schedule a
              meeting to discuss your goals.
            </p>
            <WatermarkContent
              frontText=""
              backText="Get A Quote"
              className="absolute top-3 md:top-5 left-0 z-[-1]"
            />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4 md:pb-6">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-black">
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
