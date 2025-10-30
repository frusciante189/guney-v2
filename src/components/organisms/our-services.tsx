"use client";

import ServiceCards from "./service-cards";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { SectionHeader } from "@/components/molecules";
import { motion } from "motion/react";

/**
 * Our Services Section
 *
 * Displays the services section with header and service cards grid.
 * Uses new Atomic Design structure with SectionHeader molecule.
 */
export default function OurServices() {
  return (
    <SectionContainer>
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            badge="Our Services"
            title="From ideas into high-impact solutions"
            titleAccent="That inspires and convert"
          />
        </motion.div>
        <div className="bg-bg-gray-lighter rounded-section p-5">
          <ServiceCards />
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
