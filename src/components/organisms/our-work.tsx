import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/atoms";
import { SectionHeader, AnimatedSection } from "@/components/molecules";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { ProjectCard } from "@/components/organisms/project-card";
import { FADE_IN_UP, getStaggerAnimation } from "@/constants/animations";
import { PROJECTS } from "@/constants/content";

export default function OurWork() {
  return (
    <SectionContainer id="work">
      <SectionContent>
        <AnimatedSection
          animation={FADE_IN_UP}
          className="flex flex-col xl:gap-5 gap-4"
        >
          <SectionHeader
            badge="Success Stories"
            title="Real manufacturers, real European growth."
            description="From first contact to signed contracts — see how we help manufacturers expand into Europe."
            alignment="left"
          />
          <Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
            <span className="px-2 py-1">View all case studies</span>
          </Button>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {PROJECTS.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation={getStaggerAnimation(index, 0.15)}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                tags={project.tags}
              />
            </AnimatedSection>
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
