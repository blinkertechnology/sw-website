import { TopRightArrowHeadIcon } from "@/components/icons/top-right-arrow-head";

export const HighlightsSection: React.FC = () => {
  return (
    <div className="pt-20 px-[170px]">
      <div className="flex gap-[160px]">
        <div className="flex-[3]">
          <TopRightArrowHeadIcon className="size-12 fill-[#194AFE]" />

          <p className="pt-[26px] font-semibold text-[80px] leading-[80px] tracking-[-4%] text-[#474747]">
            Sorted is the world’s first assets wallet on KaiOS
          </p>
        </div>

        <div className="flex-[2]">
          <TopRightArrowHeadIcon className=" size-7 fill-[#194AFE]" />

          <p className="pt-[42px] font-semibold text-[36px] leading-[44px] tracking-[-4%] text-[#474747]">
            It lets you do everything a crypto wallet on a smartphone can do
          </p>
        </div>
      </div>

      <div className="flex gap-[107px] pt-20">
        <p className="flex-1 font-medium text-[24px] leading-[43px] tracking-[-4%] text-[#959595]">
          Provides crypto services to feature phone users in emerging markets,
          expanding{" "}
          <span className="text-[#194AFE]/60">access to digital assets.</span>
        </p>

        <p className="flex-1 font-medium text-[24px] leading-[43px] tracking-[-4%] text-[#959595]">
          Implements robust security measures to protect user funds and data,
          ensuring a safe & trustworthy service.
        </p>

        <p className="flex-1 font-medium text-[24px] leading-[43px] tracking-[-4%] text-[#959595]">
          Offers seamless storage, sending, and receiving of digital assets,
          enabling hassle-free transactions for users
        </p>
      </div>
    </div>
  );
};
