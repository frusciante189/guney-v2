import { ReactNode } from "react";

interface HeroBadgeProps {
  children: ReactNode;
}

export function HeroBadge({ children }: HeroBadgeProps) {
  return (
    <div className="bg-white border border-border-gray rounded-full pl-3 py-1 pr-1 flex items-center max-w-max">
      {children}
    </div>
  );
}
