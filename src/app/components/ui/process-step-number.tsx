interface ProcessStepNumberProps {
  number: string;
  showLine?: boolean;
}

export function ProcessStepNumber({
  number,
  showLine = false,
}: ProcessStepNumberProps) {
  return (
    <div className="pt-6 flex flex-col relative">
      <div className="size-10 text-sm font-medium text-text-primary border border-border-process-step rounded-full flex items-center justify-center">
        {number}
      </div>
      {showLine && (
        <div className="absolute top-[72px] right-[18px] bottom-[-17px] left-[19px] bg-bg-step-line" />
      )}
    </div>
  );
}
