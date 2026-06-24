import { motion } from 'framer-motion';
import FlowerParticles from './FlowerParticles';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#E8EAE6] p-0 shadow-inner">
      
      {/* High-quality cinematic Ken Burns effect for the hero image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          opacity: { duration: 3, ease: "easeOut" },
          scale: { duration: 25, ease: "easeOut" }
        }}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-10"
      >
        <img 
          src="/hero_image.png" 
          alt="And we created you in pairs" 
          className="w-full h-full object-contain md:object-cover max-w-5xl mx-auto drop-shadow-2xl"
          onError={(e) => { e.target.src = '/couple.png'; }}
        />
      </motion.div>

      {/* Realistic Vignette Shadow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.3)_100%)] z-20 pointer-events-none mix-blend-multiply"></div>

      {/* Realistic 3D Falling Petals */}
      <FlowerParticles />

      {/* Photorealistic Glassmorphic Content Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, delay: 2, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease out
        className="z-40 absolute bottom-12 text-center flex flex-col items-center w-full px-4"
      >
        <div className="relative p-8 rounded-3xl max-w-md w-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.15)] overflow-hidden">
          {/* Subtle gloss reflection effect */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
          
          <h1 className="font-script text-6xl md:text-7xl text-gray-800 mb-2 drop-shadow-sm tracking-wide">Fathima & Ajwad</h1>
          <p className="font-sans text-xs md:text-sm text-gray-700 tracking-[0.3em] uppercase mt-4 font-semibold">Are getting married</p>
        </div>
        
        {/* Elegant glowing scroll indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-gray-800 via-gray-500 to-transparent mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
