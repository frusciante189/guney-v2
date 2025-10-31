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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Güney Çuceloğlu",
    "description": "European market entry specialist for Turkish manufacturers",
    "url": "https://guneycuceloglu.com",
    "logo": "https://guneycuceloglu.com/logo.svg",
    "image": "https://guneycuceloglu.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Turkey"
      },
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "Austria"
      },
      {
        "@type": "Country",
        "name": "Switzerland"
      }
    ],
    "serviceType": [
      "Trade Fair Support",
      "Contract Negotiation",
      "Payment Infrastructure",
      "Market Entry Strategy",
      "Ongoing Partnership Support"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "4"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-coral focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
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
        </main>
      </div>
    </>
  );
}
