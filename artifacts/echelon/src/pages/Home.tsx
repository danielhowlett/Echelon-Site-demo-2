import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FirstVisitSection } from "@/components/FirstVisitSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf9f8] flex flex-col">
      <TopNav />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FirstVisitSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
