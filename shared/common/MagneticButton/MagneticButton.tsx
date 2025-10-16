"use client";

import { cn } from "@/shared/lib";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  className,
  onClick,
}: MagneticButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;

    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distanceX = e.clientX - btnCenterX;
    const distanceY = e.clientY - btnCenterY;

    // Magnetic strength
    const strength = 0.4;
    const maxDistance = 100;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < maxDistance) {
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
};
