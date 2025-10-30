import { HeroSocialProofProps } from "./types";
import { AvatarGroup } from "@/components/molecules/avatar-group";
import { StarRating } from "@/components/atoms";

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
        <StarRating rating={rating} />
        <span className="text-text-tertiary text-xs font-medium">
          {reviewCount}
        </span>
      </div>
    </div>
  );
}
