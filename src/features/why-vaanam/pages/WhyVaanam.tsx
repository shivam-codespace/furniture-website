import { Helmet } from "react-helmet-async";
import { ValuesHero } from "@/features/why-vaanam/sections/ValuesHero";
import { TransparencyPromise } from "@/features/why-vaanam/sections/TransparencyPromise";
import { BetterExperience } from "@/features/why-vaanam/sections/BetterExperience";
import { JourneyStats } from "@/features/why-vaanam/sections/JourneyStats";
import { ComparisonSection } from "@/features/why-vaanam/sections/ComparisonSection";
import { PromiseBanner } from "@/features/why-vaanam/sections/PromiseBanner";

export default function WhyVaanam() {
  return (
    <>
      <Helmet>
        <title>Why Vaanam | Vaanam Furnitures</title>
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
