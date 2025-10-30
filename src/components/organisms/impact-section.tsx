"use client";

import StatCard from "./stat-card";
import { Badge } from "@/components/atoms";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { motion } from "motion/react";

interface Stat {
  number: string;
  title: string;
  description: string;
}

const STATS: Stat[] = [
  {
    number: "50+",
    title: "European Market Entries",
    description:
      "Successfully guided manufacturers through complex European market entry, from contracts to compliance, ensuring smooth and secure expansion.",
  },
  {
    number: "€2M+",
    title: "International Contracts Secured",
    description:
      "Negotiated and structured cross-border agreements that protect your interests and ensure smooth money transfers with minimal risk.",
  },
  {
    number: "30+",
    title: "Trade Fairs Organized",
    description:
      "From logistics to setup, we handle the operational complexity of trade fairs so you can focus on winning new clients and building relationships.",
  },
];

export default function ImpactSection() {
  return (
    <SectionContainer className="xl:pb-24 md:pb-14 pb-10">
      <SectionContent className="items-center">
        <motion.div
          className="flex flex-col items-center xl:gap-5 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge>Impact</Badge>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-text-primary max-w-content-max-width-md mx-auto">
            Making European expansion <br className="xl:block hidden" />
            <span className="text-text-muted">simple and secure</span>
          </h2>
          <p className="text-text-muted text-center max-w-2xl xl:text-lg md:text-base text-sm">
            I help Turkish manufacturers win new clients and solve the hard operational problems — contracts, money transfers, and trade fair stands — so you move faster with fewer surprises.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                index === STATS.length - 1 ? "md:col-span-2 xl:col-span-1" : ""
              }
            >
              <StatCard
                number={stat.number}
                title={stat.title}
                description={stat.description}
              />
            </motion.div>
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
