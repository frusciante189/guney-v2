"use client";

import { SectionHeader } from "@/components/molecules";
import { SectionContainer } from "@/components/organisms/section-container";
import { FAQContactCard } from "@/components/organisms/faq-contact-card";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { FADE_IN_UP, FADE_IN_DELAYED } from "@/constants/animations";
import { FAQ_ITEMS } from "@/constants/content";

export const FAQ = () => {
  return (
    <SectionContainer id="faq">
      <div className="xl:gap-16 md:gap-14 gap-20 flex justify-between lg:flex-row flex-col">
        <motion.div
          className="flex flex-col justify-between gap-8"
          {...FADE_IN_UP}
        >
          <SectionHeader
            badge="FAQ"
            title="Common questions,"
            titleAccent="clear answers."
            description="Everything you need to know about expanding your manufacturing business into Europe."
            alignment="left"
          />
          <FAQContactCard />
        </motion.div>
        <motion.div
          {...FADE_IN_DELAYED}
          className="w-full lg:max-w-[606px]"
        >
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-5"
            className="flex flex-col"
          >
            {FAQ_ITEMS.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="border-b border-border-gray"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-5 py-7 flex items-center justify-between gap-4 text-left group transition-all">
                    <span className="text-text-primary font-medium">
                      {faq.question}
                    </span>
                    <div className="shrink-0">
                      <Plus
                        size={16}
                        className="text-text-primary transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90 absolute"
                      />
                      <Minus
                        size={16}
                        className="text-text-primary transition-all duration-300 group-data-[state=closed]:opacity-0 group-data-[state=closed]:-rotate-90"
                      />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                  <div className="pb-5 pl-5 pr-12">
                    <p className="text-text-tertiary leading-5 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
