import { ReactNode } from "react";

interface BadgeButtonProps {
  onClick?: () => void;
  ariaLabel: string;
  children: ReactNode;
}

export function BadgeButton({ onClick, ariaLabel, children }: BadgeButtonProps) {
  return (
    <div className="sm:pl-3 py-0.5 pr-0.5 flex items-center gap-2">
      <button
        onClick={onClick}
        className="bg-bg-gray-light cursor-pointer transition-colors hover:bg-border-gray size-6 rounded-full flex items-center justify-center"
        aria-label={ariaLabel}
        type="button"
      >
        {children}
      </button>
    </div>
  );
}
