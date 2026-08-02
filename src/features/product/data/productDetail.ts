import { Droplet } from "lucide-react";
import type {
  BoxItem,
  ConstructionPoint,
  MaterialSwatch,
  ProcessStep,
  SpecRow,
  Testimonial,
} from "@/features/product/types/productDetail";
import woodGrainImg from "@/assets/images/materials/wood-grain.jpg";
import plywoodEdgeImg from "@/assets/images/materials/plywood-edge.jpg";
import hingeImg from "@/assets/images/materials/hinge.jpg";
import woodSlabImg from "@/assets/images/categories/wood-slab.jpg";
import woodLogsImg from "@/assets/images/workshop/wood-logs.jpg";
import carpenterSawImg from "@/assets/images/workshop/carpenter-saw.jpg";
import constructionCalloutsImg from "@/assets/images/passport/construction-callouts.jpg";
import craftSandingImg from "@/assets/images/workshop/craft-sanding.jpg";
import productMultiviewImg from "@/assets/images/products/product-multiview.jpg";
import deliveryTruckImg from "@/assets/images/support/delivery-truck.jpg";

export const MATERIALS: MaterialSwatch[] = [
  {
    name: "Sheesham Wood",
    spec: "Grade A | Moisture 10.8%\nOrigin: Rajasthan",
    image: woodGrainImg,
    linkLabel: "View Original Wood Photo",
  },
  {
    name: "CenturyPly Club Prime",
    spec: "19 mm | ISI Certified\nBatch: CP23455",
    image: plywoodEdgeImg,
    linkLabel: "View Actual Ply Photo",
  },
  {
    name: "Greenlam Walnut",
    spec: "Premium Laminate (Mica)\nLot: GLW-8821",
    image: woodSlabImg,
    linkLabel: "View Actual Laminate Photo",
  },
  {
    name: "Hettich Hinges",
    spec: "Soft Close | 50,000 Cycles\nOriginal Packing Photo",
    image: hingeImg,
    linkLabel: "View Packaging Photo",
  },
  {
    name: "PU Matte Finish",
    spec: "Low VOC | Safe Finish\nBrand: Asian Paints",
    image: null,
    icon: Droplet,
    linkLabel: "View Product Photo",
  },
];

export const CONSTRUCTION_POINTS: ConstructionPoint[] = [
  { label: "Solid Wood Construction", detail: "No MDF or particle board in structure" },
  { label: "Thick Plywood Base", detail: "19 mm ISI certified for strength" },
  { label: "Strong Centre Support", detail: "For heavy load" },
  { label: "Reinforced Joinery", detail: "Stronger joints for zero wobble" },
  { label: "Premium Hardware", detail: "Long life, rust resistant fittings" },
];

export const BED_PARTS = ["Headboard", "Side Panel", "Storage Box", "Legs", "Slat Support"];

export const PROCESS_STEPS: ProcessStep[] = [
  { n: "01", title: "Wood Selection", description: "Carefully chosen seasoned wood", image: woodLogsImg },
  { n: "02", title: "Cutting & Shaping", description: "Precision cutting for perfect strength", image: carpenterSawImg },
  { n: "03", title: "Joinery & Assembly", description: "Expert hands, strong joinery", image: constructionCalloutsImg },
  { n: "04", title: "Sanding", description: "Smooth sanding for perfect finish", image: craftSandingImg },
  { n: "05", title: "Polishing", description: "Premium polish for long life", image: woodSlabImg },
  { n: "06", title: "Quality Check", description: "Multi-point inspection", image: productMultiviewImg },
  { n: "07", title: "Packing", description: "Safe & secure packaging", image: null },
  { n: "08", title: "Delivered", description: "On-time, with care", image: deliveryTruckImg },
];

export const SPECS: SpecRow[] = [
  { label: "Material", value: "Sheesham Wood + Plywood" },
  { label: "Finish", value: "PU Matte" },
  { label: "Plywood Thickness", value: "19 mm (ISI Certified)" },
  { label: "Storage Type", value: "Hydraulic Storage" },
  { label: "Dimensions (L x W x H)", value: "72in x 72in x 42in" },
  { label: "Storage Box Height", value: "20 in" },
  { label: "Warranty", value: "5 Years Warranty" },
  { label: "Assembly", value: "Knock Down (DIY Friendly)" },
];

export const BOX_ITEMS: BoxItem[] = [
  { label: "Bed Headboard", qty: 1 },
  { label: "Side Panels", qty: 2 },
  { label: "Storage Box", qty: 1 },
  { label: "Hydraulic Fittings", qty: 2 },
  { label: "Hardware Kit", qty: 1 },
  { label: "Assembly Manual", qty: 1 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Excellent quality and finish. Exactly what was shown.",
    name: "Rohit Sharma",
    location: "Bengaluru",
    rating: 5,
  },
  {
    quote: "Strong, sturdy and beautiful. Storage is very spacious.",
    name: "Neha Mahajan",
    location: "Pune",
    rating: 5,
  },
  {
    quote: "You can really feel the quality in the wood and polish.",
    name: "Arun Kumar",
    location: "Hyderabad",
    rating: 5,
  },
];
