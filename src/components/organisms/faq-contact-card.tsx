import { BookCallButton } from "@/components/molecules";

interface FAQContactCardProps {
  title?: string;
  description?: string;
  onBookCall?: () => void;
}

export function FAQContactCard({
  title = "Still have questions?",
  description = "Let's talk about your European expansion plans — book a consultation call.",
  onBookCall,
}: FAQContactCardProps) {
  return (
    <div className="bg-bg-gray-lighter rounded-3xl flex flex-col gap-5 p-7">
      <div className="flex flex-col gap-2">
        <h6 className="text-text-primary text-xl font-bold">{title}</h6>
        <p className="text-text-tertiary text-sm leading-5 font-medium">
          {description}
        </p>
      </div>
      <BookCallButton onClick={onBookCall} className="p-1.5 gap-2 max-w-max" />
    </div>
  );
}
