"use client";

import { SectionBadge } from "./ui/section-badge";
import { SectionContainer, SectionContent } from "./ui/section-container";
import { ActionButton } from "./ui/action-button";
import { ProjectCard } from "./ui/project-card";
import { motion } from "motion/react";

interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: "nova-threads",
    title: "Nova Threads",
    image: "/w1.avif",
    tags: ["Crypto", "Web app"],
  },
];

export default function OurWork() {
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
          <SectionBadge>Success Stories</SectionBadge>
          <div className="flex md:items-end justify-between md:flex-row flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-content-max-width-lg">
                Real manufacturers, real European growth.
              </h2>
              <p className="max-w-content-max-width-sm text-text-tertiary max-w-[450px]">
                From first contact to signed contracts — see how we help manufacturers expand into Europe.
              </p>
            </div>
            <ActionButton text="View all case studies" />
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
