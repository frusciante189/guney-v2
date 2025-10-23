"use client";

import { ArrowUpRight } from "lucide-react";
import { HeroBadgeProps } from "./types";

export default function HeroBadge({
  availabilityText = "Slots are available for October",
  eventText = "Upcoming event: Munich 2026",
  onEventClick,
}: HeroBadgeProps = {}) {
  return (
    <div className="bg-white border border-border-gray rounded-full pl-3 py-1 pr-1 flex items-center max-w-max">
      <div
        className="size-1.5 bg-green-500 shadow-[0_0_0_2px_rgb(34_197_94/0.25)] rounded-full animate-pulse-strong"
        role="status"
        aria-label="Available"
      />
      <p className="text-text-primary text-xs py-1 pl-2.5 pr-3">
        {availabilityText}
      </p>
      <hr className="w-px h-3 bg-border-gray-dark sm:block hidden" aria-hidden="true" />
      <div className="sm:pl-3 py-0.5 pr-0.5 flex items-center gap-2">
        <p className="text-text-primary text-xs sm:block hidden">
          {eventText}
        </p>
        <button
          onClick={onEventClick}
          className="bg-bg-gray-light cursor-pointer transition-colors hover:bg-border-gray size-6 rounded-full flex items-center justify-center"
          aria-label="View upcoming event details"
          type="button"
        >
          <ArrowUpRight className="text-text-secondary" size={12} />
        </button>
      </div>
    </div>
  );
}
