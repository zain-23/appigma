import { Container } from "@/shared/common";
import { BRANHES } from "../lib";
import Image from "next/image";
import { cn } from "@/shared/lib";

export const CountryLocation = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-3 divide-x">
          {BRANHES.map(({ name, address, img }, index) => (
            <div
              className={cn(
                "col-span-1 text-center p-8 h-[400px] flex flex-col justify-center gap-y-4",
                index % 3 === 0 && "border-l",
                index === BRANHES.length - 1 && "border-r",
                index <= BRANHES.length - 4 && "border-b"
              )}
              key={name}
            >
              <h4 className="text-3xl font-semibold text-primary">{name}</h4>
              <Image
                src={img}
                alt={`${name}-Image`}
                width={500}
                height={500}
                className="h-[70%]"
              />
              <p className="text-lg">{address}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
