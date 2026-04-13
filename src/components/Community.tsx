import { motion } from "motion/react";
import { Quote, Camera } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Local Resident",
    text: "I've been coming here since I was a kid. The taste of their Atta Biscuits hasn't changed in 30 years. It's pure nostalgia.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Simran Kaur",
    role: "Food Blogger",
    text: "The best bakery in Amritsar, hands down. Their Punjabi Rusk is a must-try with morning tea. Truly a heritage landmark.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Amit Sharma",
    role: "Loyal Customer",
    text: "Grover Bakery is more than just a bakery; it's a part of our family celebrations. Every birthday cake comes from here.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];

export default function Community() {
  return (
    <section id="community" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-heritage-gold font-medium tracking-widest text-xs uppercase">Our Community</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-4 text-heritage-ink mb-8">Stories from Our <br /><span className="italic text-heritage-terracotta">Generations</span></h2>
            <p className="text-lg text-heritage-ink/60 mb-12 leading-relaxed">
              For over 60 years, Grover Bakery has been a part of your celebrations, morning rituals, and evening snacks. We love hearing your stories.
            </p>
            
            <div className="space-y-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-3xl bg-heritage-cream/30 border border-heritage-gold/5"
                >
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
                  <div>
                    <Quote className="text-heritage-gold/20 mb-2" size={24} />
                    <p className="text-heritage-ink/80 italic mb-4">"{t.text}"</p>
                    <div className="font-serif font-bold text-heritage-ink">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-heritage-gold">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/90 backdrop-blur-xl p-8 rounded-full shadow-2xl flex flex-col items-center gap-2 border border-heritage-gold/20"
              >
                <Camera size={32} className="text-heritage-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-heritage-ink">Share Your Story</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
