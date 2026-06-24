import { useState } from 'react';
import { motion } from 'framer-motion';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import RSVPModal from './components/RSVPModal';
import MusicPlayer from './components/MusicPlayer';
import FlowerParticles from './components/FlowerParticles';

function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  return (
    <div className="relative bg-[#F8F9F5]">
      
      {/* Background Layer */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.img 
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          src="/hero_image.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-80"
          onError={(e) => { e.target.src = '/couple.png'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F9F5]/70"></div>
      </div>

      <FlowerParticles />
      <MusicPlayer />



      {/* Main Scroll Container */}
      <main className="scroll-container relative z-10">
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour onRSVPClick={() => setIsRSVPOpen(true)} />
      </main>

      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
    </div>
  );
}

export default App;
