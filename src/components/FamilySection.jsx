import { motion } from 'framer-motion';

export default function FamilySection() {
  const family = [
    "C M. Faiz",
    "C Fawaz Azhar",
    "Mufeeda PK",
    "Baiza Nujoom C"
  ];

  return (
    <section className="py-24 px-6 relative text-center">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl text-maroon mb-12">Sharing the Happiness</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {family.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="p-4 border border-gold/30 rounded-lg bg-white/50 shadow-sm"
              >
                <p className="font-serif text-maroon-dark font-medium">{member}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="font-cinzel text-gold-dark text-lg mb-8">We await your gracious presence</p>
          
          <div className="flex justify-center">
            <div className="w-24 h-px bg-gold"></div>
            <div className="w-2 h-2 rounded-full bg-gold mx-2 -mt-[3px]"></div>
            <div className="w-24 h-px bg-gold"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
