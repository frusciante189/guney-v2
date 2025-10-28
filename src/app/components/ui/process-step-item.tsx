import { ProcessStepNumber } from "./process-step-number";

interface ProcessStepItemProps {
  number: string;
  title: string;
  description: string;
  showLine?: boolean;
}

export function ProcessStepItem({
  number,
  title,
  description,
  showLine = false,
}: ProcessStepItemProps) {
  return (
    <div className="flex gap-3">
      <ProcessStepNumber number={number} showLine={showLine} />
      <div className="p-6 flex flex-col gap-2.5 mb-[72px]">
        <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
          {title}
        </h3>
        <p className="text-sm text-text-tertiary">{description}</p>
      </div>
    </div>
  );
}
