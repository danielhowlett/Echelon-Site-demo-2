import { motion } from "framer-motion";
import heroImage from "@assets/david-trinks-U276SVdo4ik-unsplash_1779218066419.jpg";

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center bg-[#183e2c] relative overflow-hidden pt-24">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#183e2c]/70 md:bg-gradient-to-r md:from-[#183e2c] md:via-[#183e2c]/85 md:to-[#183e2c]/40 z-10" />
        <img
          src={heroImage}
          alt="Spinal anatomy model"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="font-serif text-white text-5xl md:text-7xl leading-tight mb-6">
            Personalized Chiropractic Care in Dickson, TN
          </h1>
          <p className="font-sans text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Helping patients improve mobility, manage pain, and feel better through practical, personalized chiropractic care.
          </p>
          <a
            href="#appointment"
            className="inline-block bg-white text-[#183e2c] font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
