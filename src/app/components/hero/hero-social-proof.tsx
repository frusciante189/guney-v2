import { Star } from "lucide-react";
import { HeroSocialProofProps } from "./types";
import { AvatarGroup } from "../ui/avatar-group";

const DEFAULT_REVIEWERS = [
  { src: "/p1.avif", alt: "Reviewer 1" },
  { src: "/p2.avif", alt: "Reviewer 2" },
  { src: "/p3.avif", alt: "Reviewer 3" },
];

export default function HeroSocialProof({
  reviewers = DEFAULT_REVIEWERS,
  totalReviewers = "+2K",
  rating = 5,
  reviewCount = "From 1.5K reviews",
}: HeroSocialProofProps = {}) {
  return (
    <div className="flex items-center gap-4 justify-center">
      <AvatarGroup items={reviewers} totalCount={totalReviewers} />
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
          {[...Array(rating)].map((_, index) => (
            <Star
              key={index}
              size={14}
              className="text-text-secondary fill-text-secondary"
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="text-text-tertiary text-xs font-medium">
          {reviewCount}
        </span>
      </div>
    </div>
  );
}
