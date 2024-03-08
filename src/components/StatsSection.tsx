import bg from "@/assets/stats.jpeg";

export const StatsSection: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="aspect-[9/16] md:aspect-[2] my-16 mx-3.5 desktop:mx-12 desktop:my-48 rounded-10 desktop:rounded-30 bg-no-repeat bg-cover bg-right-top lg:bg-bottom desktop:bg-right-top"
    >
      <p className="hidden md:block md:py-10 lg:py-14 font-semibold text-2xl text-center text-secondary-foreground/20">
        OUR NUMBERS
      </p>

      <div className="py-24 md:py-8 px-8 lg:py-4 flex flex-col md:flex-row gap-6 justify-around">
        <p className="text-center">
          <span className="font-bold text-5xl desktop:text-9xl lg:text-8xl text-white leading-[1] lg:tracking-wider">
            60,000+
          </span>
          <br />
          <span className="text-white/70 text-base lg:text-2xl desktop:text-4xl font-medium">
            Downloads since March 2023
          </span>
        </p>

        <p className="text-center">
          <span className="font-bold text-5xl lg:text-8xl desktop:text-9xl text-white leading-[1] lg:tracking-wider">
            400M+
          </span>
          <br />
          <span className="text-white/70 text-base lg:text-2xl desktop:text-4xl font-medium">
            Total Addressable Market
          </span>
        </p>
      </div>
    </div>
  );
};
