"use client";
import { NAVBAR } from "@/feature/Layout/lib";
import { buttonVariants, Container, Logo } from "@/shared/common";
import { cn } from "@/shared/lib";
import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 5) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scroll && "bg-background shadow"
      )}
    >
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo variant={scroll ? "dark" : "light"} />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:block">
            <div
              className={cn(
                "flex items-center space-x-8",
                !scroll && "text-background"
              )}
            >
              {NAVBAR.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    className="px-3 py-2 text-lg hover:text-primary transition-all duration-300 hover:font-semibold hover:tracking-widest"
                  >
                    {item.item}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href={"/contact-us"}
            className={buttonVariants({
              className: "h-12 !rounded-full px-8 !text-lg",
            })}
          >
            Contact us
          </Link>
        </div>
      </Container>
    </nav>
  );
};
