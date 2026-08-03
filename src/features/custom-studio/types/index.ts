export interface SwatchOption {
  id: string;
  label: string;
  color: string;
  priceDelta: number;
}

export interface ThumbnailOption {
  id: string;
  label: string;
  image: string;
  priceDelta: number;
}

export interface SimpleOption {
  id: string;
  label: string;
  priceDelta: number;
}

export interface AddonOption {
  id: string;
  label: string;
  priceDelta: number;
}

export interface ProductView {
  id: string;
  label: string;
  image: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  spec: string;
  batch: string;
  image?: string;
}

export interface CustomizationState {
  woodType: string;
  finish: string;
  headboard: string;
  storage: string;
  size: string;
  upholstery: string;
  addons: string[];
}
