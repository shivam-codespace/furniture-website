import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import Home from "@/features/home/pages/Home";
import Shop from "@/features/shop/pages/Shop";
import ProductDetail from "@/features/product/pages/ProductDetail";
import WhyVaanam from "@/features/why-vaanam/pages/WhyVaanam";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/why-vaanam" element={<WhyVaanam />} />
      </Route>
    </Routes>
  );
}
