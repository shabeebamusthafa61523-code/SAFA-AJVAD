import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import PageOne from './components/PageOne';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';
import RSVPModal from './components/RSVPModal';
import FlowerParticles from './components/FlowerParticles';
import MusicPlayer from './components/MusicPlayer';

import './App.css';

function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-[#F8F9F5]">
      
      <AnimatePresence>
        {!isOpened && <SplashScreen onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>

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
      <AnimatePresence>
        {isOpened && (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className="scroll-container relative z-10"
          >
            <PageOne />
            <PageThree />
            <PageFour onRSVPClick={() => setIsRSVPOpen(true)} />
          </motion.main>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRSVPOpen && <RSVPModal onClose={() => setIsRSVPOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
