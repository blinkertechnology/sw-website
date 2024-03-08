import { TopRightArrowHeadIcon } from "./icons/top-right-arrow-head";
import { XIcon } from "./icons/x-icon";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center desktop:pt-52 flex-col h-[100dvh]">
      <p className="text-white font-semibold text-[clamp(48px,10vw,104px)] leading-[1.1] text-center">
        Crypto for <br />
        <span className="relative">
          Everybody
          <span className="absolute top-0 left-full">
            <TopRightArrowHeadIcon className="size-6 fill-accent-red" />
          </span>
        </span>
      </p>

      <p className="px-6 max-w-3xl desktop:px-0 pt-8 desktop:pt-20  text-white/70 font-medium text-base desktop:text-2xl text-center">
        Enabling financial inclusion for 400M+ entry level devices in emerging
        markets and beyond.
      </p>

      <div className="flex items-center gap-4 lg:gap-10 pt-20">
        <a
          target="_blank"
          href="https://www.kaiostech.com/store/apps/?bundle_id=kaios.app.sortedwallet"
          className="py-4 flex items-center justify-center desktop:py-5 min-w-44 desktop:min-w-56 bg-white rounded-xl font-semibold text-base desktop:text-2xl desktop:leading-[36px] text-center"
        >
          Download
        </a>

        <a
          target="_blank"
          href="https://twitter.com/sortedwallet"
          className="flex py-4 gap-2 desktop:py-5 min-w-44 items-center justify-center desktop:min-w-56 border border-current rounded-xl font-semibold text-base desktop:text-2xl text-white desktop:leading-[36px] text-center"
        >
          Follow us on
          <XIcon className="stroke-white fill-white size-5" />
        </a>
      </div>
    </div>
  );
};
