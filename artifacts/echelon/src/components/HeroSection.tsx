import { motion } from "framer-motion";
import heroImage from "@assets/david-trinks-U276SVdo4ik-unsplash_1779218066419.jpg";

export function HeroSection() {
  return (
    <section
      className="w-full flex flex-col md:flex-row overflow-hidden"
      style={{ minHeight: "min(78vh, 720px)", maxHeight: "760px" }}
    >
      {/* Left — Forest green text panel */}
      <div
        className="bg-[#183e2c] flex items-center md:w-1/2 w-full"
        style={{ padding: "clamp(3rem, 6vw, 6rem)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          style={{ maxWidth: "650px", width: "100%" }}
        >
          <h1
            className="font-serif text-white"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 5.25rem)",
              lineHeight: 1.08,
              marginBottom: "1.25rem",
            }}
          >
            Personalized Chiropractic Care in Dickson, TN
          </h1>
          <p
            className="font-sans text-white/85"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              lineHeight: 1.6,
              maxWidth: "520px",
              marginBottom: "2rem",
            }}
          >
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
      <div className="relative md:w-1/2 w-full" style={{ minHeight: "280px" }}>
        <img
          src={heroImage}
          alt="Spinal anatomy model"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-[#183e2c]/20" />
      </div>
    </section>
  );
}
