import { AboutSection } from "./layouts/AboutSection";
import { OurTeam } from "./layouts/OurTeam";
import { ServicesSection } from "./layouts/ServicesSection";
import { TopSection } from "./layouts/TopSection";

export function HomePage() {
  return (
    <div className="bg-black text-white">
      <TopSection />
      <ServicesSection />
      <AboutSection />
      <OurTeam />
    </div>
  );
}