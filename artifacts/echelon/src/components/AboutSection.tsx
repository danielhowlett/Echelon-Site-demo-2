import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-32 px-6 md:px-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuApVffGhch8--3v4knVNmdbhOX4OvlmIEGUHmb0XwA6KUNuPUFDo0sXdgtEvheidce4SpbfpOc0_sEO3usLyFQnD10QZv8yXnbEc9BZkAlIOt5_lNOdr7gmIgunFOSlS-ADBJVu6XfCIF9AF2nx_oAaNfoH75pvTCEl2h4U2lL4uqSLRONtNTuYHfnneDDB7sFWuavbgdNg3zfl3gecAVDmBbKEVaK1cKpfnnBYMOzbqeX8SrwK3OWQ6lmC3A8DTsiv7OVlrAD6wqs"
              alt="Dr. Nathan Smith"
              className="rounded-2xl overflow-hidden shadow-lg aspect-square object-cover w-full max-w-[500px] mx-auto md:mr-auto md:ml-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#183e2c] mb-8">
              Meet Dr. Nathan Smith
            </h2>
            <div className="space-y-6">
              <p className="font-sans text-[#414843] text-lg leading-relaxed">
                Dr. Nathan Smith is a dedicated chiropractor committed to providing effective, patient-centered care. With a focus on understanding the root cause of discomfort, he develops practical treatment plans to help patients regain mobility and improve their quality of life.
              </p>
              <p className="font-sans text-[#414843] text-lg leading-relaxed">
                His practice at Echelon Chiropractic is built on the principles of clear communication, comprehensive care, and empowering patients to take an active role in their health journey.
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t border-[#d4cdc3]">
              <p className="font-serif italic text-[#605f51] text-lg">
                — Committed to your long-term wellbeing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
