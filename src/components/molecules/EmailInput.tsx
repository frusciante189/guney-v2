import React from "react";
import { AtSign, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmailInputProps {
  placeholder?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  buttonAriaLabel?: string;
  inputLabel?: string;
  inputId?: string;
}

export function EmailInput({
  placeholder = "Enter your email...",
  onSubmit,
  className,
  buttonAriaLabel = "Subscribe to newsletter",
  inputLabel = "Email address for newsletter subscription",
  inputId = "newsletter-email",
}: EmailInputProps): React.JSX.Element {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onSubmit) {
      onSubmit(email);
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId} className="sr-only">
        {inputLabel}
      </label>
      <div
        className={cn(
          "rounded-full p-2 flex items-center gap-2 border border-text-secondary bg-bg-newsletter transition-colors focus-within:border-brand-coral",
          className
        )}
      >
        <div className="flex items-center gap-2 flex-1 pl-3">
          <AtSign size={20} className="text-text-placeholder" aria-hidden="true" />
          <input
            id={inputId}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent text-white text-sm outline-none flex-1 placeholder:text-text-placeholder caret-white"
            required
            aria-label={inputLabel}
          />
        </div>
        <button
          type="submit"
          className="bg-brand-coral rounded-full px-[22px] py-3 flex items-center justify-center hover:bg-brand-coral/90 transition-colors"
          aria-label={buttonAriaLabel}
        >
          <ArrowRight className="text-white" size={20} />
        </button>
      </div>
    </form>
  );
}
