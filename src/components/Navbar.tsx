import { motion } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-heritage-cream/80 backdrop-blur-md border-b border-heritage-gold/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">
            G
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-heritage-ink">
            Grover Bakery
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Our Story", "Menu", "Community"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-heritage-gold transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-heritage-gold text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2"
          >
            <ShoppingBag size={16} />
            Order Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-heritage-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-heritage-cream border-b border-heritage-gold/20 px-6 py-6 flex flex-col gap-4"
        >
          {["Home", "Our Story", "Menu", "Community"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif font-medium"
            >
              {item}
            </a>
          ))}
          <button className="bg-heritage-gold text-white px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2">
            <ShoppingBag size={18} />
            Order Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
