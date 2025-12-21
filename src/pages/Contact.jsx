import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    //emailjs.sendForm('service_z85t38l', 'template_mtjzflv', form.current, 'tgaZsZxwj0Rrwa-M1')


const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // DEBUG: Check if keys are set (Don't show this to others!)
    const serviceId = 'service_z85t38l';   // 👈 Did you replace this? e.g. 'service_x9s8d7'
    const templateId = 'template_mtjzflv'; // 👈 Did you replace this? e.g. 'template_a1b2c3'
    const publicKey = 'tgaZsZxwj0Rrwa-M1';   // 👈 Did you replace this? e.g. 'user_9s8d7f6'

    console.log("Attempting to send with:", { serviceId, templateId, publicKey });

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log("SUCCESS!", result.text);
          setIsSent(true);
          setIsSending(false);
          e.target.reset();
          alert("Email Sent Successfully!"); // Added Alert for visibility
      }, (error) => {
          console.error("FAILED...", error); // This prints the red error
          setIsSending(false);
          // SHOW THE EXACT ERROR TO THE USER
          alert(`Failed to send: ${error.text || "Check console for details"}`); 
      });
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. SPLIT LAYOUT */}
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT: Visual Side */}
        <div className="hidden lg:block lg:w-1/2 relative bg-gray-900 min-h-[800px]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('/images/Opulent Bridal Set.jpg')" }} 
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-20 left-12 right-12 text-white animate-fade-in-up">
            <h2 className="text-4xl font-serif mb-6">Visit Our Showroom</h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed max-w-md">
              Experience our collections in person. Our master jewelers are available for private consultations.
            </p>
          </div>
        </div>

        {/* RIGHT: Content Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
          <div className="w-full max-w-lg">
            
            <span className="text-ldj-gold uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Contact Us</h1>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-ldj-gold mb-2">
                  <Phone size={18} />
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-400">Phone</span>
                </div>
                <p className="text-gray-900 font-serif">+91 98765 43210</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-ldj-gold mb-2">
                  <Mail size={18} />
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-400">Email</span>
                </div>
                <p className="text-gray-900 font-serif">support@ldjgold.com</p>
              </div>
            </div>

            {/* FUNCTIONAL FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              {/* HIDDEN INPUT FOR TITLE */}
              {/* Your dashboard Subject says: Contact Us: {{title}} */}
              {/* We add a hidden field so the subject line isn't empty */}
              <input type="hidden" name="title" value="New Website Inquiry" />

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Full Name</label>
                <input 
                  type="text" 
                  name="name" // FIXED: Matches {{name}} in your screenshot
                  required
                  className="w-full border-b border-gray-300 py-2 focus:border-ldj-gold focus:outline-none transition-colors bg-transparent placeholder-gray-300 font-serif"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  name="email" // FIXED: Matches {{email}} in your screenshot
                  required
                  className="w-full border-b border-gray-300 py-2 focus:border-ldj-gold focus:outline-none transition-colors bg-transparent placeholder-gray-300 font-serif"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider font-bold text-gray-500">Message</label>
                <textarea 
                  name="message" // Matches {{message}} in your screenshot
                  required
                  rows="3"
                  className="w-full border-b border-gray-300 py-2 focus:border-ldj-gold focus:outline-none transition-colors bg-transparent placeholder-gray-300 resize-none font-serif"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSending}
                className={`group w-full py-4 mt-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${isSent ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-ldj-dark text-white hover:bg-ldj-gold'}`}
              >
                {isSending ? (
                  <>Sending... <Loader2 size={14} className="animate-spin" /></>
                ) : isSent ? (
                  <>Message Sent <CheckCircle size={14} /></>
                ) : (
                  <>Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>

          </div>
        </div>
      </div>

      {/* 2. MAP SECTION */}
      <div className="w-full h-96 relative bg-gray-100 border-t border-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.358782410386!2d80.43654021486884!3d16.30665248873534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7999dd90f1e694!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1623145678901!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} 
          allowFullScreen="" 
          loading="lazy"
          title="LDJ Gold Location"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;