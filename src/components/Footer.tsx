import Link from "next/link";
import { HeroBackdrop } from "./HeroBackdrop";

const Links = [
  {
    header: "Product",
    items: ["About Self", "How it works", "Why Self?", "Watch Demo"],
  },
  {
    header: "Company",
    items: ["Our Team", "How we operate", "Culture at Self", "Careers"],
  },
  {
    header: "Follow US",
    items: ["Linkedin", "Twitter", "Youtube", "Instagram"],
  },
  {
    header: "Our Policy",
    items: ["Terms & Conditions", "Privacy Policy", "Cookies Policy"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative py-5 xl:pb-0">
      <p className="py-5 text-4xl text-white/40 font-semibold text-center">
        Available only on <span className="text-white">KaiOS</span>
      </p>

      <div className="m-4 px-4 py-5 xl:py-16 xl:mx-auto xl:mb-0 xl:max-w-6xl bg-white/20 rounded-3xl xl:rounded-b-none grid xl:grid-cols-2 items-start">
        <div className="space-y-4 xl:space-y-8 xl:px-24">
          <p className="text-4xl font-semibold text-white">Sorted</p>

          <p className="text-white/40">
            This will be a demo text that will come below.this will be a demo
            text that will come below
          </p>

          <div className="p-1 flex bg-white/20 rounded-full focus-within:bg-white/10">
            <input
              className="px-2 flex-1 w-full outline-none bg-transparent text-white placeholder:text-white/50"
              type="email"
              placeholder="Type your email..."
            />

            <button className="flex-none flex justify-center items-center bg-white text-black font-medium px-8 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="pt-10 xl:pt-0 grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 xl:gap-x-2">
          {Links.map(({ header, items }, i) => (
            <div key={i} className="space-y-2">
              <p className="font-semibold text-2xl xl:text-base text-white">
                {header}
              </p>

              <ul className="text-white/40 space-y-2 xl:space-y-1">
                {items.map((line) => (
                  <li key={line}>
                    <Link href="#">{line}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <HeroBackdrop className="h-full rounded-none desktop:rounded-none" />
    </footer>
  );
};
