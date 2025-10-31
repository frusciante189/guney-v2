import { cn } from "@/lib/utils";

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
              "container-app md:px-8 px-5 xl:py-24 md:py-14 py-10 font-jakarta",
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
        "container-app md:px-8 px-5 xl:py-24 md:py-14 py-10 font-jakarta",
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
    <div className={cn("xl:gap-16 md:gap-14 gap-10 flex flex-col", className)}>
      {children}
    </div>
  );
}
