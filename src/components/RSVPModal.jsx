import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function RSVPModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    // Construct WhatsApp message
    const phone = "918606224886";
    const message = `Hello! I would like to RSVP for Fathima & Ajwad's Wedding.%0A%0A*Name:* ${name}%0A*Guests:* ${guests}%0A%0ALooking forward to it!`;
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 w-full bg-white rounded-t-[2.5rem] z-[70] shadow-2xl p-8 max-w-md mx-auto"
          >
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-8"></div>
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 bg-gray-100 rounded-full p-1 transition-colors">
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl text-gray-800 mb-1">Confirm Attendance</h3>
              <p className="font-sans text-xs uppercase tracking-widest text-[#cb8941] font-bold mt-2">Thavakkal Convention Centre &middot; July 11</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#cb8941] transition-colors font-serif text-lg bg-transparent placeholder-gray-300"
                />
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Number of Guests</label>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#cb8941] transition-colors font-serif text-lg bg-white text-gray-800"
                >
                  <option value="1">Just me (1)</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5+">5 or more</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full mt-8">
                <Send size={18} /> Send RSVP via WhatsApp
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
