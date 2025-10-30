import { cn } from "@/lib/utils";
import { QuoteIcon } from "@/components/atoms/icons/quote-icon";

interface HeroTestimonialCardProps {
  position: "left" | "right";
  quote: string;
  author: string;
}

export default function HeroTestimonialCard({
  position,
  quote,
  author,
}: HeroTestimonialCardProps) {
  const isLeft = position === "left";

  return (
    <div className="relative">
      {/* Decorative background card */}
      <div
        className={cn(
          "absolute inset-0 bg-white rounded-2xl w-[250px] border border-border-light",
          isLeft ? "-rotate-[9deg]" : "rotate-[9deg]"
        )}
      />

      {/* Main testimonial card */}
      <div
        className={cn(
          "bg-white rounded-2xl w-[250px] overflow-hidden relative z-10 p-[22px] shadow-card-elevated border-t border-border-process-step",
          isLeft ? "-rotate-15" : "rotate-15"
        )}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-2.5">
            <p className="text-xs font-medium text-text-tertiary">{quote}</p>
            <QuoteIcon className="size-10 text-text-quote" />
          </div>
          <p className="text-xs font-medium text-text-primary">- {author}</p>
        </div>
      </div>
    </div>
  );
}
