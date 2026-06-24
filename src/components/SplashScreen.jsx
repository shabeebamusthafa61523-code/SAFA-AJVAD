import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';

export default function SplashScreen({ onOpen }) {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8F9F5]"
    >
      {/* Background layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/hero_image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/80 via-[#faf8f5]/60 to-[#faf8f5]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center p-8 text-center max-w-sm">
        
        {/* Royal Seal / Monogram */}
        <div className="w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full border-[3px] border-[#A86D33] p-2 flex items-center justify-center bg-white/40 backdrop-blur-md shadow-[0_0_30px_rgba(168,109,51,0.5)] relative">
          <div className="absolute inset-0 rounded-full border-2 border-[#cb8941] m-2"></div>
          <span className="font-pinyon text-7xl md:text-[7rem] text-[#800000] font-bold z-10 drop-shadow-md mt-2 md:mt-4">FA</span>
        </div>

        <span className="font-sans tracking-[0.4em] text-[#800000] text-xs md:text-sm uppercase font-bold drop-shadow-sm mb-4">
          Wedding Invitation
        </span>
        
        <p className="font-serif text-gray-700 text-sm md:text-base italic mb-12">
          Request the honor of your presence
        </p>

        <button 
          onClick={onOpen}
          className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#A86D33] to-[#cb8941] text-white px-8 py-4 rounded-full font-sans uppercase tracking-[0.2em] font-bold text-xs md:text-sm shadow-[0_4px_20px_rgba(168,109,51,0.5)] hover:shadow-[0_6px_25px_rgba(168,109,51,0.7)] transition-all duration-300 hover:scale-105"
        >
          <MailOpen size={20} className="group-hover:animate-bounce" />
          Open Invitation
        </button>
      </div>
    </motion.div>
  );
}
