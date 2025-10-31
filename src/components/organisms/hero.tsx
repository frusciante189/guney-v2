import HeroBadge from "@/components/organisms/hero/hero-badge";
import HeroCTA from "@/components/organisms/hero/hero-cta";
import HeroHeading from "@/components/organisms/hero/hero-heading";
import HeroSocialProof from "@/components/organisms/hero/hero-social-proof";
import HeroTestimonialCard from "@/components/organisms/hero/hero-testimonial-card-unified";
import HeroTrustedCompanies from "@/components/organisms/hero/hero-trusted-companies";
import HeroVideo from "@/components/organisms/hero/hero-video";
import { SectionContainer } from "@/components/organisms/section-container";
import { AnimatedSection } from "@/components/molecules";
import {
  HERO_TESTIMONIAL_LEFT,
  HERO_TESTIMONIAL_RIGHT,
  HERO_CONTENT,
  HERO_VIDEO,
  HERO_TRUSTED,
} from "@/constants/animations";

export const Hero = () => {
  return (
    <SectionContainer id="home" className="xl:pt-spacing-section-top-hero-xl xl:pb-spacing-section-bottom-hero-xl pt-spacing-section-top-hero-sm md:pb-spacing-section-y-md pb-spacing-section-y-sm relative">
      {/* Testimonial Card Left - Positioned absolutely on the left */}
      <AnimatedSection
        animation={HERO_TESTIMONIAL_LEFT}
        className="absolute top-2/5 -translate-y-1/2 -left-12 xl:block hidden pointer-events-none"
      >
        <HeroTestimonialCard
          position="left"
          quote="Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
          author="Sarah Mitchel"
        />
      </AnimatedSection>

      {/* Testimonial Card Right - Positioned absolutely on the right */}
      <AnimatedSection
        animation={HERO_TESTIMONIAL_RIGHT}
        className="absolute top-2/5 -translate-y-1/2 -right-12 xl:block hidden pointer-events-none"
      >
        <HeroTestimonialCard
          position="right"
          quote="Bravio nailed our MVP design with a fast turnaround and incredible attention to detail."
          author="Sarah Mitchel"
        />
      </AnimatedSection>

      <div className="flex flex-col xl:gap-20 gap-16">
        <AnimatedSection
          animation={HERO_CONTENT}
          className="flex flex-col xl:gap-14 md:gap-11 gap-10"
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
        </AnimatedSection>
        <AnimatedSection animation={HERO_VIDEO}>
          <HeroVideo />
        </AnimatedSection>
        <AnimatedSection animation={HERO_TRUSTED}>
          <HeroTrustedCompanies />
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
};

