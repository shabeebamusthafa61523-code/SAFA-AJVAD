import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function RSVPModal({ onClose }) {
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
    <>
      <motion.div 
        key="backdrop"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 z-[60] backdrop-blur-md"
      />
      <motion.div 
        key="modal"
        initial={{ opacity: 0, scale: 0.9, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-md bg-[#faf8f5] rounded-3xl border border-[#A86D33]/40 z-[70] shadow-[0_15px_50px_rgba(0,0,0,0.5)] p-8"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#A86D33] hover:text-[#6e0d0d] bg-[#A86D33]/10 hover:bg-[#A86D33]/20 rounded-full p-2 transition-colors">
          <X size={20} />
        </button>

        <div className="text-center mb-8 mt-2 relative">
          <h3 className="font-pinyon text-5xl text-[#6e0d0d] mb-2 drop-shadow-sm">Confirm Attendance</h3>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#cb8941] font-bold mt-2">Thavakkal Convention Centre &middot; July 11</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="font-sans text-[10px] uppercase tracking-widest text-[#800000] mb-2 font-bold ml-1">Guest Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full border border-[#A86D33]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A86D33] focus:ring-1 focus:ring-[#A86D33] transition-all font-serif text-base bg-white/60 backdrop-blur-sm text-gray-800 placeholder-gray-400 shadow-inner"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-sans text-[10px] uppercase tracking-widest text-[#800000] mb-2 font-bold ml-1">Number of Guests</label>
            <div className="relative">
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border border-[#A86D33]/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#A86D33] focus:ring-1 focus:ring-[#A86D33] transition-all font-serif text-base bg-white/60 backdrop-blur-sm text-gray-800 shadow-inner appearance-none"
              >
                <option value="1">Just me (1)</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5+">5 or more</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#A86D33]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <button type="submit" className="group relative flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#A86D33] to-[#cb8941] text-white px-8 py-4 mt-8 rounded-xl font-sans uppercase tracking-[0.2em] font-bold text-xs shadow-[0_4px_15px_rgba(168,109,51,0.4)] hover:shadow-[0_6px_25px_rgba(168,109,51,0.6)] hover:-translate-y-0.5 transition-all duration-300">
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /> Send RSVP via WhatsApp
          </button>
        </form>
      </motion.div>
    </>
  );
}
