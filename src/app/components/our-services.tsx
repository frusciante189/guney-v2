"use client";

import ServiceCards from "./service-cards";
import { SectionBadge } from "./ui/section-badge";
import { SectionContainer, SectionContent } from "./ui/section-container";
import { motion } from "motion/react";

export default function OurServices() {
  return (
    <SectionContainer>
      <SectionContent>
        <motion.div
          className="flex flex-col xl:gap-5 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionBadge>Our Services</SectionBadge>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-content-max-width-lg">
            From ideas into high-impact solutions{" "}
            <br className="xl:block hidden" />
            <span className="text-text-muted">That inspires and convert</span>
          </h2>
        </motion.div>
        <div className="bg-bg-gray-lighter rounded-section p-5">
          <ServiceCards />
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
