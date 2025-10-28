import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type NavLinkVariant = "desktop" | "mobile";

export interface NavLinkProps {
  /** Link destination (hash or path) */
  href: string;

  /** Link text */
  label: string;

  /** Visual variant for desktop or mobile menu */
  variant?: NavLinkVariant;

  /** Click handler */
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Navigation Link Component
 *
 * Reusable navigation link for both desktop and mobile menus.
 * Handles smooth scrolling and menu state.
 *
 * @example
 * ```tsx
 * // Desktop navigation
 * <NavLink
 *   href="#services"
 *   label="Services"
 *   variant="desktop"
 *   onClick={(e) => handleSmoothScroll(e, 'services')}
 * />
 *
 * // Mobile navigation
 * <NavLink
 *   href="#services"
 *   label="Services"
 *   variant="mobile"
 *   onClick={(e) => handleSmoothScroll(e, 'services')}
 * />
 * ```
 */
export function NavLink({
  href,
  label,
  variant = "desktop",
  onClick,
  className,
}: NavLinkProps): React.JSX.Element {
  // Variant-specific styles
  const variantStyles: Record<NavLinkVariant, string> = {
    desktop: cn(
      "text-white/80 text-sm font-medium p-2",
      "hover:text-white transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-brand-coral focus:ring-offset-2 focus:ring-offset-bg-newsletter",
      "rounded-lg" // For focus ring visibility
    ),
    mobile: cn(
      "text-white/80 text-base font-medium py-3 px-4",
      "hover:bg-white/10 rounded-xl transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-brand-coral focus:ring-offset-2 focus:ring-offset-bg-newsletter"
    ),
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(variantStyles[variant], className)}
    >
      {label}
    </Link>
  );
}
