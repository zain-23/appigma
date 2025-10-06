import { cn } from "@/shared/lib/utils";
import { FC, HTMLAttributes } from "react";

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        "2xl:max-w-[1600px] xl:max-w-[1350px] max-w-7xl mx-auto px-4",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
