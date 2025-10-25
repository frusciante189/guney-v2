import Hero from "./components/hero";
import ImpactSection from "./components/impact-section";
import OurServices from "./components/our-services";
import OurWork from "./components/our-work";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ImpactSection />
      <OurServices />
      <OurWork />
      <Testimonials />
    </div>
  );
}
