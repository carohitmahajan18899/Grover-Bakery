import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-heritage-ink text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">
                G
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight">
                Grover Bakery
              </span>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed mb-8">
              Preserving the authentic taste of Amritsar since 1960. Our commitment to quality and tradition has made us a landmark in Hide Market for over six decades.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#c5a059" }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-heritage-gold shrink-0" size={20} />
                <span className="text-white/60 text-sm leading-relaxed">
                  Hide Market, Near Golden Temple Road, Amritsar, Punjab 143001
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-heritage-gold shrink-0" size={20} />
                <span className="text-white/60 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-heritage-gold shrink-0" size={20} />
                <span className="text-white/60 text-sm">hello@groverbakery.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold mb-8">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-white">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">9:00 AM - 9:00 PM</span>
              </li>
              <li className="mt-8 pt-8 border-t border-white/10 italic">
                "Fresh batches every 2 hours"
              </li>
            </ul>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-64 bg-white/5 rounded-3xl overflow-hidden mb-12 relative group">
          <div className="absolute inset-0 flex items-center justify-center bg-heritage-ink/40 group-hover:bg-heritage-ink/20 transition-colors z-10">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 text-heritage-gold" size={32} />
              <div className="font-serif text-xl">Find us in Hide Market</div>
              <button className="mt-4 text-xs uppercase tracking-widest font-bold text-heritage-gold hover:text-white transition-colors">
                Open in Google Maps
              </button>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
            alt="Map background" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-white/30 font-bold">
          <div>© 2024 Grover Bakery Amritsar. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-heritage-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-heritage-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
