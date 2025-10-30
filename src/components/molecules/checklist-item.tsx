import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistItemProps {
  text: string;
  checked?: boolean;
  highlighted?: boolean;
}

export function ChecklistItem({
  text,
  checked = false,
  highlighted = false,
}: ChecklistItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-3.5 py-1.5",
        highlighted && "pr-3.5 pl-3 py-3 bg-bg-gray-lighter rounded-[14px]"
      )}
    >
      <span
        className={cn(
          "text-xs font-medium",
          checked ? "text-text-primary" : "text-text-muted"
        )}
      >
        {text}
      </span>
      {checked ? (
        <div className="w-3.5 h-3.5 rounded-full bg-brand-coral flex items-center justify-center">
          <Check size={10} strokeWidth={3} className="text-white" />
        </div>
      ) : (
        <div className="w-3.5 h-3.5 rounded-full border-2 border-border-gray" />
      )}
    </div>
  );
}
