import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function PageOne() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 }
    }
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -80, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 2, ease: "easeOut" } }
  };

  const itemRight = {
    hidden: { opacity: 0, x: 80, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 2, ease: "easeOut" } }
  };

  const itemCenter = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, type: "spring" } }
  };

  return (
    <section className="scroll-section w-full z-20">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center min-h-screen relative">
        
        {/* Monogram - Royal Seal Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.5 }}
          className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center drop-shadow-[0_4px_10px_rgba(255,255,255,0.6)]"
        >
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-[1.5px] border-[#A86D33] flex items-center justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[0.5px] border-[#cb8941] flex items-center justify-center bg-transparent">
              <span className="font-cinzel text-5xl md:text-6xl text-[#800000] font-bold mt-1">F<span className="text-[#A86D33] text-4xl mx-1.5">&amp;</span>A</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden" 
          whileInView="visible" 
          className="flex flex-col items-center justify-center w-full pt-20 md:pt-28"
        >
          {/* Save The Date Text
          <motion.span 
            variants={itemLeft}
            className="font-sans tracking-[0.4em] text-[#800000] text-xs md:text-sm uppercase font-bold drop-shadow-sm mb-2"
          >
            Save The Date
          </motion.span> */}

          {/* Join Text */}
          {/* <motion.span 
            variants={itemLeft}
            className="font-sans tracking-[0.3em] text-[#A86D33] text-[10px] md:text-xs uppercase font-bold drop-shadow-sm mb-10"
          >
            Join us to the wedding of
          </motion.span> */}

          {/* Bride */}
          <motion.h1 
            variants={itemLeft}
            className="font-pinyon text-[4rem] sm:text-7xl md:text-9xl lg:text-[10rem] text-[#6e0d0d] drop-shadow-[0_4px_25px_rgba(255,255,255,0.8)] z-20 relative text-center leading-tight px-4 whitespace-nowrap"
          >
            Fathima Safa
          </motion.h1>

          {/* Heart Icon */}
          <motion.div variants={itemCenter} className="my-2 md:my-4 z-10">
            <Heart size={32} className="md:w-12 md:h-12 text-[#6e0d0d] drop-shadow-[0_4px_10px_rgba(255,255,255,0.8)]" fill="#6e0d0d" strokeWidth={1} />
          </motion.div>

          {/* Groom */}
          <motion.h1 
            variants={itemRight}
            className="font-pinyon text-[4rem] sm:text-7xl md:text-9xl lg:text-[10rem] text-[#6e0d0d] drop-shadow-[0_4px_25px_rgba(255,255,255,0.8)] z-20 relative text-center leading-tight px-4 whitespace-nowrap"
          >
            Ajwad Sajavn
          </motion.h1>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-800 font-bold mb-2 glass-card px-4 py-1.5 rounded-full drop-shadow-sm">Scroll</span>
        <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
          <path d="M6 10 L14 18 L22 10" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
