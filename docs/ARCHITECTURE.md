# Reggals — Architecture & Product Blueprint

> Internal product, brand, and engineering blueprint for the Reggals platform.
> *Regal + Girls.* A premium online gifting destination — curated, calm, emotional.

---

## 1. Information architecture

```
Reggals (root)
├─ Marketing
│  ├─ Home
│  ├─ About / Our Story
│  ├─ Contact
│  ├─ Policies (Privacy, Terms, Shipping)
│  ├─ FAQs
│  └─ Support
├─ Discovery
│  ├─ Categories index
│  ├─ Category (shop?category=…)
│  ├─ Occasions (shop?occasion=…)
│  ├─ Collections index → Collection detail
│  ├─ Shop (PLP with filters)
│  └─ Search
├─ Product
│  └─ Product detail (PDP)
├─ Commerce
│  ├─ Cart
│  ├─ Checkout (multi-step)
│  ├─ Order success
│  └─ Order tracking
├─ Account
│  ├─ Overview
│  ├─ Orders / Invoices
│  ├─ Wishlist (also top-level)
│  ├─ Addresses
│  ├─ Payments
│  ├─ Rewards
│  ├─ Returns
│  ├─ Notifications
│  └─ Settings
├─ Auth (Sign in, Sign up, Forgot)
├─ Loyalty
│  ├─ Gift cards
│  ├─ Rewards programme
│  └─ Refer & earn
├─ Admin (atelier)
│  ├─ Dashboard / KPIs
│  ├─ Orders
│  ├─ Products
│  ├─ Customers
│  ├─ Coupons
│  ├─ Analytics
│  ├─ CMS (banners, homepage blocks)
│  ├─ Support tickets
│  └─ Settings
└─ System states (404, 500, maintenance, empty, loading)
```

## 2. Sitemap

| Path | Description |
| ---- | ----------- |
| `/` | Editorial homepage |
| `/categories` | Twelve-category grid |
| `/shop?category=&occasion=&tag=&max=&sort=` | Filterable PLP |
| `/collections` · `/collections/[slug]` | Curated edits |
| `/product/[slug]` | PDP with gallery, variants, gift options, reviews |
| `/search?q=` | Universal search |
| `/wishlist` | Saved items |
| `/cart` · `/checkout` | Cart & multi-step checkout |
| `/orders/[id]/track` | Public tracking page |
| `/sign-in` · `/sign-up` | Auth |
| `/account` (+ orders, wishlist, addresses, payments, rewards, returns, notifications, settings) | User dashboard |
| `/gift-cards` · `/rewards` · `/refer` | Loyalty |
| `/support` · `/faqs` · `/contact` | Customer care |
| `/about` · `/privacy` · `/terms` · `/shipping-policy` | Institutional |
| `/admin` (+ orders, products, customers, coupons, analytics, cms, tickets, settings) | Atelier admin |
| `/maintenance` · `/not-found` · `/error` | System states |

## 3. User flows

### 3.1 First-time gifter (boyfriend buying for anniversary)
```
Home → Occasion: Anniversary → PLP (filter: under ₹4,999, jewelry)
     → PDP → choose variant + gift wrap + engrave message
     → Add to bag → Cart → Checkout
     → Address → Express delivery → UPI → Review → Place order
     → Celebration screen → Order tracking page → WhatsApp updates
```

### 3.2 Returning customer (self-purchase, beauty)
```
Home → Search “silk eye mask” → PDP → Wishlist → Sign in
     → Wishlist page → Add to bag → Checkout (saved address+UPI)
     → Place order
```

### 3.3 Corporate gifting (custom bulk)
```
Home → Support → “Corporate gifting” → Concierge form → Curated proposal
     → Bulk PO → Admin marks as fulfilled
```

## 4. Navigation map

- **Top nav (sticky):** Logo · Categories ▾ · Occasions ▾ · Collections ▾ · New · Luxury · Personalized · Search · Wishlist · Cart · Account
- **Mega menus:** column-based grids with imagery, max 8 items per column
- **Footer:** Shop · Care · House · Follow · Newsletter
- **Mobile:** Hamburger drawer (categories, occasions, account, support)

## 5. Design system

### 5.1 Color
| Token | Hex | Usage |
| --- | --- | --- |
| `ivory` | `#FBF8F4` | Surfaces |
| `offwhite` | `#FAF7F2` | Page background |
| `charcoal` | `#1F1A17` | Text, primary CTAs |
| `rose-gold` | `#B76E79` | Brand accent |
| `rose-deep` | `#9A5560` | Hover, depth |
| `blush` | `#F6E1DE` | Soft surfaces, badges |
| `gold-leaf` | `#C9A66B` | Editorial highlights |
| `line` | `#E8DFD5` | Dividers, borders |

### 5.2 Typography
- **Display:** Playfair Display (italic for emphasis)
- **Body:** Inter
- **Scale (rem):** h1 4.5 · h2 3.5 · h3 2.25 · h4 1.5 · body 1 · eyebrow 0.75 (uppercase, 0.22em tracking)
- **Line heights:** Display 1.05 · Body 1.65

### 5.3 Spacing & radius
- 8-pt grid (Tailwind defaults).
- Radii: `sm 6 · md 10 · lg 16 · xl 20 · xl2 24`.
- Shadow: `soft` for cards, `luxe` for hero/CTA.

### 5.4 Motion
- Easings: `cubic-bezier(0.22, 1, 0.36, 1)` ("expo-out"). 600–1200ms.
- Patterns: fade-up on enter, image cross-fade on hover, slow scale (1.04) for product cards.
- Respect `prefers-reduced-motion`.

### 5.5 Iconography
- `lucide-react`, 1.5–2px stroke, 16–20px in body, 24px in nav.

### 5.6 Component library
- **Primitives:** Button, Input, Textarea, Badge, Logo
- **Layout:** Header (sticky, mega-menu, mobile drawer), Footer, Section
- **Product:** ProductCard, ProductGrid, Gallery, Variants, Reviews
- **Commerce:** CartDrawer, CartPage, CheckoutSteps, OrderSummary, SuccessScreen, TrackTimeline
- **Marketing:** Hero, OccasionStrip, FeaturedCollections, CategoryMosaic, PriceTiers, CustomerStories, InstagramGallery, Newsletter
- **States:** EmptyState, SkeletonCard, MaintenanceCard

## 6. Database schema (PostgreSQL · Prisma)

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  phone         String?
  name          String?
  authProvider  String   // "credentials" | "google" | "apple"
  rewardsCoins  Int      @default(0)
  tier          Tier     @default(PETAL)
  addresses     Address[]
  orders        Order[]
  wishlistItems WishlistItem[]
  reviews       Review[]
  createdAt     DateTime @default(now())
}

enum Tier { PETAL BLOOM REGAL }

model Address {
  id        String  @id @default(cuid())
  user      User    @relation(fields: [userId], references: [id])
  userId    String
  label     String  // Home / Work / Other
  fullName  String
  phone     String
  line1     String
  line2     String?
  city      String
  state     String
  pincode   String
  country   String  @default("India")
  isDefault Boolean @default(false)
}

model Brand {
  id       String   @id @default(cuid())
  slug     String   @unique
  name     String
  about    String?
  products Product[]
}

model Category {
  id       String   @id @default(cuid())
  slug     String   @unique
  name     String
  parent   Category? @relation("CategoryParent", fields: [parentId], references: [id])
  parentId String?
  children Category[] @relation("CategoryParent")
  products ProductCategory[]
}

model Occasion {
  id       String  @id @default(cuid())
  slug     String  @unique
  name     String
  products ProductOccasion[]
}

model Collection {
  id        String   @id @default(cuid())
  slug      String   @unique
  name      String
  subtitle  String?
  hero      String?
  startsAt  DateTime?
  endsAt    DateTime?
  products  ProductCollection[]
}

model Product {
  id            String   @id @default(cuid())
  slug          String   @unique
  name          String
  tagline       String?
  description   String
  brand         Brand    @relation(fields: [brandId], references: [id])
  brandId       String
  priceMinor    Int      // store paise
  compareAtMinor Int?
  currency      String   @default("INR")
  inStock       Boolean  @default(true)
  giftWrap      Boolean  @default(true)
  personalizable Boolean @default(false)
  hero          String
  images        String[] // S3/Cloudinary URLs
  rating        Float    @default(0)
  reviewCount   Int      @default(0)
  tags          String[]
  materials     String[]
  variants      Variant[]
  reviews       Review[]
  categories    ProductCategory[]
  occasions     ProductOccasion[]
  collections   ProductCollection[]
  createdAt     DateTime @default(now())
}

model Variant {
  id        String  @id @default(cuid())
  product   Product @relation(fields: [productId], references: [id])
  productId String
  label     String
  attribute String   // color | size | metal | fragrance
  swatch    String?
  stock     Int      @default(0)
  sku       String   @unique
}

model ProductCategory  { productId String; categoryId String;  @@id([productId, categoryId]) }
model ProductOccasion  { productId String; occasionId String;  @@id([productId, occasionId]) }
model ProductCollection{ productId String; collectionId String; @@id([productId, collectionId]) }

model Review {
  id        String   @id @default(cuid())
  product   Product  @relation(fields: [productId], references: [id])
  productId String
  user      User     @relation(fields: [userId], references: [id])
  userId    String
  rating    Int
  title     String
  body      String
  verified  Boolean  @default(false)
  createdAt DateTime @default(now())
}

model WishlistItem {
  userId    String
  productId String
  createdAt DateTime @default(now())
  @@id([userId, productId])
}

model Cart {
  id        String     @id @default(cuid())
  userId    String?
  items     CartItem[]
  updatedAt DateTime   @updatedAt
}

model CartItem {
  id           String  @id @default(cuid())
  cart         Cart    @relation(fields: [cartId], references: [id])
  cartId       String
  productId    String
  variantId    String?
  quantity     Int     @default(1)
  giftWrap     Boolean @default(false)
  giftMessage  String?
  personalization Json?
}

model Coupon {
  id        String  @id @default(cuid())
  code      String  @unique
  kind      String  // PERCENT | FLAT | FREE_SHIP
  value     Int
  startsAt  DateTime?
  endsAt    DateTime?
  minOrder  Int?
  usageLimit Int?
  usageCount Int @default(0)
  active    Boolean @default(true)
}

model Order {
  id          String    @id @default(cuid())
  number      String    @unique         // R-XXXXXX
  user        User      @relation(fields: [userId], references: [id])
  userId      String
  status      OrderStatus @default(PLACED)
  subtotal    Int
  shipping    Int
  giftWrap    Int
  discount    Int
  tax         Int
  total       Int
  currency    String    @default("INR")
  paymentMethod String  // upi | card | cod | wallet
  paymentRef    String?
  addressJson  Json
  items        OrderItem[]
  timeline     OrderEvent[]
  placedAt    DateTime  @default(now())
}

enum OrderStatus { PLACED CONFIRMED PACKED SHIPPED OUT_FOR_DELIVERY DELIVERED CANCELLED RETURNED }

model OrderItem {
  id        String @id @default(cuid())
  order     Order  @relation(fields: [orderId], references: [id])
  orderId   String
  productId String
  variantId String?
  name      String
  image     String
  unitPrice Int
  quantity  Int
  giftWrap  Boolean
  giftMessage String?
}

model OrderEvent {
  id        String   @id @default(cuid())
  order     Order    @relation(fields: [orderId], references: [id])
  orderId   String
  status    OrderStatus
  at        DateTime @default(now())
  note      String?
}

model GiftCard {
  id        String @id @default(cuid())
  code      String @unique
  amount    Int
  balance   Int
  toEmail   String
  fromName  String?
  message   String?
  scheduledFor DateTime?
  createdAt DateTime @default(now())
}
```

## 7. API surface (Route handlers)

| Method | Path | Description |
| ------ | ---- | ----------- |
| `GET` | `/api/products` | List with filters & sort |
| `GET` | `/api/products/[slug]` | PDP data |
| `GET` | `/api/search?q=` | Universal search |
| `GET` | `/api/collections/[slug]` | Curated collection |
| `POST` | `/api/cart` | Replace cart (idempotent) |
| `POST` | `/api/checkout/intent` | Create payment intent (Razorpay/Stripe) |
| `POST` | `/api/checkout/confirm` | Verify payment + create order |
| `GET` | `/api/orders/[id]` | Order detail (auth) |
| `POST` | `/api/wishlist` | Toggle wishlist item |
| `POST` | `/api/reviews` | Create review (verified buyer only) |
| `POST` | `/api/auth/*` | Auth.js routes |
| `POST` | `/api/webhooks/razorpay` | Payment callback |
| `POST` | `/api/webhooks/shipping` | Courier status updates |

All write endpoints validated with `zod`; rate-limited with Upstash Redis; CSRF-protected via Auth.js.

## 8. Authentication

- **Auth.js (NextAuth v5)** with credentials + Google + Apple.
- Sessions JWT; HTTP-only cookies; CSRF.
- Optional **passwordless email** via Resend.
- Server actions guarded with `auth()` helper.
- RBAC: `customer`, `support`, `admin`. Admin routes wrap layout in a server-side check.

## 9. Checkout flow

```
Cart  →  Login / Continue as guest
       →  Address (existing or new, with pincode → ETA lookup)
       →  Delivery slot (Standard / Express / Scheduled)
       →  Gift options (wrap, message, anonymous)
       →  Coupon / Reggals coins
       →  Payment (Razorpay India · Stripe international)
       →  Review
       →  Confirmation (celebration animation + tracking link)
```

Idempotency keys on payment intents prevent duplicate orders. Order created in `PLACED`; confirmed on payment webhook.

## 10. Admin dashboard

- **Layout:** dark sidebar, neutral surface, soft typography. Editorial KPIs first, then transactional tables.
- **Roles:** admin (full), atelier (orders/products), support (orders/tickets).
- **Modules:** Orders · Products · Customers · Coupons · Analytics · CMS · Support tickets · Settings.
- **CMS:** controls homepage hero, featured collections, occasion banners.

## 11. Mobile-first responsive layouts

- All grids collapse: 12 → 6 → 1 columns.
- Bottom tab bar (mobile, optional): Home · Categories · Wishlist · Bag · Account.
- Touch targets ≥44pt. Drawer for filters and cart. Sticky bottom CTA on PDP.

## 12. Edge cases & error handling

- Empty cart, empty wishlist, no search results — beautifully designed.
- Stock changes between cart and checkout: server re-validates, gentle inline message.
- Pincode not serviceable: surface alternative pickup location.
- Payment failed: retry with another method, never lose cart.
- Network offline: cached read of PLP & PDP via service worker (V2).
- 404, 500, maintenance pages with brand voice.

## 13. Accessibility (WCAG 2.2 AA)

- Semantic HTML (`<nav>`, `<main>`, `<aside>`).
- Visible focus rings (`:focus-visible`).
- Color contrast ≥ 4.5:1 on body text (rose-gold reserved for accents on dark/ivory).
- Keyboard navigation for menus, drawers, dialogs.
- `aria-label`s on icon buttons; live regions for cart updates.
- Reduced motion respected globally.

## 14. SEO strategy

- Per-page metadata; `next/metadata` `generateMetadata` on PDP & collections.
- OpenGraph + Twitter cards with product hero images.
- JSON-LD `Product`, `BreadcrumbList`, `Organization`, `WebSite` (V2).
- `sitemap.ts` + `robots.ts` shipped.
- Canonical URLs (PLP omits filters from canonical).
- Image optimisation via Next/Image with AVIF/WebP.
- Internal linking through occasion → category → product chains.

## 15. Performance

- App Router with RSC; only interactive islands marked `'use client'`.
- `optimizePackageImports` for `lucide-react`, `framer-motion`.
- `next/image` with explicit `sizes`. AVIF/WebP automatic.
- Fonts via `next/font` (zero CLS).
- Code-split by route. Skeletons for slow boundaries.
- Goals: LCP < 2.0s · CLS < 0.05 · INP < 200ms on mid-tier mobile.

## 16. Folder structure

See [README.md](../README.md#-folder-structure). Source-of-truth lives under `src/`.

## 17. State management

| Domain | Strategy |
| ------ | -------- |
| Cart, Wishlist | Zustand + `localStorage` persistence |
| Filters / sort | URL search params (shareable) |
| Auth session | Auth.js context |
| Server data | RSC fetch / Route handlers + SWR (V2 client refreshes) |
| Toasts | Headless UI portal (V2) |

## 18. Roadmap

### MVP (this repo)
- Editorial homepage, full catalog browsing, PDP, cart, checkout, account, admin shell.
- Mock data; client-side cart/wishlist.

### V1 (production launch)
- Auth.js + Postgres + Prisma.
- Razorpay live payments, COD, UPI Intent.
- Cloudinary media; Resend transactional email.
- WhatsApp order updates (Twilio / Gupshup).
- Real reviews with photo upload.
- Coupons + Reggals coins.

### V1.5
- AI Gift Concierge (LLM with retrieval over catalog).
- Meilisearch/Algolia.
- Real-time inventory.
- Schema.org JSON-LD + rich snippets.

### V2
- Seller dashboard / marketplace mode.
- Multi-currency, international shipping.
- Mobile app (Expo).
- Subscription gifting boxes.
- AR try-on for jewelry.

---

*Reggals is a quiet boutique built in code — every decision in this document is in service of the same feeling: “Wow… this is beautiful.”*
