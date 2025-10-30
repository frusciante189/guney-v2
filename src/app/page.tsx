import Hero from "@/components/organisms/hero";
import ImpactSection from "@/components/organisms/impact-section";
import OurServices from "@/components/organisms/our-services";
import OurWork from "@/components/organisms/our-work";
import Testimonials from "@/components/organisms/testimonials";
import Pricing from "@/components/organisms/pricing";
import FAQ from "@/components/organisms/faq";
import Footer from "@/components/organisms/footer";
import BlogSection from "@/components/organisms/blog-section";
import ProcessSection from "@/components/organisms/process-section";
import Navbar from "@/components/organisms/navbar";

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
