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
          "text-[10rem] font-bold text-muted select-none pointer-events-none z-[-1] leading-[150px]",
          alignmentClasses
        )}
      >
        {backText}
      </h2>

      {/* Main heading text */}
      <h2
        className={cn(
          "absolute top-6 z-10 text-3xl md:text-4xl lg:text-6xl font-black leading-tight",
          align === "center"
            ? "left-1/2 -translate-x-1/2"
            : align === "end"
            ? "right-2"
            : "left-2"
        )}
      >
        {frontText}
      </h2>
    </div>
  );
};
