import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  Rating,
  SectionWrapper,
} from "@/shared/common";
import { TESTIMONIALS } from "../lib";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <SectionWrapper className="bg-[radial-gradient(circle_at_right,_#004a2e_0%,_#001a0f_50%,_#000000_100%)]">
      <Container>
        <div className="max-w-6xl mx-auto text-center space-y-4 md:space-y-6 text-background">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Our clients simply love{" "}
            <span className="text-pretty">what we do</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl px-4 md:px-0">
            Proud to serve as the innovation partner for industry leaders who
            have experienced our expertise and excellence firsthand.
          </p>
          <div className="flex flex-col gap-y-6 md:gap-y-8 mt-12 md:mt-16 lg:mt-20">
            {TESTIMONIALS.map(
              ({ description, designation, id, name, initials, logo }) => (
                <Card
                  key={id}
                  className="py-8 md:py-10 lg:py-14 bg-accent-foreground text-background border-muted-foreground"
                >
                  <CardHeader className="px-4 md:px-6 lg:px-8">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-start font-medium leading-relaxed md:leading-snug">
                      "{description}"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 bg-primary flex items-center justify-center text-foreground rounded-full flex-shrink-0">
                          <span className="text-lg md:text-xl lg:text-2xl font-medium">
                            {initials}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <p className="text-base md:text-lg lg:text-xl">
                            {name}, {designation}
                          </p>
                          <Rating rating={5} />
                        </div>
                      </div>
                      <Image
                        src={logo}
                        alt={designation}
                        width={400}
                        height={400}
                        className="w-16 md:w-20 lg:w-24 h-auto self-end sm:self-center"
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
