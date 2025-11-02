import { StaticImageData } from "next/image";

export type TPortfolio = {
  title: string;
  tags: string[];
  description: string;
  features: string[];
  slug: string;
  img: StaticImageData | string;
};
