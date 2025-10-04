import React, { FC } from "react";
import logo from "../../../public/assets/appigma.png";
import appigmaWhite from "../../../public/assets/appigma-white.png";
import Image from "next/image";

interface ImageProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: "dark" | "light";
}

export const Logo: FC<ImageProps> = ({
  width = 300,
  height = 300,
  className,
  variant = "dark",
}) => {
  if (variant === "light") {
    return (
      <Image
        src={appigmaWhite}
        width={width}
        height={height}
        alt="Appigma"
        className={className}
      />
    );
  }
  return (
    <Image
      src={logo}
      width={width}
      height={height}
      alt="Appigma"
      className={className}
    />
  );
};
