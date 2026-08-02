import {
  Armchair,
  BedDouble,
  Box,
  Briefcase,
  DoorClosed,
  LayoutGrid,
  Sofa,
  Sparkles,
  Table2,
  Tv,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  grid: LayoutGrid,
  bed: BedDouble,
  sofa: Sofa,
  dining: UtensilsCrossed,
  wardrobe: DoorClosed,
  tv: Tv,
  table: Table2,
  chair: Armchair,
  storage: Box,
  office: Briefcase,
  custom: Sparkles,
};
