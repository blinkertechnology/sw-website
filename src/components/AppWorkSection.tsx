import personUsingSW from "@/assets/person-using-sorted-wallet.png";
import { TopRightArrowHeadIcon } from "./icons/top-right-arrow-head";

export const AppWorkSection: React.FC = () => {
  return (
    <div className="pt-64 px-10 relative">
      <div className="font-semibold text-8xl text-center leading-[100%] tracking-[-0.05em] color-[#010101]">
        <p>
          how{" "}
          <span className="relative">
            sorted
            <span className="absolute top-0 left-full">
              <TopRightArrowHeadIcon className="size-6 fill-[#FF0444]" />
            </span>
          </span>{" "}
          as
        </p>
        <p>an app work</p>
      </div>

      <p className="pt-20 max-w-md mx-auto font-semibold text-2xl text-center leading-[120%] tracking-[-0.05em] color-[#010101]">
        Implements robust security measures to protect user funds and data.
      </p>

      <div className="grid grid-cols-5 h-[430px]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div
          style={{
            backgroundImage: `url(${personUsingSW.src})`,
          }}
          className="px-8 py-10 rounded-[40px] -mt-24"
        >
          <p className="bg-no-repeat bg-cover text-white font-semibold text-3xl leading-[120%] tracking-[-0.04em]">
            Provides crypto services to feature phone.
          </p>
        </div>
      </div>

      <div
        className="flex justify-center items-end absolute top-20 left-0 w-full h-[1200px]"
        style={{
          background: `linear-gradient(0.94deg, #FFFFFF 39.22%, rgba(255, 255, 255, 0) 112.16%)`,
        }}
      >
        <p
          id="coming-soon"
          className="font-semibold text-7xl leading-[120%] tracking-[-0.03em] color-[#010101]"
        >
          New Website <br />
          Coming{" "}
          <span className="relative">
            Soon
            <span className="absolute top-0 left-full">
              <TopRightArrowHeadIcon className="size-6 fill-[#FF0444]" />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};
