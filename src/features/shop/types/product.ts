export type BadgeTone = "dark" | "green" | "teal" | "neutral";

export interface ProductBadge {
  label: string;
  tone: BadgeTone;
}

export interface Product {
  id: string;
  name: string;
  variant: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: ProductBadge;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
  isNew?: boolean;
}
