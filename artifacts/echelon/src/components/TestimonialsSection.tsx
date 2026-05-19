import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "I came in barely able to turn my neck and left feeling like myself again. The care here is thorough and unhurried — I never felt rushed through an appointment.",
    detail: "Neck & Mobility",
  },
  {
    name: "James R.",
    quote:
      "Years of desk work had caught up with me. Echelon was the first place that addressed the root of the problem rather than just the symptoms. I'm sleeping through the night again.",
    detail: "Back Pain Relief",
  },
  {
    name: "Amanda K.",
    quote:
      "I was skeptical at first, but a friend insisted I give it a try. The office is calm, the staff is warm, and the results have been remarkable. I'm so glad I came in.",
    detail: "First-Time Patient",
  },
  {
    name: "Tom & Lisa B.",
    quote:
      "Our whole family sees Dr. Smith now. He tailors the approach to each of us completely differently, which says a lot about how much he actually listens.",
    detail: "Family Care",
  },
  {
    name: "Derek W.",
    quote:
      "I was dealing with hip pain during training and wasn't sure I'd make it to race day. Echelon got me back on track and I finished feeling strong. Couldn't recommend it more.",
    detail: "Active Recovery",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
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

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="bg-[#fffbe9] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#183e2c]/50 mb-3">
            Patient Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#183e2c] leading-tight">
            What Patients Are Saying
          </h2>
        </div>

        {/* Desktop grid — 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-sm border border-[#183e2c]/6"
            >
              <StarRow />
              <p className="font-sans text-[#183e2c]/75 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="pt-3 border-t border-[#183e2c]/10">
                <p className="font-serif text-[#183e2c] font-medium text-sm">{t.name}</p>
                <p className="font-sans text-[11px] text-[#183e2c]/45 tracking-wide mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop row — remaining 2 centered */}
        <div className="hidden lg:flex justify-center gap-6 lg:gap-8 mt-6 lg:mt-8">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className="bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-sm border border-[#183e2c]/6 w-full max-w-sm lg:max-w-md"
            >
              <StarRow />
              <p className="font-sans text-[#183e2c]/75 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="pt-3 border-t border-[#183e2c]/10">
                <p className="font-serif text-[#183e2c] font-medium text-sm">{t.name}</p>
                <p className="font-sans text-[11px] text-[#183e2c]/45 tracking-wide mt-0.5">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile + tablet carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.28 }}
                className="bg-white rounded-2xl px-6 py-6 shadow-sm border border-[#183e2c]/6"
              >
                <StarRow />
                <p className="font-sans text-[#183e2c]/75 text-sm leading-relaxed mt-3">
                  "{testimonials[active].quote}"
                </p>
                <div className="pt-4 mt-4 border-t border-[#183e2c]/10">
                  <p className="font-serif text-[#183e2c] font-medium text-sm">
                    {testimonials[active].name}
                  </p>
                  <p className="font-sans text-[11px] text-[#183e2c]/45 tracking-wide mt-0.5">
                    {testimonials[active].detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-[#183e2c]/20 bg-white flex items-center justify-center text-[#183e2c] hover:bg-[#183e2c]/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-5 h-1.5 bg-[#183e2c]"
                      : "w-1.5 h-1.5 bg-[#183e2c]/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-[#183e2c]/20 bg-white flex items-center justify-center text-[#183e2c] hover:bg-[#183e2c]/5 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-center font-sans text-[11px] text-[#183e2c]/40 mt-5 leading-relaxed px-2">
            Individual results may vary. Testimonials are shared for general informational purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
