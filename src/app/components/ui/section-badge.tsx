import { LShape } from "./icons/l-shape";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: string;
  variant?: "default" | "dark";
}

export function SectionBadge({ children, variant = "default" }: SectionBadgeProps) {
  const isDark = variant === "dark";

  return (
    <div className="p-1.5 relative max-w-max">
      <div className="absolute top-0 right-0 -rotate-90">
        <LShape direction="reverse" />
      </div>
      <div className="absolute bottom-0 left-0">
        <LShape />
      </div>
      <div className="px-2">
        <p className={cn("text-xs font-medium", isDark ? "text-white" : "text-text-primary")}>
          {children}
        </p>
      </div>
    </div>
  );
}
