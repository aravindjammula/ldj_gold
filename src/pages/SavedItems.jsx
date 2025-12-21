import React from 'react';

const SavedItems = () => {
  // Example of saved items using your verified public/images folder
  const wishlist = [
    { id: 1, name: "Regal Blossom Choker", price: "₹4,38,750", img: "/images/gold-choker.jpg" },
    { id: 5, name: "Diamond Solitaire Ring", price: "₹1,85,000", img: "/images/diamond-ring.jpg" }
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {wishlist.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <button className="absolute bottom-0 left-0 w-full bg-black/80 text-white py-4 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
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