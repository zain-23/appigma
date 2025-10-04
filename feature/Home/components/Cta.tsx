import { Button, Container } from "@/shared/common";
import Cta1 from "../../../public/assets/cta-1.webp";
import Image from "next/image";

export const Cta = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="px-10 h-[65vh] bg-primary mt-6 rounded-3xl relative flex items-center justify-start">
          {/* Bg Image */}
          <Image
            src={Cta1}
            className="absolute top-0 left-0 w-full h-full"
            alt="ai-revolution"
            fill
          />
          <div className="col-span-1 text-primary-foreground space-y-6 relative z-[1] max-w-[50%]">
            <h3 className="text-5xl leading-tight font-bold">
              Great Products Start With Bold Decisions And The Right Tech
              Partner
            </h3>
            <p className="leading-relaxed text-xl">
              At TekRevol, we transform your digital vision into scalable,
              high-performance solutions - on time, on brand, and beyond
              expectations.
            </p>
            <Button variant={"secondary"}>Talk To Our Innovators</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
