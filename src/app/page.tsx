import {
  Hero,
  Navbar,
  Footer,
  ImpactSection,
  OurServices,
  OurWork,
  Testimonials,
  ProcessSection,
  Pricing,
  FAQ,
  BlogSection,
} from "@/components/organisms";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
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
