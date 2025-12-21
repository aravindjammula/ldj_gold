import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, CheckCircle } from 'lucide-react';

const Bespoke = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendBespokeInquiry = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Using your verified keys
    const serviceId = 'service_z85t38l'; 
    const templateId = 'template_mtjzflv'; 
    const publicKey = 'tgaZsZxwj0Rrwa-M1';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setIsSent(true);
        setIsSending(false);
        e.target.reset();
        alert("Bespoke Request Sent!");
      }, (error) => {
        setIsSending(false);
        alert("Error: " + error.text);
      });
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto bg-gray-900 flex flex-col md:flex-row shadow-2xl overflow-hidden">
        {/* Left Side: Branding */}
        <div className="md:w-2/5 p-12 text-white">
          <h2 className="text-4xl font-serif text-ldj-gold mb-6 italic">Start Your Journey</h2>
          <p className="text-gray-400 italic mb-8">"Jewelry is the most transformative thing you can wear."</p>
          <ul className="space-y-4 text-xs uppercase tracking-widest">
            <li>● Bespoke Engagement Rings</li>
            <li>● Heirloom Redesign</li>
            <li>● Personalized Gold Jewelry</li>
          </ul>
        </div>

        {/* Right Side: Functional Form */}
        <div className="md:w-3/5 bg-white p-12">
          <form ref={form} onSubmit={sendBespokeInquiry} className="space-y-6">
            <input type="hidden" name="from_page" value="Bespoke Design" />
            <input type="text" name="name" placeholder="YOUR FULL NAME" required className="w-full border-b border-black py-3 text-xs tracking-widest outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="EMAIL ADDRESS" required className="w-full border-b border-black py-3 text-xs tracking-widest outline-none" />
              <input type="text" name="phone" placeholder="PHONE NUMBER" className="w-full border-b border-black py-3 text-xs tracking-widest outline-none" />
            </div>
            <textarea name="message" placeholder="DESCRIBE YOUR VISION" rows="4" className="w-full border-b border-black py-3 text-xs tracking-widest outline-none resize-none"></textarea>
            
            <button type="submit" disabled={isSending} className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] text-xs font-bold hover:bg-ldj-gold transition-all">
               {isSending ? <Loader2 className="animate-spin mx-auto" /> : isSent ? "SENT SUCCESSFULLY" : "REQUEST CONSULTATION"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bespoke;