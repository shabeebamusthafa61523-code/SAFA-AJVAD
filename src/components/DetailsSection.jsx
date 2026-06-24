import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, CalendarPlus, CheckCircle } from 'lucide-react';

export default function DetailsSection({ onRSVPClick }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("July 11, 2026 10:30:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikkah+%26+Wedding+-+Fathima+%26+Ajwad&dates=20260711T050000Z%2F20260711T070000Z&details=Wedding+invitation+for+the+Nikkah+ceremony+of+Fathima+and+Ajwad.&location=Thavakkal+Convention+Centre";

  return (
    <section className="scroll-section w-full z-20 pb-16">
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-10">
        
        {/* Countdown */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="w-full text-center glass-panel p-8 rounded-[2rem]"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#cb8941] uppercase mb-2">Time Remaining</p>
          <h2 className="font-script text-4xl text-gray-800 mb-8">Counting Down</h2>
          
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-white/40 rounded-xl py-3 border border-white/50">
                <span className="font-cinzel text-2xl md:text-3xl text-gray-800 mb-1">{item.value.toString().padStart(2, '0')}</span>
                <span className="font-sans text-[9px] tracking-wider uppercase text-[#cb8941] font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="w-full text-center glass-panel p-8 rounded-[2rem]"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#cb8941] uppercase mb-2">Venue Location</p>
          <h2 className="font-script text-4xl text-gray-800 mb-6">Find Us Here</h2>
          
          <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 border-2 border-white shadow-inner">
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
            href="https://share.google/cjBCOD5XltPEPCziA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans text-sm tracking-wide text-white bg-[#cb8941] px-5 py-2.5 rounded-full shadow-md hover:bg-[#A86D33] transition-colors"
          >
            <MapPin size={16} /> Open in Google Maps
          </a>
        </motion.div>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          className="w-full flex flex-col items-center mt-4"
        >
          <button onClick={onRSVPClick} className="btn-primary">
            <CheckCircle size={18} /> Confirm Presence (RSVP)
          </button>
          
          <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <CalendarPlus size={18} /> Add to Calendar
          </a>
        </motion.div>

      </div>
    </section>
  );
}
