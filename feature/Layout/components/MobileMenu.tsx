"use client";
import { NAVBAR } from "@/feature/Layout/lib";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  Logo,
} from "@/shared/common";
import { cn } from "@/shared/lib";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  scroll: boolean;
  pathname: string;
}

export const MobileMenu = ({ scroll, pathname }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "lg:hidden p-2 rounded-md hover:bg-accent/50 transition-colors",
          !scroll &&
            pathname === "/" &&
            "text-background hover:bg-background/20",
          !scroll &&
            pathname.startsWith("/services") &&
            "text-background hover:bg-background/20"
        )}
      >
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[400px] p-0">
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between px-4 py-6 border-b border-border/50">
          <Logo width={80} height={40} className="h-8 w-auto" />
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col p-2 space-y-2">
            {NAVBAR.map((item) => {
              if (item.type === "sub_menu" && item.subMenu) {
                return (
                  <Accordion
                    key={item.id}
                    type="single"
                    collapsible
                    className="w-full"
                  >
                    <AccordionItem
                      value={item.id.toString()}
                      className="border-none"
                    >
                      <AccordionTrigger className="text-lg font-semibold hover:text-primary py-4 px-3 rounded-lg hover:bg-accent/50 transition-all">
                        {item.item}
                      </AccordionTrigger>
                      <AccordionContent className="pb-2">
                        <div className="flex flex-col space-y-1 pl-3">
                          {item.subMenu.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.path}
                              onClick={handleLinkClick}
                              className={cn(
                                "py-3 px-3 hover:text-primary transition-colors rounded-lg hover:bg-accent/30",
                                pathname === subItem.path &&
                                  "text-primary bg-primary/10 font-medium"
                              )}
                            >
                              {subItem.item}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={handleLinkClick}
                  className={cn(
                    "py-4 px-3 text-lg font-semibold hover:text-primary transition-colors rounded-lg hover:bg-accent/50",
                    pathname === item.path && "text-primary bg-primary/10"
                  )}
                >
                  {item.item}
                </Link>
              );
            })}
            <Link
              href={"/contact-us"}
              className={cn(
                "py-4 px-3 text-lg font-semibold hover:text-primary transition-colors rounded-lg hover:bg-accent/50",
                pathname === "/contact-us" && "text-primary bg-primary/10"
              )}
            >
              Contact us
            </Link>
          </nav>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border/50">
          <div className="text-sm text-muted-foreground text-center">
            © 2024 Appigma. All rights reserved.
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
