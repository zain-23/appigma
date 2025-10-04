"use client";
import { NAVBAR } from "@/feature/Layout/lib";
import { buttonVariants, Container, Logo } from "@/shared/common";
import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 5);
  });

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {NAVBAR.map((item) => {
                if (item.type === "button") {
                  return (
                    <Link
                      key={item.id}
                      href={item.path}
                      className={buttonVariants({
                        className: "h-14 !rounded-full px-8",
                      })}
                    >
                      {item.item}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    className="px-3 py-2 font-medium"
                  >
                    {item.item}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
