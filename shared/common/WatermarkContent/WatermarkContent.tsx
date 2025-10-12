"use client";
import { cn } from "@/shared/lib";
import { FC } from "react";

interface DualTextProps {
  frontText: string;
  backText: string;
  className?: string;
  align?: "center" | "start" | "end";
}

export const WatermarkContent: FC<DualTextProps> = ({
  frontText,
  backText,
  className = "",
  align = "start",
}) => {
  const alignmentClasses = {
    center: "items-center text-center",
    start: "items-start text-left",
    end: "items-end text-right",
  }[align];

  return (
    <div className={cn("relative flex flex-col", alignmentClasses, className)}>
      {/* Background watermark text */}
      <h2
        className={cn(
          "text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-muted select-none pointer-events-none z-[-1] leading-[60px] sm:leading-[90px] md:leading-[120px] lg:leading-[150px]",
          alignmentClasses
        )}
      >
        {backText}
      </h2>

      {/* Main heading text */}
      <h2
        className={cn(
          "absolute top-3 sm:top-4 md:top-5 lg:top-6 z-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight",
          align === "center"
            ? "left-1/2 -translate-x-1/2"
            : align === "end"
            ? "right-1 sm:right-2"
            : "left-1 sm:left-2"
        )}
      >
        {frontText}
      </h2>
    </div>
  );
};
