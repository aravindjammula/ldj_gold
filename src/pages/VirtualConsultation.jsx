import React from 'react';
import { Video, Globe, Smartphone } from 'lucide-react';

const VirtualConsultation = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Bespoke Jewelry, <span className="text-ldj-gold italic">Everywhere</span></h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Can't visit our showroom? Connect with our master gemologists via high-definition video call. 
            View diamond clarity and gold luster from the comfort of your home.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3"><Video className="text-ldj-gold" /> Zoom / WhatsApp / FaceTime options</li>
            <li className="flex items-center gap-3"><Globe className="text-ldj-gold" /> Global shipping available</li>
            <li className="flex items-center gap-3"><Smartphone className="text-ldj-gold" /> Real-time 360° product views</li>
          </ul>
        </div>
        <div className="bg-gray-100 aspect-video rounded-sm flex items-center justify-center">
            <img src="./public/images/ganesh-pendant.jpg" alt="Booking Calendar" />
        </div>
      </div>
    </div>
  );
};

export default VirtualConsultation;