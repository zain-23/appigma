import Image from "next/image";
import { Button } from "../Button";
import { FC } from "react";
import { TPortfolio } from "@/feature/Home/types";

export const Portfolio: FC<TPortfolio> = ({
  title,
  tags,
  description,
  features,
  img,
}) => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="col-span-1 space-y-6 pr-6">
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
      <div className="h-[600px] relative">
        <Image src={img} alt={title} fill />
      </div>
    </div>
  );
};
