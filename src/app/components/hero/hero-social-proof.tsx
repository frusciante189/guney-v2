import { Star } from "lucide-react";
import Image from "next/image";
import { HeroSocialProofProps } from "./types";

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
      <div className="flex items-center -space-x-2">
        {reviewers.map((reviewer) => (
          <Image
            key={reviewer.src}
            src={reviewer.src}
            width={36}
            height={36}
            className="size-9 rounded-full shadow-[0_0_0_3px_rgb(255_255_255/1)] object-cover"
            alt={reviewer.alt}
          />
        ))}
        <div
          className="size-9 flex items-center justify-center font-medium text-text-primary outline outline-border-gray shadow-[0_0_0_3px_rgb(255_255_255/1)] rounded-full bg-bg-gray-lighter text-xs"
          aria-label={`More than ${totalReviewers} reviewers`}
        >
          {totalReviewers}
        </div>
      </div>
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
