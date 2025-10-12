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
} from "@/shared/common";
import { cn } from "@/shared/lib";
import { Menu } from "lucide-react";
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
          "lg:hidden",
          !scroll && pathname === "/" && "text-background",
          !scroll && pathname.startsWith("/services") && "text-background"
        )}
      >
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {NAVBAR.map((item) => {
            if (item.type === "sub_menu" && item.subMenu) {
              return (
                <Accordion
                  key={item.id}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={item.id.toString()}>
                    <AccordionTrigger className="text-xl font-medium hover:text-primary">
                      {item.item}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-2 pl-4">
                        {item.subMenu.map((subItem) => (
                          <SheetTitle key={subItem.id} asChild>
                            <Link
                              href={subItem.path}
                              onClick={handleLinkClick}
                              className={cn(
                                "py-2 text-xl hover:text-primary transition-colors",
                                pathname === subItem.path && "text-primary"
                              )}
                            >
                              {subItem.item}
                            </Link>
                          </SheetTitle>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }
            return (
              <SheetTitle key={item.id} asChild>
                <Link
                  href={item.path}
                  onClick={handleLinkClick}
                  className={cn(
                    "py-2 text-xl font-medium hover:text-primary transition-colors",
                    pathname === item.path && "text-primary"
                  )}
                >
                  {item.item}
                </Link>
              </SheetTitle>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
