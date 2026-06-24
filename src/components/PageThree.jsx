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

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="scroll-section w-full z-20">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4 space-y-4 py-16">
        
        {/* Families Card */}
        <motion.div initial="hidden" whileInView="visible" variants={slideUp} className="w-full px-6 py-8 rounded-[2rem] glass-card shadow-md flex flex-col items-center">
          
          {/* Bride Side */}
          <div className="text-gray-700 leading-relaxed text-sm md:text-base font-serif w-full">
            <span className="block font-bold text-xl md:text-2xl text-[#800000] drop-shadow-sm mb-1">Ms. Fathima Safa C</span>
            <span className="block font-bold text-gray-900">D/O Mr. C Alikutty &amp; Mrs. Junaida</span>
            <span className="block text-gray-600 mt-1">Chelambran House, Manoor</span>
            <span className="block text-gray-600">Ponmala (P.O) Malappuram (Dist)</span>
            <span className="block font-sans text-xs font-bold text-gray-800 mt-3 tracking-wider">Phone: 9947942011, 8606224886</span>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center py-5 w-full">
            <div className="flex-1 border-t border-gray-400/30"></div>
            <span className="italic font-script text-[#A86D33] text-4xl drop-shadow-sm px-6 leading-none">&amp;</span>
            <div className="flex-1 border-t border-gray-400/30"></div>
          </div>

          {/* Groom Side */}
          <div className="text-gray-700 leading-relaxed text-sm md:text-base font-serif w-full">
            <span className="block font-bold text-xl md:text-2xl text-[#800000] drop-shadow-sm mb-1">Mr. Ajwad Sajavn V</span>
            <span className="block font-bold text-gray-900">S/O Mr. Ahammed &amp; Mrs. Muneera Ahammed</span>
            <span className="block text-gray-600 mt-1">Vadakkethil House, Indianoor (P.O),</span>
            <span className="block text-gray-600">Kallada-Kottakal, Malappuram (Dist)</span>
          </div>
        </motion.div>

        {/* Date & Time Card */}
        <motion.div initial="hidden" whileInView="visible" variants={slideUp} className="w-full px-6 py-8 rounded-[2rem] glass-card flex flex-col items-center shadow-md">
          <span className="block font-sans text-[#A86D33] tracking-[0.3em] uppercase text-xs mb-3 font-bold">Saturday</span>
          <span className="block font-cinzel text-4xl md:text-5xl text-[#800000] font-bold mb-5 drop-shadow-sm">July 11<sup className="text-lg">th</sup> 2026</span>
          
          <div className="flex items-center justify-center gap-4 font-sans text-xs md:text-sm text-gray-900 font-bold tracking-wide bg-white/60 px-6 py-3 rounded-full border border-white/60 shadow-sm w-full max-w-sm">
            <span>Nikkah: 10:30 AM</span>
            <div className="w-[1.5px] h-4 bg-[#800000]"></div>
            <span>Wedding: 11:00 AM</span>
          </div>
        </motion.div>

        {/* Countdown Card */}
        <motion.div initial="hidden" whileInView="visible" variants={slideUp} className="w-full px-4 py-8 rounded-[2rem] bg-gradient-to-br from-[#A86D33] to-[#cb8941] shadow-[0_8px_30px_rgba(168,109,51,0.4)] flex flex-col items-center border border-[#e6b274]">
          <p className="font-sans text-[11px] tracking-[0.3em] font-bold text-white uppercase mb-4 drop-shadow-sm">Time Remaining</p>
          <div className="flex justify-center gap-3 md:gap-5 w-full">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Mins', value: timeLeft.minutes },
              { label: 'Secs', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-white/20 border border-white/40 rounded-2xl w-16 h-16 md:w-20 md:h-20 justify-center shadow-sm backdrop-blur-sm">
                <span className="font-cinzel text-2xl md:text-3xl text-white font-bold drop-shadow-md">{item.value.toString().padStart(2, '0')}</span>
                <span className="font-sans text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/90 mt-1 font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
