import type React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/**
 * Button Variants:
 * - primary: Coral background, white text (main CTA)
 * - secondary: White background, gray text with border (secondary actions)
 */
export type ButtonVariant = "primary" | "secondary";

/**
 * Button Sizes:
 * - sm: Small padding and text
 * - md: Medium padding and text (default)
 * - lg: Large padding and text
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Icon Position:
 * - left: Icon appears before text
 * - right: Icon appears after text
 */
export type IconPosition = "left" | "right";

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;

  /** Visual style variant */
  variant?: ButtonVariant;

  /** Button size */
  size?: ButtonSize;

  /** Optional icon component */
  icon?: LucideIcon;

  /** Icon position relative to text */
  iconPosition?: IconPosition;

  /** Click handler */
  onClick?: () => void;

  /** Button type for forms */
  type?: "button" | "submit" | "reset";

  /** Disabled state */
  disabled?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** ARIA label for accessibility */
  ariaLabel?: string;

  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Unified Button Component
 *
 * Replaces ActionButton, BookCallButton, and PricingBookButton
 * Follows Atomic Design principles as a reusable atom
 *
 * @example
 * ```tsx
 * // Primary CTA
 * <Button variant="primary" icon={Phone}>Book a Call</Button>
 *
 * // Secondary action
 * <Button variant="secondary" icon={ArrowUpRight}>Learn More</Button>
 * ```
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  onClick,
  type = "button",
  disabled = false,
  className,
  ariaLabel,
  fullWidth = false,
}: ButtonProps): React.JSX.Element {
  // Base styles applied to all buttons
  const baseStyles = cn(
    "rounded-full font-medium transition-all",
    "flex items-center justify-center gap-2",
    "focus:outline-none focus:ring-2 focus:ring-brand-coral focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  // Variant styles
  const variantStyles: Record<ButtonVariant, string> = {
    primary: cn(
      "bg-brand-coral text-white",
      "hover:bg-brand-coral/90",
      "shadow-sm"
    ),
    secondary: cn(
      "bg-white text-text-secondary",
      "border border-border-light",
      "hover:bg-bg-gray-light"
    ),
  };

  // Size styles
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Icon size based on button size
  const iconSizes: Record<ButtonSize, number> = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
    >
      {/* Left icon */}
      {Icon && iconPosition === "left" && (
        <Icon size={iconSizes[size]} aria-hidden="true" />
      )}

      {/* Button text */}
      {children}

      {/* Right icon */}
      {Icon && iconPosition === "right" && (
        <Icon size={iconSizes[size]} aria-hidden="true" />
      )}
    </button>
  );
}
