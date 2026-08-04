import { Helmet } from "react-helmet-async";
import { ValuesHero } from "@/features/why-sharma/sections/ValuesHero";
import { TransparencyPromise } from "@/features/why-sharma/sections/TransparencyPromise";
import { BetterExperience } from "@/features/why-sharma/sections/BetterExperience";
import { JourneyStats } from "@/features/why-sharma/sections/JourneyStats";
import { ComparisonSection } from "@/features/why-sharma/sections/ComparisonSection";
import { PromiseBanner } from "@/features/why-sharma/sections/PromiseBanner";

export default function WhySharma() {
  return (
    <>
      <Helmet>
        <title>Why Sharma | Sharma Furnitures</title>
      </Helmet>
      <ValuesHero />
      <TransparencyPromise />
      <BetterExperience />
      <JourneyStats />
      <ComparisonSection />
      <PromiseBanner />
    </>
  );
}
