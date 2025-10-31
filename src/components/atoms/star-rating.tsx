import type React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StarRatingProps {
  rating?: number;
  maxRating?: number;
  size?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({
  rating = 5,
  maxRating = 5,
  size = 14,
  className,
  starClassName,
}: StarRatingProps): React.JSX.Element {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of ${maxRating} stars`}
    >
      {[...Array(rating)].map((_, index) => (
        <Star
          key={`star-${index}`}
          size={size}
          className={cn(
            "text-text-secondary fill-text-secondary",
            starClassName
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
