import React from 'react';
import { PenTool, Hammer, Gem, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomDesign = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-ldj-dark overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589674728776-0628a6b80c11?auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-ldj-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Bespoke Service</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Designed by You. <br/>Crafted by Us.</h1>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
            From a rough sketch to a family heirloom. Collaborate with our master artisans to create a piece that is uniquely yours.
          </p>
        </div>
      </div>

      {/* 2. The Process Steps */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-ldj-dark mb-4">The Creation Process</h2>
          <div className="w-24 h-1 bg-ldj-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Step 1 */}
          <div className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-ldj-gold group-hover:bg-ldj-dark group-hover:text-white transition-colors">
              <PenTool size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">1. Consultation & Sketch</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Meet with our lead designer to discuss your vision, budget, and inspiration. We will hand-sketch concepts until it matches your dream.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-ldj-gold group-hover:bg-ldj-dark group-hover:text-white transition-colors">
              <Gem size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">2. Gemstone Selection</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Hand-pick your perfect diamond or gemstone from our curated collection. We source only certified, conflict-free stones.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-ldj-gold group-hover:bg-ldj-dark group-hover:text-white transition-colors">
              <Hammer size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">3. Crafting & Reveal</h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Our master goldsmiths bring the design to life using traditional techniques. The final reveal is a moment we cherish forever.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Inquiry Form Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-sm overflow-hidden flex flex-col md:flex-row">
            
            {/* Left: Image/Text */}
            <div className="w-full md:w-1/2 bg-ldj-dark text-white p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-serif mb-6 text-ldj-gold">Start Your Journey</h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">
                "Jewelry is the most transformative thing you can wear." 
                <br/><br/>
                Fill out the form to book your complimentary design consultation. Whether online or in-store, we are ready to listen.
              </p>
              <ul className="space-y-4 text-sm tracking-wide">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-ldj-gold rounded-full"></div> Bespoke Engagement Rings</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-ldj-gold rounded-full"></div> Heirloom Redesign</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-ldj-gold rounded-full"></div> Personalized Gold Jewelry</li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-1/2 p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-ldj-gold transition-colors" placeholder="Your full name" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-ldj-gold transition-colors" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                    <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-ldj-gold transition-colors" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Budget Range (Approx)</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-ldj-gold bg-white text-gray-700">
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Describe Your Vision</label>
                  <textarea rows="3" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-ldj-gold transition-colors" placeholder="Tell us about the piece you want to create..."></textarea>
                </div>

                <button type="button" className="bg-ldj-dark text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-ldj-gold transition-all w-full md:w-auto mt-4">
                  Request Consultation
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomDesign;