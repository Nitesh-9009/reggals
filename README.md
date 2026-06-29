# Reggals — Premium Online Gifting

> *Regal + Girls.* A boutique-quality online gifting destination — calm, editorial, emotional.

This repository contains the **Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion** storefront and the full **product, brand, and engineering blueprint** for the Reggals platform.

---

## ✨ Brand at a glance

| Token | Value |
| ----- | ----- |
| Primary | Rose Gold `#B76E79` |
| Secondary | Ivory White `#FBF8F4` |
| Accent | Soft Pink (Blush) `#F6E1DE` |
| Text | Dark Charcoal `#1F1A17` |
| Background | Off‑white `#FAF7F2` |
| Display type | Playfair Display (editorial serif) |
| Body type | Inter (humanist sans) |
| Motion | Slow, eased, never bouncy. 600–900ms easings. |

Design references: Apple Store · Aesop · Glossier · Airbnb · Pinterest · Notion.

---

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build      # production build
npm run typecheck  # TS check
npm run lint       # ESLint
```

---

## 📁 Folder structure

```
reggals/
├─ src/
│  ├─ app/                    # Next.js App Router
│  │  ├─ (marketing)/         # Home, about, contact, policies
│  │  ├─ (shop)/              # Categories, collections, PLP, PDP, search
│  │  ├─ (account)/           # Profile, orders, wishlist, addresses…
│  │  ├─ (commerce)/          # Cart, checkout, success
│  │  ├─ (auth)/              # Sign-in / Sign-up
│  │  ├─ admin/               # Admin dashboard
│  │  ├─ api/                 # Route handlers (mock)
│  │  ├─ layout.tsx
│  │  ├─ page.tsx             # Home
│  │  ├─ loading.tsx
│  │  ├─ error.tsx
│  │  └─ not-found.tsx
│  ├─ components/
│  │  ├─ layout/              # Header, Footer, MegaMenu, MobileNav
│  │  ├─ marketing/           # Hero, sections, story blocks
│  │  ├─ product/             # ProductCard, Gallery, Variants, Reviews
│  │  ├─ commerce/            # CartDrawer, CheckoutSteps
│  │  └─ ui/                  # Primitives (Button, Input, Badge, …)
│  ├─ lib/
│  │  ├─ data/                # Static catalog (mock CMS)
│  │  ├─ store/               # Zustand stores (cart, wishlist)
│  │  ├─ utils.ts
│  │  └─ types.ts
│  └─ styles/
│     └─ globals.css
├─ docs/
│  └─ ARCHITECTURE.md         # IA, sitemap, DB schema, API, roadmap
├─ public/
└─ …
```

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full information architecture, database schema, API contract, checkout flow, admin design, accessibility & SEO strategy, and the MVP→V2 roadmap.

---

## 🛠 Tech stack

| Layer | Choice |
| ----- | ------ |
| Framework | Next.js 14 (App Router, RSC) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CSS variables |
| Motion | Framer Motion |
| Icons | lucide-react |
| State | Zustand (cart, wishlist) + URL state (filters) |
| Auth (planned) | Auth.js / Clerk |
| DB (planned) | PostgreSQL (Supabase) + Prisma |
| Cache/Queue (planned) | Upstash Redis |
| Payments (planned) | Razorpay (IN) + Stripe (intl.) |
| Media (planned) | Cloudinary |
| Email (planned) | Resend |
| Search (planned) | Meilisearch / Algolia |
| Deploy (planned) | Vercel (web) + Railway (workers) |

---

## 📐 What's shipped in this MVP

- Full design system (tokens, typography, components)
- Header w/ mega‑menu, mobile drawer, search affordance
- Editorial homepage (Hero, Occasions, Collections, Trending, Categories, Price tiers, Stories, IG, Newsletter)
- Product listing with filters (sidebar) + sorting
- Product detail page with gallery, variants, gift options, reviews
- Cart, Wishlist, Checkout (multi‑step), Order success + tracking
- Auth screens, Account dashboard (orders, addresses, rewards, returns)
- Categories, Collections, Search, Gift Cards, About, Contact, FAQs, Policies
- 404, error, loading, maintenance, empty states
- Admin shell (orders, products, customers, analytics overview)
- Accessibility passes (focus rings, reduced motion, semantic HTML)

---

## License

Proprietary © Reggals. All rights reserved.
