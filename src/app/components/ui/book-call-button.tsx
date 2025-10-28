import { ActionButton } from "./action-button";

interface BookCallButtonProps {
  onClick?: () => void;
}

export function BookCallButton({ onClick }: BookCallButtonProps) {
  return <ActionButton text="Book a Call" onClick={onClick} />;
}
