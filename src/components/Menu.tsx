import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const categories = ["Biscuits", "Cakes", "Savories"];

const menuItems = {
  Biscuits: [
    { name: "Atta Biscuits", price: "₹120", desc: "Traditional whole wheat biscuits with a hint of cardamom.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400" },
    { name: "Coconut Crunch", price: "₹140", desc: "Rich coconut flavor with a satisfying golden crunch.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400" },
    { name: "Jeera Cookies", price: "₹110", desc: "Salty and sweet cookies infused with roasted cumin seeds.", image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=400" },
    { name: "Cashew Delights", price: "₹180", desc: "Buttery biscuits loaded with premium roasted cashews.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400" },
  ],
  Cakes: [
    { name: "Classic Vanilla", price: "₹450", desc: "Fluffy vanilla sponge with rich buttercream frosting.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
    { name: "Chocolate Truffle", price: "₹600", desc: "Deep chocolate layers with silky ganache finish.", image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=400" },
    { name: "Fruit Overload", price: "₹550", desc: "Fresh seasonal fruits atop a light cream cake.", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=400" },
    { name: "Red Velvet", price: "₹650", desc: "Velvety red sponge with tangy cream cheese frosting.", image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=400" },
  ],
  Savories: [
    { name: "Punjabi Rusk", price: "₹80", desc: "The legendary double-baked rusk, perfect with chai.", image: "https://images.unsplash.com/photo-1621447509323-5705b5ff7f2e?auto=format&fit=crop&q=80&w=400" },
    { name: "Paneer Patties", price: "₹40", desc: "Flaky puff pastry filled with spiced cottage cheese.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400" },
    { name: "Masala Mathri", price: "₹90", desc: "Crispy, spiced flour crackers, a traditional tea-time snack.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400" },
    { name: "Cream Rolls", price: "₹30", desc: "Crispy pastry tubes filled with sweet vanilla cream.", image: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&q=80&w=400" },
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Biscuits");

  return (
    <section id="menu" className="py-24 bg-heritage-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-heritage-gold font-medium tracking-widest text-xs uppercase">Freshly Baked Daily</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-4 text-heritage-ink">Our Signature Menu</h2>
          </div>
          
          <div className="flex gap-2 bg-white/50 p-1 rounded-full border border-heritage-gold/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat 
                    ? "bg-heritage-gold text-white shadow-md" 
                    : "text-heritage-ink/60 hover:text-heritage-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="wait">
            {menuItems[activeTab as keyof typeof menuItems].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-heritage-gold">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-heritage-ink mb-2">{item.name}</h3>
                  <p className="text-sm text-heritage-ink/60 leading-relaxed">{item.desc}</p>
                  <button className="mt-6 w-full py-3 border border-heritage-gold/20 rounded-xl text-xs uppercase tracking-widest font-bold text-heritage-gold group-hover:bg-heritage-gold group-hover:text-white transition-colors">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
