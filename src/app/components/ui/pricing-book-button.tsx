import { Phone } from "lucide-react";

interface PricingBookButtonProps {
  onClick?: () => void;
}

export function PricingBookButton({ onClick }: PricingBookButtonProps) {
  return (
    <button
      className="p-3 bg-brand-coral rounded-full flex items-center hover:bg-opacity-90 transition-all mt-6"
      aria-label="Book a consultation call"
      type="button"
      onClick={onClick}
    >
      <div
        className="size-8 bg-white/20 flex items-center justify-center rounded-full"
        aria-hidden="true"
      >
        <Phone size={16} className="text-white" />
      </div>
      <div className="py-1.5 px-4">
        <span className="text-white text-base font-medium">Book Now</span>
      </div>
    </button>
  );
}
