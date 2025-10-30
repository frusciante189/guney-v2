import type React from "react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export type IconButtonSize = "sm" | "md" | "lg";
export type IconButtonVariant = "default" | "dark";

export interface IconButtonProps {
  icon: LucideIcon;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  iconSize?: number;
  className?: string;
  "aria-label"?: string;
}

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
};

const variantClasses: Record<IconButtonVariant, { bg: string; icon: string }> = {
  default: { bg: "bg-bg-gray-light", icon: "text-text-primary" },
  dark: { bg: "bg-bg-dark", icon: "text-white" },
};

const iconSizeMap: Record<IconButtonSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};

export function IconButton({
  icon: Icon,
  size = "md",
  variant = "default",
  iconSize,
  className,
  "aria-label": ariaLabel,
}: IconButtonProps): React.JSX.Element {
  const colors = variantClasses[variant];
  const defaultIconSize = iconSize || iconSizeMap[size];

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center shrink-0",
        sizeClasses[size],
        colors.bg,
        className
      )}
      aria-label={ariaLabel}
    >
      <Icon size={defaultIconSize} className={colors.icon} />
    </div>
  );
}
