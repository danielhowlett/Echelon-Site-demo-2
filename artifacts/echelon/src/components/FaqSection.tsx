import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What does a chiropractor help with?",
    a: "Chiropractic care focuses on how the spine, joints, muscles, and nervous system work together. Many patients visit a chiropractor for back pain, neck pain, stiffness, mobility concerns, or general wellness support.",
  },
  {
    q: "What happens during a first visit?",
    a: "Your first visit typically includes a conversation about your symptoms, health history, and goals. Dr. Smith may also evaluate movement, posture, and areas of discomfort before discussing a care plan.",
  },
  {
    q: "Do I need to be in pain to see a chiropractor?",
    a: "No. Some patients seek care because they are dealing with discomfort, while others want support with mobility, posture, or ongoing wellness.",
  },
  {
    q: "How do I request an appointment?",
    a: "You can request an appointment through the form on this website. The office will follow up to confirm availability and next steps.",
  },
  {
    q: "Where is Echelon Chiropractic located?",
    a: "Echelon Chiropractic is located inside VitaLive Health and Wellness at 301 N Main Street in Dickson, TN 37055.",
  },
  {
    q: "Is online scheduling available?",
    a: "Online scheduling is coming soon. For now, patients can request an appointment through the website or contact the office directly.",
  },
  {
    q: "What services are offered?",
    a: "Echelon Chiropractic offers chiropractic adjustments, new patient examinations and re-examinations, therapeutic exercises and rehabilitation, soft tissue therapy, wellness and maintenance care, and flexion distraction.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Bring a photo ID and any information that may help Dr. Smith better understand your health history, symptoms, and goals.",
  },
];

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative w-5 h-5 shrink-0 flex items-center justify-center">
      <span className="absolute block w-3 h-px bg-[#183e2c] transition-all duration-300" />
      <span
        className={`absolute block w-px h-3 bg-[#183e2c] transition-all duration-300 ${
          open ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
        }`}
      />
    </span>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#fffbe9] py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#183e2c]/50 mb-3">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#183e2c] leading-tight mb-4">
            Questions Before Your First Visit?
          </h2>
          <p className="font-sans text-[#183e2c]/60 text-base md:text-lg leading-relaxed">
            Here are a few helpful things to know before requesting an appointment with Echelon Chiropractic.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((item, i) => (
            <div key={i}>
              <div className="h-px bg-[#183e2c]/10" />
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-serif text-base md:text-lg text-[#183e2c] group-hover:opacity-75 transition-opacity leading-snug pr-2">
                  {item.q}
                </span>
                <PlusMinusIcon open={openIndex === i} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm md:text-base text-[#183e2c]/65 leading-relaxed pb-6 pr-8">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="h-px bg-[#183e2c]/10" />
        </div>

        {/* Transition into appointment section */}
        <div className="text-center mt-14 md:mt-16">
          <p className="font-serif text-xl md:text-2xl text-[#183e2c]/70 italic leading-relaxed">
            Ready to take the next step? We'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
