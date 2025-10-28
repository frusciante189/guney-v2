interface StatusIndicatorProps {
  status?: string;
}

export function StatusIndicator({ status = "Available" }: StatusIndicatorProps) {
  return (
    <div
      className="size-1.5 bg-green-500 shadow-[0_0_0_2px_rgb(34_197_94/0.25)] rounded-full animate-pulse-strong"
      role="status"
      aria-label={status}
    />
  );
}
