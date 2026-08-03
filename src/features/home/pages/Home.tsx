import { Helmet } from "react-helmet-async";
import { Hero } from "@/features/home/sections/Hero";
import { CategoryShowcase } from "@/features/home/sections/CategoryShowcase";
import { SmallCategoryGrid } from "@/features/home/sections/SmallCategoryGrid";
import { StatsBar } from "@/features/home/sections/StatsBar";
import { Process } from "@/features/home/sections/Process";
import { IdentityBanner } from "@/features/home/sections/IdentityBanner";
import { NeedHelpBanner } from "@/features/home/sections/NeedHelpBanner";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vaanam Furnitures | Furniture Built on Trust</title>
      </Helmet>
      <Hero />
      <CategoryShowcase />
      <SmallCategoryGrid />
      <StatsBar />
      <Process />
      <IdentityBanner />
      <NeedHelpBanner />
    </>
  );
}
