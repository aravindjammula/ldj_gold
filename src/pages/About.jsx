import React from 'react';
import { Award, Heart, Sun, ArrowRight, Sparkles, Shield, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen font-body text-gray-800">

      {/* 1. Modern Hero Section */}
      <div className="relative py-24 md:py-32 bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-ldj-gold uppercase tracking-[0.3em] text-sm font-bold mb-6">
              <Sparkles size={16} />
              EST. 1995
              <Sparkles size={16} />
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ldj-dark mb-6 leading-tight">
              Crafting Timeless<br />
              <span className="text-ldj-gold">Legacies</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-ldj-gold to-transparent mx-auto mb-10"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Where tradition meets modern elegance. For three decades, we've been preserving the art of fine jewelry making while embracing contemporary design.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Story Section with Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative mb-8">
              <div className="text-sm text-ldj-gold uppercase tracking-widest font-bold mb-3">Our Journey</div>
              <h2 className="text-3xl md:text-4xl font-serif text-ldj-dark">
                More Than Jewelry.<br />
                <span className="text-ldj-gold">A Heritage of Craftsmanship</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                What began as a small family workshop in 1995 has blossomed into a legacy of excellence. Each piece in our collection carries forward centuries-old techniques while resonating with modern sensibilities.
              </p>
              <p className="leading-relaxed">
                Our master artisans, trained in traditional South Indian jewelry making, spend weeks perfecting single pieces. From intricate temple jewelry motifs to contemporary diamond settings, every detail is executed with precision and passion.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Clock className="text-ldj-gold mx-auto mb-3" size={24} />
                <div className="text-3xl font-serif text-ldj-dark">30+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Years</div>
              </div>
              <div className="text-center">
                <Users className="text-ldj-gold mx-auto mb-3" size={24} />
                <div className="text-3xl font-serif text-ldj-dark">10k+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Families</div>
              </div>
              <div className="text-center">
                <Shield className="text-ldj-gold mx-auto mb-3" size={24} />
                <div className="text-3xl font-serif text-ldj-dark">100%</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Certified</div>
              </div>
              <div className="text-center">
                <Sparkles className="text-ldj-gold mx-auto mb-3" size={24} />
                <div className="text-3xl font-serif text-ldj-dark">500+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Designs</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                alt="Artisan craftsmanship"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-ldj-gold/30 rounded-2xl z-0"></div>
          </div>
        </div>
      </div>

      {/* 3. Values with Icons */}
      <div className="bg-gradient-to-b from-white to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ldj-dark mb-4">
              Our Promise of Excellence
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Commitment to quality, authenticity, and customer satisfaction defines everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ldj-gold/10 rounded-full mb-6">
                <Award className="text-ldj-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif text-ldj-dark mb-4">Uncompromising Quality</h3>
              <p className="text-gray-600">
                Every piece undergoes rigorous quality checks. We use only BIS Hallmarked gold and IGI certified diamonds for complete transparency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ldj-gold/10 rounded-full mb-6">
                <Sun className="text-ldj-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif text-ldj-dark mb-4">Ethical Excellence</h3>
              <p className="text-gray-600">
                Responsible sourcing and sustainable practices guide our procurement, ensuring our jewelry reflects both beauty and integrity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ldj-gold/10 rounded-full mb-6">
                <Heart className="text-ldj-gold" size={28} />
              </div>
              <h3 className="text-xl font-serif text-ldj-dark mb-4">Lifetime Partnership</h3>
              <p className="text-gray-600">
                Beyond the purchase, we offer lifetime maintenance, cleaning, and resizing services to preserve your jewelry for generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Modern CTA */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury jewelry"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 text-ldj-gold mb-6">
            <div className="w-12 h-px bg-ldj-gold"></div>
            <span className="uppercase tracking-widest text-sm font-bold">Visit Us</span>
            <div className="w-12 h-px bg-ldj-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-ldj-dark mb-8">
            Begin Your Legacy
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Experience the LDJ difference firsthand. Book a private viewing at our showroom or schedule a virtual consultation from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-ldj-gold text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-ldj-dark transition-all duration-300 rounded-lg"
            >
              Book Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center justify-center gap-3 border-2 border-ldj-dark text-ldj-dark px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-ldj-dark hover:text-white transition-all duration-300 rounded-lg"
            >
              View Collections
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;