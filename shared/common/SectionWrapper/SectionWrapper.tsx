import { cn } from "@/shared/lib";
import { FC, HTMLAttributes } from "react";

export const SectionWrapper: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return <section className={cn("py-20", className)}>{children}</section>;
};
