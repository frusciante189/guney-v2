import { SectionHeader } from "@/components/molecules";
import { ProcessStepItem } from "@/components/molecules/process-step-item";
import { SectionContainer } from "@/components/organisms/section-container";
import { PROCESS_STEPS } from "@/constants/content";

export const ProcessSection = () => {
  return (
    <SectionContainer id="process">
      <div className="xl:gap-16 lg:gap-14 gap-10 flex lg:flex-row flex-col">
        <div className="flex-1">
          <SectionHeader
            badge="How it works"
            title="A clear path to"
            titleAccent="European markets."
            description="From market entry strategy to ongoing support, we handle the complexity so you can focus on growing your business."
            alignment="left"
          />
        </div>
        <div className="flex flex-col flex-1">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepItem
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
              showLine={index < PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
