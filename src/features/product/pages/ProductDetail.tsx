import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BEDS } from "@/features/shop/data/products";
import { ProductOverview } from "@/features/product/sections/ProductOverview";
import { MaterialsSection } from "@/features/product/sections/MaterialsSection";
import { ConstructionSection } from "@/features/product/sections/ConstructionSection";
import { ProcessSection } from "@/features/product/sections/ProcessSection";
import { PassportSection } from "@/features/product/sections/PassportSection";
import { SpecsSection } from "@/features/product/sections/SpecsSection";
import { TestimonialsSection } from "@/features/product/sections/TestimonialsSection";
import { CTABanner } from "@/features/product/sections/CTABanner";
import { StickyOrderBar } from "@/features/product/components/StickyOrderBar";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = BEDS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container-luxury flex flex-col items-center gap-4 py-24 text-center">
        <h1 className="font-heading text-2xl text-dark">Product not found</h1>
        <Link to="/shop" className="text-sm font-semibold text-primary hover:text-primary-700">
          Back to Shop
        </Link>
      </div>
    );
  }

  const collection = product.name.split(" ")[0];

  return (
    <>
      <Helmet>
        <title>{product.name} | Sharma Furnitures</title>
      </Helmet>

      <div className="pb-20">
        <ProductOverview product={product} collection={collection} />
        <MaterialsSection />
        <ConstructionSection />
        <ProcessSection />
        <PassportSection />
        <SpecsSection />
        <TestimonialsSection rating={product.rating} reviewCount={product.reviewCount} />
        <CTABanner />
      </div>

      <StickyOrderBar product={product} />
    </>
  );
}
