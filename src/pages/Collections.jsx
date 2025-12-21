import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products'; // Correct path to data
import ProductCard from '../components/ProductCard';

// Fixed Background Image
const heroImage = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80";

const Collections = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isScrolled, setIsScrolled] = useState(false);

  // Categories list
  const categories = ['All', 'Gold', 'Diamond', 'Bridal', 'Vintage', 'Engagement'];

  // 1. Handle URL params (e.g. ?category=Gold)
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // Capitalize first letter safely
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      // Check if it matches a valid category, otherwise default to All
      if (categories.includes(formattedCategory)) {
        setActiveCategory(formattedCategory);
      }
    }
  }, [searchParams]);

  // 2. Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Filtering Logic
  const filteredProducts = products.filter(product => 
    activeCategory === 'All' ? true : product.category === activeCategory
  );

  // 4. SORTING FIX: Parse the price string into a real number
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    // Remove symbols (₹) and commas (,) to get raw numbers
    const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
    const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));

    if (sortBy === 'price-low') return priceA - priceB;
    if (sortBy === 'price-high') return priceB - priceA;
    return 0; // Default (Featured)
  });

  return (
    <div className="bg-white min-h-screen pb-20 font-body">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${heroImage})` }} 
        ></div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-ldj-gold mb-3">The Catalogue</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Signature Collections</h1>
          <p className="text-gray-200 max-w-xl mx-auto font-light text-lg">
            Discover jewellery that transcends time. From everyday gold essentials to heirloom solitaires.
          </p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className={`sticky top-20 z-40 bg-white transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'shadow-md py-2' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Category Buttons */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-xs md:text-sm font-bold uppercase tracking-widest
                    ${activeCategory === cat 
                      ? 'bg-ldj-dark text-white shadow-lg transform scale-105' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto relative group">
              <span className="text-gray-400 text-xs uppercase tracking-wider hidden md:block">Sort By:</span>
              <div className="relative w-full md:w-48">
                <button className="w-full flex items-center justify-between bg-white border border-gray-200 px-4 py-2 rounded-sm text-xs uppercase tracking-widest text-gray-700 hover:border-ldj-gold transition focus:outline-none">
                  {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                  <ChevronDown size={16} />
                </button>
                
                {/* Dropdown Menu (Hover based) */}
                <div className="absolute right-0 mt-1 w-full bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button onClick={() => setSortBy('featured')} className="block w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 hover:text-ldj-gold">Featured</button>
                  <button onClick={() => setSortBy('price-low')} className="block w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 hover:text-ldj-gold">Price: Low to High</button>
                  <button onClick={() => setSortBy('price-high')} className="block w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-gray-50 hover:text-ldj-gold">Price: High to Low</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-gray-500 text-sm font-light">
          Showing <span className="text-ldj-dark font-medium">{sortedProducts.length}</span> exquisite pieces from <span className="text-ldj-gold font-serif italic">{activeCategory}</span>
        </div>

        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {sortedProducts.map((product) => (
              <div key={product.id} className="animate-fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-gray-50 rounded-sm">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-gray-900">No pieces found</h3>
            <p className="text-gray-500">Try selecting a different category.</p>
            <button onClick={() => setActiveCategory('All')} className="mt-4 text-ldj-gold underline hover:text-black">View All Items</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;