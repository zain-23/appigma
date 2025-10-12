import { Container, SectionWrapper } from "@/shared/common";
import { BRANHES } from "../lib";
import Image from "next/image";
import { cn } from "@/shared/lib";

export const CountryLocation = () => {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          {BRANHES.map(({ name, address, img }, index) => (
            <div
              className={cn(
                "col-span-1 text-center p-6 md:p-8 h-[350px] md:h-[400px] flex flex-col justify-center gap-y-3 md:gap-y-4",
                index % 3 === 0 && "lg:border-l",
                index === BRANHES.length - 1 && "lg:border-r",
                index <= BRANHES.length - 4 && "lg:border-b"
              )}
              key={name}
            >
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
                {name}
              </h4>
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src={img}
                  alt={`${name}-Image`}
                  width={500}
                  height={500}
                  className="max-h-[200px] md:max-h-[250px] w-auto object-contain"
                />
              </div>
              <p className="text-base lg:text-lg">{address}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
