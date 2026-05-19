import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "I came in barely able to turn my neck after a car accident. After just a few sessions, I had my full range of motion back. Dr. Thompson genuinely listens and explains everything — I never felt like just another appointment.",
    detail: "Neck & Whiplash Recovery",
  },
  {
    name: "James R.",
    quote:
      "Years of desk work had my lower back in constant pain. Echelon was the first place that actually addressed the root cause instead of just masking it. I'm sleeping through the night again for the first time in years.",
    detail: "Chronic Lower Back Pain",
  },
  {
    name: "Amanda K.",
    quote:
      "I was skeptical about chiropractic care but a friend insisted I give it a try. I'm so glad I did. The office is calm, the staff is warm, and the results speak for themselves. My migraines have dropped dramatically.",
    detail: "Migraine Relief",
  },
  {
    name: "Tom & Lisa B.",
    quote:
      "Both my husband and I see Dr. Thompson regularly now. He tailors the approach to each of us completely differently. It's clear he takes pride in actually helping people, not just running patients through.",
    detail: "Family Care",
  },
  {
    name: "Derek W.",
    quote:
      "As a runner training for my first marathon, I started having hip and IT band issues. Echelon got me back on track — literally. I finished the race pain-free. Couldn't have done it without this team.",
    detail: "Sports & Athletic Recovery",
  },
];

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#183e2c]/20"
    >
      <path
        d="M0 24V14.4C0 10.56 0.96 7.28 2.88 4.56C4.88 1.84 7.76 0.16 11.52 0L12.48 2.16C10.16 2.72 8.36 3.92 7.08 5.76C5.88 7.52 5.28 9.52 5.28 11.76H10.56V24H0ZM19.44 24V14.4C19.44 10.56 20.4 7.28 22.32 4.56C24.32 1.84 27.2 0.16 30.96 0L31.92 2.16C29.6 2.72 27.8 3.92 26.52 5.76C25.32 7.52 24.72 9.52 24.72 11.76H30V24H19.44Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="#183e2c"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="bg-[#fffbe9] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#183e2c]/50 mb-3">
            Patient Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#183e2c] leading-tight">
            Real Results, Real People
          </h2>
        </div>

        {/* Desktop grid — 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm border border-[#183e2c]/6"
            >
              <QuoteIcon />
              <StarRow />
              <p className="font-sans text-[#183e2c]/80 text-base leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-[#183e2c]/10">
                <p className="font-serif text-[#183e2c] font-medium text-base">{t.name}</p>
                <p className="font-sans text-xs text-[#183e2c]/50 tracking-wide mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop row — remaining 2 centered */}
        <div className="hidden md:flex justify-center gap-6 lg:gap-8 mt-6 lg:mt-8">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm border border-[#183e2c]/6 w-full max-w-sm lg:max-w-md"
            >
              <QuoteIcon />
              <StarRow />
              <p className="font-sans text-[#183e2c]/80 text-base leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-[#183e2c]/10">
                <p className="font-serif text-[#183e2c] font-medium text-base">{t.name}</p>
                <p className="font-sans text-xs text-[#183e2c]/50 tracking-wide mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-[#183e2c]/6"
              >
                <QuoteIcon />
                <StarRow />
                <p className="font-sans text-[#183e2c]/80 text-base leading-relaxed mt-1">
                  "{testimonials[active].quote}"
                </p>
                <div className="pt-5 mt-5 border-t border-[#183e2c]/10">
                  <p className="font-serif text-[#183e2c] font-medium text-base">
                    {testimonials[active].name}
                  </p>
                  <p className="font-sans text-xs text-[#183e2c]/50 tracking-wide mt-0.5">
                    {testimonials[active].detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#183e2c]/20 flex items-center justify-center text-[#183e2c] hover:bg-[#183e2c]/5 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-[#183e2c]"
                      : "w-2 h-2 bg-[#183e2c]/25"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#183e2c]/20 flex items-center justify-center text-[#183e2c] hover:bg-[#183e2c]/5 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
