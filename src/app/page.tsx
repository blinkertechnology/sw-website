import { HeroBackdrop } from "@/components/HeroBackdrop";
import { HeroSection } from "@/components/HeroSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { StatsSection } from "@/components/StatsSection";

export default function Home() {
  return (
    <main>
      <HeroBackdrop />

      <HeroSection />

      <HighlightsSection />

      <StatsSection />
    </main>
  );
}
