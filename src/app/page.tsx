import { AppWorkSection } from "@/components/AppWorkSection";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { HeroSection } from "@/components/HeroSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { StatsSection } from "@/components/StatsSection";
import { Web3Section } from "@/components/Web3Section";
import { DemoSection } from "@/components/DemoSection";

export default function Home() {
  return (
    <main>
      <>
        <HeroBackdrop />
        <HeroSection />
      </>

      <HighlightsSection />

      <StatsSection />

      <AppWorkSection />

      <FeatureSection />

      <Web3Section />

      <DemoSection />
      
      <div className="h-[345px]" />
    </main>
  );
}
