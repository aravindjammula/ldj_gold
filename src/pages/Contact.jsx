import React, { useRef, useState } from 'react';
import { Send, Loader2, CheckCircle, Phone, Mail, MapPin, Clock, Users, Sparkles, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = 'service_z85t38l'; 
    const templateId = 'template_mtjzflv'; 
    const publicKey = 'tgaZsZxwj0Rrwa-M1';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setIsSent(true);
        setIsSending(false);
        e.target.reset();
        setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
        setIsSending(false);
        alert(`Failed to send: ${error.text}`);
      });
  };

  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen pt-24 pb-20 px-4 sm:px-6">
      
      {/* Hero Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-3 text-ldj-gold mb-6">
          <div className="w-8 h-px bg-ldj-gold"></div>
          <Sparkles size={18} />
          <span className="uppercase tracking-widest text-sm font-bold">Connect With Us</span>
          <Sparkles size={18} />
          <div className="w-8 h-px bg-ldj-gold"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-ldj-dark mb-6">
          Let's Create Something <span className="text-ldj-gold">Together</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Your vision is our inspiration. Reach out for personalized consultations, showroom visits, or any inquiries.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <ContactCard 
            icon={<Phone className="text-ldj-gold" size={24} />}
            title="Call Us"
            description="Speak directly with our jewelry consultants"
            detail="+91 98765 43210"
            actionLabel="Call Now"
            actionType="tel"
          />
          
          <ContactCard 
            icon={<Mail className="text-ldj-gold" size={24} />}
            title="Email Us"
            description="Get a response within 24 hours"
            detail="support@ldjgold.com"
            actionLabel="Send Email"
            actionType="mailto"
          />
          
          <ContactCard 
            icon={<Clock className="text-ldj-gold" size={24} />}
            title="Business Hours"
            description="Showroom visits by appointment"
            detail="Mon-Sat: 10AM - 7PM"
            actionLabel="Book Appointment"
            actionType="link"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="text-ldj-gold" size={24} />
                <h2 className="text-2xl font-serif text-ldj-dark">Send Your Message</h2>
              </div>
              <p className="text-gray-600">Fill out the form below and we'll get back to you promptly.</p>
            </div>

            {isSent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for contacting us. Our team will respond to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="text-ldj-gold font-semibold hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input type="hidden" name="from_page" value="General Inquiry" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ldj-gold focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ldj-gold focus:border-transparent outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ldj-gold focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ldj-gold focus:border-transparent outline-none transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea 
                    name="message" 
                    required 
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ldj-gold focus:border-transparent outline-none resize-none transition-all"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-ldj-dark to-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Location & Details */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-ldj-dark to-gray-900 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-ldj-gold" size={24} />
                <h3 className="text-2xl font-serif">Our Showroom</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-ldj-gold text-sm font-semibold mb-1">Address</p>
                  <p className="text-gray-200">Main Heritage Square, Mumbai, India - 400001</p>
                </div>
                
                <div>
                  <p className="text-ldj-gold text-sm font-semibold mb-1">Showroom Hours</p>
                  <div className="space-y-1 text-gray-300">
                    <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                    <p>Sunday: By Appointment Only</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-800">
                  <p className="text-ldj-gold text-sm font-semibold mb-2">Before You Visit</p>
                  <p className="text-gray-300 text-sm">
                    We recommend scheduling an appointment to ensure personalized attention from our master jewelers.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-ldj-gold" size={24} />
                <h3 className="text-xl font-serif text-ldj-dark">Why Contact LDJ?</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ldj-gold rounded-full mt-2"></div>
                  <span className="text-gray-600">Personalized jewelry consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ldj-gold rounded-full mt-2"></div>
                  <span className="text-gray-600">Virtual try-on and design previews</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ldj-gold rounded-full mt-2"></div>
                  <span className="text-gray-600">Expert advice on gemstone selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ldj-gold rounded-full mt-2"></div>
                  <span className="text-gray-600">Lifetime maintenance guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-serif text-ldj-dark mb-6">Find Us Here</h3>
            <div className="bg-gray-100 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-ldj-gold mx-auto mb-4" size={40} />
                <p className="text-gray-600">Map location would appear here</p>
                <p className="text-sm text-gray-500 mt-2">Main Heritage Square, Mumbai</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://maps.google.com/?q=Main+Heritage+Square,Mumbai,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ldj-gold font-semibold hover:underline"
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ icon, title, description, detail, actionLabel, actionType }) => {
  const getActionProps = () => {
    switch(actionType) {
      case 'tel':
        return { href: `tel:${detail}` };
      case 'mailto':
        return { href: `mailto:${detail}` };
      case 'link':
        return { href: '/contact' }; // Link to same page or appointment booking
      default:
        return { href: '#' };
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-ldj-gold/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-lg text-ldj-dark">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
      <p className="text-gray-800 font-medium mb-6">{detail}</p>
      <a 
        {...getActionProps()}
        className="inline-flex items-center gap-2 text-ldj-gold font-semibold hover:text-ldj-dark transition-colors"
      >
        {actionLabel}
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

const ArrowRight = ({ size }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default Contact;