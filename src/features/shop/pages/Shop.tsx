import { Helmet } from "react-helmet-async";
import { Sidebar } from "@/features/shop/sections/Sidebar";
import { ShopHero } from "@/features/shop/sections/ShopHero";
import { CategoryPills } from "@/features/shop/sections/CategoryPills";
import { ProductGrid } from "@/features/shop/sections/ProductGrid";
import { TrustBadges } from "@/features/shop/sections/TrustBadges";
import { BrowseBySpace } from "@/features/shop/sections/BrowseBySpace";
import { TrustBar } from "@/features/shop/sections/TrustBar";

export default function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop Beds & Furniture | Sharma Furnitures</title>
      </Helmet>

      <div className="container-luxury flex flex-col gap-8 py-8">
        <ShopHero />

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="hidden lg:block lg:w-[260px] lg:shrink-0">
            <Sidebar />
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-10">
            <CategoryPills />
            <ProductGrid />
          </div>
        </div>

        <TrustBadges />
        <BrowseBySpace />
      </div>

      <TrustBar />
    </>
  );
}
