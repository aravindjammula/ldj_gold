import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4 pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Inquiry Received</h2>
          <p className="text-gray-600">Our concierge will contact you shortly to confirm your private viewing.</p>
        </div>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="min-h-screen bg-gray-50 pt-32 pb-20 bg-cover bg-center" style={{ backgroundImage: 'url(./public/images/diamond-necklace.jpg)' }}>
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-5">Book a Private Viewing</h1>
          <p className="text-gray-600">Experience our collection in a dedicated, one-on-one consultation.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl rounded-sm grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="text" required className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:border-ldj-gold outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="email" required className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:border-ldj-gold outline-none" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                <input type="date" required className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:border-ldj-gold outline-none" />
              </div>
            </div>
            <button type="submit" className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-ldj-gold hover:text-black transition-colors">
              Request Appointment
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Appointment;