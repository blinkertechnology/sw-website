"use client";

import Link from "next/link";
import { HeroBackdrop } from "./HeroBackdrop";
import { newsletterSchema } from "@/lib/schema/newsletterSchema";
import { toast } from "sonner";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";

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
  const [email, setEmail] = useState("");

  const { mutate, isPending } = useMutation({
    mutationKey: ["newsletter", email],
    mutationFn: async (_email: string) => {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: _email }),
      });

      if (res.status >= 400) {
        throw res;
      }

      const json = await res.json();
      console.log(json);
    },

    onSuccess: () => {
      toast.success("Successfully Subscribed to our newsletter successfully");
      setEmail("");
    },

    onError: (e: Response) => {
      if (e.status === 403) {
        toast.info("You are already subscribed to our newsletter");
      } else if (e.status === 400) {
        toast.error("Newsletter email must be a valid address");
      } else {
        toast.error("An error occurred, please try again later");
      }
    },
  });

  return (
    <footer className="relative py-5 xl:pb-0">
      <p className="py-5 text-center text-4xl font-semibold text-white/40">
        Available only on <span className="text-white">KaiOS</span>
      </p>

      <div className="m-4 grid items-start rounded-3xl bg-white/20 px-4 py-5 xl:mx-auto xl:mb-0 xl:max-w-6xl xl:grid-cols-2 xl:rounded-b-none xl:py-16">
        <div className="space-y-4 xl:space-y-8 xl:px-24">
          <p className="text-4xl font-semibold text-white">Sorted</p>

          <p className="text-white/40">
            This will be a demo text that will come below.this will be a demo
            text that will come below
          </p>

          <form
            className="flex rounded-full bg-white/20 p-1 focus-within:bg-white/10"
            onSubmit={(e) => {
              e.preventDefault();
              const { success } = newsletterSchema.safeParse({ email: email });
              if (!success) {
                toast.error("Newsletter email must be a valid address");
                return;
              }

              mutate(email);
            }}
          >
            <input
              className="w-full flex-1 bg-transparent px-2 text-white outline-none placeholder:text-white/50 xl:px-4"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email..."
            />

            <button
              disabled={isPending}
              className="flex flex-none items-center justify-center rounded-full bg-white px-8 py-2 font-medium text-black disabled:opacity-40"
            >
              {isPending ? (
                <Loader2Icon size={14} className="mr-2 animate-spin" />
              ) : null}
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 pt-10 xl:grid-cols-3 xl:gap-x-2 xl:pt-0">
          {Links.map(({ header, items }, i) => (
            <div key={i} className="space-y-2">
              <p className="text-2xl font-semibold text-white xl:text-base">
                {header}
              </p>

              <ul className="space-y-2 text-white/40 xl:space-y-1">
                {items.map((line) => (
                  <li key={line} className="hover:text-white">
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
