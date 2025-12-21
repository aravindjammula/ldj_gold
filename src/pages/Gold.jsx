import React, { useEffect } from 'react';
import productsData from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';

const Gold = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const products = productsData.filter(p => p.category === 'Gold');

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center bg-ldj-dark overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/Regal_Blossom_Choker.jpg')" }}></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h2 className="text-ldj-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">22K & 18K Collection</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Gold Jewellery</h1>
          <p className="text-gray-200 max-w-xl mx-auto font-light text-lg">Tradition woven into every gram. Discover our heritage antique and modern gold designs.</p>
        </div>
      </div>
      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(item => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  );
};
export default Gold;