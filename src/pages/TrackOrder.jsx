import React from 'react';

const TrackOrder = () => {
  return (
    <div className="min-h-[70vh] bg-white pt-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-ldj-gold uppercase tracking-[0.4em] text-[10px] font-bold">Logistics & Care</span>
        <h1 className="text-5xl font-serif text-black mt-4 mb-8">Locate Your Purchase</h1>
        <p className="text-gray-600 font-light mb-12 italic">Enter your tracking ID to follow your handcrafted jewelry's journey.</p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="TRACKING ID (E.G. LDJ12345)" 
            className="flex-grow border border-black p-4 text-xs tracking-[0.2em] focus:outline-none focus:border-ldj-gold uppercase"
          />
          <button className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-ldj-gold transition-all">
            Track Shipment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;