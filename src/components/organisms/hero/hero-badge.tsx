"use client";

import { ArrowUpRight } from "lucide-react";
import { HeroBadgeProps } from "./types";
import { HeroBadge as BadgeContainer } from "./hero-badge/index";
import { StatusIndicator, Divider } from "@/components/atoms";
import { BadgeText } from "./hero-badge/badge-text";

import { BadgeButton } from "./hero-badge/badge-button";

export default function HeroBadge({
  availabilityText = "Slots are available for October",
  eventText = "Upcoming event: Munich 2026",
  onEventClick,
}: HeroBadgeProps = {}) {
  return (
    <BadgeContainer>
      <StatusIndicator />
      <BadgeText>{availabilityText}</BadgeText>
      <Divider variant="dark" hideOnMobile />
      <p className="text-text-primary text-xs sm:block hidden pl-3 pr-0.5">
        {eventText}
      </p>
      <BadgeButton
        onClick={onEventClick}
        ariaLabel="View upcoming event details"
      >
        <ArrowUpRight className="text-text-secondary" size={12} />
      </BadgeButton>
    </BadgeContainer>
  );
}
