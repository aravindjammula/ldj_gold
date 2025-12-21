// NOTE: We added '/react' to the start of every image path so it works on GitHub Pages.

const products = [
  // --- GOLD ---
  {
    id: 1,
    name: "Regal Blossom Choker",
    price: "₹4,38,750",
    category: "Gold",
    image: "/images/gold-choker.jpg", // ✅ Fixed: lowercase, no spaces, added /react
    badge: "Bestseller",
    description: "22K gold choker featuring intricate floral motifs and antique finish. Weight: 32.5g",
    isNew: false
  },
  {
    id: 2,
    name: "Heritage Gold Bajuband",
    price: "₹3,37,500",
    category: "Gold",
    image: "/images/gold-bajuband.jpg", 
    badge: "Traditional",
    description: "Handcrafted armlet with temple jewelry artistry. Weight: 25g",
    isNew: true
  },
  {
    id: 3,
    name: "Lord Krishna Motif Pendant",
    price: "₹1,62,000",
    category: "Gold",
    image: "/images/krishna-pendant.jpg", 
    badge: "Divine",
    description: "Exquisite pendant capturing the divine grace of Lord Krishna. Weight: 12g",
    isNew: true
  },
  {
    id: 4,
    name: "Lord Ganesh Pendant",
    price: "₹1,08,000",
    category: "Gold",
    image: "/images/ganesh-pendant.jpg",
    badge: "Blessings",
    description: "A symbol of new beginnings crafted in pure 22K gold. Weight: 8g",
    isNew: false
  },

  // --- DIAMOND ---
  {
    id: 5,
    name: "Diamond Solitaire Ring",
    price: "₹1,85,000",
    category: "Diamond",
    image: "/images/diamond-ring.jpg", 
    badge: "IGI Certified",
    description: "Classic 0.75ct solitaire setting in 18K white gold. VVS1 Clarity.",
    isNew: true
  },
  {
    id: 6,
    name: "Riviera Tennis Necklace",
    price: "₹5,50,000",
    category: "Diamond",
    image: "/images/diamond-necklace.jpg", 
    badge: "Premium",
    description: "A cascading line of brilliant-cut diamonds (5.2ct total weight) for ultimate luxury.",
    isNew: true
  },

  // --- ENGAGEMENT ---
  {
    id: 7,
    name: "Halo Engagement Ring",
    price: "₹2,25,000",
    category: "Engagement",
    image: "/images/halo-ring.jpg", 
    badge: "Forever",
    description: "A stunning central diamond surrounded by a halo of brilliance.",
    isNew: true
  },

  // --- VINTAGE / ANTIQUE ---
  {
    id: 8,
    name: "Antique Temple Earrings",
    price: "₹2,95,000",
    category: "Vintage",
    image: "/images/temple-earrings.jpg", 
    badge: "Handmade",
    description: "Traditional Jhumkas with intricate Nakshi work and ruby embellishments. Weight: 22g",
    isNew: true
  },
  {
    id: 9,
    name: "Vintage Art Brooch",
    price: "₹1,48,500",
    category: "Vintage",
    image: "/images/vintage-brooch.jpg", 
    badge: "Classic",
    description: "A timeless accessory to elevate any traditional attire. Weight: 11g",
    isNew: false
  },
  {
    id: 10,
    name: "Antique Natural Pearl Set",
    price: "₹4,50,000",
    category: "Vintage",
    image: "/images/pearl-set.jpg", 
    badge: "Rare",
    description: "Certified natural Basra pearls set in antique gold.",
    isNew: true
  },

  // --- BRIDAL ---
  {
    id: 11,
    name: "Opulent Bridal Set",
    price: "₹16,50,000",
    category: "Bridal",
    image: "/images/bridal-set.jpg", 
    badge: "Exclusive",
    description: "Complete heavy bridal set including necklace, earrings, and maang tikka. Weight: 120g",
    isNew: true
  },

  // --- PEARL ---
  {
    id: 12,
    name: "Natural Pearl Drop Earrings",
    price: "₹85,000",
    category: "Vintage",
    image: "/images/pearl-earrings.jpg", 
    badge: "Elegant",
    description: "Simple yet sophisticated natural pearl drops in 18K Gold.",
    isNew: false
  }
];

export default products;
export { products };