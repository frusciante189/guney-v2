/**
 * Motion animation variants for consistent animations across the application
 * Uses motion (Framer Motion) library
 */

import type { MotionProps } from "motion/react";

type AnimationVariant = Pick<
  MotionProps,
  "initial" | "animate" | "whileInView" | "viewport" | "transition"
>;

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

/**
 * Standard easing curve used across all animations
 * Cubic bezier: ease-out curve for smooth deceleration
 */
export const EASE_CURVE = [0.16, 1, 0.3, 1] as const;

/**
 * Animation durations (in seconds)
 */
export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  verySlow: 1.2,
} as const;

/**
 * Animation delays (in seconds)
 */
export const DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.15,
  long: 0.2,
} as const;

/**
 * Viewport amounts for triggering animations
 */
export const VIEWPORT_AMOUNT = {
  small: 0.2,  // Trigger when 20% visible
  medium: 0.4, // Trigger when 40% visible
  large: 0.6,  // Trigger when 60% visible
} as const;

/**
 * Y-axis translation distances (in pixels)
 */
export const TRANSLATE_Y = {
  small: 30,
  medium: 40,
  large: 60,
} as const;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

/**
 * Fade in from bottom animation
 * Used for section headers and main content
 */
export const FADE_IN_UP: AnimationVariant = {
  initial: { opacity: 0, y: TRANSLATE_Y.medium },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: VIEWPORT_AMOUNT.large },
  transition: { duration: DURATION.slow, ease: EASE_CURVE },
};

/**
 * Fade in with smaller vertical movement
 * Used for cards and smaller elements in grids
 */
export const FADE_IN_UP_SMALL: AnimationVariant = {
  initial: { opacity: 0, y: TRANSLATE_Y.small },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: VIEWPORT_AMOUNT.small },
  transition: { duration: DURATION.normal, ease: EASE_CURVE },
};

/**
 * Staggered animation for list items
 * @param index - The index of the item in the list
 * @param baseDelay - Optional base delay before starting the stagger
 */
export function getStaggerAnimation(
  index: number,
  baseDelay: number = DELAY.none
): AnimationVariant {
  return {
    initial: { opacity: 0, y: TRANSLATE_Y.small },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: VIEWPORT_AMOUNT.small },
    transition: {
      duration: DURATION.normal,
      delay: baseDelay + index * DELAY.short,
      ease: EASE_CURVE,
    },
  };
}

/**
 * Staggered animation with longer delay between items
 * Used for larger cards
 */
export function getStaggerAnimationLarge(
  index: number,
  baseDelay: number = DELAY.none
): AnimationVariant {
  return {
    initial: { opacity: 0, y: TRANSLATE_Y.small },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: VIEWPORT_AMOUNT.medium },
    transition: {
      duration: DURATION.normal,
      delay: baseDelay + index * DELAY.medium,
      ease: EASE_CURVE,
    },
  };
}

/**
 * Navbar entry animation (from top)
 * Used for navbar on page load
 */
export const NAVBAR_ENTER: AnimationVariant = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.normal, delay: 0.8, ease: EASE_CURVE },
};

/**
 * Delayed fade in
 * Used for secondary content that should appear after primary content
 */
export const FADE_IN_DELAYED: AnimationVariant = {
  initial: { opacity: 0, y: TRANSLATE_Y.medium },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: VIEWPORT_AMOUNT.medium },
  transition: { duration: DURATION.slow, delay: DELAY.long, ease: EASE_CURVE },
};

/**
 * Quick fade in for testimonials grid
 */
export const FADE_IN_TESTIMONIAL: AnimationVariant = {
  initial: { opacity: 0, y: TRANSLATE_Y.small },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: VIEWPORT_AMOUNT.small },
  transition: { duration: DURATION.normal, ease: EASE_CURVE },
};

/**
 * Mobile menu dropdown animation
 * Used for AnimatePresence with exit animation
 */
export const MOBILE_MENU_DROPDOWN = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: DURATION.fast },
} as const;

/**
 * X-axis translation distances (in pixels)
 */
export const TRANSLATE_X = {
  small: 20,
  medium: 40,
  large: 60,
} as const;

/**
 * Hero testimonial card slide in from left
 */
export const HERO_TESTIMONIAL_LEFT = {
  initial: { opacity: 0, x: -TRANSLATE_X.medium },
  animate: { opacity: 1, x: 0 },
  transition: { duration: DURATION.slow, delay: 0.5, ease: EASE_CURVE },
} as const;

/**
 * Hero testimonial card slide in from right
 */
export const HERO_TESTIMONIAL_RIGHT = {
  initial: { opacity: 0, x: TRANSLATE_X.medium },
  animate: { opacity: 1, x: 0 },
  transition: { duration: DURATION.slow, delay: 0.6, ease: EASE_CURVE },
} as const;

/**
 * Hero main content fade in
 */
export const HERO_CONTENT = {
  initial: { opacity: 0, y: TRANSLATE_Y.small },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: DELAY.short, ease: EASE_CURVE },
} as const;

/**
 * Hero video fade in
 */
export const HERO_VIDEO = {
  initial: { opacity: 0, y: TRANSLATE_Y.medium },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.verySlow, delay: 0.4, ease: EASE_CURVE },
} as const;

/**
 * Hero trusted companies fade in
 */
export const HERO_TRUSTED = {
  initial: { opacity: 0, y: TRANSLATE_Y.small },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: 0.7, ease: EASE_CURVE },
} as const;
