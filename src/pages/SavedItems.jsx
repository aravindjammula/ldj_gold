import React from 'react';

const SavedItems = () => {
  // 4 Products with perfect image paths and descriptive metadata
  const wishlist = [
    { 
      id: 1, 
      name: "Regal Blossom Choker", 
      price: "₹4,38,750", 
      img: "/images/gold-choker.jpg", 
      alt: "Traditional 22k Gold Regal Blossom Choker Necklace - LDJ Gold Mangalagiri" 
    },
    { 
      id: 2, 
      name: "Heritage Bridal Haram", 
      price: "₹8,50,000", 
      img: "/images/bridal-set.jpg", 
      alt: "Antique Gold Heritage Bridal Haram with Ruby Studs - LDJ Gold Collection" 
    },
    { 
      id: 3, 
      name: "Diamond Solitaire Ring", 
      price: "₹1,85,000", 
      img: "/images/diamond-ring.jpg", 
      alt: "Certified 1 Carat Diamond Solitaire Engagement Ring in 18k White Gold" 
    },
    { 
      id: 4, 
      name: "Temple Goddess Necklace", 
      price: "₹5,12,000", 
      img: "/images/temple-earrings.jpg", 
      alt: "South Indian Temple Jewelry Gold Goddess Lakshmi Pendant Necklace" 
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-gray-100 pb-8 mb-12">
          <div>
            <h1 className="text-5xl font-serif text-black italic">My <span className="not-italic font-bold">Saved</span> Items</h1>
            <p className="text-gray-400 text-xs uppercase tracking-widest mt-2">Curate your legacy collection</p>
          </div>
          <span className="text-ldj-gold font-bold text-sm tracking-widest uppercase">{wishlist.length} Items</span>
        </div>

        {/* Responsive Grid System: 1 column on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {wishlist.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative border border-gray-100 shadow-sm">
                <img 
                   src={item.img} 
                   alt={item.alt} /* Contextual Alt Text for Google Image SEO */
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                   loading="lazy" /* Performance optimization for faster page load */
                />
                <button 
                  aria-label={`Add ${item.name} to shopping bag`} /* Accessibility for Screen Readers */
                  className="absolute bottom-0 left-0 w-full bg-black/90 text-white py-4 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Bag
                </button>
              </div>
              <h3 className="text-black font-serif text-xl mb-1">{item.name}</h3>
              <p className="text-ldj-gold font-bold text-sm tracking-wider">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedItems;