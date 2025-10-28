"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { SectionBadge } from "./ui/section-badge";
import { SectionContainer } from "./ui/section-container";
import { FAQContactCard } from "./ui/faq-contact-card";
import { motion } from "motion/react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "item-1",
    question: "How do you help Turkish manufacturers enter European markets?",
    answer:
      "I provide end-to-end support for European expansion — from market assessment and contract setup to payment infrastructure and trade fair execution. My goal is to remove operational barriers so you can focus on winning clients.",
  },
  {
    id: "item-2",
    question: "Do I need to speak German or have European connections?",
    answer:
      "No. I handle all the cross-border communication, legal documentation, and relationship building. You don't need existing European contacts or language skills — I bridge that gap for you.",
  },
  {
    id: "item-3",
    question: "How long does it take to enter a European market?",
    answer:
      "Timelines vary based on your product and target market. Typically, initial setup (contracts, payments, compliance) takes 4-8 weeks. Trade fair execution and first client acquisition can happen within 3-6 months with the right strategy.",
  },
  {
    id: "item-4",
    question: "What about payment security and international transfers?",
    answer:
      "I set up secure banking channels and payment structures that minimize risk, delays, and currency conversion issues. You'll have clear visibility on every transaction with proper legal protection in place.",
  },
  {
    id: "item-5",
    question: "Can you help with just trade fairs or do I need full support?",
    answer:
      "I offer both full-service support and specific services like trade fair organization, contract negotiation, or payment setup. We can work together in whatever way best fits your current needs and capabilities.",
  },
  {
    id: "item-6",
    question: "What's your pricing structure?",
    answer:
      "Pricing depends on the scope of work — whether it's market entry strategy, ongoing support, or specific services like trade fairs. I provide transparent proposals with clear deliverables and no hidden costs after our initial consultation.",
  },
  {
    id: "item-7",
    question: "Do you provide support after the initial market entry?",
    answer:
      "Yes. I offer ongoing support for contract renewals, new market expansion, payment monitoring, and operational challenges as your European presence grows. You're not alone after the first deal closes.",
  },
];

export default function FAQ() {
  return (
    <SectionContainer>
      <div className="xl:gap-16 md:gap-14 gap-20 flex justify-between lg:flex-row flex-col">
        <motion.div
          className="flex flex-col justify-between gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col xl:gap-5 gap-4">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-content-max-width-md">
              Common questions,
              <br className="xl:block hidden" />
              <span className="text-text-muted">clear answers.</span>
            </h2>
            <p className="text-text-tertiary max-w-content-max-width-xs">
              Everything you need to know about expanding your manufacturing business into Europe.
            </p>
          </div>
          <FAQContactCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
