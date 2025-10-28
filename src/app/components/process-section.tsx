import { SectionBadge } from "./ui/section-badge";
import { ProcessStepItem } from "./ui/process-step-item";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Market Assessment",
    description:
      "We analyze your product fit for European markets and identify the best entry strategy based on your capabilities and goals.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Legal & Documentation Setup",
    description:
      "Get all contracts, compliance documents, and legal frameworks in place — translated, reviewed, and ready to sign.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Payment Infrastructure",
    description:
      "Set up secure international payment channels, banking relationships, and transfer mechanisms to minimize risk and delays.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Trade Fair Execution",
    description:
      "From booth design to logistics and meeting scheduling, we handle every detail so you focus on closing deals.",
  },
  {
    id: "step-5",
    number: "05",
    title: "Ongoing Support & Growth",
    description:
      "Continuous support for contract renewals, new market entries, and operational challenges as your European presence grows.",
  },
];

export default function ProcessSection() {
  return (
    <div className="container-app md:px-8 px-5 xl:py-24 md:py-14 py-10 font-jakarta">
      <div className="xl:gap-16 lg:gap-14 gap-10 flex lg:flex-row flex-col">
        <div className="flex flex-col xl:gap-5 gap-4 xl:max-w-content-max-width-sm max-w-max flex-1">
          <SectionBadge>How it works</SectionBadge>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-content-max-width-lg">
            A clear path to
            <br />
            <span className="text-text-muted">European markets.</span>
          </h2>
          <p className="max-w-content-max-width-xs text-text-tertiary">
            From market entry strategy to ongoing support, we handle the complexity so you can focus on growing your business.
          </p>
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
    </div>
  );
}
