import { buttonVariants, Container, Logo } from "@/shared/common";
import Link from "next/link";
import {
  FOOTER_CONTACT,
  FOOTER_DATA,
  FOOTER_LOCATIONS,
  FOOTER_SOCIAL_MEDIA,
} from "../../Home/lib/constant";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <Container>
        {/* CTA Section */}
        <div className="py-8 md:py-12 lg:py-16">
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-muted text-sm md:text-base lg:text-lg">
              Have a Project To Discuss?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold lg:font-bold">
              We're ready!
            </h2>
            <Link href={"/contact-us"} className={buttonVariants()}>
              LET'S CONNECT!
            </Link>
          </div>
        </div>
        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-8 md:pb-10">
          <div className="col-span-1 space-y-3 md:space-y-4 lg:pr-6">
            <Logo variant="light" className="w-52 lg:w-auto" />
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nostrum obcaecati animi maxime saepe exercitationem
              delectus et velit eum, numquam sequi sint natus facere assumenda,
              vero quasi neque doloribus aliquid.
            </p>
          </div>
          <div className="col-span-1 space-y-3 md:space-y-4">
            <h4 className="text-lg md:text-xl lg:text-2xl">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_DATA.quick_links.map(({ path, title }) => (
                <li key={title}>
                  <Link
                    className={buttonVariants({
                      className: "!text-background !px-0 text-sm md:text-base",
                      variant: "link",
                    })}
                    href={path}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 space-y-3 md:space-y-4">
            <h4 className="text-lg md:text-xl lg:text-2xl">Services</h4>
            <ul className="space-y-2">
              {FOOTER_DATA.services.map(({ path, title }) => (
                <li key={title}>
                  <Link
                    className={buttonVariants({
                      className: "!text-background !px-0 text-sm md:text-base",
                      variant: "link",
                    })}
                    href={path}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl lg:text-2xl">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4">
              {FOOTER_CONTACT.map(({ data, icon: Icon }) => (
                <li className="flex items-center gap-2 md:gap-3" key={data}>
                  <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <Link
                    href={""}
                    className={buttonVariants({
                      variant: "link",
                      className: "!text-background text-sm md:text-base",
                    })}
                  >
                    {data}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-x-4 md:gap-x-6">
              {FOOTER_SOCIAL_MEDIA.map((data) => (
                <Link
                  key={data.name}
                  href={""}
                  className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
                  target="_blank"
                >
                  <data.icon className="text-secondary-foreground w-4 h-4 md:w-5 md:h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="border-t border-b space-y-3 md:space-y-4 py-6 md:py-8 lg:py-10">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold lg:font-bold">
            Locations
          </h3>
          <div className="flex flex-wrap gap-1 md:gap-2 text-sm md:text-base">
            {FOOTER_LOCATIONS.map((location, index) => (
              <span
                key={index}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {location}
                {index < FOOTER_LOCATIONS.length - 1 && (
                  <span className="mx-1 md:mx-2">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
        {/* CopyRight */}
        <div className="py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm md:text-base">
            © Appigma {year}. All rights reserved
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              className={buttonVariants({
                variant: "link",
                className: "!text-background text-sm md:text-base",
              })}
              href={"/terms-condition"}
            >
              Terms and Condition
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "!text-background text-sm md:text-base",
              })}
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
