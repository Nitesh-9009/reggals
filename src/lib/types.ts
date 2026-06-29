export type Money = number; // INR paise stored as rupees for simplicity

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  parent?: string;
};

export type Occasion = {
  slug: string;
  name: string;
  emoji?: string;
  image: string;
};

export type Collection = {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: 'New' | 'Limited' | 'Editor’s Pick' | 'Bestseller';
};

export type ProductVariant = {
  id: string;
  label: string;          // e.g. "Rose Gold", "Medium"
  attribute: 'color' | 'size' | 'metal' | 'fragrance';
  swatch?: string;        // hex color when applicable
  stock: number;
};

export type Review = {
  id: string;
  author: string;
  rating: number;          // 0..5
  title: string;
  body: string;
  verified: boolean;
  createdAt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  brand: string;
  price: Money;
  compareAt?: Money;       // strike-through price
  currency: 'INR';
  rating: number;
  reviewCount: number;
  images: string[];
  hero: string;
  categories: string[];    // category slugs
  occasions: string[];     // occasion slugs
  collections?: string[];
  tags: ('new' | 'bestseller' | 'limited' | 'personalizable' | 'eco' | 'handcrafted')[];
  variants?: ProductVariant[];
  materials?: string[];
  giftWrapEligible: boolean;
  personalizable: boolean;
  inStock: boolean;
  estimatedDelivery: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: Money;
  quantity: number;
  variantLabel?: string;
  giftWrap?: boolean;
  giftMessage?: string;
};

export type Address = {
  id: string;
  label: 'Home' | 'Work' | 'Other';
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: 'India';
  isDefault?: boolean;
};

export type OrderStatus =
  | 'placed'
  | 'confirmed'
  | 'packed'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'
  | 'returned';

export type Order = {
  id: string;
  number: string;
  placedAt: string;
  status: OrderStatus;
  items: CartItem[];
  subtotal: Money;
  shipping: Money;
  giftWrap: Money;
  discount: Money;
  total: Money;
  address: Address;
  trackingTimeline: { status: OrderStatus; at: string; note?: string }[];
};
