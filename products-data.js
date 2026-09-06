/* Nail Glam - Product Catalog
   Shared data used by home.html and product.html.
   Each product: { id, name, price, image, desc, rating, category, badge, short }
   - desc: full detail description (shown on product page)
   - short: 2-line description (shown on home cards)
*/
window.NAIL_PRODUCTS = [
  { id: 1, name: "Base Coat", price: 399, image: "p1.jpeg", category: "gels", rating: 4.9, badge: "Best Seller",
    desc: "Premium hardening base coat to lock down polish, prevent yellowing, and strengthen the nail bed.",
    short: "Strengthening base layer for perfect nails." },
  { id: 2, name: "Sculpting Poly Gel", price: 799, image: "p2.jpeg", category: "gels", rating: 4.8, badge: "New",
    desc: "Professional-grade modeling sculpting gel. Very flexible, highly durable, and odorless.",
    short: "Flexible and durable gel for nail sculpting." },
  { id: 3, name: "Press-on Nails", price: 599, image: "p3.jpeg", category: "nails", rating: 4.5, badge: "",
    desc: "Premium press-on fake nail sets. Quick to apply, comes with high-bonding nail glue and tabs.",
    short: "Quick and stylish nails for everyday wear." },
  { id: 4, name: "Nail Wipes", price: 149, image: "p4.jpeg", category: "care", rating: 4.7, badge: "",
    desc: "Lint-free cotton nail wipes. Perfect for preparing nails with sanitizer or wiping gel residues.",
    short: "Essential wipes for clean and prepped nails." },
  { id: 5, name: "Nail Remover", price: 199, image: "p5.jpeg", category: "care", rating: 4.4, badge: "",
    desc: "Gentle, acetone-free nourishing polish remover. Safely dissolves coatings without stripping moisture.",
    short: "Gentle, acetone-free polish remover." },
  { id: 6, name: "Shell Nail Polish", price: 499, image: "p6.jpeg", category: "gels", rating: 4.6, badge: "",
    desc: "Shimmering natural shell textured polish. Gives a beautiful, iridescent sea-shell look.",
    short: "Iridescent shell-textured shimmer polish." },
  { id: 7, name: "UV Curing Lamp", price: 1299, image: "p7.jpeg", category: "tools", rating: 4.9, badge: "Essential",
    desc: "Rapid UV/LED curing lamp with auto-sensor and timers. Evenly cures all gel types.",
    short: "Fast curing for gels and poly nails." },
  { id: 8, name: "Nail Art Brushes", price: 299, image: "p8.jpeg", category: "tools", rating: 4.6, badge: "",
    desc: "Set of 5 precision detail brushes. Perfect for fine lines, custom nail graphics, and dots.",
    short: "Precision brushes for fine art details." },
  { id: 9, name: "Glitter Stickers", price: 199, image: "p9.jpeg", category: "tools", rating: 4.3, badge: "",
    desc: "Self-adhesive glitter holographic nail decals. Adds sparkling overlays in seconds.",
    short: "Holographic glitter decals for sparkle." },
  { id: 10, name: "3D Nail Charms", price: 299, image: "P10.jpeg", category: "tools", rating: 4.7, badge: "",
    desc: "Set of luxury gold and pearl 3D rhinestones and charms for highly artistic nail designs.",
    short: "Luxury gold and pearl nail charms." },
  { id: 11, name: "Holographic Nail Polish", price: 399, image: "p11.jpeg", category: "gels", rating: 4.8, badge: "",
    desc: "Rainbow light-refracting linear holographic liquid polish. Requires no UV curing.",
    short: "Rainbow holographic liquid nail polish." },
  { id: 12, name: "Milky Manicure Polish", price: 299, image: "p12.jpeg", category: "gels", rating: 4.7, badge: "",
    desc: "Semi-sheer milky white nail lacquer. Clean aesthetic finish for minimalist manicures.",
    short: "Semi-sheer milky white nail lacquer." },
  { id: 13, name: "French Tip Stickers", price: 149, image: "p13.jpeg", category: "tools", rating: 4.2, badge: "",
    desc: "Flexible curved guidelines for tracing elegant clean French tips without errors.",
    short: "Curved guides for perfect French tips." },
  { id: 14, name: "Customizable Nail Decals", price: 199, image: "p14.jpeg", category: "tools", rating: 4.4, badge: "",
    desc: "Water-transfer custom style nail decal transfers. Quick to apply under any top coat.",
    short: "Water-transfer decals under any top coat." },
  { id: 15, name: "Soft Pastel Gel Polish", price: 399, image: "p15.jpeg", category: "gels", rating: 4.7, badge: "",
    desc: "Long-lasting soft pastel gel polish. Cures in 60s under LED light to a creamy high gloss.",
    short: "Pastel gel polish with a creamy gloss." },
  { id: 16, name: "Bold Neon Nail Polish", price: 299, image: "p16.jpeg", category: "gels", rating: 4.5, badge: "",
    desc: "High pigment neon nail polish. Highly responsive under blacklight, smooth matte finish.",
    short: "High-pigment neon, glow under blacklight." },
  { id: 17, name: "Matte Rose Nail Polish", price: 199, image: "p17.jpeg", category: "gels", rating: 4.6, badge: "",
    desc: "Elegant dusty rose pink shade with a premium velvety non-reflective matte finish.",
    short: "Velvety dusty rose with matte finish." },
  { id: 18, name: "Pastel Lavender Nail Polish", price: 199, image: "p18.jpeg", category: "gels", rating: 4.5, badge: "",
    desc: "Delicate pastel purple shade. Non-streaking liquid formula with rapid dry times.",
    short: "Pastel purple with rapid dry time." },
  { id: 19, name: "Chrome Mirror Nail Polish", price: 249, image: "p19.jpeg", category: "gels", rating: 4.8, badge: "",
    desc: "High reflective silver chrome metallic nail lacquer. Mirror-like shine without gel curing.",
    short: "Mirror-shine silver chrome polish." },
  { id: 20, name: "Overnight Repair Treatment", price: 399, image: "p20.jpg", category: "care", rating: 4.9, badge: "Best Seller",
    desc: "Overnight nail treatment oil rich in Keratin, Vitamin E, and organic Jojoba.",
    short: "Keratin and jojoba overnight repair oil." },
  { id: 21, name: "Healthy Glow Duo", price: 499, image: "p21.jpeg", category: "care", rating: 4.6, badge: "",
    desc: "Double action cuticle care oil and base nail strengthening glaze set.",
    short: "Cuticle oil and strengthening glaze set." },
  { id: 22, name: "Almond Nail Tips", price: 199, image: "p22.jpeg", category: "nails", rating: 4.7, badge: "",
    desc: "Pre-shaped almond full cover gel nail extension tips. 240pcs in 12 sizes.",
    short: "Pre-shaped almond tips, 240 pcs." },
  { id: 23, name: "Red Ruby Gel Polish", price: 249, image: "p23.jpeg", category: "gels", rating: 4.8, badge: "",
    desc: "Classic royal red highly pigmented gel paint. Rich shine that does not chip or dull.",
    short: "Royal red gel paint with rich shine." },
  { id: 24, name: "Pearlized Shell Nail Polish", price: 200, image: "p24.jpeg", category: "gels", rating: 4.5, badge: "",
    desc: "Soft white pearl reflections. Enhances the natural glow of clean nails.",
    short: "Soft pearl reflections for natural glow." },
  { id: 25, name: "Iridescent Shell Nail Polish", price: 249, image: "p25.jpeg", category: "gels", rating: 4.7, badge: "",
    desc: "Chameleon shade-shifting shimmer nail color. Changes color between pink, purple, and green.",
    short: "Shade-shifting pink, purple to green." }
];

window.getProductById = function (id) {
  return (window.NAIL_PRODUCTS || []).find(p => String(p.id) === String(id));
};

window.getProductByName = function (name) {
  return (window.NAIL_PRODUCTS || []).find(p => p.name.toLowerCase() === String(name).toLowerCase().trim());
};

window.getRelatedProducts = function (product, limit = 8) {
  if (!product) return [];
  const sameCat = (window.NAIL_PRODUCTS || []).filter(p => p.id !== product.id && p.category === product.category);
  const others = (window.NAIL_PRODUCTS || []).filter(p => p.id !== product.id && p.category !== product.category);
  return sameCat.concat(others).slice(0, limit);
};

window.formatPrice = function (n) {
  return "₹" + Number(n).toLocaleString("en-IN");
};

window.categoryName = function (cat) {
  const map = { gels: "Gels & Polishes", nails: "Press-ons", tools: "Accessories & Tools", care: "Care & Prep" };
  return map[cat] || cat;
};
