import type { LucideIcon } from "lucide-react";

export interface MaterialSwatch {
  name: string;
  spec: string;
  image: string | null;
  icon?: LucideIcon;
  linkLabel: string;
}

export interface ConstructionPoint {
  label: string;
  detail: string;
}

export interface BedPart {
  label: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  description: string;
  image: string | null;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface BoxItem {
  label: string;
  qty: number;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}
