import type React from "react";
import { cn } from "@/lib/utils";

export type ChatAvatarVariant = "primary" | "secondary" | "success" | "warning";

export interface ChatAvatarProps {
  initials: string;
  variant?: ChatAvatarVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses: Record<ChatAvatarVariant, string> = {
  primary: "bg-brand-coral",
  secondary: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
};

const sizeClasses = {
  sm: "size-6 text-[10px]",
  md: "size-8 text-xs",
  lg: "size-10 text-sm",
};

export function ChatAvatar({
  initials,
  variant = "primary",
  size = "md",
  className,
}: ChatAvatarProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center text-white font-bold",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
