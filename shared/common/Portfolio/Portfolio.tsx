import Image from "next/image";
import { Button, buttonVariants } from "../Button";
import { FC } from "react";
import { TPortfolio } from "@/feature/Home/types";
import { cn } from "@/shared/lib";
import Link from "next/link";

export const Portfolio: FC<TPortfolio & { index: number }> = ({
  title,
  tags,
  description,
  features,
  img,
  index,
  slug,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
      <div
        className={cn(
          "col-span-1 space-y-4 md:space-y-6 lg:space-y-10",
          index % 2 === 0 ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"
        )}
      >
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h3>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          {tags.map((item) => (
            <Button
              key={item}
              className="pointer-events-none text-sm md:text-base"
            >
              {item}
            </Button>
          ))}
        </div>
        <p className="leading-relaxed md:leading-loose text-base md:text-lg">
          {description}
        </p>
        <div className="flex flex-col items-start gap-y-3 md:gap-y-4 lg:gap-y-5">
          {features.map((item) => (
            <Button
              key={item}
              variant={"secondary"}
              className="pointer-events-none text-sm md:text-base"
            >
              {item}
            </Button>
          ))}
        </div>
        <Link
          href={`/case-studies/${slug}`}
          className={buttonVariants({
            variant: "link",
            className: "text-lg md:!text-xl lg:!text-2xl",
          })}
        >
          VIEW CASE STUDY
        </Link>
      </div>
      <div
        className={cn(
          "h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] relative rounded-xl overflow-hidden",
          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
        )}
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="object-cover"
        />
      </div>
    </div>
  );
};
