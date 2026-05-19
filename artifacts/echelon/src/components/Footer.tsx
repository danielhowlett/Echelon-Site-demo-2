import logoImage from "@assets/logo_trimmed.png";

export function Footer() {
  return (
    <footer className="bg-[#e4e2e2] py-12 md:py-14 px-5 md:px-10 lg:px-20 border-t border-[#c1c8c1]/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-12">

          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <img
              src={logoImage}
              alt="Echelon Chiropractic"
              className="h-14 w-auto object-contain object-left"
            />
            <p className="font-sans text-[#414843] text-sm leading-relaxed max-w-xs">
              Personalized Chiropractic Care in Dickson, TN.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-sans font-bold text-[#183e2c] uppercase tracking-widest text-xs mb-2">Contact Info</h4>
            <p className="font-sans text-[#414843] text-sm leading-relaxed">
              Inside VitaLive Health and Wellness<br />
              301 N Main Street, Dickson, TN 37055
            </p>
            <a href="tel:615-857-9089" className="font-sans text-sm text-[#414843] hover:text-[#183e2c] transition-colors mt-1">
              615-857-9089
            </a>
            <a
              href="mailto:echelonchiropracticdickson@gmail.com"
              className="font-sans text-sm text-[#414843] hover:text-[#183e2c] transition-colors"
              style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              echelonchiropracticdickson@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-sans font-bold text-[#183e2c] uppercase tracking-widest text-xs mb-2">Quick Links</h4>
            <nav className="flex flex-col gap-2 font-sans text-sm text-[#414843]">
              <a href="#services" className="hover:text-[#183e2c] transition-colors w-fit">Services</a>
              <a href="#about" className="hover:text-[#183e2c] transition-colors w-fit">About</a>
              <a href="#appointment" className="hover:text-[#183e2c] transition-colors w-fit">Book Appointment</a>
              <a href="#location" className="hover:text-[#183e2c] transition-colors w-fit">Location</a>
            </nav>
          </div>

        </div>

        <div className="border-t border-[#c1c8c1]/30 pt-6">
          <p className="font-sans text-sm text-[#605f51]">
            © {new Date().getFullYear()} Echelon Chiropractic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
