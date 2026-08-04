import { Helmet } from "react-helmet-async";
import { SupportHero } from "@/features/support/sections/SupportHero";
import { HelpCategories } from "@/features/support/sections/HelpCategories";
import { FaqAndOrder } from "@/features/support/sections/FaqAndOrder";
import { StillNeedHelp } from "@/features/support/sections/StillNeedHelp";
import { ContactInfo } from "@/features/support/sections/ContactInfo";
import { TrustStrip } from "@/features/support/sections/TrustStrip";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support | Sharma Furnitures</title>
      </Helmet>
      <SupportHero />
      <HelpCategories />
      <FaqAndOrder />
      <StillNeedHelp />
      <ContactInfo />
      <TrustStrip />
    </>
  );
}
