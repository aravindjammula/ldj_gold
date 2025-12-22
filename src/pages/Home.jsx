import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Gem, Crown, Sparkles, Heart, Award, Clock, Users, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const trendingProducts = useMemo(() => products.slice(0, 3), []);
  const featuredCollections = useMemo(() => products.slice(3, 6), []);

  const valuePropositions = [
    { icon: ShieldCheck, title: "BIS Hallmarked 916", description: "Government-certified 22K gold purity assurance" },
    { icon: Award, title: "IGI/GIA Certified", description: "Internationally graded diamonds with laser inscription" },
    { icon: Sparkles, title: "Conflict-Free Diamonds", description: "Ethically sourced with Kimberly Process certification" },
    { icon: Crown, title: "Heritage Craftsmanship", description: "Generations of master artisans since 1995" },
    { icon: Clock, title: "Lifetime Services", description: "Free cleaning, polishing & maintenance forever" },
    { icon: Heart, title: "Buyback Guarantee", description: "100% value buyback on gold at current market rates" }
  ];

  const collections = [
    {
      image: "/images/gold-choker.jpg",
      title: "22K Gold Collections",
      altText: "Handcrafted 22K Gold Choker Necklace - LDJ Gold Mangalagiri",
      description: "Traditional & Contemporary Designs",
      priceRange: "From ₹45,000",
      category: "Gold",
      link: "/collections?category=Gold",
      badge: "MOST POPULAR"
    },
    {
      image: "/images/diamond-ring.jpg",
      title: "Diamond Solitaires",
      description: "0.5ct to 5.0ct Certified Diamonds",
      priceRange: "From ₹1,25,000",
      category: "Diamond",
      link: "/collections?category=Diamond",
      badge: "CERTIFIED"
    },
    {
      image: "/images/bridal-set.jpg",
      title: "Bridal Sets",
      description: "Complete Wedding Jewelry Collections",
      priceRange: "From ₹2,50,000",
      category: "Bridal",
      link: "/bridal",
      badge: "PREMIUM"
    },
    {
      image: "/images/temple-jewelry.jpg",
      title: "Temple Jewelry",
      description: "South Indian Traditional Gold",
      priceRange: "From ₹75,000",
      category: "Temple",
      link: "/collections?category=Temple",
      badge: "HERITAGE"
    }
  ];

  const certifications = [
    "BIS Hallmark Certified",
    "IGI Certified Diamonds",
    "Kimberly Process Compliant",
    "GIA Graduate Gemologists",
    "ISO 9001:2015 Certified",
    "Lifetime Warranty"
  ];

  return (
    <div className="bg-white">
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Gold Dust Particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-300 to-amber-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Video/Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 text-ldj-gold/80 uppercase tracking-[0.5em] text-xs font-light mb-8 border border-ldj-gold/30 px-6 py-2 rounded-full">
            <Gem size={14} />
            <span>ESTABLISHED 1995</span>
            <Gem size={14} />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight text-white">
            <span className="block text-ldj-gold italic">Legacy</span>
            <span className="block">in Gold &</span>
            <span className="block">Perfection in</span>
            <span className="block text-ldj-gold italic">Diamonds</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            India's most trusted family jewellers. Creating heirlooms since 1995 with
            uncompromising purity, certified quality, and timeless designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/collections"
              className="group relative bg-ldj-gold text-black px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white transition-all duration-500 overflow-hidden rounded-sm"
            >
              <span className="relative z-10">EXPLORE COLLECTIONS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>

            <Link
              to="/appointment"
              className="group relative border-2 border-white text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:border-ldj-gold transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">BOOK PRIVATE VIEWING</span>
              <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-ldj-gold" />
              <span>100% Certified Purity</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-ldj-gold" />
              <span>50,000+ Happy Families</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-ldj-gold" />
              <span>Lifetime Exchange</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-ldj-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. CERTIFICATION BANNER */}
      <div className="bg-black py-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 text-white/80 text-sm font-light">
                <div className="w-1.5 h-1.5 bg-ldj-gold rounded-full"></div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. CURATED COLLECTIONS - FIXED WITH ALL 4 IMAGES */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-ldj-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
              <Sparkles size={16} />
              <span>CURATED COLLECTIONS</span>
              <Sparkles size={16} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Signature Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Each collection tells a story of tradition, craftsmanship, and timeless elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {collections.map((collection, index) => (
              <Link
                key={index}
                to={collection.link}
                aria-label={`View our ${collection.title}`}
                className="group relative overflow-hidden rounded-sm bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Collection Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.altText || collection.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badge */}
                  {collection.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-900 rounded-full">
                        {collection.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Collection Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-xl text-gray-900 mb-1">{collection.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{collection.description}</p>
                    </div>
                    <span className="text-xs font-bold text-ldj-gold px-3 py-1 bg-ldj-gold/10 rounded-full">
                      {collection.category}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-900">{collection.priceRange}</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-ldj-gold transition-colors">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Collections Link */}
          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-ldj-gold transition-colors duration-300 group"
            >
              <span className="text-sm font-bold uppercase tracking-widest">VIEW ALL COLLECTIONS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION - LUXURY EXPERIENCE */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 text-ldj-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
              <Crown size={16} />
              <span>THE LEGACY DIFFERENCE</span>
              <Crown size={16} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Beyond Certification
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just sell jewelry, we create legacies that last generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-sm border border-gray-100 hover:border-ldj-gold/30 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ldj-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-ldj-gold/10 rounded-full flex items-center justify-center group-hover:bg-ldj-gold/20 transition-colors duration-300">
                      <prop.icon className="w-7 h-7 text-ldj-gold" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-gray-900 mb-3">{prop.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRENDING NOW - WITH LUXURY PRESENTATION */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-3 text-ldj-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
                <Sparkles size={16} />
                <span>CURRENTLY LOVED</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
                Most Coveted Pieces
              </h2>
              <p className="text-gray-600 max-w-xl">
                Discover the pieces our clients are choosing for their most special moments
              </p>
            </div>

            <Link
              to="/collections"
              className="mt-6 lg:mt-0 group flex items-center gap-2 text-gray-900 hover:text-ldj-gold transition-colors duration-300"
            >
              <span className="text-sm font-bold uppercase tracking-widest">VIEW ALL PIECES</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showBadge={true}
                badgeText="TRENDING"
                className="transform transition-all duration-500 hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA - PRIVATE CONSULTATION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 text-ldj-gold uppercase tracking-[0.3em] text-xs font-bold mb-6">
            <Crown size={16} />
            <span>EXCLUSIVE EXPERIENCE</span>
            <Crown size={16} />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Experience Luxury, Personally
          </h2>

          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule a private viewing in our showroom. Experience our collections in a
            serene, one-on-one setting with expert guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="group relative bg-ldj-gold text-black px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white transition-all duration-500 overflow-hidden rounded-sm"
            >
              <span className="relative z-10">BOOK PRIVATE VIEWING</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>

            <Link
              to="/virtual-consultation"
              className="group relative border-2 border-white/30 text-white px-12 py-5 uppercase tracking-widest text-sm font-bold hover:border-ldj-gold transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">VIRTUAL CONSULTATION</span>
              <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            <p>By appointment only • Discreet location • Champagne service available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;