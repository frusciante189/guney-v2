"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { getStaggerAnimation } from "@/constants/animations";

interface ServiceImageCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  gridClass: string;
  index: number;
}

/**
 * Service Image Card Component
 *
 * Displays a service card with an image.
 * Used in ServiceCards grid for image-based service presentations.
 */
export function ServiceImageCard({
  id,
  title,
  description,
  image,
  gridClass,
  index,
}: ServiceImageCardProps) {
  return (
    <motion.div
      key={id}
      className={cn(gridClass, "bg-white rounded-4xl p-7 flex flex-col gap-14")}
      {...getStaggerAnimation(index)}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
          {title}
        </h3>
        <p className="text-sm text-text-tertiary">{description}</p>
      </div>
      <div className="flex-1 flex items-end justify-center">
        <div className="relative max-w-[220px] max-h-[406px] mask-fade-bottom">
          <Image
            src={image}
            alt={title}
            width={220}
            height={406}
            className="rounded-2xl object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 220px"
            quality={85}
          />
        </div>
      </div>
    </motion.div>
  );
}
