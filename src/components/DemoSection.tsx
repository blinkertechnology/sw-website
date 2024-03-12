import { PlayFillIcon } from "./icons/play-fill-icon";

export const DemoSection = () => {
  return (
    <div className="my-24 xl:my-64">
      <p className="text-secondary-foreground font-semibold text-4xl xl:text-6xl text-center">
        Watch our Demo <span className="text-primary-foreground">Sorted</span>
      </p>

      <div className="mt-10 mx-4 xl:mx-auto xl:max-w-4xl xl:max-h-[512px] desktop:max-w-6xl desktop:max-h-[648px] bg-gray-200 flex justify-center items-center rounded-xl h-[56vw]">
        <PlayFillIcon className="p-2 size-6 rounded-full fill-white box-content bg-accent-blue" />
      </div>
    </div>
  );
};
