import React, { FC } from "react";
import logo from "../../../public/assets/appigma.png";
import Image from "next/image";

interface ImageProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: FC<ImageProps> = ({
  width = 300,
  height = 300,
  className,
}) => {
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
