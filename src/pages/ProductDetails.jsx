import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Star, Truck, ShieldCheck } from 'lucide-react';
import { products } from '../data/products'; // Ensure path is correct

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // 1. Find the correct product based on the URL ID
  const product = products.find(p => p.id === parseInt(id));

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="text-center py-20 text-xl font-serif">Product not found.</div>;
  }

  // 2. THE FIX: Parse the price safely for calculations
  // We remove anything that is NOT a number (like ₹ or ,)
  const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
  // Calculate total and format it back to Indian currency style
  const totalPrice = (numericPrice * quantity).toLocaleString('en-IN');

  return (
    <div className="bg-white min-h-screen pb-20 pt-10 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-xs md:text-sm text-gray-500 mb-8 uppercase tracking-wider">
          <Link to="/" className="hover:text-ldj-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-ldj-gold transition-colors">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-bold truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Image Gallery */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-[4/5] bg-gray-50 rounded-sm overflow-hidden border border-gray-100 shadow-sm">
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-zoom-in"
               />
               {/* Badge Overlay */}
               {product.badge && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-ldj-dark text-xs font-bold uppercase tracking-widest px-4 py-2">
                    {product.badge}
                  </span>
               )}
            </div>
          </div>

          {/* RIGHT COLUMN: Product Info */}
          <div className="flex flex-col animate-fade-in-up delay-100">
            
            <h1 className="text-4xl md:text-5xl font-serif text-ldj-dark mb-4 leading-tight">
              {product.name}
            </h1>
            
            {/* Price & Rating Section */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-8">
              {/* FIX: Use product.price directly to avoid double symbols */}
              <span className="text-3xl text-ldj-gold font-serif font-medium">
                {product.price}
              </span>
              
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium tracking-wide">(12 REVIEWS)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
              {product.description || "Experience the pinnacle of craftsmanship with this exquisite piece. Meticulously designed for those who appreciate the finer things in life."}
            </p>

            {/* Quantity Selector & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-gray-200 rounded-sm w-max">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                  className="p-4 hover:text-ldj-gold transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-serif text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)} 
                  className="p-4 hover:text-ldj-gold transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Dynamic Button Text */}
              <button className="flex-1 bg-ldj-dark text-white py-4 px-8 uppercase tracking-widest text-xs font-bold hover:bg-ldj-gold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <ShoppingBag size={18} />
                <span>Add to Cart — ₹{totalPrice}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 mb-10 p-6 bg-gray-50 rounded-sm">
              <div className="flex items-center gap-3">
                <Truck className="text-ldj-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-ldj-dark">Free Shipping</h4>
                  <p className="text-xs text-gray-500 mt-1">Insured & Secure</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-ldj-gold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-ldj-dark">Lifetime Warranty</h4>
                  <p className="text-xs text-gray-500 mt-1">100% Certified</p>
                </div>
              </div>
            </div>

             {/* Information Tabs */}
             <div className="mt-auto">
               <div className="flex border-b border-gray-200 mb-6">
                 <button 
                   onClick={() => setActiveTab('description')}
                   className={`pb-4 mr-8 text-xs uppercase tracking-widest font-bold transition-all relative ${activeTab === 'description' ? 'text-ldj-gold' : 'text-gray-400 hover:text-gray-600'}`}
                 >
                   Description
                   {activeTab === 'description' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ldj-gold"></span>}
                 </button>
                 <button 
                   onClick={() => setActiveTab('details')}
                   className={`pb-4 text-xs uppercase tracking-widest font-bold transition-all relative ${activeTab === 'details' ? 'text-ldj-gold' : 'text-gray-400 hover:text-gray-600'}`}
                 >
                   Product Details
                   {activeTab === 'details' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ldj-gold"></span>}
                 </button>
               </div>
               
               <div className="text-gray-500 font-light leading-relaxed h-32 animate-fade-in">
                 {activeTab === 'description' ? (
                   <p>Handcrafted by our master artisans, this piece undergoes rigorous quality checks. It comes with a certificate of authenticity (BIS Hallmarked / IGI Certified) and is packaged in our signature velvet box.</p>
                 ) : (
                   <ul className="space-y-2 text-sm">
                     <li className="flex justify-between border-b border-gray-100 pb-2"><span>Material</span> <span className="text-gray-900">22K Gold / 18K Diamond</span></li>
                     <li className="flex justify-between border-b border-gray-100 pb-2"><span>Gross Weight</span> <span className="text-gray-900">Approx 15-20g</span></li>
                     <li className="flex justify-between border-b border-gray-100 pb-2"><span>Stone</span> <span className="text-gray-900">Certified Gemstones</span></li>
                     <li className="flex justify-between border-b border-gray-100 pb-2"><span>Warranty</span> <span className="text-gray-900">Lifetime Maintenance</span></li>
                   </ul>
                 )}
               </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;