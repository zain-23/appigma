import Image from "next/image";
import { Button } from "../Button";
import { FC } from "react";
import { TPortfolio } from "@/feature/Home/types";
import { cn } from "@/shared/lib";

export const Portfolio: FC<TPortfolio & { index: number }> = ({
  title,
  tags,
  description,
  features,
  img,
  index,
}) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div
        className={cn(
          "col-span-1 space-y-6 pr-6",
          index % 2 === 0 ? "order-1" : "order-2"
        )}
      >
        <h3 className="text-5xl font-black">{title}</h3>
        <div className="flex items-center gap-x-3">
          {tags.map((item) => (
            <Button key={item} className="pointer-events-none">
              {item}
            </Button>
          ))}
        </div>
        <p className="leading-loose text-lg">{description}</p>
        <div className="flex flex-col items-start gap-y-5">
          {features.map((item) => (
            <Button
              key={item}
              variant={"secondary"}
              className="pointer-events-none"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "h-[600px] relative",
          index % 2 === 0 ? "order-2" : "order-1"
        )}
      >
        <Image src={img} alt={title} fill />
      </div>
    </div>
  );
};
