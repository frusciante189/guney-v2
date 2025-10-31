import { cn } from "@/lib/utils";
import { SECTION_SPACING, GAP_SPACING } from "@/constants/spacing";

interface SectionContainerProps {
  children: React.ReactNode;
  variant?: "default" | "dark";
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  variant = "default",
  className,
  id,
}: SectionContainerProps) {
  if (variant === "dark") {
    return (
      <section id={id} className="px-8">
        <div className="bg-bg-dark rounded-section">
          <div
            className={cn(
              "container-app md:px-8 px-5 font-jakarta",
              SECTION_SPACING.standard.full,
              className
            )}
          >
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "container-app md:px-8 px-5 font-jakarta",
        SECTION_SPACING.standard.full,
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContent({ children, className }: SectionContentProps) {
  return (
    <div className={cn(GAP_SPACING.medium.full, "flex flex-col", className)}>
      {children}
    </div>
  );
}
