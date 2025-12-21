import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, PenTool, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  // Only show the first 3 items as "Trending"
  const trendingProducts = products.slice(0, 3);

  return (
    <div className="bg-white">

      {/* 1. HERO SECTION - The First Impression */}
      <div className="relative h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=2000&q=80')" }}
        ></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up max-w-4xl mx-auto">
          <span className="text-ldj-gold uppercase tracking-[0.4em] text-sm font-bold mb-6 block">Since 1995</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Where Tradition Meets <br /> <span className="text-ldj-gold italic">Timeless Luxury</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Discover the finest BIS Hallmarked Gold and IGI Certified Diamonds, crafted for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collections" className="bg-ldj-gold text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-300">
              Explore Collections
            </Link>
            <Link to="/contact" className="border border-white text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-300">
              Visit Showroom
            </Link>
          </div>
        </div>
      </div>

      {/* 2. CATEGORY HIGHLIGHTS */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-serif text-center text-ldj-dark mb-12">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Gold Category - Using 'gold-choker.jpg' */}
          <Link to="/collections?category=Gold" className="group relative h-[400px] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gray-200">
              <img
                src="/react/images/gold-choker.jpg"  // ✅ CHANGED to an existing file
                alt="Gold"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-serif mb-2">Gold Jewellery</h3>
              <span className="text-xs uppercase tracking-widest border-b border-white pb-1">View Collection</span>
            </div>
          </Link>

          {/* Diamond Category - Using 'diamond-ring.jpg' */}
          <Link to="/collections?category=Diamond" className="group relative h-[400px] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gray-200">
              <img
                src="/react/images/diamond-ring.jpg" // ✅ CHANGED to an existing file
                alt="Diamond"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* ... other code stays the same ... */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-serif mb-2">Diamond Solitaires</h3>
              <span className="text-xs uppercase tracking-widest border-b border-white pb-1">View Collection</span>
            </div>
          </Link>

          {/* Bridal Category - Using 'bridal-set.jpg' */}
          <Link to="/bridal" className="group relative h-[400px] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-gray-200">
              <img
                src="/react/images/bridal-set.jpg" // ✅ CHANGED to an existing file
                alt="Bridal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* ... other code stays the same ... */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-serif mb-2">Bridal Sets</h3>
              <span className="text-xs uppercase tracking-widest border-b border-white pb-1">View Collection</span>
            </div>
          </Link>

        </div>
      </div>

      {/* 3. VALUE PROPOSITION - Building Trust */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

          {/* Card 1: BIS Hallmarked */}
          <div className="p-8 bg-white border border-transparent hover:border-ldj-gold hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-sm group cursor-default">
            <ShieldCheck className="w-12 h-12 text-ldj-gold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-serif text-xl mb-3 text-gray-900">BIS Hallmarked</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">100% purity guaranteed with government certification.</p>
          </div>

          {/* Card 2: IGI Certified */}
          <div className="p-8 bg-white border border-transparent hover:border-ldj-gold hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-sm group cursor-default">
            <Star className="w-12 h-12 text-ldj-gold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-serif text-xl mb-3 text-gray-900">IGI Certified</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">International grading reports for every diamond.</p>
          </div>

          {/* Card 3: Custom Design */}
          <div className="p-8 bg-white border border-transparent hover:border-ldj-gold hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-sm group cursor-default">
            <PenTool className="w-12 h-12 text-ldj-gold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-serif text-xl mb-3 text-gray-900">Custom Design</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Bring your dream jewelry to life with our artisans.</p>
          </div>

          {/* Card 4: Insured Shipping */}
          <div className="p-8 bg-white border border-transparent hover:border-ldj-gold hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-sm group cursor-default">
            <Truck className="w-12 h-12 text-ldj-gold mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300" />
            <h4 className="font-serif text-xl mb-3 text-gray-900">Insured Shipping</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Safe and secure delivery right to your doorstep.</p>
          </div>

        </div>
      </div>
      {/* 4. FEATURED SPOTLIGHT - Admire the Craft */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-ldj-dark text-white rounded-sm overflow-hidden">
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=80" alt="Craftsmanship" className="w-full h-[500px] object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left">
            <span className="text-ldj-gold uppercase tracking-widest text-xs font-bold mb-4 block">The Royal Collection</span>
            <h2 className="text-4xl font-serif mb-6">Fit for Royalty</h2>
            <p className="text-gray-300 font-light leading-relaxed mb-8 text-lg">
              Our Temple Jewellery collection is inspired by the divine architecture of South India.
              Each piece takes over 400 hours of intricate handwork by master goldsmiths.
            </p>
            <Link to="/vintage" className="inline-flex items-center gap-2 text-white border-b border-ldj-gold pb-1 hover:text-ldj-gold transition-colors">
              Discover the Legacy <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* 5. TRENDING NOW - Small Preview */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif text-ldj-dark">Trending Now</h2>
            <div className="h-1 w-16 bg-ldj-gold mt-2"></div>
          </div>
          <Link to="/collections" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-ldj-gold transition-colors">View All</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {trendingProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;