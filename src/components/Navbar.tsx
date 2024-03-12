"use client";
import { cn } from "@/lib/utils";
import { HamburgarIcon } from "./icons/hamburgar-menu";
import { LogoIcon } from "./icons/logo-icon";
import Link from "next/link";
import { useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

const Links = [
  { text: "Faq", href: "faq" },
  { text: "Resources", href: "resources" },
  { text: "Company", href: "company" },
  { text: "Careers", href: "careers" },
];

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="flex fixed w-full items-center h-[70px] px-6 desktop:px-[128px] bg-[#437AFF] z-50">
        <div className="flex flex-shrink-0 items-center mr-auto">
          <LogoIcon className="w-[140px] h-[32px]" />
        </div>

        <div className="lg:hidden" onClick={() => setSidebarOpen(true)}>
          <HamburgarIcon className="size-11 text-white -mr-1" />
        </div>

        <div className="hidden lg:flex hover:*:text-white items-center gap-8 *:font-medium text-gray-300">
          {Links.map((link, i) => (
            <Link key={link.href} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
      </nav>

      <aside
        className={cn(
          isSidebarOpen ? "shadow-black bg-black/20" : "translate-x-full",
          "inset-0 fixed z-50 p-3 shadow-xl transition-all duration-500",
          "lg:hidden"
        )}
      >
        <div className="relative h-full bg-white rounded-3xl">
          <div>
            <button
              key={Math.random()}
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="animate-[exit] duration-500 scale-[.1] fill-mode-forwards absolute right-0 top-0 p-5 text-[80px] leading-[1]"
            >
              <Cross1Icon className="size-10" />
            </button>
          </div>
          <div className="flex flex-col h-full -translate-y-5 justify-center m-auto w-fit gap-y-8">
            {Links.map((link) => (
              <Link
                href={link.href}
                key={link.text}
                className="text-4xl font-semibold"
                onClick={() => setSidebarOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};
