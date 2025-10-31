import type React from "react";

export interface StatusIndicatorProps {
  status?: string;
}

export function StatusIndicator({
  status = "Available",
}: StatusIndicatorProps): React.JSX.Element {
  return (
    <div
      className="size-1.5 bg-status-success shadow-status-pulse rounded-full animate-pulse-strong"
      role="status"
      aria-label={status}
    />
  );
}
