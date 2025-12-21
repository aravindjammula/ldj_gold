// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Background Image - Using a placeholder luxury image from Unsplash */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop')",
        }} 
      >
        {/* Dark Overlay so text is readable */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h2 className="text-lg md:text-xl uppercase tracking-widest mb-4 font-light">The Essence of Purity</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          LDJ <span className="text-ldj-gold">Gold & Diamonds</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto text-gray-200">
          Handcrafted jewelry designed to celebrate your most precious moments.
        </p>
        <button className="bg-ldj-gold text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;