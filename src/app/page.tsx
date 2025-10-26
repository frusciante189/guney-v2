import Hero from "./components/hero";
import ImpactSection from "./components/impact-section";
import OurServices from "./components/our-services";
import OurWork from "./components/our-work";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import BlogSection from "./components/blog-section";
import ProcessSection from "./components/process-section";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ImpactSection />
      <OurServices />
      <OurWork />
      <Testimonials />
      <ProcessSection />
      <Pricing />
      <FAQ />
      <BlogSection />
      <Footer />
    </div>
  );
}
