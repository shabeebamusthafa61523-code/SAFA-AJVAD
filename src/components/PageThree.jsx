import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function PageThree() {
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

  return (
    <section className="scroll-section w-full z-20">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-start min-h-screen text-center px-4 space-y-4 pt-10 pb-6">
        
        {/* Families Card */}
        <div className="w-full px-5 py-6 rounded-[2rem] glass-card shadow-md flex flex-col items-center">
          {/* Bride Side */}
          <div className="text-gray-700 leading-snug text-[11px] md:text-sm font-serif w-full">
            <span className="block font-bold text-lg md:text-xl text-[#800000] drop-shadow-sm mb-1">Ms. Fathima Safa C</span>
            <span className="block font-bold text-gray-900">D/O Mr. C Alikutty &amp; Mrs. Junaida</span>
            <span className="block text-gray-600 mt-1">Chelambran House, Manoor</span>
            <span className="block text-gray-600">Ponmala (P.O) Malappuram (Dist)</span>
            <span className="block font-sans text-[10px] font-bold text-gray-800 mt-2 tracking-wider">Phone: 9947942011, 8606224886</span>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center py-3 w-full">
            <div className="flex-1 border-t border-gray-400/30"></div>
            <span className="italic font-script text-[#A86D33] text-4xl drop-shadow-sm px-5 leading-none">&amp;</span>
            <div className="flex-1 border-t border-gray-400/30"></div>
          </div>

          {/* Groom Side */}
          <div className="text-gray-700 leading-snug text-[11px] md:text-sm font-serif w-full">
            <span className="block font-bold text-lg md:text-xl text-[#800000] drop-shadow-sm mb-1">Mr. Ajwad Sajvan V</span>
            <span className="block font-bold text-gray-900">S/O Mr. Ahammed &amp; Mrs. Muneera Ahammed</span>
            <span className="block text-gray-600 mt-1">Vadakkethil House, Indianoor (P.O),</span>
            <span className="block text-gray-600">Kallada-Kottakal, Malappuram (Dist)</span>
          </div>
        </div>

        {/* Date & Time Card */}
        <div className="w-full px-5 py-5 rounded-[2rem] glass-card shadow-md flex flex-col items-center">
          <span className="block font-sans text-[#A86D33] tracking-[0.3em] uppercase text-[10px] md:text-xs mb-2 font-bold">Saturday</span>
          <span className="block font-cinzel text-3xl md:text-4xl text-[#800000] font-bold mb-4 drop-shadow-sm">July 11<sup className="text-sm">th</sup> 2026</span>
          
          <div className="flex items-center justify-center gap-4 font-sans text-[10px] md:text-xs text-gray-900 font-bold tracking-wide bg-white/60 px-5 py-3 rounded-full border border-white/60 shadow-sm w-full max-w-sm">
            <span>Nikkah: 10:30 AM</span>
            <div className="w-[1.5px] h-4 bg-[#800000]"></div>
            <span>Wedding: 11:00 AM</span>
          </div>
        </div>

        {/* Countdown Card */}
        <div className="w-full rounded-[2rem] bg-gradient-to-br from-[#A86D33] to-[#cb8941] shadow-[0_4px_15px_rgba(168,109,51,0.4)] flex flex-col items-center py-5 px-3 border border-[#e6b274]">
          <p className="font-sans text-[10px] tracking-[0.3em] font-bold text-white uppercase mb-4 drop-shadow-sm">Time Remaining</p>
          <div className="flex justify-center gap-2 md:gap-4 w-full">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-white/20 border border-white/30 rounded-xl w-[3.5rem] h-[3.5rem] md:w-16 md:h-16 justify-center shadow-sm backdrop-blur-sm">
                <span className="font-cinzel text-xl md:text-2xl text-white font-bold drop-shadow-md">{item.value.toString().padStart(2, '0')}</span>
                <span className="font-sans text-[7px] md:text-[8px] tracking-[0.2em] uppercase text-white/90 mt-1 font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
