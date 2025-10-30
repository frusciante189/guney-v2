import { LucideIcon } from "lucide-react";

interface ServiceTagProps {
  icon: LucideIcon;
  text: string;
}

export function ServiceTag({ icon: Icon, text }: ServiceTagProps) {
  return (
    <span className="pl-3 pr-2.5 py-2.5 bg-bg-gray-light rounded-full text-xs leading-4 font-medium text-text-secondary flex items-center">
      <Icon size={14} />
      <span className="px-2">{text}</span>
    </span>
  );
}
