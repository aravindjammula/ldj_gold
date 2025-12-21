import React from 'react';
import { Award, Heart, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen font-body text-gray-800 pb-20">
      
      {/* 1. Hero Section */}
      <div className="relative py-32 bg-gray-50 text-center px-4">
        <span className="text-ldj-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Since 1995</span>
        <h1 className="text-5xl md:text-6xl font-serif text-ldj-dark mb-6">The Legacy of <br/>LDJ Gold & Diamonds</h1>
        <div className="w-24 h-1 bg-ldj-gold mx-auto mb-8"></div>
        <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          For three decades, we have been more than just jewelers. We are custodians of a tradition that celebrates the eternal bond between art, nature, and the human spirit.
        </p>
      </div>

      {/* 2. Our Story (Image + Text) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-ldj-gold z-0 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=80" 
              alt="Artisan working" 
              className="relative z-10 w-full h-[500px] object-cover shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif text-ldj-dark mb-6">A Story of <br/><span className="italic text-ldj-gold">Uncompromising Purity</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              It started with a single vision: to bring the finest temple jewelry and certified diamonds to the modern world without losing the soul of traditional craftsmanship.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-light">
              Every piece at LDJ is hand-selected. We believe that jewelry is not just an accessory; it is an heirloom to be passed down through generations. Our artisans spend hundreds of hours perfecting the intricate Nakshi work and setting stones with precision.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-3xl font-serif text-ldj-gold">30+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-ldj-gold">10k+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Happy Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="bg-ldj-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-16">Our Guiding Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 border border-gray-800 hover:border-ldj-gold transition-colors duration-300">
              <Award size={40} className="text-ldj-gold mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Certified Authenticity</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                We strictly use BIS Hallmarked Gold and IGI Certified Diamonds. Transparency is the foundation of our trust.
              </p>
            </div>
            
            <div className="p-6 border border-gray-800 hover:border-ldj-gold transition-colors duration-300">
              <Sun size={40} className="text-ldj-gold mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Ethical Sourcing</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Our materials are sourced responsibly, ensuring fair trade practices and minimal environmental impact.
              </p>
            </div>

            <div className="p-6 border border-gray-800 hover:border-ldj-gold transition-colors duration-300">
              <Heart size={40} className="text-ldj-gold mx-auto mb-6" />
              <h3 className="text-xl font-serif mb-4">Customer First</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                From bespoke designs to lifetime maintenance, our relationship with you doesn't end at the sale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CTA */}
      <div className="max-w-4xl mx-auto text-center px-4 py-24">
        <h2 className="text-4xl font-serif text-ldj-dark mb-6">Experience the Difference</h2>
        <p className="text-gray-500 mb-10">
          Visit our exclusive showroom to view the collection in person, or book a virtual consultation.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-ldj-gold text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-ldj-dark transition-all">
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
};

export default About;