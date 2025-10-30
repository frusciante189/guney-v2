import { ReactNode } from "react";

interface BadgeTextProps {
  children: ReactNode;
}

export function BadgeText({ children }: BadgeTextProps) {
  return (
    <p className="text-text-primary text-xs py-1 pl-2.5 pr-3">
      {children}
    </p>
  );
}
