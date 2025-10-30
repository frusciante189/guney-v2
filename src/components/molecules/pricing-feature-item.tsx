import { CheckmarkIcon } from "@/components/atoms/icons/checkmark-icon";

interface PricingFeatureItemProps {
  text: string;
}

export function PricingFeatureItem({ text }: PricingFeatureItemProps) {
  return (
    <div className="flex items-start gap-3 px-4 py-3">
      <div className="size-6 rounded-full bg-brand-coral flex items-center justify-center shrink-0 mt-0.5">
        <CheckmarkIcon />
      </div>
      <span className="text-base text-white font-medium">{text}</span>
    </div>
  );
}
