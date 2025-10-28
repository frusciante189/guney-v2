import type React from "react";
import { cn } from "@/lib/utils";
import { LShapeIcon } from "./LShapeIcon";

export type BadgeVariant = "default" | "dark";

export interface BadgeProps {
  /** Badge text content */
  children: string;

  /** Visual variant - affects text color */
  variant?: BadgeVariant;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Badge Component (Section Badge)
 *
 * Used to label and categorize sections with decorative L-shape corners.
 * Commonly appears at the top of page sections.
 *
 * @example
 * ```tsx
 * <Badge>Our Services</Badge>
 * <Badge variant="dark">Pricing</Badge>
 * ```
 */
export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps): React.JSX.Element {
  const isDark = variant === "dark";

  return (
    <div className={cn("p-1.5 relative max-w-max", className)}>
      {/* Top-right corner decoration */}
      <div className="absolute top-0 right-0 -rotate-90">
        <LShapeIcon direction="reverse" />
      </div>

      {/* Bottom-left corner decoration */}
      <div className="absolute bottom-0 left-0">
        <LShapeIcon direction="normal" />
      </div>

      {/* Badge text */}
      <div className="px-2">
        <p
          className={cn(
            "text-xs font-medium",
            isDark ? "text-white" : "text-text-primary"
          )}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
