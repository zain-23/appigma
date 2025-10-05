import { cn } from "@/shared/lib";
import React, { FC } from "react";

export const HoverCard: FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "col-span-1 group h-60 border-r border-b relative last:border-r-0 [&:nth-child(6n)]:border-r-0 [&:nth-last-child(-n+6)]:border-b-0",
        className
      )}
    >
      {children}
      {/* Top */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />
      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />
      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />
      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
    </div>
  );
};
