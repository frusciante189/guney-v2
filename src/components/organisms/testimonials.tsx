import { SectionHeader, AnimatedSection } from "@/components/molecules";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { TestimonialCard } from "@/components/organisms/testimonial-card";
import { cn } from "@/lib/utils";
import { FADE_IN_UP, getStaggerAnimation } from "@/constants/animations";
import { TESTIMONIALS } from "@/constants/content";

export default function Testimonials() {
  return (
    <SectionContainer className="xl:pb-24 md:pb-14 pb-10">
      <SectionContent className="items-center">
        <AnimatedSection animation={FADE_IN_UP}>
          <SectionHeader
            badge="Client Testimonials"
            title="Trusted by Turkish manufacturers"
            titleAccent="expanding into Europe"
            description="Real stories from manufacturers who successfully entered European markets."
            alignment="center"
          />
        </AnimatedSection>
        <div className="w-full bg-bg-gray-lighter rounded-section p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                animation={getStaggerAnimation(index)}
                className={cn(
                  "h-full",
                  testimonial.layout === "large" && "md:col-span-2 md:row-span-2",
                  testimonial.layout === "medium" && "md:col-span-2"
                )}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  metric={testimonial.metric}
                  layout={testimonial.layout}
                  quoteSize={testimonial.quoteSize}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
