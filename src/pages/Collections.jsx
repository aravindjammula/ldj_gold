import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown, Sparkles, Grid, List, Search, X } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Collections = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Categories with icons
  const categories = [
    { name: 'All', icon: '✨' },
    { name: 'Gold', icon: '🥇' },
    { name: 'Diamond', icon: '💎' },
    { name: 'Bridal', icon: '👰' },
    { name: 'Vintage', icon: '🏺' },
    { name: 'Engagement', icon: '💍' },
    { name: 'Earrings', icon: '👂' },
    { name: 'Necklaces', icon: '📿' }
  ];

  // Handle URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      const matchingCategory = categories.find(cat => cat.name === formattedCategory);
      if (matchingCategory) {
        setActiveCategory(formattedCategory);
      }
    }
  }, [searchParams]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
    const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));

    switch(sortBy) {
      case 'price-low': return priceA - priceB;
      case 'price-high': return priceB - priceA;
      case 'newest': return new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0);
      default: return 0; // Featured
    }
  });

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    navigate(`/collections?category=${categoryName.toLowerCase()}`);
  };

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-3 text-ldj-gold mb-6">
              <div className="w-8 h-px bg-ldj-gold"></div>
              <Sparkles size={18} />
              <span className="uppercase tracking-widest text-sm font-bold">Signature Collections</span>
              <Sparkles size={18} />
              <div className="w-8 h-px bg-ldj-gold"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Timeless <span className="text-ldj-gold">Elegance</span>
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Discover jewelry that transcends generations. Each piece tells a story of craftsmanship and passion.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'} ${isScrolled || isSearchOpen ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Bar */}
            <div className="w-full md:w-auto">
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search collections..."
                      className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-ldj-gold focus:border-transparent outline-none shadow-sm"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:border-ldj-gold transition-all w-full md:w-64"
                  >
                    <Search size={18} className="text-gray-400" />
                    <span className="text-gray-500 text-sm">Search collections...</span>
                  </button>
                )}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-ldj-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-ldj-gold text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-ldj-gold transition-all">
                <span className="text-sm text-gray-700">
                  Sort: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price ↑' : sortBy === 'price-high' ? 'Price ↓' : 'Newest'}
                </span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button onClick={() => setSortBy('featured')} className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 hover:text-ldj-gold">Featured</button>
                <button onClick={() => setSortBy('newest')} className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 hover:text-ldj-gold">Newest First</button>
                <button onClick={() => setSortBy('price-low')} className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 hover:text-ldj-gold">Price: Low to High</button>
                <button onClick={() => setSortBy('price-high')} className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 hover:text-ldj-gold">Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium
                ${activeCategory === cat.name 
                  ? 'bg-gradient-to-r from-ldj-gold to-amber-500 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Results Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-1">
              {activeCategory === 'All' ? 'All Collections' : activeCategory}
            </h2>
            <p className="text-gray-500">
              {sortedProducts.length} exquisite {sortedProducts.length === 1 ? 'piece' : 'pieces'} found
              {searchQuery && <span> for "{searchQuery}"</span>}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-ldj-gold hover:text-ldj-dark flex items-center gap-1"
              >
                <X size={16} />
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Products Grid/List */}
        {sortedProducts.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
          }>
            {sortedProducts.map((product) => (
              <div 
                key={product.id} 
                className={viewMode === 'list' ? 'bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300' : ''}
              >
                <ProductCard product={product} viewMode={viewMode} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200">
            <div className="w-24 h-24 bg-gradient-to-br from-ldj-gold/10 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="text-ldj-gold" size={40} />
            </div>
            <h3 className="text-2xl font-serif text-gray-900 mb-3">No pieces found</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              {searchQuery 
                ? `We couldn't find any items matching "${searchQuery}"`
                : `No items found in the ${activeCategory} category`
              }
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-ldj-dark text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View All Collections
              </button>
              <button
                onClick={() => navigate('/bespoke')}
                className="px-6 py-3 border-2 border-ldj-gold text-ldj-gold rounded-lg hover:bg-ldj-gold hover:text-white transition-all"
              >
                Custom Design
              </button>
            </div>
          </div>
        )}

        {/* Featured Collection Banner */}
        {sortedProducts.length > 0 && (
          <div className="mt-20 bg-gradient-to-r from-ldj-dark via-gray-800 to-amber-900 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <h3 className="text-3xl font-serif mb-4">New Arrivals</h3>
                <p className="text-gray-200 mb-6">
                  Explore our latest collection featuring innovative designs that blend traditional craftsmanship with contemporary aesthetics.
                </p>
                <button
                  onClick={() => navigate('/collections?category=new')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Discover New Designs
                  <ChevronDown className="rotate-270" size={16} />
                </button>
              </div>
              <div className="h-64 md:h-full bg-[url('https://images.unsplash.com/photo-1594576722512-582d5577dc56?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;