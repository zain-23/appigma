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
    <SectionWrapper className="h-screen">
      <Container className="h-full">
        <div className="grid grid-cols-12 h-full gap-6 items-center">
          <div className="col-span-8 space-y-4 relative">
            <h2 className="text-6xl font-black">
              Let&apos;s start a project together
            </h2>
            <p className="text-lg leading-relaxed">
              We&apos;ll contact you within a couple of hours to schedule a
              meeting to discuss your goals.
            </p>
            <WatermarkContent
              frontText=""
              backText="Get A Quote"
              className="absolute top-5 left-0 z-[-1]"
            />
          </div>
          <div className="col-span-4">
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="text-3xl font-black">
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
