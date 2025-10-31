import type React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type IconBadgeColor = "sky" | "coral" | "purple" | "green";

export interface IconBadgeProps {
  icon: LucideIcon;
  color?: IconBadgeColor;
  rotation?: number;
  size?: number;
  showShadow?: boolean;
  className?: string;
}

const colorClasses: Record<IconBadgeColor, { bg: string; icon: string }> = {
  sky: { bg: "bg-bg-sky-light", icon: "text-brand-sky fill-brand-sky" },
  coral: { bg: "bg-bg-coral-light", icon: "text-brand-coral fill-brand-coral" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600 fill-purple-600" },
  green: { bg: "bg-green-100", icon: "text-green-600 fill-green-600" },
};

export function IconBadge({
  icon: Icon,
  color = "sky",
  rotation = 9,
  size = 20,
  showShadow = false,
  className,
}: IconBadgeProps): React.JSX.Element {
  const colors = colorClasses[color];

  return (
    <span
      className={cn(
        "size-11 flex items-center justify-center rounded-xl",
        colors.bg,
        showShadow && "shadow-avatar-ring",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <Icon size={size} className={colors.icon} />
    </span>
  );
}
