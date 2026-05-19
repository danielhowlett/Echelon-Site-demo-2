import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#fbf9f8]/95 backdrop-blur-md border-[#d4cdc3]/50 shadow-sm py-4"
            : "bg-[#fbf9f8]/90 backdrop-blur-md border-[#d4cdc3]/30 py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-[#183e2c] font-medium tracking-tight">
            Echelon Chiropractic
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative uppercase tracking-widest text-xs font-bold text-[#414843] hover:text-[#183e2c] transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#183e2c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:615-857-9089" className="font-sans text-sm font-medium text-[#414843] hover:text-[#183e2c] transition-colors">
              615-857-9089
            </a>
            <a
              href="#appointment"
              className="bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-6 py-3 rounded-sm hover:bg-[#002818] transition-colors"
            >
              Request an Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#183e2c] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#fbf9f8] pt-28 px-6 pb-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 items-center pt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="uppercase tracking-widest text-sm font-bold text-[#183e2c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-px bg-[#d4cdc3] my-4" />
              <a href="tel:615-857-9089" className="font-serif text-xl text-[#183e2c]">
                615-857-9089
              </a>
              <a
                href="#appointment"
                className="bg-[#183e2c] text-white uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-sm mt-4 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request an Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
