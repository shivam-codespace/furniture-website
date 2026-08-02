import { Helmet } from "react-helmet-async";
import { Hero } from "@/features/home/sections/Hero";
import { StatsBar } from "@/features/home/sections/StatsBar";
import { OurStory } from "@/features/home/sections/OurStory";
import { Collections } from "@/features/home/sections/Collections";
import { WhyChoose } from "@/features/home/sections/WhyChoose";
import { Process } from "@/features/home/sections/Process";
import { IdentityBanner } from "@/features/home/sections/IdentityBanner";
import { Gallery } from "@/features/home/sections/Gallery";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Vaanam Furnitures | Furniture Built on Trust</title>
      </Helmet>
      <Hero />
      <StatsBar />
      <OurStory />
      <Collections />
      <WhyChoose />
      <Process />
      <IdentityBanner />
      <Gallery />
    </>
  );
}
