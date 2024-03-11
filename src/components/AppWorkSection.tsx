import personUsingSW from "@/assets/person-using-sorted-wallet.png";
import kaiosPhone from "@/assets/sorted-start-page-kaios-phone.png";
import happyPerson from "@/assets/happy-person-looking-up.png";
import { TopRightArrowHeadIcon } from "./icons/top-right-arrow-head";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { PlayFillIcon } from "./icons/play-fill-icon";

export const AppWorkSection: React.FC = () => {
  return (
    <div className="pt-64 xl:px-6 desktop:px-10 relative">
      <div className="font-semibold text-5xl desktop:text-8xl text-center leading-[1] text-primary-foreground">
        <p>
          How{" "}
          <span className="relative">
            sorted
            <span className="absolute top-0 left-full">
              <TopRightArrowHeadIcon className="size-6 fill-accent-red" />
            </span>
          </span>{" "}
        </p>
        <p>works</p>
      </div>

      <p className="text-left pt-6 desktop:pt-20 max-w-lg mx-auto font-semibold text-2xl desktop:text-center text-primary-foreground">
        Implements robust security measures to protect user funds and data.
      </p>

      <div className="hidden xl:grid grid-cols-5 h-[430px] gap-x-4 desktop:gap-x-8">
        {/* card 1 */}
        <div className="bg-accent-blue/[0.05] rounded-3xl mt-10 desktop:-mt-24 flex flex-col justify-between">
          <div className="space-y-2 p-4">
            <p className="text-6xl text-accent-blue/20">1.</p>
            <p className="text-2xl text-primary-foreground font-semibold">
              Register for Sorted Wallet
            </p>
            <p className="text-muted-foreground font-medium">
              Provides crypto services to feature phone users in emerging
              markets
            </p>
            <button className="text-white bg-black flex items-center justify-center px-4 py-2 rounded-xl gap-4">
              Sign in <ArrowRightIcon />
            </button>
          </div>

          <Image alt="" src={kaiosPhone} />
        </div>

        {/* card 2 */}
        <div className="border relative self-end">
          <Image alt="" src={happyPerson} className="w-full rounded-3xl" />

          <div className="absolute inset-0 z-10 p-4 flex flex-col justify-between">
            <p className="text-6xl text-white/20">2.</p>
            <p className="text-2xl desktop:text-4xl text-white font-medium">
              Seamlessly store, send, and receive digital assets
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="grid grid-rows-2">
          <div className="place-self-center bg-accent-blue/[0.05] p-2 rounded-2xl space-y-2">
            <button className="px-4 py-1 w-full font-medium bg-black rounded-lg text-white">
              Try it now
            </button>

            <p className="text-center">available on kaiOS</p>
          </div>

          <div className="bg-accent-blue/[0.05] rounded-3xl p-4 text-xl desktop:text-2xl flex items-center text-primary-foreground font-semibold">
            Provides crypto services to feature phone users in emerging markets
          </div>
        </div>

        {/* card 4 */}
        <div className="bg-black/5 p-4 rounded-3xl self-end space-y-24">
          <p className="text-6xl text-black/20">3.</p>

          <p className="xl:text-2xl desktop:text-3xl font-semibold text-primary-foreground">
            Manage your wallets and explore all features
          </p>
        </div>

        {/* card 5 */}
        <div
          style={{
            backgroundImage: `url(${personUsingSW.src})`,
          }}
          className="flex flex-col justify-between p-4 rounded-3xl mt-10 desktop:-mt-24"
        >
          <p className="bg-no-repeat bg-cover text-white font-semibold text-2xl desktop:text-3xl">
            Provides crypto services to feature phone.
          </p>

          <div className="flex items-center gap-2 desktop:gap-4 bg-black/50 -mx-2 desktop:-mx-0 p-2 desktop:p-4 rounded-lg desktop:rounded-2xl">
            <PlayFillIcon className="flex-none box-content p-2 size-4 fill-black bg-white rounded-full" />
            <p className="text-sm desktop:text-base text-white font-semibold">Watch how it works.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
