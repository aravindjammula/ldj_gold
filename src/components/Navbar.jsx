import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 1. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none hover:text-ldj-gold transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* 2. Logo */}
          <Link to="/" className="flex flex-col items-center md:items-start group">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-widest group-hover:text-ldj-gold transition-colors">
              LDJ <span className="text-ldj-gold">GOLD</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hidden md:block mt-1">
              Est. 1995
            </span>
          </Link>

          {/* 3. DESKTOP NAVIGATION */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            <NavLink to="/" label="Home" isActive={isActive('/')} />
            <NavLink to="/collections" label="Catalogue" isActive={isActive('/collections')} />
            <NavLink to="/custom-design" label="Bespoke" isActive={isActive('/custom-design')} />
            <NavLink to="/about" label="About Us" isActive={isActive('/about')} />
          </div>

          {/* 4. ICONS SECTION */}
          <div className="flex items-center space-x-6 text-gray-900">
            
            <Search className="w-5 h-5 cursor-pointer hover:text-ldj-gold transition-colors transform hover:scale-110 duration-200" />
            
            {/* USER DROPDOWN (Updated: No Click Event) */}
            <div className="relative group hidden sm:block z-50">
              
              {/* Changed from <Link> to <div> so clicking does nothing */}
              <div className="py-2 cursor-pointer">
                <User className="w-5 h-5 hover:text-ldj-gold transition-colors transform hover:scale-110 duration-200" />
              </div>
              
              {/* The Hover Menu */}
              <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden">
                  <div className="py-1">
                    <span className="block px-4 py-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold border-b border-gray-50">
                      My Account
                    </span>
                    <Link to="/login" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-ldj-gold transition-colors">
                      Login / Sign Up
                    </Link>
                    <Link to="/orders" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-ldj-gold transition-colors">
                      Track Order
                    </Link>
                    <Link to="/wishlist" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-ldj-gold transition-colors">
                      Saved Items
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cart Icon */}
            <div className="relative cursor-pointer hover:text-ldj-gold transition-colors group">
              <ShoppingBag className="w-5 h-5 transform group-hover:scale-110 duration-200" />
              <span className="absolute -top-2 -right-2 bg-ldj-gold text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
                0
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down absolute w-full left-0 shadow-xl z-50">
          <div className="px-6 py-6 space-y-4 flex flex-col">
            <MobileLink to="/" label="Home" onClick={closeMenu} />
            <MobileLink to="/collections" label="Catalogue" onClick={closeMenu} />
            <MobileLink to="/custom-design" label="Bespoke Services" onClick={closeMenu} />
            <MobileLink to="/about" label="Our Story" onClick={closeMenu} />
            <hr className="border-gray-100" />
            <MobileLink to="/contact" label="Contact Us" onClick={closeMenu} />
            <MobileLink to="/login" label="My Account" onClick={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Helper Components ---

const NavLink = ({ to, label, isActive }) => (
  <Link 
    to={to} 
    className={`text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 relative group ${isActive ? 'text-ldj-gold' : 'text-gray-900 hover:text-ldj-gold'}`}
  >
    {label}
    <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-ldj-gold transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
  </Link>
);

const MobileLink = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-sm font-bold text-gray-900 hover:text-ldj-gold uppercase tracking-widest transition-colors"
  >
    {label}
  </Link>
);

export default Navbar;