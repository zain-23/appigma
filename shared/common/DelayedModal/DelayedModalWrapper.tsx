"use client";
import { useState, useEffect } from "react";
import { DelayedModal } from "./DelayedModal";

export const DelayedModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <DelayedModal isOpen={isOpen} onClose={handleClose} />;
};
