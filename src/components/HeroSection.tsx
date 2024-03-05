export const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center pt-[215px] flex-col h-[100dvh]">
      <p className="text-white font-semibold text-[104px] leading-[116px] tracking-[-4%] text-center">
        Crypto for <br /> Everybody
      </p>

      <p className="pt-[74px] text-white/70 font-medium text-[22px] leading-[35px] text-center">
        Enabling financial inclusion for 400M+ feature phone users in <br />{" "}
        emerging markets and beyond.
      </p>

      <span className="space-x-8 pt-[88px]">
        <a className="inline-block py-5 min-w-56 bg-white rounded-xl font-semibold text-[24px] leading-[36px] text-center">
          Download
        </a>

        <a className="inline-block py-5 min-w-56 border border-current rounded-xl font-semibold text-[24px] text-white leading-[36px] text-center">
          Learn More
        </a>
      </span>
    </div>
  );
};
