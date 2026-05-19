import { motion } from "framer-motion";

export function LocationSection() {
  return (
    <section id="location" className="bg-white py-32 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#f5f3f3] rounded-2xl p-8 md:p-12 border border-[#d4cdc3]/20 shadow-sm flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl text-[#183e2c] mb-3">Our Location</h2>
            <p className="font-sans text-[#414843] mb-10 text-lg">
              Conveniently located inside VitaLive Health and Wellness.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#183e2c] text-3xl shrink-0">business</span>
                <div>
                  <h3 className="font-sans font-bold text-[#183e2c] uppercase tracking-widest text-xs mb-1">Echelon Chiropractic</h3>
                  <p className="font-sans text-[#414843]">Inside VitaLive Health and Wellness</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#183e2c] text-3xl shrink-0">location_on</span>
                <div>
                  <h3 className="font-sans font-bold text-[#183e2c] uppercase tracking-widest text-xs mb-1">Address</h3>
                  <p className="font-sans text-[#414843]">
                    301 N Main Street<br />
                    Dickson, TN 37055
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#183e2c] text-3xl shrink-0">phone</span>
                <div>
                  <h3 className="font-sans font-bold text-[#183e2c] uppercase tracking-widest text-xs mb-1">Contact</h3>
                  <div className="flex flex-col gap-1">
                    <a href="tel:615-857-9089" className="font-sans text-[#414843] hover:text-[#183e2c] transition-colors">
                      615-857-9089
                    </a>
                    <a href="mailto:echelonchiropracticdickson@gmail.com" className="font-sans text-[#414843] hover:text-[#183e2c] transition-colors break-all">
                      echelonchiropracticdickson@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=301+N+Main+St,+Dickson,+TN+37055" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-[#183e2c] text-[#183e2c] uppercase tracking-widest text-xs font-bold px-8 py-4 rounded-sm text-center hover:bg-[#183e2c] hover:text-white transition-colors self-start"
            >
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-inner min-h-[400px] lg:min-h-full h-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.0!2d-87.3793!3d36.0773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886101a2b1f5b1a5%3A0x1234567890abcdef!2s301%20N%20Main%20St%2C%20Dickson%2C%20TN%2037055!5e0!3m2!1sen!2sus!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
