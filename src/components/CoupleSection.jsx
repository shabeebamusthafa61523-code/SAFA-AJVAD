import { motion } from 'framer-motion';

export default function CoupleSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-maroon font-bold mb-4">The Couple</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold"></div>
            <span className="text-gold text-2xl">✤</span>
            <div className="h-px w-16 bg-gold"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          {/* Bride */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            variants={fadeUp}
            className="text-center glass-panel p-8 rounded-t-full border-t-8 border-gold"
          >
            <h3 className="font-script text-5xl text-maroon-dark mb-2">Ms. Fathima Safa C</h3>
            <p className="text-sm font-sans text-maroon-light mb-6 uppercase tracking-wider">The Bride</p>
            <div className="space-y-2 font-serif text-gray-800">
              <p>D/O Mr. C Alikutty & Mrs. Junaida</p>
              <p>Chelambran House, Manoor</p>
              <p>Ponmala (P.O) Malappuram (Dist)</p>
              <p className="pt-4 text-gold-dark font-sans font-medium">Phone: 9947942011, 8606224886</p>
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            variants={fadeUp}
            className="text-center glass-panel p-8 rounded-b-full border-b-8 border-gold md:mt-24"
          >
            <h3 className="font-script text-5xl text-maroon-dark mb-2">Mr. Ajwad Sajavn V</h3>
            <p className="text-sm font-sans text-maroon-light mb-6 uppercase tracking-wider">The Groom</p>
            <div className="space-y-2 font-serif text-gray-800">
              <p>S/O Mr. Ahammed & Mrs. Muneera Ahammed</p>
              <p>Vadakkethil House, Indianoor (P.O)</p>
              <p>Kallada-Kottakal, Malappuram (Dist)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
