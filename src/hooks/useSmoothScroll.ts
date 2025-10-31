import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to page sections
 *
 * Handles navigation cleanup and scroll behavior for anchor links.
 * Useful for single-page applications with section-based navigation.
 *
 * @param onNavigate - Optional callback to execute before scrolling (e.g., close mobile menu)
 * @returns Object containing scrollToSection function
 *
 * @example
 * ```tsx
 * const { scrollToSection } = useSmoothScroll(() => setMenuOpen(false));
 *
 * <Link href="#about" onClick={(e) => scrollToSection(e, "about")}>
 *   About
 * </Link>
 * ```
 */
export function useSmoothScroll(onNavigate?: () => void) {
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();

      // Execute any cleanup (e.g., close mobile menu)
      onNavigate?.();

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [onNavigate]
  );

  return { scrollToSection };
}
