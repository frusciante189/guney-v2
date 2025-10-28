import type React from "react";
import Link from "next/link";
import { Asterisk } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LogoProps {
  /** Click handler for logo */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  /** Show hover opacity effect */
  showHoverEffect?: boolean;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Logo Component
 *
 * Brand logo with icon and text. Used in Navbar and Footer.
 * Combines Asterisk icon (atom) + text to create a molecule.
 *
 * @example
 * ```tsx
 * // With hover effect (Navbar)
 * <Logo onClick={handleClick} showHoverEffect />
 *
 * // Without hover effect (Footer)
 * <Logo onClick={handleClick} />
 * ```
 */
export function Logo({
  onClick,
  showHoverEffect = false,
  className,
}: LogoProps): React.JSX.Element {
  return (
    <Link
      href="#home"
      onClick={onClick}
      className={cn(
        "flex items-center gap-1",
        showHoverEffect && "hover:opacity-80 transition-opacity",
        className
      )}
    >
      {/* Icon container */}
      <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
        <Asterisk size={24} color="black" aria-hidden="true" />
      </div>

      {/* Brand text */}
      <p className="text-lg font-bold text-white">
        Gune<span className="text-brand-coral">y</span>
      </p>
    </Link>
  );
}
