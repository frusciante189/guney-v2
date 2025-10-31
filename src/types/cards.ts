/**
 * Shared Card Component Types
 *
 * Base interfaces for consistent card component APIs
 */

// ============================================================================
// BASE CARD PROPS
// ============================================================================

/**
 * Base props shared by all card components
 */
export interface BaseCardProps {
  /** Unique identifier for the card */
  id?: string;

  /** Click handler for the card */
  onClick?: () => void;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for cards that display an image
 */
export interface CardWithImage {
  /** Image source URL */
  image: string;

  /** Image alt text for accessibility */
  alt?: string;
}

/**
 * Props for cards with a title
 */
export interface CardWithTitle {
  /** Card title */
  title: string;
}

/**
 * Props for cards with descriptive text
 */
export interface CardWithDescription {
  /** Card description/body text */
  description?: string;
}

/**
 * Props for cards with tags/categories
 */
export interface CardWithTags {
  /** Array of tag strings */
  tags: string[];
}

/**
 * Props for cards with metadata (author, date, etc.)
 */
export interface CardWithMetadata {
  /** Author name */
  author: string;

  /** Date string */
  date: string;

  /** Read time estimate */
  readTime: string;
}

// ============================================================================
// SPECIFIC CARD TYPES
// ============================================================================

/**
 * Blog card props - combines multiple base interfaces
 */
export interface BlogCardProps
  extends BaseCardProps,
    CardWithImage,
    CardWithTitle,
    CardWithTags,
    CardWithMetadata {
  /** Whether this is a featured post (takes more space) */
  featured?: boolean;
}

/**
 * Project card props - for portfolio/work items
 */
export interface ProjectCardProps
  extends BaseCardProps,
    CardWithImage,
    CardWithTitle,
    CardWithTags {}

/**
 * Testimonial card props - for customer testimonials
 */
export interface TestimonialCardProps extends BaseCardProps {
  /** Testimonial quote text */
  quote: string;

  /** Author information */
  author: {
    name: string;
    title: string;
    avatar: string;
  };

  /** Optional metric to highlight */
  metric?: {
    value: string;
    label: string;
  };

  /** Layout size variant */
  layout?: "large" | "medium" | "small";

  /** Quote text size variant */
  quoteSize?: "default" | "small";
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Extract common props that can be reused
 */
export type CardImageProps = Pick<CardWithImage, "image" | "alt">;
export type CardTitleProps = Pick<CardWithTitle, "title">;
export type CardTagsProps = Pick<CardWithTags, "tags">;
