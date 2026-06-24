import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

export default function EventSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-24 px-6 bg-maroon-dark text-gold-light relative border-y-8 border-gold/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-cinzel text-gold-gradient">The Events</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/50"></div>
            <span className="text-gold/80 text-xl">✨</span>
            <div className="h-px w-16 bg-gold/50"></div>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Nikkah */}
          <motion.div variants={item} className="glass-panel-dark p-8 rounded-lg text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full"></div>
            <h3 className="font-script text-4xl text-gold mb-6">Nikkah</h3>
            <div className="space-y-4 font-serif text-lg">
              <p className="flex items-center justify-center gap-2"><Clock className="w-5 h-5 text-gold"/> 10:30 AM</p>
              <p className="flex items-center justify-center gap-2"><Calendar className="w-5 h-5 text-gold"/> Saturday, 11/07/2026</p>
              <p className="text-sm text-gold/70 mt-2 font-sans">1448 - Muharram - 26</p>
            </div>
          </motion.div>

          {/* Wedding */}
          <motion.div variants={item} className="glass-panel-dark p-8 rounded-lg text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gold/10 rounded-br-full"></div>
            <h3 className="font-script text-4xl text-gold mb-6">Wedding</h3>
            <div className="space-y-4 font-serif text-lg">
              <p className="flex items-center justify-center gap-2"><Clock className="w-5 h-5 text-gold"/> 11:00 AM</p>
              <p className="flex items-center justify-center gap-2"><Calendar className="w-5 h-5 text-gold"/> Saturday, 11/07/2026</p>
              <p className="text-sm text-gold/70 mt-2 font-sans">1448 - Muharram - 26</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Location */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto glass-panel-dark p-8 rounded-xl text-center border-2 border-gold/60"
        >
          <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
          <h3 className="font-cinzel text-2xl text-gold mb-4">Location</h3>
          <p className="font-serif text-xl mb-6">Thavakkal Convention Centre</p>
          <a 
            href="https://share.google/cjBCOD5XltPEPCziA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gold text-maroon-dark px-8 py-3 rounded-full font-sans font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300 shadow-lg shadow-gold/20"
          >
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
