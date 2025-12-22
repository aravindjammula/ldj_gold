import React from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-sm border border-gray-100">
      
      {/* 1. IMAGE AREA */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50">
        
        {product.badge && (
          <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-ldj-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 z-20 shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button 
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute top-2 right-2 z-20 p-2 rounded-full bg-white/0 text-white hover:bg-white hover:text-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <Heart size={18} />
        </button>

        {/* The Image */}
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img 
            src={product.image} 
            alt={`${product.name} - ${product.category} Jewelry | LDJ Gold & Diamonds`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <button 
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-ldj-gold hover:text-white transition-colors" 
            aria-label={`Quick view ${product.name}`}
            title="Quick View"
          >
            <Eye size={18} />
          </button>
          
          <button 
            className="bg-ldj-dark text-white p-3 rounded-full shadow-lg hover:bg-ldj-gold transition-colors" 
            aria-label={`Add ${product.name} to shopping bag`}
            title="Add to Cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* 2. TEXT CONTENT */}
      <div className="p-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg text-gray-900 group-hover:text-ldj-gold transition-colors duration-300 mb-2 truncate">
            {product.name}
          </h3>
        </Link>

        <div className="text-ldj-gold font-medium font-serif tracking-wide">
          {product.price}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;