import { motion } from 'framer-motion';
import { MapPin, CalendarPlus, CheckCircle } from 'lucide-react';

export default function PageFour({ onRSVPClick }) {
  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikkah+%26+Wedding+-+Fathima+%26+Ajwad&dates=20260711T050000Z%2F20260711T070000Z&details=Wedding+invitation+for+the+Nikkah+ceremony+of+Fathima+and+Ajwad.&location=Thavakkal+Convention+Centre";

  return (
    <section className="scroll-section w-full z-20">
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-start min-h-screen text-center px-4 space-y-4 pt-1 pb-10">
        
        {/* Venue Card */}
        <div className="w-full px-5 py-6 rounded-[2rem] glass-card shadow-md flex flex-col items-center">
          <p className="font-sans text-[11px] tracking-[0.3em] font-bold text-[#A86D33] uppercase mb-3 drop-shadow-sm">Venue Location</p>
          <span className="block font-serif text-gray-900 text-2xl md:text-3xl font-bold mb-2 tracking-wide drop-shadow-sm">Thavakkal Convention Centre</span>
          <span className="block font-sans text-gray-600 text-xs tracking-wider uppercase font-bold mb-5">Malappuram</span>

          <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-sm border border-white/60">
            <iframe 
              title="Thavakkal Convention Centre"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.614838618774!2d76.0141675!3d11.0270114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64bcfd185e515%3A0xc48c9735d4edfc8f!2sThavakkal%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Thavakkal+Convention+Centre,+Malappuram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-widest text-[#800000] hover:text-[#A86D33] transition-colors uppercase font-bold drop-shadow-sm"
          >
            <MapPin size={16} /> Open in Google Maps
          </a>
        </div>

        {/* Actions Card */}
        <div className="w-full px-5 py-5 rounded-[2rem] glass-card flex flex-col gap-3 items-center shadow-md">
          <button onClick={onRSVPClick} className="btn-primary w-full py-3 text-sm">
            <CheckCircle size={18} className="mr-2 inline" /> Confirm Presence (RSVP)
          </button>
          
          <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full py-3 text-sm mt-0">
            <CalendarPlus size={18} className="mr-2 inline" /> Add to Calendar
          </a>
        </div>

        {/* Sharing the Happiness Card */}
        <div className="w-full px-4 py-4 rounded-[2rem] glass-card flex flex-col items-center shadow-md">
          <p className="font-sans text-[9px] tracking-[0.2em] font-bold text-[#A86D33] uppercase mb-1.5">Sharing the Happiness</p>
          <p className="font-sans text-[9px] md:text-[10px] text-gray-700 font-bold tracking-wide">
            C M. Faiz, C Fawaz Azhar, Mufeeda PK, Baiza Nujoom C
          </p>
        </div>

      </div>
    </section>
  );
}
