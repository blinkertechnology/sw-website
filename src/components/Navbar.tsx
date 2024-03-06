"use client";
import { cn } from "@/lib/utils";
import { HamburgarIcon } from "./icons/hamburgar-menu";
import { LogoIcon } from "./icons/logo-icon";
import Link from "next/link";
import { useState } from "react";

export const Navbar: React.FC = () => {
  const [pulse, setPulse] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          background:
            "linear-gradient(90.02deg, rgba(152, 152, 152, 0.28) 3.11%, rgba(190, 188, 188, 0.126) 98.58%)",
          boxShadow: "0px 1px 50px rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(17.5px)",
        }}
        className="flex bg-gray-800 items-center h-[70px] px-6 desktop:px-[128px]"
      >
        <div className="flex flex-shrink-0 items-center mr-auto">
          <LogoIcon className="w-[140px] h-[32px]" />
        </div>

        <div
          className={cn(
            pulse ? "before:animate-[ripple]" : "before:opacity-0",
            "relative before:bg-black/20 before:rounded-lg before:fill-mode-forwards before:absolute before:inset-0 before:-z-10 !repeat-1 before:duration-700",
            "lg:hidden"
          )}
          onClick={() => setPulse(true)}
          onAnimationEnd={() => {
            setPulse(false);
            setSidebarOpen(true);
          }}
        >
          <HamburgarIcon className="size-11 text-white" />
        </div>

        <div className="hidden lg:flex items-center gap-8 *:font-medium text-gray-300">
          <Link href="#coming-soon">About</Link>
          <Link href="#coming-soon">Resources</Link>
          <Link href="#coming-soon">Company</Link>
          <Link href="#coming-soon">Careers</Link>
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
              &times;
            </button>
          </div>
          <div className="flex flex-col h-full justify-center m-auto w-fit gap-y-8">
            {["About", "Resources", "Company", "Careers"].map((link) => (
              <Link
                href="#coming-soon"
                key={link}
                className="text-4xl font-semibold"
                onClick={() => setSidebarOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};
