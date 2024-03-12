import { HeroBackdrop } from "@/components/HeroBackdrop";

export const FaqHeader = () => {
  return (
    <div className="relative pt-16">
      <div className="space-y-10 text-balance py-10 xl:mx-auto xl:max-w-4xl xl:py-32">
        <h1 className="px-4 text-center text-4xl font-semibold text-white xl:text-6xl">
          Frequently asked <span>questions</span>
        </h1>

        <p className="px-4 text-center text-white">
          We have curated a comprehensive list of information and resources to
          assist you in leveraging the full potential of Sorted Wallet. Please
          explore these resources for valuable information and if you require
          further assistance please do not hesitate to reach out to our team.
        </p>
      </div>

      <HeroBackdrop className="inset-y-0 rounded-b-none desktop:rounded-b-none" />
    </div>
  );
};
