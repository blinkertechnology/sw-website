import { TopRightArrowHeadIcon } from "@/components/icons/top-right-arrow-head";
import { CheckmarkIcon } from "./icons/checkmark-icon";

export const HighlightsSection: React.FC = () => {
  return (
    <div className="pt-24 desktop:pt-20 px-7 desktop:px-20 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 desktop:grid-cols-3">
        <div className="desktop:col-span-2 desktop:pr-20">
          <TopRightArrowHeadIcon className="size-12 fill-accent-blue" />

          <p className="pt-7 font-semibold text-4xl desktop:text-7xl text-secondary-foreground">
            Sorted is the world&apos;s first digital assets wallet for emerging{" "}
            <span className="text-accent-red">markets</span>
          </p>
        </div>

        <div className="pt-4 desktop:pt-0">
          <TopRightArrowHeadIcon className="hidden desktop:inline-block size-7 fill-accent-blue" />

          <p className="desktop:pr-14 desktop:pt-11 font-semibold text-2xl desktop:text-4xl text-secondary-foreground">
            It lets you do everything a crypto wallet on a smartphone can do
          </p>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="flex flex-col lg:flex-row lg:gap-[108px] gap-4 desktop:justify-between pt-6">
        <p className="flex lg:block font-semibold text-base desktop:text-2xl text-muted-foreground">
          <span className="lg:hidden">
            <CheckmarkIcon className="size-3.5 pt-1 pr-2 box-content" />
          </span>

          <span>
            Provides crypto services to feature phone users in emerging markets,
            expanding{" "}
            <span className="text-accent-blue/60">
              access to digital assets.
            </span>
          </span>
        </p>

        <p className="flex lg:block font-semibold text-base desktop:text-2xl text-muted-foreground">
          <span className="lg:hidden">
            <CheckmarkIcon className="size-3.5 pt-1 pr-2 box-content" />
          </span>

          <span>
            Implements robust security measures{" "}
            <span className="text-accent-blue/60">to protect user funds</span>{" "}
            and data, ensuring a safe & trustworthy service.
          </span>
        </p>

        <p className="flex lg:block font-semibold text-base desktop:text-2xl text-muted-foreground">
          <span className="lg:hidden">
            <CheckmarkIcon className="size-3.5 pt-1 pr-2 box-content" />
          </span>

          <span>
            Offers seamless storage, sending, and receiving of digital assets,
            enabling{" "}
            <span className="text-accent-blue/60">
              hassle-free transactions
            </span>{" "}
            for users
          </span>
        </p>
      </div>
    </div>
  );
};
