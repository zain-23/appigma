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
        <div className="py-16">
          <div className="text-center space-y-4">
            <p className="text-muted text-lg">Have a Project To Discuss?</p>
            <h2 className="text-6xl font-bold">We're ready!</h2>
            <Link
              href={"/contact-ud"}
              className={buttonVariants({ variant: "secondary" })}
            >
              LET'S CONNECT!
            </Link>
          </div>
        </div>
        {/* Links */}
        <div className="grid grid-cols-4 gap-4 pb-10">
          <div className="col-span-1 space-y-4 pr-6">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit nostrum obcaecati animi maxime saepe exercitationem
              delectus et velit eum, numquam sequi sint natus facere assumenda,
              vero quasi neque doloribus aliquid.
            </p>
          </div>
          <div className="col-span-1 space-y-4">
            <h4 className="text-2xl">Quick Links</h4>
            <ul>
              {FOOTER_DATA.quick_links.map(({ path, title }) => (
                <li key={title}>
                  <Link
                    className={buttonVariants({
                      className: "!text-background",
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
          <div className="col-span-1 space-y-4">
            <h4 className="text-2xl">Servcies</h4>
            <ul>
              {FOOTER_DATA.services.map(({ path, title }) => (
                <li key={title}>
                  <Link
                    className={buttonVariants({
                      className: "!text-background",
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
          <div className="col-span-1 space-y-6">
            <h4 className="text-2xl">Contact Us</h4>
            <ul className="space-y-4 px-2">
              {FOOTER_CONTACT.map(({ data, icon: Icon }) => (
                <li className="flex items-center" key={data}>
                  <Icon />
                  <Link
                    href={""}
                    className={buttonVariants({
                      variant: "link",
                      className: "!text-background",
                    })}
                  >
                    {data}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-x-6 px-2">
              {FOOTER_SOCIAL_MEDIA.map((data) => (
                <Link
                  key={data.name}
                  href={""}
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center"
                  target="_blank"
                >
                  <data.icon className="text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="border-t border-b space-y-4 py-10">
          <h3 className="text-xl font-bold">Locations</h3>
          <div className="flex flex-wrap gap-2">
            {FOOTER_LOCATIONS.map((location, index) => (
              <span
                key={index}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {location}
                {index < FOOTER_LOCATIONS.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
        {/* CopyRight */}
        <div className="py-6 flex justify-between items-center">
          <p>© TekRevol {year}. All rights reserved</p>
          <div className="flex items-center">
            <Link
              className={buttonVariants({
                variant: "link",
                className: "!text-background",
              })}
              href={"/terms-condition"}
            >
              Terms and Conditions
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "!text-background",
              })}
              href={"/privacy-policy"}
            >
              Privacy Policy
            </Link>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "!text-background",
              })}
              href={"/contact-ud"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
