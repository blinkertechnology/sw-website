import kaiosPhones from "@/assets/phones.jpeg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const Web3Section = () => {
  return (
    <div className="p-4 xl:p-8 mx-4 xl:mx-auto mt-24 xl:mt-64 max-w-6xl grid grid-cols-2 xl:grid-cols-6 gap-4 xl:gap-8 border-2 border-secondary-foreground border-dashed rounded-3xl">
      <p className="py-8 col-span-2 xl:col-span-3 xl:row-start-2 text-center text-secondary-foreground text-4xl xl:text-6xl font-semibold">
        Bridging the financial divide with{" "}
        <span className="text-primary-foreground">sorted</span>
      </p>

      {/* TODO: add bg-secondary:#f8f8f8 */}
      <div className="col-span-2 xl:col-span-4 bg-[#f8f8f8] rounded-3xl overflow-hidden">
        <div className="p-4 pb-0 space-y-4">
          <p className="text-2xl font-medium">KaiOS Feature Phones</p>

          <ul className="pl-6 xl:grid xl:grid-cols-2 list-disc text-muted-foreground font-medium">
            <li>#1 operating system for feature smart phones</li>
            <li>#2 mobile OS in India</li>
            <li>#3 mobile OS worldwide 400M+ devices</li>
            <li>#4 bn market</li>
          </ul>
        </div>

        <Image
          src={kaiosPhones}
          className="w-full aspect-[3] xl:aspect-[3.5] object-cover object-[bottom]"
          alt=""
        />
      </div>

      <div className="xl:col-span-2 px-2 py-4 xl:p-4 space-y-2 xl:flex xl:flex-col bg-[#f8f8f8] rounded-3xl">
        <p className="text-2xl font-medium">Web3</p>
        <p className="text-muted-foreground flex-1">
          Access financial services without reliance on traditional banks.
        </p>

        <button className="xl:mt-auto p-2 w-full flex items-center gap-2 justify-center rounded-lg bg-gray-200 hover:bg-accent-blue hover:text-white ">
          Read More <ArrowRightIcon />
        </button>
      </div>

      <div className="xl:col-span-3 px-2 py-4 xl:p-4 space-y-2 xl:flex xl:flex-col bg-[#f8f8f8] rounded-3xl">
        <p className="text-2xl font-medium">DeFi</p>
        <p className="text-muted-foreground flex-1">
          Access financial services without reliance on traditional banks.
        </p>

        <button className="p-2 w-full flex items-center gap-2 justify-center rounded-lg bg-gray-200 hover:bg-accent-blue hover:text-white ">
          Read More <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};
