"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BookCallButton } from "@/components/molecules";
import { getStaggerAnimation } from "@/constants/animations";

interface ServiceDarkCardProps {
  id: string;
  title: string;
  description: string;
  showButton?: boolean;
  gridClass: string;
  index: number;
}

/**
 * Service Dark Card Component
 *
 * Displays a service card with dark background and pattern overlay.
 * Used in ServiceCards grid for dark-themed service presentations.
 */
export function ServiceDarkCard({
  id,
  title,
  description,
  showButton,
  gridClass,
  index,
}: ServiceDarkCardProps) {
  return (
    <motion.div
      key={id}
      className={cn(gridClass, "relative bg-bg-dark rounded-4xl p-7 flex flex-col justify-end overflow-hidden")}
      {...getStaggerAnimation(index)}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          backgroundImage: "url(/pattern.png)",
          backgroundRepeat: "repeat",
          backgroundPosition: "center top",
          backgroundSize: "32px auto",
          WebkitMaskImage: "linear-gradient(45deg, #0000 32%, #000 117%)",
          maskImage: "linear-gradient(45deg, #0000 32%, #000 117%)",
        }}
      />
      <div className="relative z-10 flex flex-col gap-5">
        <h3 className="text-xl xl:text-2xl font-bold">
          <span className="text-white">{title}</span>
          <br />
          <span className="text-white/60">{description}</span>
        </h3>
        {showButton && (
          <BookCallButton className="p-1.5 gap-2 max-w-max" />
        )}
      </div>
    </motion.div>
  );
}
