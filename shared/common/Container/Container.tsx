import { cn } from "@/shared/lib/utils";
import { FC, HTMLAttributes } from "react";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cn("max-w-[1600px] mx-auto px-2", className)} {...rest}>
      {children}
    </div>
  );
};
