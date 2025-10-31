"use client";

import {
  ServiceImageCard,
  ServiceTagsCard,
  ServiceChecklistCard,
  ServiceChatCard,
  ServiceDarkCard,
} from "./service-cards/index";
import { SERVICES } from "@/constants/services";

/**
 * Service Cards Grid Component
 *
 * Renders a grid of different service card types.
 * Each card type has its own component for better maintainability.
 *
 * Card types:
 * - ServiceImageCard: Image-based service presentation
 * - ServiceTagsCard: Icon tags for service features
 * - ServiceChecklistCard: Checklist of service items
 * - ServiceChatCard: Chat conversation preview
 * - ServiceDarkCard: Dark-themed service card with pattern overlay
 */
export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr gap-4">
      {SERVICES.map((service, index) => {
        switch (service.type) {
          case "image":
            return (
              <ServiceImageCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                image={service.image!}
                gridClass={service.gridClass}
                index={index}
              />
            );

          case "tags":
            return (
              <ServiceTagsCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                tags={service.tags!}
                gridClass={service.gridClass}
                index={index}
              />
            );

          case "checklist":
            return (
              <ServiceChecklistCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                checklist={service.checklist!}
                showButton={service.showButton}
                gridClass={service.gridClass}
                index={index}
              />
            );

          case "chat":
            return (
              <ServiceChatCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                chat={service.chat!}
                gridClass={service.gridClass}
                index={index}
              />
            );

          case "dark":
            return (
              <ServiceDarkCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                showButton={service.showButton}
                gridClass={service.gridClass}
                index={index}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
