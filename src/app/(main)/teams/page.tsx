import { HeroBackdrop } from "@/components/HeroBackdrop";
import mem1 from "@/assets/member-1-team.png";
import mem2 from "@/assets/member-2-team.png";
import mem3 from "@/assets/member-3-team.png";
import mem4 from "@/assets/member-4-team.png";
import mem5 from "@/assets/member-5-team.png";
import Image from "next/image";
import Link from "next/link";

const TEAM = [
  {
    image: mem1.src,
    fullname: "Stephen Brownie",
    designation: "Biz Dev & Strategy",
  },
  {
    image: mem2.src,
    fullname: "Shishir Gupta",
    designation: "Operations & Coms",
  },
  { image: mem3.src, fullname: "Anastasia N.", designation: "Growth" },
  { image: mem4.src, fullname: "Jure Zih", designation: "Product & tech" },
  { image: mem5.src, fullname: "Pete White", designation: "Technical Intern" },
];

export default function Teams() {
  return (
    <main className="pb-24 xl:pb-32">
      <div className="relative py-32">
        <h1 className="py-10 text-center font-semibold uppercase tracking-wider text-white/20 xl:text-xl desktop:text-2xl">
          Implementing Confedentiality
        </h1>

        <p className="mx-auto max-w-4xl text-balance text-center text-2xl font-semibold text-white xl:text-4xl desktop:text-6xl desktop:leading-tight">
          Making cryptocurrencies accessible to everyone across emerging markets
        </p>

        <HeroBackdrop />
      </div>

      <section className="mx-auto mt-24 max-w-6xl space-y-10 xl:mt-32">
        <p className="px-4 text-2xl font-semibold text-muted-foreground xl:w-3/4">
          Sorted Wallet is a subsidiary brand of{" "}
          <Link href="/" className="text-accent-blue underline">
            Sors Digital Assets
          </Link>
          , a pioneer in the virtual assets space since 2018.Sors is a licensed
          VASP (Virtual Assets Services Provider) regulated by the Central Bank
          of Ireland.
        </p>

        <p className="px-4 text-primary-foreground">
          The Sors team has built and invested in an ecosystem of companies that
          delivers products and solutions in the Web3 economy across Asia and
          Europe. In the beginning of 2023, the Sors team decided that millions
          of feature phone users also deserve to have access to digital assets.
          The idea was born and quickly executed within months. As of June 2023,
          the first KaiOS compatible crypto wallet has been downloaded over
          30,000 times.
        </p>
      </section>

      <section className="mx-auto mt-24 max-w-6xl space-y-10 xl:mt-32">
        <h2 className="text-center text-4xl font-semibold xl:text-6xl">
          Our Team
        </h2>

        <div className="grid grid-cols-2 items-center gap-4 px-4 xl:flex xl:justify-between">
          {TEAM.map(({ image, fullname, designation }, i) => (
            <div className="relative xl:even:mt-32">
              <span className="absolute pl-4 pt-4 text-4xl font-medium text-white/20">
                {i + 1}.
              </span>

              <div className="absolute bottom-0 p-3">
                <p className="text-lg xl:text-xl font-semibold text-white">{fullname}</p>
                <p className="text-sm xl:text-base text-white/40">{designation}</p>
              </div>

              <Image
                className="rounded-3xl"
                src={image}
                width={200}
                height={300}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
