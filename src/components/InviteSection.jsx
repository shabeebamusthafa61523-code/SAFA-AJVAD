import { motion } from 'framer-motion';

export default function InviteSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section className="scroll-section w-full z-20 pt-16">
      <div className="w-full max-w-md mx-auto text-center flex flex-col items-center glass-panel p-8 rounded-[2rem] mt-auto mb-auto relative">
        
        {/* Arabic Calligraphy */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp}
          className="text-3xl md:text-4xl text-gray-800 mb-6 font-serif tracking-widest"
          lang="ar"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.div>

        {/* Dots */}
        <div className="flex gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#cb8941]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#cb8941]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#cb8941]"></div>
        </div>

        {/* Save The Date */}
        <motion.div 
          initial="hidden" whileInView="visible" variants={fadeUp}
          className="flex flex-col items-center mb-6"
        >
          <span className="font-serif tracking-[0.25em] text-gray-500 text-sm uppercase">Save</span>
          <span className="font-script text-5xl text-[#cb8941] my-2 drop-shadow-sm">The</span>
          <span className="font-serif tracking-[0.25em] text-gray-500 text-sm uppercase">Date</span>
        </motion.div>

        {/* Dots */}
        <div className="flex gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#cb8941]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#cb8941]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#cb8941]"></div>
        </div>

        {/* Subtitle */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="mb-8">
          <p className="font-serif text-[13px] md:text-sm text-gray-700 leading-loose">
            <span className="font-semibold text-gray-800">Mr. C Alikutty & Mrs. Junaida</span><br/>
            <span className="text-[#cb8941] italic font-serif my-1 block">and</span>
            <span className="font-semibold text-gray-800">Mr. Ahammed & Mrs. Muneera Ahammed</span><br/>
            <span className="text-xs tracking-[0.1em] uppercase mt-4 block text-gray-500 leading-relaxed">
              request the honour of your presence at the Nikkah ceremony of their beloved children
            </span>
          </p>
        </motion.div>

        {/* Names */}
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="mb-10 w-full">
          <h1 className="font-script text-6xl md:text-7xl text-gray-800 drop-shadow-sm">Fathima</h1>
          <span className="font-serif italic text-3xl text-[#cb8941] my-2 block">&amp;</span>
          <h1 className="font-script text-6xl md:text-7xl text-gray-800 drop-shadow-sm">Ajwad</h1>
        </motion.div>

        {/* Date Block */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="bg-white/60 border border-[#cb8941]/30 rounded-[1.5rem] p-5 w-full mb-6 shadow-sm">
          <span className="block font-serif text-[#cb8941] tracking-[0.3em] uppercase text-[10px] mb-2 font-bold">Saturday</span>
          <span className="block font-cinzel text-3xl md:text-4xl text-gray-800 font-medium">July 11<sup className="text-lg">th</sup> 2026</span>
          <div className="mt-4 flex flex-col items-center gap-1 font-sans text-xs text-gray-600 font-medium">
            <span>Nikkah: 10:30 AM</span>
            <div className="w-8 h-px bg-[#cb8941]/50"></div>
            <span>Wedding: 11:00 AM</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#cb8941]/50 to-transparent my-6"></div>

        {/* Venue */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="w-full">
          <span className="block font-serif text-gray-800 text-lg md:text-xl font-medium mb-1">Thavakkal Convention Centre</span>
          <span className="block font-sans text-gray-500 text-xs md:text-sm tracking-wider uppercase">Malappuram</span>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#cb8941] font-bold mb-2">Scroll</span>
        <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
          <path d="M6 10 L14 18 L22 10" stroke="#cb8941" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
