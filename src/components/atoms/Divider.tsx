import type React from "react";
import { cn } from "@/lib/utils";

export type DividerOrientation = "vertical" | "horizontal";
export type DividerVariant = "default" | "dark";

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  className?: string;
  hideOnMobile?: boolean;
}

export function Divider({
  orientation = "vertical",
  variant = "default",
  className,
  hideOnMobile = false,
}: DividerProps): React.JSX.Element {
  const isVertical = orientation === "vertical";
  const isDark = variant === "dark";

  return (
    <hr
      className={cn(
        isVertical ? "w-px h-3" : "h-px w-full",
        isDark ? "bg-border-gray-dark" : "bg-border-gray",
        hideOnMobile && "sm:block hidden",
        className
      )}
      aria-hidden="true"
    />
  );
}
