import React, { useEffect } from 'react';
import productsData from '../data/products.js';
import ProductCard from '../components/ProductCard';

const PinkGold = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  // Filter for 'Pink Gold' category
  const products = productsData.filter(p => p.category === 'Pink Gold');

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="relative h-[50vh] flex items-center justify-center bg-ldj-dark overflow-hidden">
        {/* Using a warm-toned image for Rose/Pink gold feel */}
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2000&q=80')" }}></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h2 className="text-ldj-gold uppercase tracking-[0.3em] text-sm font-bold mb-4">Modern Romance</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Pink Gold</h1>
          <p className="text-gray-200 max-w-xl mx-auto font-light text-lg">Soft, blush-toned rose gold designed for the contemporary romantic.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(item => <ProductCard key={item.id} product={item} />)}
        </div>
        {products.length === 0 && <div className="text-center text-gray-500 text-lg py-12">New Pink Gold styles coming soon.</div>}
      </div>
    </div>
  );
};
export default PinkGold;