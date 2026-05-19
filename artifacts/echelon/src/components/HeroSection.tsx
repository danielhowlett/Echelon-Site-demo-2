import { motion } from "framer-motion";
import heroImage from "@assets/david-trinks-U276SVdo4ik-unsplash_1779218066419.jpg";

export function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row" style={{ minHeight: "clamp(500px, 80vh, 900px)" }}>

      {/* Left — Forest green text panel */}
      <div className="flex-1 bg-[#183e2c] flex items-center px-8 md:px-14 lg:px-20 py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg w-full"
        >
          <h1
            className="font-serif text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 5.5rem)" }}
          >
            Personalized Chiropractic Care in Dickson, TN
          </h1>
          <p className="font-sans text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Helping patients improve mobility, manage pain, and feel better through practical, personalized chiropractic care.
          </p>
          <a
            href="#appointment"
            className="inline-block w-full sm:w-auto text-center bg-white text-[#183e2c] font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>

      {/* Right — Image panel */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto shrink-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Spinal anatomy model"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay to blend with brand */}
        <div className="absolute inset-0 bg-[#183e2c]/25" />
      </div>

    </section>
  );
}
