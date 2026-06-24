import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Realistic SVG shapes with 3D gradients and inner shadows
const Petal = ({ color }) => (
  <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id={`grad-${color}`} cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor={color} />
      </radialGradient>
      <filter id="shadow">
        <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3"/>
      </filter>
    </defs>
    <path d="M15 0C28 8 30 18 15 30C0 18 2 8 15 0Z" fill={`url(#grad-${color})`} filter="url(#shadow)" opacity="0.9" />
  </svg>
);

const Leaf = ({ color }) => (
  <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`leaf-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CDE0C3" />
        <stop offset="100%" stopColor={color} />
      </linearGradient>
    </defs>
    <path d="M15 0C30 10 25 25 15 30C5 25 0 10 15 0Z" fill={`url(#leaf-${color})`} opacity="0.85" />
    <path d="M15 0L15 30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
  </svg>
);

export default function RealisticParticles() {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate particles with physical properties
    const newParticles = Array.from({ length: 45 }).map((_, i) => {
      const isLeaf = Math.random() > 0.8; // 20% leaves, 80% petals
      return {
        id: i,
        x: Math.random() * 100, // starting viewport width %
        delay: Math.random() * 12, // stagger drops heavily
        duration: 10 + Math.random() * 10, // fall speed (slower for realism)
        size: 0.8 + Math.random() * 1.2, // sizes in rem
        type: isLeaf ? 'leaf' : 'petal',
        color: isLeaf 
          ? ['#607C54', '#859E75'][Math.floor(Math.random() * 2)]
          : ['#FFF0F0', '#FFFFFF', '#FDF5F5'][Math.floor(Math.random() * 3)],
        // Physics randomization
        swayAmount: 5 + Math.random() * 10,
        rotateSpeedX: 1 + Math.random() * 3,
        rotateSpeedY: 1 + Math.random() * 3,
        rotateSpeedZ: 0.5 + Math.random() * 1.5,
      };
    });
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30" style={{ perspective: '800px' }}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ 
            y: '-10vh', 
            x: `${p.x}vw`, 
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            opacity: 0 
          }}
          animate={{ 
            y: '110vh', 
            x: [
              `${p.x}vw`, 
              `${p.x + p.swayAmount}vw`, 
              `${p.x - p.swayAmount}vw`, 
              `${p.x}vw`
            ],
            rotateX: [0, 360 * p.rotateSpeedX],
            rotateY: [0, 360 * p.rotateSpeedY],
            rotateZ: [0, 360 * p.rotateSpeedZ],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear",
            x: {
              duration: p.duration / 3, // Sway back and forth 3 times during fall
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          className="absolute"
          style={{ 
            width: `${p.size}rem`, 
            height: `${p.size}rem`,
            filter: 'drop-shadow(0px 5px 5px rgba(0,0,0,0.15))'
          }}
        >
          {p.type === 'leaf' ? <Leaf color={p.color} /> : <Petal color={p.color} />}
        </motion.div>
      ))}
    </div>
  );
}
