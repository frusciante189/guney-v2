"use client";

import { SectionBadge } from "./ui/section-badge";
import { SectionContainer, SectionContent } from "./ui/section-container";
import { PricingFeatureItem } from "./ui/pricing-feature-item";
import { PricingBookButton } from "./ui/pricing-book-button";
import { motion } from "motion/react";

interface PricingFeature {
  id: string;
  text: string;
}

const PRICING_FEATURES: PricingFeature[] = [
  {
    id: "consultation",
    text: "60 minutes consultation session",
  },
  {
    id: "payment",
    text: "Secure payment at booking",
  },
  {
    id: "fees",
    text: "No hidden fees",
  },
  {
    id: "action-plan",
    text: "Personalized action plan included",
  },
];

export default function Pricing() {
  return (
    <SectionContainer variant="dark">
      <SectionContent className="items-center">
            <motion.div
              className="flex flex-col items-center xl:gap-5 gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBadge variant="dark">Pricing</SectionBadge>
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-white max-w-content-max-width-md mx-auto">
                Start with a consultation,
                <br className="xl:block hidden" />
                <span className="text-white/60">expand with confidence.</span>
              </h2>
              <p className="text-white/60 max-w-content-max-width-xs mx-auto text-center">
                One clear price to get started. We'll assess your situation and create a roadmap for European expansion.
              </p>
            </motion.div>

            <motion.div
              className="p-8 md:p-10 xl:p-12 pt-0! flex flex-col items-center gap-8 max-w-2xl mx-auto shadow-card-elevated-dark"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-6xl md:text-7xl font-bold text-brand-coral">
                  €250
                </h3>
                <p className="text-white/60 text-sm">
                  One-time consultation fee
                </p>
              </div>

              <div className="w-full flex flex-col gap-3">
                {PRICING_FEATURES.map((feature) => (
                  <PricingFeatureItem key={feature.id} text={feature.text} />
                ))}
              </div>

              <PricingBookButton />
            </motion.div>
      </SectionContent>
    </SectionContainer>
  );
}
