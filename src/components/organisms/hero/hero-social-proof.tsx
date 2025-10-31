import { HERO_REVIEWERS } from "@/constants/content";
import { HeroSocialProofProps } from "./types";
import { AvatarGroup } from "@/components/molecules/avatar-group";
import { StarRating } from "@/components/atoms";

export default function HeroSocialProof({
  reviewers = HERO_REVIEWERS,
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
