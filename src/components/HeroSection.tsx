import { TopRightArrowHeadIcon } from "./icons/top-right-arrow-head";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center pt-[122px] desktop:pt-[215px] flex-col h-[100dvh]">
      <p className="text-white font-semibold text-[clamp(48px,10vw,104px)] leading-[1.11] tracking-[-4%] text-center">
        Crypto for <br />
        <span className="relative">
          Everybody
          <span className="absolute top-0 left-full">
            <TopRightArrowHeadIcon className="size-6 fill-[#FF0444]" />
          </span>
        </span>
      </p>

      <p className="px-6 max-w-xl desktop:px-0 pt-8 desktop:pt-[74px] text-white/70 font-medium text-base desktop:text-2xl text-center">
        Enabling financial inclusion for 400M+ feature phone users in emerging
        markets.Enabling financial inclusion for 400M+ feature phone users in
        emerging markets.
      </p>

      <span className="space-x-8 pt-[88px]">
        <a
          href="https://www.kaiostech.com/store/apps/?bundle_id=kaios.app.sortedwallet"
          className="inline-block py-4 desktop:py-5 min-w-36 desktop:min-w-56 bg-white rounded-xl font-semibold text-base desktop:text-2xl desktop:leading-[36px] text-center"
        >
          Download
        </a>

        <a className="inline-block py-4 desktop:py-5 min-w-36 desktop:min-w-56 border border-current rounded-xl font-semibold text-base desktop:text-2xl text-white desktop:leading-[36px] text-center">
          Learn More
        </a>
      </span>
    </div>
  );
};
