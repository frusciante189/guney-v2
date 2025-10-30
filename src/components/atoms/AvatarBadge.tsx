import type React from "react";
import { cn } from "@/lib/utils";

export type AvatarBadgeSize = "sm" | "md" | "lg";

export interface AvatarBadgeProps {
  count: string;
  size?: AvatarBadgeSize;
  className?: string;
}

const sizeClasses: Record<AvatarBadgeSize, { container: string; text: string }> = {
  sm: { container: "size-7", text: "text-[10px]" },
  md: { container: "size-9", text: "text-xs" },
  lg: { container: "size-11", text: "text-sm" },
};

export function AvatarBadge({
  count,
  size = "md",
  className,
}: AvatarBadgeProps): React.JSX.Element {
  const classes = sizeClasses[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center font-medium text-text-primary outline outline-border-gray shadow-avatar-ring rounded-full bg-bg-gray-lighter",
        classes.container,
        classes.text,
        className
      )}
    >
      {count}
    </div>
  );
}
