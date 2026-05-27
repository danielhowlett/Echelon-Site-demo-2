import { motion } from "framer-motion";
import drPhoto from "@assets/IMG_3427_1779219763966.jpeg";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-28 px-5 md:px-10 lg:px-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image — left on desktop, after bio text but before quote on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[480px] mx-auto aspect-[4/5]">
              <img
                src={drPhoto}
                alt="Dr. Nathan Smith, chiropractor in Dickson, Tennessee"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Quote — mobile only, sits below image */}
            <div className="md:hidden mt-6 pt-6 border-t border-[#d4cdc3]">
              <p className="font-serif italic text-[#605f51] text-base text-center">
                — Committed to your long-term wellbeing.
              </p>
            </div>
          </motion.div>

          {/* Text — right on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <h2
              className="font-serif text-[#183e2c] mb-6 md:mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Meet Dr. Nathan Smith
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                Dr. Nathan Smith is a dedicated chiropractor committed to providing effective, patient-centered care in Dickson, Tennessee. With a focus on understanding the root cause of discomfort, he develops practical treatment plans to help patients regain mobility and improve their quality of life.
              </p>
              <p className="font-sans text-[#414843] text-base md:text-lg leading-relaxed">
                His practice at Echelon Chiropractic is built on the principles of clear communication, comprehensive care, and empowering patients to take an active role in their health journey.
              </p>
            </div>

            {/* Quote — desktop only, inside text column */}
            <div className="hidden md:block mt-12 pt-6 border-t border-[#d4cdc3]">
              <p className="font-serif italic text-[#605f51] text-base md:text-lg">
                — Committed to your long-term wellbeing.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
