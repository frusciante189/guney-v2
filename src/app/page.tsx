import Hero from "./components/hero";
import ImpactSection from "./components/impact-section";
import OurServices from "./components/our-services";
import OurWork from "./components/our-work";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import LShapeReverse from "./components/LShapeReverse";
import LShape from "./components/LShape";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ImpactSection />
      <OurServices />
      <OurWork />
      <Testimonials />
      <Pricing />
      <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:py-24 md:py-14 py-10 font-jakarta">
        <div className="xl:gap-16 md:gap-14 gap-20 flex justify-between">
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col xl:gap-5 gap-4">
              <div className="p-1.5 relative max-w-max">
                <div className="absolute top-0 right-0 rotate-270">
                  <LShapeReverse />
                </div>
                <div className="absolute bottom-0 left-0">
                  <LShape />
                </div>
                <div className="px-2">
                  <p className="text-xs text-text-primary font-medium">
                    Testimonials
                  </p>
                </div>
              </div>
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-[550px]">
                Have questions,
                <br className="xl:block hidden" />
                <span className="text-text-muted">We got answers.</span>
              </h2>
              <p className="text-text-tertiary max-w-[350px]">
                Everything you need to know about our process, and how we
                deliver results.
              </p>
            </div>
            <div className="bg-bg-gray-lighter rounded-3xl flex flex-col gap-5 p-7">
              <div className="flex flex-col gap-2">
                <h6 className="text-text-primary text-xl font-bold">
                  Can't find your answer?
                </h6>
                <p className="text-text-tertiary text-sm leading-5 font-medium">
                  Get in touch with our support team, they a re friendly!
                </p>
              </div>
              <button className="bg-white border border-border-light rounded-full p-1.5 flex items-center gap-2 max-w-max">
                <span className="px-2 py-1 text-sm font-medium text-text-secondary">
                  Book a Call
                </span>
                <div className="size-7 rounded-full bg-bg-gray-light flex items-center justify-center">
                  <ArrowUpRight className="text-text-primary" size={16} />
                </div>
              </button>
            </div>
          </div>
          <FAQ />
        </div>
      </div>
    </div>
  );
}
