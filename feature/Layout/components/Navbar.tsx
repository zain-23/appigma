"use client";
import { NAVBAR } from "@/feature/Layout/lib";
import {
  buttonVariants,
  Container,
  Logo,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/common";
import { cn } from "@/shared/lib";
import { useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();
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
              <Logo
                variant={
                  scroll ||
                  (pathname !== "/" && !pathname.startsWith("/services"))
                    ? "dark"
                    : "light"
                }
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList
              className={cn(
                "gap-6",
                !scroll && pathname === "/" && "text-background",
                !scroll && pathname.startsWith("/services") && "text-background"
              )}
            >
              {NAVBAR.map((item) => {
                if (item.type === "sub_menu" && item.subMenu) {
                  return (
                    <NavigationMenuItem key={item.id}>
                      <NavigationMenuTrigger className="px-3 py-2 text-lg hover:text-primary transition-all duration-300 hover:font-semibold hover:tracking-widest">
                        {item.item}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="md:w-[400px] lg:w-[400px] lg:grid-cols-[.75fr_1fr] space-y-4">
                          {item.subMenu.map((nav) => (
                            <ListItem
                              key={nav.id}
                              href={nav.path}
                              title={nav.item}
                            >
                              How to install dependencies and structure your
                              app.
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={item.id}>
                    <Link
                      className="px-3 py-2 text-lg hover:text-primary transition-all duration-300 hover:font-semibold hover:tracking-widest"
                      href={item.path}
                    >
                      {item.item}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

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

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-base leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
