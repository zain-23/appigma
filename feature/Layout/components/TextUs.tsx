import Link from "next/link";

export const TextUs = () => {
  return (
    <Link
      href={"/contact-us"}
      className="fixed lg:top-1/2 top-150 left-0 -translate-y-1/2 -translate-x-9 -rotate-90 origin-center bg-primary text-xl px-4 py-2 z-50 font-semibold rounded-b-3xl"
    >
      Text Us
    </Link>
  );
};
