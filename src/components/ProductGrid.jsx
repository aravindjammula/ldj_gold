// src/components/ProductGrid.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Correct
import { products } from '../data/products'; // Import your data

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Exclusive Collection
      </h2>
      
      {/* Grid Layout: 1 col mobile, 2 col tablet, 3 col desktop, 4 col large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;