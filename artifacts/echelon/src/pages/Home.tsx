import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbf9f8] flex flex-col">
      <TopNav />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <AppointmentSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
