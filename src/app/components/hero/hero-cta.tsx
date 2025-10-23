import { Phone } from "lucide-react";
import { HeroCTAProps } from "./types";

export default function HeroCTA({
  text = "Book a call",
  onBookCall,
  isLoading = false,
}: HeroCTAProps = {}) {
  return (
    <button
      onClick={onBookCall}
      disabled={isLoading}
      className="p-2.5 bg-bg-dark rounded-full flex items-center hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Book a consultation call"
      type="button"
    >
      <div className="size-7 bg-white/13 flex items-center justify-center rounded-full" aria-hidden="true">
        <Phone size={14} className="text-white" />
      </div>
      <div className="py-1 px-3">
        <span className="text-white text-sm">{isLoading ? "Loading..." : text}</span>
      </div>
    </button>
  );
}
