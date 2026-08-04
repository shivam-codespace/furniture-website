import { Helmet } from "react-helmet-async";
import { StoryHero } from "@/features/our-story/sections/StoryHero";
import { LegacyTimeline } from "@/features/our-story/sections/LegacyTimeline";
import { ValuesGrid } from "@/features/our-story/sections/ValuesGrid";
import { WorkshopShowcase } from "@/features/our-story/sections/WorkshopShowcase";
import { FamilyTeam } from "@/features/our-story/sections/FamilyTeam";
import { StoryQuote } from "@/features/our-story/sections/StoryQuote";
import { StoryCta } from "@/features/our-story/sections/StoryCta";

export default function OurStory() {
  return (
    <>
      <Helmet>
        <title>Our Story | Sharma Furnitures</title>
      </Helmet>
      <StoryHero />
      <LegacyTimeline />
      <ValuesGrid />
      <WorkshopShowcase />
      <FamilyTeam />
      <StoryQuote />
      <StoryCta />
    </>
  );
}
