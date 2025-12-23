// NOTE: We added '/react' to the start of every image path so it works on GitHub Pages.

const products = [
  {
    "id": 1,
    "name": "Regal Blossom Choker",
    "price": "₹4,38,750",
    "category": "Gold",
    "image": "/images/gold-choker.webp",
    "badge": "Bestseller",
    "description": "22K gold choker featuring intricate floral motifs and antique finish. Weight: 32.5g",
    "isNew": false
  },
  {
    "id": 2,
    "name": "Heritage Gold Bajuband",
    "price": "₹3,37,500",
    "category": "Gold",
    "image": "/images/gold-bajuband.webp",
    "badge": "Traditional",
    "description": "Handcrafted armlet with temple jewelry artistry. Weight: 25g",
    "isNew": true
  },
  {
    "id": 3,
    "name": "Lord Krishna Motif Pendant",
    "price": "₹1,62,000",
    "category": "Gold",
    "image": "/images/krishna-pendant.webp",
    "badge": "Divine",
    "description": "Exquisite pendant capturing the divine grace of Lord Krishna. Weight: 12g",
    "isNew": true
  },
  {
    "id": 4,
    "name": "Lord Ganesh Pendant",
    "price": "₹1,08,000",
    "category": "Gold",
    "image": "/images/ganesh-pendant.webp",
    "badge": "Blessings",
    "description": "A symbol of new beginnings crafted in pure 22K gold. Weight: 8g",
    "isNew": false
  },
  {
    "id": 5,
    "name": "Diamond Solitaire Ring",
    "price": "₹1,85,000",
    "category": "Diamond",
    "image": "/images/diamond-ring.webp",
    "badge": "IGI Certified",
    "description": "Classic 0.75ct solitaire setting in 18K white gold. VVS1 Clarity.",
    "isNew": true
  },
  {
    "id": 6,
    "name": "Riviera Tennis Necklace",
    "price": "₹5,50,000",
    "category": "Diamond",
    "image": "/images/diamond-necklace.webp",
    "badge": "Premium",
    "description": "A cascading line of brilliant-cut diamonds (5.2ct total weight) for ultimate luxury.",
    "isNew": true
  },
  {
    "id": 7,
    "name": "Halo Engagement Ring",
    "price": "₹2,25,000",
    "category": "Engagement",
    "image": "/images/halo-ring.webp",
    "badge": "Forever",
    "description": "A stunning central diamond surrounded by a halo of brilliance.",
    "isNew": true
  },
  {
    "id": 8,
    "name": "Antique Temple Earrings",
    "price": "₹2,95,000",
    "category": "Vintage",
    "image": "/images/temple-earrings.webp",
    "badge": "Handmade",
    "description": "Traditional Jhumkas with intricate Nakshi work and ruby embellishments. Weight: 22g",
    "isNew": true
  },
  {
    "id": 9,
    "name": "Vintage Art Brooch",
    "price": "₹1,48,500",
    "category": "Vintage",
    "image": "/images/vintage-brooch.webp",
    "badge": "Classic",
    "description": "A timeless accessory to elevate any traditional attire. Weight: 11g",
    "isNew": false
  },
  {
    "id": 10,
    "name": "Antique Natural Pearl Set",
    "price": "₹4,50,000",
    "category": "Vintage",
    "image": "/images/pearl-set.webp",
    "badge": "Rare",
    "description": "Certified natural Basra pearls set in antique gold.",
    "isNew": true
  },
  {
    "id": 11,
    "name": "Opulent Bridal Set",
    "price": "₹16,50,000",
    "category": "Bridal",
    "image": "/images/bridal-set.webp",
    "badge": "Exclusive",
    "description": "Complete heavy bridal set including necklace, earrings, and maang tikka. Weight: 120g",
    "isNew": true
  },
  {
    "id": 12,
    "name": "Antique Ruby Gold Ring",
    "price": "₹1,25,000",
    "category": "Antique",
    "image": "/images/Antique-Ruby-Ring.webp",
    "badge": "Vintage",
    "description": "Ornate ruby ring featuring a large center stone and gold detailing.",
    "isNew": false
  },
  {
    "id": 13,
    "name": "Heritage Gold Kadiyam",
    "price": "₹2,10,000",
    "category": "Gold",
    "image": "/images/GOLD-KADIYAM.webp",
    "badge": "Premium",
    "description": "A solid 22K gold bangle with traditional patterns and high polish.",
    "isNew": true
  },
  {
    "id": 14,
    "name": "Patterned Gold Kadiyam",
    "price": "₹85,000",
    "category": "Gold",
    "image": "/images/pattern-kadiyam.webp",
    "badge": "Elegant",
    "description": "Intricately designed gold kadiyam with modern geometric patterns.",
    "isNew": false
  },
  {
    "id": 15,
    "name": "Emerald Green Stone Ring",
    "price": "₹95,000",
    "category": "Engagement",
    "image": "/images/green-stone-ring.webp",
    "badge": "New",
    "description": "Vibrant green gemstone set in a delicate yellow gold band.",
    "isNew": true
  },
  {
    "id": 16,
    "name": "Traditional Maang Tikka",
    "price": "₹55,000",
    "category": "Bridal",
    "image": "/images/Maang-Tikkas.webp",
    "badge": "Ethnic",
    "description": "Elegant head jewelry for traditional Indian bridal wear.",
    "isNew": false
  },
  {
    "id": 17,
    "name": "Royal Charm Necklace",
    "price": "₹82,000",
    "category": "Fashion",
    "image": "/images/Royal-charm.webp",
    "badge": "Stylish",
    "description": "Modern pendant design with a royal aesthetic.",
    "isNew": true
  },
  {
    "id": 18,
    "name": "Ruby Halo Ring",
    "price": "₹1,45,000",
    "category": "Gemstone",
    "image": "/images/ruby-ring.webp",
    "badge": "Luxe",
    "description": "Deep red ruby surrounded by a brilliant diamond halo.",
    "isNew": true
  },
  {
    "id": 19,
    "name": "Classic Mangtika",
    "price": "₹48,000",
    "category": "Bridal",
    "image": "/images/Mangtika.webp",
    "badge": "Traditional",
    "description": "Gold mangtika featuring exquisite craftsmanship.",
    "isNew": false
  },
  {
    "id": 20,
    "name": "Ganesh Heritage Pendant",
    "price": "₹1,15,000",
    "category": "Gold",
    "image": "/images/ganesh-pendant.webp",
    "badge": "Divine",
    "description": "Ornate gold pendant depicting Lord Ganesha with fine detailing.",
    "isNew": false
  }
];

export default products;
export { products };