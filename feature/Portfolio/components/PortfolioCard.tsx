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
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] cursor-pointer"
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
          <div className="relative w-full h-full overflow-hidden shadow-lg rounded-lg">
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
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image
              src={backImg}
              alt={title}
              fill
              className="object-cover transition-transform duration-300"
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="p-2 md:p-4">
        <div className="space-y-2 md:space-y-3 lg:space-y-4 p-3 md:p-4 before:content-[''] before:h-full before:w-[2px] before:bg-primary before:absolute before:left-0 before:top-0 relative">
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            {title}
          </h4>
          <p className="leading-relaxed text-sm md:text-base lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
