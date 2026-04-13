import { motion } from "motion/react";

const milestones = [
  {
    year: "1960",
    title: "The Beginning",
    description: "Grover Bakery opened its doors in the bustling Hide Market of Amritsar, bringing traditional baking techniques to the local community."
  },
  {
    year: "1985",
    title: "The Signature Rusk",
    description: "Our authentic Punjabi rusks became a household name, known for their perfect crunch and rich flavor."
  },
  {
    year: "2010",
    title: "Modern Expansion",
    description: "While keeping our traditional roots, we expanded our menu to include modern cakes and pastries, blending heritage with contemporary tastes."
  },
  {
    year: "Today",
    title: "A Living Legend",
    description: "Now serving the third generation of customers, Grover Bakery remains a symbol of quality and nostalgia in Amritsar."
  }
];

export default function Story() {
  return (
    <section id="our-story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-heritage-gold font-medium tracking-widest text-xs uppercase"
          >
            Our Legacy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mt-4 text-heritage-ink"
          >
            Since 1960 in Hide Market
          </motion.h2>
          <div className="w-24 h-[1px] bg-heritage-gold mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
              alt="Bakery interior" 
              className="rounded-3xl shadow-xl aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl max-w-xs">
              <p className="font-serif italic text-lg text-heritage-ink">
                "The smell of our oven has been the heartbeat of Hide Market for over six decades."
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest font-bold text-heritage-gold">
                — The Grover Family
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-heritage-gold flex items-center justify-center text-heritage-gold font-serif font-bold shrink-0">
                    {item.year.includes("Today") ? "★" : item.year.slice(2)}
                  </div>
                  {i !== milestones.length - 1 && (
                    <div className="w-[1px] h-full bg-heritage-gold/20 my-2" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-heritage-ink mb-2">{item.title}</h3>
                  <p className="text-heritage-ink/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
