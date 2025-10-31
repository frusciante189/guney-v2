import StatCard from "./stat-card";
import { SectionHeader, AnimatedSection } from "@/components/molecules";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { FADE_IN_UP, getStaggerAnimation } from "@/constants/animations";
import { STATS } from "@/constants/content";

export default function ImpactSection() {
  return (
    <SectionContainer id="about" className="xl:pb-24 md:pb-14 pb-10">
      <SectionContent className="items-center">
        <AnimatedSection animation={FADE_IN_UP}>
          <SectionHeader
            badge="Impact"
            title="Making European expansion"
            titleAccent="simple and secure"
            description="I help Turkish manufacturers win new clients and solve the hard operational problems — contracts, money transfers, and trade fair stands — so you move faster with fewer surprises."
            alignment="center"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {STATS.map((stat, index) => (
            <AnimatedSection
              key={stat.number}
              animation={getStaggerAnimation(index, 0.15)}
              className={
                index === STATS.length - 1 ? "md:col-span-2 xl:col-span-1" : ""
              }
            >
              <StatCard
                number={stat.number}
                title={stat.title}
                description={stat.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
