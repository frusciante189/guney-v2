export interface HeroBadgeProps {
  availabilityText?: string;
  eventText?: string;
  onEventClick?: () => void;
}

export interface HeroCTAProps {
  text?: string;
  onBookCall?: () => void;
  isLoading?: boolean;
}

export interface HeroVideoProps {
  thumbnailUrl?: string;
  videoUrl?: string;
  onPlayClick?: () => void;
  altText?: string;
}

export interface ReviewerData {
  src: string;
  alt: string;
}

export type Rating = 1 | 2 | 3 | 4 | 5;

export interface HeroSocialProofProps {
  reviewers?: ReviewerData[];
  totalReviewers?: string;
  rating?: Rating;
  reviewCount?: string;
}

export interface LogoData {
  src: string;
  alt: string;
}

export interface HeroTrustedCompaniesProps {
  title?: string;
  logos?: LogoData[];
  animationDuration?: number;
}
