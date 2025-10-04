"use client";
import { cn } from "@/shared/lib";
import { FC } from "react";

interface DualTextProps {
  frontText: string;
  backText: string;
  className?: string;
}

export const WatermarkContent: FC<DualTextProps> = ({
  frontText,
  backText,
  className = "",
}) => {
  return (
    <div className={cn("relative", className)}>
      {/* Background watermark text */}
      <h2 className="text-[10rem] font-bold text-muted select-none pointer-events-none z-[-1] leading-[150px]">
        {backText}
      </h2>

      {/* Main heading text */}
      <h2 className="absolute top-6 left-2 z-10 text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
        {frontText}
      </h2>
    </div>
  );
};
