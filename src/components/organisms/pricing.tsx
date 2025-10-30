"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/atoms";
import { SectionHeader } from "@/components/molecules";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { PricingFeatureItem } from "@/components/molecules/pricing-feature-item";
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionHeader
                badge="Pricing"
                badgeVariant="dark"
                title="Start with a consultation,"
                titleAccent="expand with confidence."
                description="One clear price to get started. We'll assess your situation and create a roadmap for European expansion."
                alignment="center"
              />
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

              <Button
                variant="primary"
                icon={Phone}
                iconPosition="left"
                ariaLabel="Book a consultation call"
                className="mt-6"
              >
                Book Now
              </Button>
            </motion.div>
      </SectionContent>
    </SectionContainer>
  );
}
