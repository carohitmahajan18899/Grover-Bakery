import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-heritage-gold/5 -skew-x-12 transform translate-x-1/4 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-heritage-gold" />
            <span className="text-heritage-gold font-medium tracking-widest text-xs uppercase">Est. 1960 • Hide Market, Amritsar</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-heritage-ink">
            A Taste of <br />
            <span className="italic text-heritage-terracotta">Generations.</span>
          </h1>
          
          <p className="text-lg text-heritage-ink/70 mb-10 max-w-md leading-relaxed">
            From the heart of Amritsar to your home. Experience the legendary aroma of freshly baked biscuits, authentic Punjabi rusks, and the legacy of Grover Bakery.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-heritage-gold text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-heritage-gold/20"
            >
              Explore Menu <ArrowRight size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-heritage-gold text-heritage-gold px-8 py-4 rounded-full font-medium flex items-center gap-2"
            >
              <MessageCircle size={18} /> Order via WhatsApp
            </motion.button>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-2xl font-serif font-bold">60+</div>
              <div className="text-xs uppercase tracking-wider text-heritage-ink/50">Years of Legacy</div>
            </div>
            <div className="w-[1px] h-10 bg-heritage-gold/20" />
            <div>
              <div className="text-2xl font-serif font-bold">100%</div>
              <div className="text-xs uppercase tracking-wider text-heritage-ink/50">Hand-crafted</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800" 
              alt="Freshly baked bread" 
              className="pill-image w-full aspect-[4/5] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-heritage-terracotta/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-heritage-gold/10 rounded-full blur-3xl" 
          />
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 vertical-text text-heritage-gold/40">
            Handcrafted in Amritsar
          </div>
        </motion.div>
      </div>
    </section>
  );
}
