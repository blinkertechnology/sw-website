import { cn } from "@/lib/utils";

export const FeatureSection = () => {
  const featuresLen = 6;
  return (
    <div className="mt-24 xl:mt-64 px-4">
      <p className="text-4xl xl:text-6xl font-semibold text-center">
        Our <span className="text-accent-red">Features</span>
      </p>

      <div className="mx-auto mt-10 grid grid-cols-2 max-w-6xl xl:grid-cols-4 gap-4 xl:gap-8">
        {Array(featuresLen)
          .fill({ line: "On-ramp and off-ramp crypto using mobile airtime" })
          .map(({ line }, i) => (
            <div
              key={i}
              className="rounded-3xl p-4 bg-gray-200 hover:bg-accent-blue hover:text-white transition-colors space-y-12"
            >
              <p className="text-black/20 text-4xl">{i + 1}.</p>
              <p className="text-xl font-medium">
                On-ramp and off-ramp crypto using mobile airtime
              </p>
            </div>
          ))}

        <div
          className={cn(
            "px-6 flex justify-center text-center items-center min-h-20 border border-dashed border-secondary-foreground rounded-3xl text-2xl text-secondary-foreground font-medium",
            featuresLen % 2 == 0 ? "col-span-2 xl:col-span-1" : ""
          )}
        >
          More coming soon...
        </div>
      </div>
    </div>
  );
};
