import { HeroBackdrop } from "@/components/HeroBackdrop";
import { HeroSection } from "@/components/HeroSection";
import { HighlightsSection } from "@/components/HighlightsSection";

export default function Home() {
  return (
    <main>
      <HeroBackdrop />

      <HeroSection />

      <HighlightsSection />
    </main>
  );
}
