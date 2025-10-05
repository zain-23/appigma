"use client";

import { Button } from "@/shared/common";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  frontImg: StaticImageData;
  backImg: StaticImageData;
}

export const PortfolioCard = ({
  title,
  description,
  frontImg,
  backImg,
}: PortfolioCardProps) => {
  return (
    <div className="group perspective-1000">
      <motion.div
        className="relative w-full h-[70vh] cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full overflow-hidden shadow-lg">
            <Image
              src={frontImg}
              alt={`${title} - Back`}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
        </motion.div>
        {/* Back of the card */}
        <motion.div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={backImg}
            alt={title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </motion.div>
      </motion.div>
      <div className="p-4">
        <div className="space-y-4 p-4 before:content-[''] before:h-full before:w-[2px] before:bg-primary before:absolute before:left-0 before:top-0 relative">
          <h4 className="text-4xl font-semibold">{title}</h4>
          <p className="leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
