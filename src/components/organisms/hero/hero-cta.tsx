import { Phone } from "lucide-react";
import { Button } from "@/components/atoms";
import { HeroCTAProps } from "./types";

export default function HeroCTA({
  text = "Book a call",
  onBookCall,
  isLoading = false,
}: HeroCTAProps = {}) {
  return (
    <Button
      variant="hero-cta"
      icon={Phone}
      onClick={onBookCall}
      disabled={isLoading}
      ariaLabel="Book a consultation call"
    >
      {isLoading ? "Loading..." : text}
    </Button>
  );
}
