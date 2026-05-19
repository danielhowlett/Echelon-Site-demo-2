import { motion } from "framer-motion";
import heroImage from "@assets/david-trinks-U276SVdo4ik-unsplash_1779218066419.jpg";

export function HeroSection() {
  return (
    <section className="hero">

      {/* Left — Forest green text panel */}
      <div className="hero-content bg-[#183e2c]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h1 className="font-serif text-white">
            Personalized Chiropractic Care in Dickson, TN
          </h1>
          <p className="font-sans text-white/85">
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
      <div className="hero-image">
        <img src={heroImage} alt="Spinal anatomy model" />
        {/* Gradient blending left edge into green panel */}
        <div
          className="overlay"
          style={{
            background:
              "linear-gradient(to right, #183e2c 0%, rgba(24,62,44,0.55) 30%, rgba(24,62,44,0.1) 70%, transparent 100%)",
          }}
        />
      </div>

    </section>
  );
}
