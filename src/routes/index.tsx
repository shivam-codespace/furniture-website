import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import Home from "@/features/home/pages/Home";
import Shop from "@/features/shop/pages/Shop";
import ProductDetail from "@/features/product/pages/ProductDetail";
import WhyVaanam from "@/features/why-vaanam/pages/WhyVaanam";
import OurStory from "@/features/our-story/pages/OurStory";
import CustomStudio from "@/features/custom-studio/pages/CustomStudio";
import Support from "@/features/support/pages/Support";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/why-vaanam" element={<WhyVaanam />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/custom-studio" element={<CustomStudio />} />
        <Route path="/support" element={<Support />} />
      </Route>
    </Routes>
  );
}
