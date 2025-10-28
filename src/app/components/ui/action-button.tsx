import { ArrowUpRight } from "lucide-react";

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}

export function ActionButton({ text, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-border-light rounded-full p-1.5 flex items-center gap-2 max-w-max"
      type="button"
    >
      <span className="px-2 py-1 text-sm font-medium text-text-secondary">
        {text}
      </span>
      <div className="size-7 rounded-full bg-bg-gray-light flex items-center justify-center">
        <ArrowUpRight className="text-text-primary" size={16} />
      </div>
    </button>
  );
}
