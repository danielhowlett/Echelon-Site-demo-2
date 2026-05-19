export function Footer() {
  return (
    <footer className="bg-[#e4e2e2] py-16 px-6 md:px-20 border-t border-[#c1c8c1]/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-xl text-[#183e2c]">Echelon Chiropractic</h3>
            <p className="font-sans text-[#414843] max-w-sm">
              Personalized Chiropractic Care in Dickson, TN.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[#183e2c] uppercase tracking-widest text-xs">Contact Info</h4>
            <div className="flex flex-col gap-2 font-sans text-[#414843]">
              <p>301 N Main Street<br />Dickson, TN 37055</p>
              <a href="tel:615-857-9089" className="hover:text-[#183e2c] transition-colors mt-2">
                615-857-9089
              </a>
              <a href="mailto:echelonchiropracticdickson@gmail.com" className="hover:text-[#183e2c] transition-colors">
                echelonchiropracticdickson@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-[#183e2c] uppercase tracking-widest text-xs">Quick Links</h4>
            <nav className="flex flex-col gap-3 font-sans text-[#414843]">
              <a href="#services" className="hover:text-[#183e2c] transition-colors w-fit">Services</a>
              <a href="#about" className="hover:text-[#183e2c] transition-colors w-fit">About</a>
              <a href="#appointment" className="hover:text-[#183e2c] transition-colors w-fit">Book Appointment</a>
              <a href="#location" className="hover:text-[#183e2c] transition-colors w-fit">Location</a>
            </nav>
          </div>

        </div>

        <div className="border-t border-[#c1c8c1]/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-[#605f51]">
            © {new Date().getFullYear()} Echelon Chiropractic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
