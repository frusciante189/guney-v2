"use client";

import HeroBadge from "./hero/hero-badge";
import HeroCTA from "./hero/hero-cta";
import HeroHeading from "./hero/hero-heading";
import HeroSocialProof from "./hero/hero-social-proof";
import HeroTestimonialCard from "./hero/hero-testimonial-card-unified";
import HeroTrustedCompanies from "./hero/hero-trusted-companies";
import HeroVideo from "./hero/hero-video";
import { SectionContainer } from "./ui/section-container";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <SectionContainer className="xl:pt-spacing-section-top-hero-xl xl:pb-spacing-section-bottom-hero-xl pt-spacing-section-top-hero-sm md:pb-spacing-section-y-md pb-spacing-section-y-sm relative">
      {/* Testimonial Card Left - Positioned absolutely on the left */}
      <motion.div
        className="absolute top-2/5 -translate-y-1/2 -left-12 xl:block hidden pointer-events-none"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroTestimonialCard
          position="left"
          quote="Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
          author="Sarah Mitchel"
        />
      </motion.div>

      {/* Testimonial Card Right - Positioned absolutely on the right */}
      <motion.div
        className="absolute top-2/5 -translate-y-1/2 -right-12 xl:block hidden pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeroTestimonialCard
          position="right"
          quote="Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
          author="Sarah Mitchel"
        />
      </motion.div>

      <div className="flex flex-col xl:gap-20 gap-16">
        <motion.div
          className="flex flex-col xl:gap-14 md:gap-11 gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:gap-9 gap-8">
            <div className="max-w-3xl mx-auto md:gap-6 gap-5 flex flex-col items-center">
              <HeroBadge />
              <HeroHeading />
            </div>
            <div className="mx-auto">
              <HeroCTA />
            </div>
          </div>
          <HeroSocialProof />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVideo />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroTrustedCompanies />
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
