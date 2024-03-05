import bg from "@/assets/stats.jpeg";

export const StatsSection: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="aspect-[2] mx-11 mt-[198px] rounded-[120px] bg-no-repeat bg-cover"
    >
      <p className="pt-[136px] font-semibold text-[22px] text-center tracking-[31%] text-[rgba(228,228,228,0.28)]">
        OUR NUMBERS
      </p>

      <div className="max-w-[1400px] mx-auto flex justify-between pt-[84px]">
        <p>
          <span className="font-bold text-[118px] text-white leading-[104px] tracking-[-4%] ">
            60,000+
          </span>
          <br />
          <span className="text-white/70 text-[34px] leading-[60px] font-medium">
            Downloads since March 2023
          </span>
        </p>

        <p>
          <span className="font-bold text-[118px] text-white leading-[104px] tracking-[-4%] ">
            64
          </span>
          <br />
          <span className="text-white/70 text-[34px] leading-[60px] font-medium">
            Countries
          </span>
        </p>

        <p>
          <span className="font-bold text-[118px] text-white leading-[104px] tracking-[-4%] ">
            400M+
          </span>
          <br />
          <span className="text-white/70 text-[34px] leading-[60px] font-medium">
            Total Addressable Market
          </span>
        </p>
      </div>
    </div>
  );
};
