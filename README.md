# Nail Glam 💅 — E-Commerce Website

A front-end e-commerce web app for a luxury nail-products brand. Users browse a curated catalog of 25 nail products, search/filter them, add to cart, check out, and track orders in real time — with an admin panel for order management.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | Plain HTML + CSS (vanilla) + vanilla JS |
| Auth | Firebase Auth (email/password) |
| Database | Firebase Firestore (orders collection) + `localStorage` (cart, theme, profile, recent searches) |
| Styles | `style.css` with CSS custom properties (design tokens) |
| Hosting | Any static host (all pages are static HTML served via ES modules from CDN) |

## Project Structure

```
├── index.html          # Login / Sign-up gate (Firebase Auth)
├── home.html           # Shop home — hero carousel, category tabs, product grid, search overlay
├── product.html        # Product detail page (?id=N) — gallery, specs, reviews, related products
├── payment.html        # Checkout — address + payment form, places order to Firestore
├── orders.html         # Order history & live status (my orders)
├── admin.html          # Admin dashboard — all orders, status management
├── products-data.js    # Shared product catalog (window.NAIL_PRODUCTS) + helper functions
├── style.css           # Global styles & design tokens (light/dark theming)
└── *.jpeg / *.jpg      # Product images (p1–p25) + logo
```

## Architecture

### Multi-page app with a shared data layer

Nail Glam uses a **classic multi-page (MPA)** architecture. Every page is a self-contained HTML file. The only shared module is `products-data.js`, which is loaded via a classic `<script>` tag in `home.html` and `product.html`, exposing the catalog through the `window` object:

- `window.NAIL_PRODUCTS` — array of 25 products across 4 categories (`gels` 13, `tools` 6, `care` 4, `nails` 2). Each product: `{ id, name, price, image, desc, rating, category, badge, short }` where `desc` is the long detail-page copy and `short` is the 2-line home-card copy.
- `window.getProductById(id)` / `getProductByName(name)` — product lookup.
- `window.getRelatedProducts(product, limit)` — returns **same-category only** products for the "Related" section.
- `window.formatPrice(n)` — ₹ formatting.
- `window.categoryName(cat)` — readable category label.

### Authentication flow (Firebase)

`index.html` is the only entry point for unauthenticated users. It uses Firebase Auth (email/password) with sign-in and sign-up modes, and stores the signed-in user's UID in `sessionStorage.currentUid`.

All other pages (`home.html`, `orders.html`, `payment.html`, `admin.html`) import the Firebase Auth SDK and listen to `onAuthStateChanged`:

```
index.html --login/signup--> Firebase Auth --> sessionStorage.currentUid = user.uid
        ^                                              |
        |                                          onAuthStateChanged
        |                                              v
        +-- redirect to index.html <--      home / orders / payment / admin
```

If no authenticated user is detected, each page redirects to `index.html`.

### Data flow / storage

There are two storage layers working together:

1. **Firebase Firestore** — the single `orders` collection:
   - `payment.html` writes a new order doc with `addDoc`:
     `{ userId, customerName, address, phone, paymentMethod, items, total, date, status: "Pending" }`
   - `orders.html` queries `orders` filtered by `userId` to show "my orders".
   - `admin.html` reads **all** orders (`getDocs`) and transitions statuses with `updateDoc` (`Pending → Shipped → Delivered`).
   - `payment.html` gracefully degrades: if the Firestore write is rejected (security rules), it flags `cloudSave = false` and keeps a local copy so the order still appears on the orders page.

2. **`localStorage`** — lightweight client state shared across pages:
   | Key | Purpose |
   | --- | --- |
   | `cartItems_<uid>` | Cart items (`.zip`-style minimal object: `name`, `price`, `qty`, `image`) — namespaced per user UID or `guest` |
   | `theme` | `"dark"` / `"light"` — synced across every page |
   | `recentSearches` | Recent-search chips in the search overlay |
   | `userProfile_<uid>` | Profile drawer fields |
   | `nailArtLocalOrders_<uid>` | Local order history fallback |
   | `orderSuccessMsg` | One-time checkout-success flash message |

   `sessionStorage.currentUid` bridges the auth session and the cart namespace. Since `currentCartKey()` is computed from the UID, the cart **follows the logged-in user** and is shared between `home.html`, `product.html`, and `payment.html`.

## System Flow

```
                         ┌──────────────────────────────────────────────┐
                         │                 index.html                    │
                         │          Login / Create Account               │
                         └───────────────┬──────────────────────────────┘
                                         │ Firebase Auth (email/password)
                                         ▼
     ┌───────────────────────────────────────────────────────────────────┐
     │                          home.html                                │
     │  • Hero carousel      • Category tabs (All / Gels / Nails /       │
     │  • Product grid (image + name + rating + 2-line desc)             │
     │  • Search overlay (Recent / Trending / Most Bought, name-only)    │
     │  • Cart drawer       • Profile drawer                             │
     └───────────────┬──────────────────────────────────┬────────────────┘
                     │ click a product                 │ profile / cart /
                     │                                 │ search (drawers)
                     ▼                                 ▼
     ┌───────────────────────────┐            (bottom nav, same on all pages)
     │      product.html?id=N    │
     │  Gallery, price, qty,     │
     │  Add to Cart / Buy Now,   │
     │  Reviews, Related items   │
     └───────────────┬───────────┘
                     │ Buy Now / cart → Checkout
                     ▼
     ┌───────────────────────────────────────────────────────────────────┐
     │                         payment.html                              │
     │  • Address + payment details form                                 │
     │  • Order summary (items, totals)                                  │
     │  • addDoc → Firestore `orders` (+ local fallback)                 │
     └───────────────┬──────────────────────────────────┬────────────────┘
                     ▼                                  │
     ┌───────────────────────────┐                      │
     │        orders.html        │                      │
     │  My orders + live status  │                      │
     │  (query orders by userId) │                      │
     └───────────────────────────┘                      │
                                                        ▼
     ┌───────────────────────────────────────────────────────────────────┐
     │                         admin.html                                │
     │  • All orders, status counters, search                            │
     │  • updateDoc → transition order status                            │
     │    Pending → Shipped → Delivered                                  │
     └───────────────────────────────────────────────────────────────────┘
```

### User journey

1. **Authenticate** — sign in or create an account at `index.html`.
2. **Browse** — `home.html` renders the product grid from `NAIL_PRODUCTS`; filter by category tabs or use the **search overlay** (Recent Searches / Trending / Most Bought — name-only lists).
3. **Inspect** — click any card → navigates to `product.html?id=N`, which looks up the product from the shared catalog and renders details, reviews, and same-category related products.
4. **Add to cart** — from the product page (qty selector) or home card quick actions. Cart lives in `localStorage` under `cartItems_<uid>`.
5. **Checkout** — the cart drawer or "Buy Now" routes to `payment.html`, which collects address + payment details and writes the order to Firestore (with a local fallback).
6. **Track** — `orders.html` shows the user's orders with live status.
7. **Manage (admin)** — `admin.html` lets the store owner view every order and update its status; the change propagates to the customer's orders page.

## Shared UI System

- **Design tokens** in `style.css` under `:root` (and `body.dark-theme` overrides):
  - `--primary` dusty rose, `--secondary` champagne/rose-gold, `--accent` burgundy
  - Fonts: **Cormorant Garamond** (headings) + **Inter** (body)
  - Corner radii, shadows, glass-blur, gradient variables, header/mobile-nav heights
- **Header** — identical `.app-header` on every page: circular logo + "Nail Glam" wordmark, desktop nav, **theme-toggle button** (SVG moon/sun) that persists to `localStorage.theme`.
- **Mobile bottom nav** — identical 4-tab bar on every page (Home / Search / Cart / Profile). It is the canonical mobile UI: search opens a **solid full-page search overlay**, cart opens the **cart drawer**, profile opens the **profile drawer** — all in-page, no navigation.
- **Responsive** — desktop nav is replaced by the bottom tab bar below 768px; product cards clamp to 2 lines on mobile.

## How to run

No build step. Serve the folder with any static server and open `index.html`:

```bash
# e.g. Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

> Page redirects rely on Firebase Auth state, so the site must be served over `http://` (not `file://`) for full functionality.

## Notes & assumptions

- Firebase access is gated by the project's Firestore security rules; the checkout page degrades to local-only order saving if cloud writes are denied.
- `product.html` is intentionally Firebase-free (works standalone for catalog/detail browsing).
- Product data is a static client-side catalog (`products-data.js`) — ideal for swapping in a CMS or a product collection later.