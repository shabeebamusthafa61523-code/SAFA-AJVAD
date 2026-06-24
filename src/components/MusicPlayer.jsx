import { useState, useRef, useEffect } from 'react';
import { Music, Music2 } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const interactionDone = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlayMusic = () => {
      if (interactionDone.current) return;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            interactionDone.current = true;
            window.removeEventListener('click', tryPlayMusic);
            window.removeEventListener('touchstart', tryPlayMusic);
            window.removeEventListener('scroll', tryPlayMusic);
          })
          .catch(e => {
            // Autoplay blocked - waiting for user interaction
            console.log("Waiting for user interaction to play music...");
          });
      }
    };

    // Attempt to play immediately
    tryPlayMusic();

    // Attach listeners for the first interaction to bypass browser autoplay policies
    window.addEventListener('click', tryPlayMusic);
    window.addEventListener('touchstart', tryPlayMusic);
    window.addEventListener('scroll', tryPlayMusic, { passive: true, once: true });

    return () => {
      window.removeEventListener('click', tryPlayMusic);
      window.removeEventListener('touchstart', tryPlayMusic);
      window.removeEventListener('scroll', tryPlayMusic);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation(); // Prevent triggering the global click listener
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      interactionDone.current = true; // User manually interacted, stop trying to autoplay
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          interactionDone.current = true;
        })
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
