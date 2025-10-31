import { Phone } from "lucide-react";
import { SectionHeader, AnimatedSection, BookCallButton } from "@/components/molecules";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { PricingFeatureItem } from "@/components/molecules/pricing-feature-item";
import { FADE_IN_UP, FADE_IN_DELAYED } from "@/constants/animations";
import { PRICING_FEATURES } from "@/constants/content";

export default function Pricing() {
  return (
    <SectionContainer id="pricing" variant="dark">
      <SectionContent className="items-center">
            <AnimatedSection animation={FADE_IN_UP}>
              <SectionHeader
                badge="Pricing"
                badgeVariant="dark"
                title="Start with a consultation,"
                titleAccent="expand with confidence."
                description="One clear price to get started. We'll assess your situation and create a roadmap for European expansion."
                alignment="center"
              />
            </AnimatedSection>

            <AnimatedSection
              animation={FADE_IN_DELAYED}
              className="p-8 md:p-10 xl:p-12 pt-0! flex flex-col items-center gap-8 max-w-2xl mx-auto shadow-card-elevated-dark"
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

              <BookCallButton
                text="Book Now"
                variant="primary"
                icon={Phone}
                iconPosition="left"
                className="mt-6"
              />
            </AnimatedSection>
      </SectionContent>
    </SectionContainer>
  );
}
