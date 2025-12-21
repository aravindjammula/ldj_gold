import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-ldj-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <h2 className="text-3xl font-serif font-bold tracking-widest text-white">
                LDJ <span className="text-ldj-gold">GOLD</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Crafting eternal symbols of love and tradition since 1995. Certified purity, timeless designs, and unmatched craftsmanship.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* 2. Shop Links */}
          <div>
            <h3 className="text-ldj-gold font-bold uppercase tracking-widest text-xs mb-6">Collections</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/collections?category=Gold" className="hover:text-white transition-colors">Gold Jewellery</Link></li>
              <li><Link to="/collections?category=Diamond" className="hover:text-white transition-colors">Diamond Solitaires</Link></li>
              <li><Link to="/bridal" className="hover:text-white transition-colors">Bridal Sets</Link></li>
              <li><Link to="/vintage" className="hover:text-white transition-colors">Heritage Collection</Link></li>
              <li><Link to="/collections" className="hover:text-white transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* 3. Customer Care */}
          <div>
            <h3 className="text-ldj-gold font-bold uppercase tracking-widest text-xs mb-6">Customer Care</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/custom-design" className="hover:text-white transition-colors">Bespoke Services</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchange</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h3 className="text-ldj-gold font-bold uppercase tracking-widest text-xs mb-6">The Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4 font-light">
              Be the first to know about new collections and exclusive events.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-ldj-gold transition-colors"
              />
              <button className="bg-ldj-gold text-white px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} LDJ Gold & Diamonds. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Helper for Social Icons
const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-ldj-gold hover:text-white transition-all duration-300">
    {icon}
  </a>
);

export default Footer;