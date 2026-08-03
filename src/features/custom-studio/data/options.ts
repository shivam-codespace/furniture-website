import type {
  AddonOption,
  MaterialItem,
  ProductView,
  SimpleOption,
  SwatchOption,
  ThumbnailOption,
} from "@/features/custom-studio/types";
import bedroomAmberImg from "@/assets/images/products/bedroom-amber.jpg";
import productSideLeftImg from "@/assets/images/products/product-side-left.jpg";
import productSideRightImg from "@/assets/images/products/product-side-right.jpg";
import productFrontImg from "@/assets/images/products/product-front.jpg";
import productMultiviewImg from "@/assets/images/products/product-multiview.jpg";
import productStudioImg from "@/assets/images/products/product-studio.jpg";
import woodGrainImg from "@/assets/images/materials/wood-grain.jpg";
import plywoodEdgeImg from "@/assets/images/materials/plywood-edge.jpg";
import hingeImg from "@/assets/images/materials/hinge.jpg";

export const BASE_PRICE = 45999;

export const WOOD_TYPES: SwatchOption[] = [
  { id: "sheesham", label: "Sheesham Wood", color: "#6b4226", priceDelta: 0 },
  { id: "teak", label: "Teak Wood", color: "#8a6240", priceDelta: 5000 },
  { id: "mango", label: "Mango Wood", color: "#a97c50", priceDelta: -3000 },
  { id: "walnut", label: "Walnut Wood", color: "#3e2723", priceDelta: 8000 },
];

export const FINISHES: SwatchOption[] = [
  { id: "natural", label: "Natural", color: "#c9a27e", priceDelta: 0 },
  { id: "honey", label: "Honey", color: "#a8672f", priceDelta: 0 },
  { id: "walnut", label: "Walnut", color: "#6b4226", priceDelta: 0 },
  { id: "dark-walnut", label: "Dark Walnut", color: "#3b2415", priceDelta: 0 },
];

export const HEADBOARDS: ThumbnailOption[] = [
  { id: "upholstered", label: "Upholstered", image: productStudioImg, priceDelta: 3000 },
  { id: "panel", label: "Panel", image: productFrontImg, priceDelta: 0 },
  { id: "louvered", label: "Louvered", image: productSideLeftImg, priceDelta: 1500 },
  { id: "tufted", label: "Tufted", image: productSideRightImg, priceDelta: 4000 },
];

export const STORAGE_TYPES: SimpleOption[] = [
  { id: "none", label: "No Storage", priceDelta: -3000 },
  { id: "box", label: "Box Storage", priceDelta: 4000 },
  { id: "hydraulic", label: "Hydraulic Storage", priceDelta: 7000 },
  { id: "drawer", label: "Drawer Storage", priceDelta: 5000 },
];

export const BED_SIZES: SimpleOption[] = [
  { id: "king", label: "King (78 x 72 in)", priceDelta: 2000 },
  { id: "queen", label: "Queen (72 x 60 in)", priceDelta: 0 },
  { id: "custom", label: "Custom Size", priceDelta: 5000 },
];

export const UPHOLSTERY: SwatchOption[] = [
  { id: "linen", label: "Linen", color: "#d8cbb8", priceDelta: 0 },
  { id: "velvet", label: "Velvet", color: "#4a2f26", priceDelta: 3000 },
  { id: "leatherette", label: "Leatherette", color: "#8a8a8a", priceDelta: 1500 },
  { id: "suede", label: "Suede", color: "#a67c52", priceDelta: 4000 },
];

export const ADDONS: AddonOption[] = [
  { id: "side-tables", label: "Side Tables", priceDelta: 4500 },
  { id: "back-panel", label: "Bed Back Panel", priceDelta: 2500 },
  { id: "led-headboard", label: "LED Light in Headboard", priceDelta: 3500 },
  { id: "mattress", label: "Mattress Recommendation", priceDelta: 0 },
];

export const PRODUCT_VIEWS: ProductView[] = [
  { id: "front", label: "Front View", image: bedroomAmberImg },
  { id: "side", label: "Side View", image: productSideLeftImg },
  { id: "storage-open", label: "Storage Open", image: productFrontImg },
  { id: "back", label: "Back View", image: productSideRightImg },
  { id: "top", label: "Top View", image: productMultiviewImg },
];

export const MATERIALS: MaterialItem[] = [
  { id: "wood", name: "Sheesham Wood", spec: "Grade A | Seasoned", batch: "Moisture 10-12%", image: woodGrainImg },
  { id: "ply", name: "Century Ply", spec: "19mm | ISI Certified", batch: "Batch: CP24567", image: plywoodEdgeImg },
  { id: "laminate", name: "Greenlam Laminate", spec: "Walnut | Matte Finish", batch: "Batch: GL78910", image: woodGrainImg },
  { id: "hardware", name: "Hettich Hardware", spec: "Soft Close Hinges", batch: "50,000+ Cycles", image: hingeImg },
  { id: "polish", name: "Asian Paints Polish", spec: "PU Matt Finish", batch: "Premium Quality" },
];
