import { cn } from "@/shared/lib";
import { FC, HTMLAttributes } from "react";

export const SectionWrapper: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn("md:py-20 py-10", className)} {...props}>
      {children}
    </section>
  );
};
