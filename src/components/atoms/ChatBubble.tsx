import type React from "react";
import { cn } from "@/lib/utils";

export type ChatBubbleSide = "left" | "right";
export type ChatBubbleVariant = "default" | "highlighted";

export interface ChatBubbleProps {
  children: React.ReactNode;
  side?: ChatBubbleSide;
  variant?: ChatBubbleVariant;
  className?: string;
}

export function ChatBubble({
  children,
  side = "left",
  variant = "default",
  className,
}: ChatBubbleProps): React.JSX.Element {
  const isLeft = side === "left";
  const isHighlighted = variant === "highlighted";

  return (
    <div
      className={cn(
        "rounded-2xl p-3 max-w-[70%]",
        isLeft ? "rounded-tl-none" : "rounded-tr-none ml-auto",
        isHighlighted ? "bg-brand-coral/10" : "bg-bg-gray-lighter",
        className
      )}
    >
      <p className="text-xs text-text-secondary">{children}</p>
    </div>
  );
}
