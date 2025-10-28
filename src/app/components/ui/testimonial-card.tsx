import { QuoteIcon } from "./icons/quote-icon";
import { TestimonialAuthor } from "./testimonial-author";
import { cn } from "@/lib/utils";

interface TestimonialMetric {
  value: string;
  label: string;
}

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  metric?: TestimonialMetric;
  layout?: "large" | "medium" | "small";
  quoteSize?: "default" | "small";
}

export function TestimonialCard({
  quote,
  author,
  metric,
  layout = "small",
  quoteSize = "default",
}: TestimonialCardProps) {
  const layoutClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-2 md:min-h-[290px]",
    small: "min-h-[290px]",
  };

  const showCrown = layout === "large" || layout === "medium";

  return (
    <div
      className={cn(
        "bg-white rounded-4xl h-full p-8 flex flex-col justify-between gap-8 shadow-card-elevated",
        layoutClasses[layout]
      )}
    >
      <div className="flex flex-col gap-5">
        {metric && (
          <div className="flex flex-col gap-1">
            <h2 className="text-font-size-metric leading-12 text-text-primary font-bold">
              {metric.value}
            </h2>
            <p className="font-bold text-text-tertiary text-xl">
              {metric.label}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <QuoteIcon />
          <p
            className={cn(
              "text-text-tertiary",
              quoteSize === "small" ? "text-sm leading-5" : ""
            )}
          >
            &quot;{quote}&quot;
          </p>
        </div>
      </div>

      <TestimonialAuthor
        name={author.name}
        title={author.title}
        avatar={author.avatar}
        showCrown={showCrown}
      />
    </div>
  );
}
