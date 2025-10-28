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
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <ImpactSection />
      <section id="services">
        <OurServices />
      </section>
      <section id="work">
        <OurWork />
      </section>
      <Testimonials />
      <section id="process">
        <ProcessSection />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
