import ServiceCards from "./service-cards";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { SectionHeader, AnimatedSection } from "@/components/molecules";
import { FADE_IN_UP } from "@/constants/animations";

/**
 * Our Services Section
 *
 * Displays the services section with header and service cards grid.
 * Uses new Atomic Design structure with SectionHeader molecule.
 * Now a server component - animations handled by AnimatedSection.
 */
export default function OurServices() {
  return (
    <SectionContainer id="services">
      <SectionContent>
        <AnimatedSection animation={FADE_IN_UP}>
          <SectionHeader
            badge="Our Services"
            title="From ideas into high-impact solutions"
            titleAccent="That inspires and convert"
          />
        </AnimatedSection>
        <div className="bg-bg-gray-lighter rounded-section p-5">
          <ServiceCards />
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
