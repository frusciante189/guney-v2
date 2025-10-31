"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BookCallButton } from "@/components/molecules";
import { ChecklistItem } from "@/components/molecules/checklist-item";
import { getStaggerAnimation } from "@/constants/animations";

interface ChecklistItemData {
  id: string;
  text: string;
  checked: boolean;
  highlighted?: boolean;
}

interface ServiceChecklistCardProps {
  id: string;
  title: string;
  description: string;
  checklist: ChecklistItemData[];
  showButton?: boolean;
  gridClass: string;
  index: number;
}

/**
 * Service Checklist Card Component
 *
 * Displays a service card with a checklist of items.
 * Used in ServiceCards grid for checklist-based service presentations.
 */
export function ServiceChecklistCard({
  id,
  title,
  description,
  checklist,
  showButton,
  gridClass,
  index,
}: ServiceChecklistCardProps) {
  return (
    <motion.div
      key={id}
      className={cn(gridClass, "bg-white rounded-4xl p-7 flex justify-between gap-12")}
      {...getStaggerAnimation(index)}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
            {title}
          </h3>
          <p className="text-sm text-text-tertiary">{description}</p>
        </div>
        {showButton && (
          <BookCallButton className="p-1.5 gap-2 max-w-max" />
        )}
      </div>
      <div className="flex flex-col w-[264px] border border-border-gray rounded-[18px] px-1.5 pt-1.5 pb-7 mask-fade-bottom">
        {checklist.map((item) => (
          <ChecklistItem
            key={item.id}
            text={item.text}
            checked={item.checked}
            highlighted={item.highlighted}
          />
        ))}
      </div>
    </motion.div>
  );
}
