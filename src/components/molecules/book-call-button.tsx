import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/atoms";

export interface BookCallButtonProps {
  /**
   * Button text variant
   * @default "Book a Call"
   */
  text?: "Book a Call" | "Book Now";

  /**
   * Button variant style
   * @default "secondary"
   */
  variant?: "primary" | "secondary";

  /**
   * Icon to display
   * @default ArrowUpRight
   */
  icon?: typeof ArrowUpRight | typeof Phone;

  /**
   * Icon position
   * @default "right"
   */
  iconPosition?: "left" | "right";

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}

/**
 * Reusable "Book a Call" button component
 * Centralizes the common CTA button pattern used across the application
 *
 * @example
 * ```tsx
 * // Default usage
 * <BookCallButton />
 *
 * // With custom text and icon
 * <BookCallButton text="Book Now" icon={Phone} iconPosition="left" />
 *
 * // Primary variant
 * <BookCallButton variant="primary" />
 * ```
 */
export function BookCallButton({
  text = "Book a Call",
  variant = "secondary",
  icon = ArrowUpRight,
  iconPosition = "right",
  onClick,
  className,
  ariaLabel = "Book a consultation call",
}: BookCallButtonProps) {
  return (
    <Button
      variant={variant}
      size="sm"
      icon={icon}
      iconPosition={iconPosition}
      onClick={onClick}
      className={className}
      ariaLabel={ariaLabel}
    >
      <span className="px-2 py-1">{text}</span>
    </Button>
  );
}
