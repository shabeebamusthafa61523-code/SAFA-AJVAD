import { motion } from 'framer-motion';

export default function PageTwo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  // Split text for beautiful letter-by-letter spring animation
  const saveTheDate = "Save The Date".split("");

  return (
    <section className="scroll-section w-full z-20">
      <div className="w-full max-w-md mx-auto text-center flex flex-col items-center justify-center min-h-screen px-4">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="w-full py-16 px-6 rounded-[3rem] glass-card shadow-2xl flex flex-col items-center relative overflow-hidden border border-white/60"
        >
          {/* Subtle animated background glow inside the card */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#A86D33]/20 rounded-full blur-3xl -z-10"
          ></motion.div>

          {/* Top Elegant Ornament */}
          <motion.div variants={itemVariants} className="mb-6 opacity-80">
            <svg width="80" height="25" viewBox="0 0 100 30" fill="none" className="text-[#A86D33] drop-shadow-sm">
              <path d="M50 0 C60 15, 80 15, 100 15 C80 15, 60 25, 50 30 C40 25, 20 15, 0 15 C20 15, 40 15, 50 0 Z" fill="currentColor"/>
            </svg>
          </motion.div>

          {/* Arabic Calligraphy with Glow */}
          <motion.div 
            variants={itemVariants}
            className="text-4xl md:text-5xl text-[#800000] mb-8 mt-4 font-serif tracking-widest drop-shadow-[0_2px_4px_rgba(128,0,0,0.3)]"
            lang="ar"
            dir="rtl"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.div>

          {/* Animated Save The Date */}
          <div className="flex flex-col items-center my-4 overflow-hidden mb-8">
            <div className="flex flex-wrap justify-center font-pinyon text-[4.5rem] md:text-7xl text-[#800000] my-2 drop-shadow-sm leading-tight">
              {saveTheDate.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotateX: -90 },
                    visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 200, damping: 15 } }
                  }}
                  className={letter === " " ? "w-4 md:w-6" : "inline-block"}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-col items-center mt-6">
              <span className="font-sans tracking-[0.3em] text-gray-600 text-xs uppercase font-bold drop-shadow-sm mb-2">JOIN US TO THE</span>
              <div className="flex flex-wrap justify-center font-pinyon text-[3.5rem] md:text-6xl text-[#A86D33] drop-shadow-sm leading-none">
                {"Wedding".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Elegant Ornament */}
          <motion.div variants={itemVariants} className="mt-10 opacity-80 rotate-180">
            <svg width="80" height="25" viewBox="0 0 100 30" fill="none" className="text-[#A86D33] drop-shadow-sm">
              <path d="M50 0 C60 15, 80 15, 100 15 C80 15, 60 25, 50 30 C40 25, 20 15, 0 15 C20 15, 40 15, 50 0 Z" fill="currentColor"/>
            </svg>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
