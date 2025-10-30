import { AboutSection } from "./sections/AboutSection";
import { CallToAction } from "./sections/CallToAction";
import { ContactUs } from "./sections/ContactUs";
import { OurTeam } from "./sections/OurTeam";
import { PlansSection } from "./sections/Plans";
import { ServicesSection } from "./sections/ServicesSection";
import { TopSection } from "./sections/TopSection";

export function HomePage() {
  return (
    <div className="bg-black text-white">
      <TopSection />
      <ServicesSection />
      <AboutSection />
      <OurTeam />
      <PlansSection />
      <CallToAction />
      <ContactUs />
    </div>
  );
}