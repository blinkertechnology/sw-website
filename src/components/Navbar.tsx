"use client";
import { cn } from "@/lib/utils";
import { HamburgarIcon } from "./icons/hamburgar-menu";
import { LogoIcon } from "./icons/logo-icon";
import Link from "next/link";
import { useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

const Links = [
  { text: "Teams", href: "teams" },
  { text: "Contact", href: "contact" },
  { text: "Faq", href: "faq" },
];

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-50 flex h-[70px] w-full items-center bg-[#437AFF] px-6 desktop:px-[128px]">
        <div className="mr-auto flex flex-shrink-0 items-center">
          <LogoIcon className="h-[32px] w-[140px]" />
        </div>

        <div className="lg:hidden" onClick={() => setSidebarOpen(true)}>
          <HamburgarIcon className="-mr-1 size-11 text-white" />
        </div>

        <div className="hidden items-center gap-8 text-gray-300 *:font-medium hover:*:text-white lg:flex">
          {Links.map((link, i) => (
            <Link key={link.href} href={link.href}>
              {link.text}
            </Link>
          ))}
        </div>
      </nav>

      <aside
        className={cn(
          isSidebarOpen ? "bg-black/20 shadow-black" : "translate-x-full",
          "fixed inset-0 z-50 p-3 shadow-xl transition-all duration-500",
          "lg:hidden",
        )}
      >
        <div className="relative h-full rounded-3xl bg-white">
          <div>
            <button
              key={Math.random()}
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="absolute right-0 top-0 scale-[.1] animate-[exit] p-5 text-[80px] leading-[1] duration-500 fill-mode-forwards"
            >
              <Cross1Icon className="size-10" />
            </button>
          </div>
          <div className="m-auto flex h-full w-fit -translate-y-5 flex-col justify-center gap-y-8">
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
