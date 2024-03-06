import bg from "@/assets/stats.jpeg";

export const StatsSection: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="aspect-auto desktop:aspect-[2] mt-16 mx-3.5 desktop:mx-11 desktop:mt-[198px] rounded-[40px] desktop:rounded-[120px] bg-no-repeat bg-cover bg-right-top lg:bg-bottom desktop:bg-right-top"
    >
      <p className="hidden desktop:block pt-[136px] font-semibold text-[22px] text-center tracking-[31%] text-[rgba(228,228,228,0.28)]">
        OUR NUMBERS
      </p>

      <div className="pb-64 pt-14 px-8 lg:pb-80 desktop:px-0 desktop:pt-[84px] desktop:pb-0 lg:max-w-4xl desktop:max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between">
        <p>
          <span className="font-bold text-[clamp(54px,100%,118px)] text-white leading-[1] desktop:leading-[104px] tracking-[-4%]">
            60,000+
          </span>
          <br />
          <span className="text-white/70 text-base desktop:text-[34px] desktop:leading-[60px] font-medium">
            Downloads since March 2023
          </span>
        </p>

        <p>
          <span className="font-bold text-[clamp(54px,100%,118px)] text-white leading-[1] desktop:leading-[104px] tracking-[-4%] ">
            64
          </span>
          <br />
          <span className="text-white/70 text-base desktop:text-[34px] desktop:leading-[60px] font-medium">
            Countries
          </span>
        </p>

        <p>
          <span className="font-bold text-[clamp(54px,100%,118px)] text-white leading-[1] desktop:leading-[104px] tracking-[-4%] ">
            400M+
          </span>
          <br />
          <span className="text-white/70 text-base desktop:text-[34px] desktop:leading-[60px] font-medium">
            Total Addressable Market
          </span>
        </p>
      </div>
    </div>
  );
};
