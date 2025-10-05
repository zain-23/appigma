import { NAVBAR } from "@/feature/Layout/lib";
import { buttonVariants, Container, Logo } from "@/shared/common";
import { cn } from "@/shared/lib";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-background shadow-sm"
      )}
    >
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo variant={"dark"} />
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
                        className: "h-14 !rounded-full px-8 !text-lg",
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
                    className="px-3 py-2 text-lg hover:text-primary transition-all duration-300 hover:font-semibold hover:tracking-widest"
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
