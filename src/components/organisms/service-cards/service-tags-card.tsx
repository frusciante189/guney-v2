"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceTag } from "@/components/atoms/service-tag";
import { getStaggerAnimation } from "@/constants/animations";

interface ServiceTagData {
  icon: LucideIcon;
  text: string;
}

interface ServiceTagsCardProps {
  id: string;
  title: string;
  description: string;
  tags: ServiceTagData[];
  gridClass: string;
  index: number;
}

/**
 * Service Tags Card Component
 *
 * Displays a service card with icon tags.
 * Used in ServiceCards grid for tag-based service presentations.
 */
export function ServiceTagsCard({
  id,
  title,
  description,
  tags,
  gridClass,
  index,
}: ServiceTagsCardProps) {
  return (
    <motion.div
      key={id}
      className={cn(gridClass, "bg-white rounded-4xl p-7 flex flex-col justify-between gap-2")}
      {...getStaggerAnimation(index)}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
          {title}
        </h3>
        <p className="text-sm text-text-tertiary">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2.5 mt-4 max-w-content-max-width-sm">
        {tags.map((tag, tagIndex) => (
          <ServiceTag key={tagIndex} icon={tag.icon} text={tag.text} />
        ))}
      </div>
    </motion.div>
  );
}
