import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Star, Truck, ShieldCheck, Heart, Share2, ChevronRight, Gem, Sparkles, RotateCcw, Check, Info } from 'lucide-react';
import productsData from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadProductData();
  }, [id]);

  const loadProductData = () => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      const related = productsData.filter(
        p => p.category === foundProduct.category && p.id !== foundProduct.id
      ).slice(0, 4);
      setRelatedProducts(related);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-amber-50">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/collections')}
            className="px-6 py-3 bg-ldj-gold text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Back to Collections
          </button>
        </div>
      </div>
    );
  }

  // Parse price safely for calculations
  const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''));
  const totalPrice = (numericPrice * quantity).toLocaleString('en-IN');

  const handleAddToCart = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  // Function to get category-specific details
  const getCategoryDetails = () => {
    switch(product.category) {
      case 'Gold':
        return {
          material: '22K Pure Gold',
          stoneType: 'N/A',
          weight: product.description.includes('Weight:') 
            ? product.description.split('Weight:')[1].trim()
            : '15-20g (approx)',
          certification: 'BIS Hallmarked'
        };
      case 'Diamond':
        return {
          material: '18K White Gold / Platinum',
          stoneType: 'Certified Diamond',
          weight: product.description.includes('total weight') 
            ? product.description.match(/\d+\.?\d*ct/)?.[0] || 'Custom'
            : 'Custom',
          certification: 'IGI Certified'
        };
      case 'Engagement':
        return {
          material: '18K Gold/Platinum',
          stoneType: 'Diamond Solitaire/Halo',
          weight: 'Custom',
          certification: 'IGI Certified'
        };
      case 'Vintage':
        return {
          material: '22K Gold',
          stoneType: product.description.includes('ruby') ? 'Ruby' : 
                    product.description.includes('pearl') ? 'Natural Pearl' : 'Gemstone',
          weight: product.description.includes('Weight:') 
            ? product.description.split('Weight:')[1].trim()
            : 'Varies',
          certification: 'Antique Certification'
        };
      case 'Bridal':
        return {
          material: '22K Gold',
          stoneType: 'Polki/Kundan/Gemstones',
          weight: product.description.includes('Weight:') 
            ? product.description.split('Weight:')[1].trim()
            : 'Heavy Set',
          certification: 'BIS Hallmarked'
        };
      default:
        return {
          material: '22K Gold',
          stoneType: 'Gemstones',
          weight: 'Custom',
          certification: 'Certified'
        };
    }
  };

  const details = getCategoryDetails();

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen pb-20">
      
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-24 right-6 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
            <Check size={20} />
            <span>Added to cart successfully!</span>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-ldj-gold transition-colors">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/collections" className="hover:text-ldj-gold transition-colors">Collections</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link 
            to={`/collections?category=${product.category.toLowerCase()}`} 
            className="hover:text-ldj-gold transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Single Main Image Only */}
          <div>
            {/* Main Image Only - No Thumbnail Gallery */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white shadow-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/gold-choker.jpg';
                }}
              />
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-6 left-6 bg-gradient-to-r from-ldj-gold to-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {product.badge}
                </div>
              )}
              {/* Status Badge */}
              {product.isNew && (
                <div className="absolute top-6 right-20 bg-white/90 backdrop-blur-sm text-ldj-dark px-3 py-1 rounded-full text-xs font-bold">
                  NEW ARRIVAL
                </div>
              )}
              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full backdrop-blur-md ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700 hover:bg-white'}`}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
                <button className="p-3 rounded-full backdrop-blur-md bg-white/80 text-gray-700 hover:bg-white">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-ldj-gold mb-4">
                <Sparkles size={16} />
                <span className="uppercase tracking-widest text-xs font-bold">{product.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    4.8 (42 reviews)
                  </span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-green-600 text-sm font-medium">
                  In Stock
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-serif text-ldj-gold font-bold">
                  {product.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Product Details Tabs */}
            <div className="mb-8">
              <div className="flex gap-8 border-b border-gray-200 mb-6">
                {['details', 'specifications', 'shipping'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm font-medium transition-all relative capitalize ${
                      activeTab === tab 
                        ? 'text-gray-900 font-semibold' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-ldj-gold to-amber-500"></span>
                    )}
                  </button>
                ))}
              </div>

              <div className="h-40">
                {activeTab === 'details' && (
                  <ul className="space-y-3">
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Material</span>
                      <span className="font-medium">{details.material}</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Stone Type</span>
                      <span className="font-medium">{details.stoneType}</span>
                    </li>
                    <li className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Weight</span>
                      <span className="font-medium">{details.weight}</span>
                    </li>
                    <li className="flex justify-between py-2">
                      <span className="text-gray-600">Certification</span>
                      <span className="font-medium">{details.certification}</span>
                    </li>
                  </ul>
                )}

                {activeTab === 'specifications' && (
                  <div className="space-y-3">
                    <p className="text-gray-600">Handcrafted with precision using traditional jewelry-making techniques passed down through generations. Each piece undergoes rigorous quality checks.</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>100% Certified Materials</li>
                      <li>Hand-polished Finish</li>
                      <li>Secure Prong Settings</li>
                      <li>Lifetime Maintenance Support</li>
                      <li>Comes with Certificate of Authenticity</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Truck className="text-ldj-gold" size={20} />
                      <div>
                        <p className="font-medium">Free Insured Shipping</p>
                        <p className="text-gray-500 text-sm">Delivery in 5-7 business days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <RotateCcw className="text-ldj-gold" size={20} />
                      <div>
                        <p className="font-medium">30-Day Return Policy</p>
                        <p className="text-gray-500 text-sm">Easy returns & exchanges</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-ldj-gold transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-16 text-center text-xl font-serif">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-ldj-gold transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="text-lg font-medium">
                  Total: <span className="text-ldj-gold font-bold">₹{totalPrice}</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-ldj-dark to-gray-900 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
                <button className="border-2 border-ldj-gold text-ldj-gold py-4 rounded-lg font-semibold hover:bg-ldj-gold hover:text-white transition-all flex items-center justify-center gap-3">
                  <Gem size={20} />
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ldj-gold/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-ldj-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Certified Authenticity</p>
                    <p className="text-gray-500 text-xs">BIS & IGI Certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ldj-gold/10 rounded-full flex items-center justify-center">
                    <Info className="text-ldj-gold" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Expert Support</p>
                    <p className="text-gray-500 text-xs">Free consultation available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-serif text-gray-900">You May Also Like</h2>
              <Link 
                to={`/collections?category=${product.category.toLowerCase()}`}
                className="text-ldj-gold hover:underline flex items-center gap-2"
              >
                View All {product.category}
                <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 relative">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/gold-choker.jpg';
                      }}
                    />
                    {relatedProduct.badge && (
                      <span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded">
                        {relatedProduct.badge}
                      </span>
                    )}
                    {relatedProduct.isNew && (
                      <span className="absolute top-2 right-2 bg-ldj-gold text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-gray-900 mb-2 truncate">{relatedProduct.name}</h3>
                  <p className="text-ldj-gold font-bold mb-3">{relatedProduct.price}</p>
                  <button
                    onClick={() => {
                      navigate(`/product/${relatedProduct.id}`);
                      window.scrollTo(0, 0);
                    }}
                    className="w-full py-2 border border-gray-200 rounded-lg hover:border-ldj-gold hover:text-ldj-gold transition-colors text-sm"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;