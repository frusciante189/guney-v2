import type React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/atoms";

export type SectionHeaderAlignment = "left" | "center";

export interface SectionHeaderProps {
  /** Badge text (e.g., "Our Services", "FAQ") */
  badge: string;

  /** Badge variant */
  badgeVariant?: "default" | "dark";

  /** Main heading text */
  title: string;

  /** Optional muted text to append to title */
  titleAccent?: string;

  /** Optional description paragraph */
  description?: string;

  /** Text alignment */
  alignment?: SectionHeaderAlignment;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Section Header Component
 *
 * Combines Badge + Heading + Description in a consistent pattern.
 * Used at the top of major page sections.
 *
 * Replaces repeated pattern across:
 * - our-services.tsx
 * - testimonials.tsx
 * - faq.tsx
 * - pricing.tsx
 * - blog-section.tsx
 *
 * @example
 * ```tsx
 * // Basic section header
 * <SectionHeader
 *   badge="Our Services"
 *   title="From ideas into high-impact solutions"
 *   titleAccent="That inspires and convert"
 * />
 *
 * // Centered with description
 * <SectionHeader
 *   badge="Client Testimonials"
 *   title="Trusted by Turkish manufacturers"
 *   titleAccent="expanding into Europe"
 *   description="Real stories from manufacturers who successfully entered European markets."
 *   alignment="center"
 * />
 *
 * // Dark variant
 * <SectionHeader
 *   badge="Pricing"
 *   badgeVariant="dark"
 *   title="Start with a consultation"
 *   titleAccent="expand with confidence."
 *   description="One clear price to get started."
 *   alignment="center"
 * />
 * ```
 */
export function SectionHeader({
  badge,
  badgeVariant = "default",
  title,
  titleAccent,
  description,
  alignment = "left",
  className,
}: SectionHeaderProps): React.JSX.Element {
  const isDark = badgeVariant === "dark";

  const alignmentClasses: Record<SectionHeaderAlignment, string> = {
    left: "",
    center: "items-center text-center",
  };

  const headingColor = isDark ? "text-white" : "text-text-primary";
  const accentColor = isDark ? "text-white/60" : "text-text-muted";
  const descriptionColor = isDark ? "text-white/60" : "text-text-tertiary";

  return (
    <div
      className={cn(
        "flex flex-col xl:gap-5 gap-4",
        alignmentClasses[alignment],
        className
      )}
    >
      {/* Badge */}
      <Badge variant={badgeVariant}>{badge}</Badge>

      {/* Heading */}
      <h2
        className={cn(
          "font-bold",
          "xl:text-4xl xl:leading-12",
          "md:text-3xl md:leading-10",
          "text-2xl leading-8",
          headingColor,
          alignment === "left" ? "max-w-content-max-width-lg" : "max-w-content-max-width-md mx-auto"
        )}
      >
        {title}
        {titleAccent && (
          <>
            <br className="xl:block hidden" />
            <span className={accentColor}>{titleAccent}</span>
          </>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            descriptionColor,
            alignment === "left" ? "max-w-content-max-width-xs" : "max-w-content-max-width-xs mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
