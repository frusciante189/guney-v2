"use client";

import { motion } from "motion/react";
import type { MotionProps } from "motion/react";

type AnimationVariant = Pick<
  MotionProps,
  "initial" | "animate" | "whileInView" | "viewport" | "transition"
>;

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationVariant;
  className?: string;
}

/**
 * AnimatedSection Component
 *
 * A client-side wrapper that adds motion animations to section content.
 * Use this to wrap content in server components that need animations.
 *
 * @example
 * ```tsx
 * // In a server component
 * import { AnimatedSection } from "@/components/molecules";
 * import { FADE_IN_UP } from "@/constants/animations";
 *
 * export default function MySection() {
 *   return (
 *     <AnimatedSection animation={FADE_IN_UP}>
 *       <h2>My Heading</h2>
 *       <p>My content</p>
 *     </AnimatedSection>
 *   );
 * }
 * ```
 */
export function AnimatedSection({
  children,
  animation,
  className,
}: AnimatedSectionProps) {
  if (animation) {
    return (
      <motion.div className={className} {...animation}>
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
}
