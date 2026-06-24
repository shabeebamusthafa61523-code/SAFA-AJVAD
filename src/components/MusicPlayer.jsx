import { useState, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => {
          console.log("Audio play failed:", e);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed top-6 right-6 z-[60]">
      <button 
        onClick={togglePlay}
        className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-[#cb8941]/30 text-[#cb8941] hover:scale-110 transition-transform"
        aria-label="Toggle music"
      >
        {isPlaying ? <Music size={20} className="animate-pulse" /> : <Music2 size={20} />}
      </button>
      <audio ref={audioRef} loop>
        <source src="/background-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
