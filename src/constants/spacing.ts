/**
 * Spacing Constants
 *
 * Centralized spacing tokens to ensure consistency across the application.
 * These align with the design system defined in globals.css
 */

// ============================================================================
// SECTION SPACING (Vertical)
// ============================================================================

export const SECTION_SPACING = {
  // Standard section padding (top/bottom)
  standard: {
    xl: "xl:py-24",     // 96px
    md: "md:py-14",     // 56px
    sm: "py-10",        // 40px
    full: "xl:py-24 md:py-14 py-10", // Combined
  },

  // Custom section padding variations
  hero: {
    top: {
      xl: "xl:pt-spacing-section-top-hero-xl",
      sm: "pt-spacing-section-top-hero-sm",
    },
    bottom: {
      xl: "xl:pb-spacing-section-bottom-hero-xl",
      md: "md:pb-spacing-section-y-md",
      sm: "pb-spacing-section-y-sm",
    },
  },

  // Bottom padding only (for sections that don't need top padding)
  bottomOnly: {
    xl: "xl:pb-24",
    md: "md:pb-14",
    sm: "pb-10",
    full: "xl:pb-24 md:pb-14 pb-10",
  },
} as const;

// ============================================================================
// GAP SPACING
// ============================================================================

export const GAP_SPACING = {
  // Section content gaps (between major elements)
  section: {
    xl: "xl:gap-20",    // 80px
    md: "md:gap-14",    // 56px
    sm: "gap-10",       // 40px
    full: "xl:gap-20 md:gap-14 gap-10",
  },

  // Large content gaps
  large: {
    xl: "xl:gap-20",
    sm: "gap-16",
    full: "xl:gap-20 gap-16",
  },

  // Medium content gaps
  medium: {
    xl: "xl:gap-16",
    md: "md:gap-14",
    sm: "gap-10",
    full: "xl:gap-16 md:gap-14 gap-10",
  },

  // Smaller content gaps
  small: {
    xl: "xl:gap-14",
    md: "md:gap-11",
    sm: "gap-10",
    full: "xl:gap-14 md:gap-11 gap-10",
  },

  // Extra small gaps (for tight grouping)
  xsmall: {
    xl: "xl:gap-5",
    sm: "gap-4",
    full: "xl:gap-5 gap-4",
  },

  // Card grids
  grid: {
    default: "gap-4",
    large: "gap-6",
    xlarge: "gap-8",
  },
} as const;

// ============================================================================
// COMBINED UTILITY CLASSES
// ============================================================================

/**
 * Common spacing patterns used across organisms
 */
export const SPACING_PATTERNS = {
  // Standard section with full vertical padding
  section: `${SECTION_SPACING.standard.full}`,

  // Section with bottom padding only
  sectionBottomOnly: `${SECTION_SPACING.bottomOnly.full}`,

  // Section content with large gaps
  contentLarge: `${GAP_SPACING.section.full}`,

  // Section content with medium gaps
  contentMedium: `${GAP_SPACING.medium.full}`,

  // Section content with small gaps
  contentSmall: `${GAP_SPACING.small.full}`,

  // Card grids
  cardGrid: `grid ${GAP_SPACING.grid.default}`,
  cardGridLarge: `grid ${GAP_SPACING.grid.large}`,
} as const;

// ============================================================================
// HELPER FUNCTION
// ============================================================================

/**
 * Get consistent spacing classes
 * @param type - The type of spacing needed
 * @returns Tailwind className string
 *
 * @example
 * ```tsx
 * <div className={getSpacing('section')}>
 *   <div className={getSpacing('contentLarge')}>
 *     ...
 *   </div>
 * </div>
 * ```
 */
export function getSpacing(type: keyof typeof SPACING_PATTERNS): string {
  return SPACING_PATTERNS[type];
}
