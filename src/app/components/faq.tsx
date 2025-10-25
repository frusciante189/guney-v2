"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "What services does your agency offer?",
    answer:
      "We specialize in web design, no-code development, paid advertising, SEO, branding, copywriting, and motion design. Our goal is to help businesses grow through high-performing digital experiences.",
  },
  {
    id: "item-2",
    question: "Do you work with startups or only established companies?",
    answer:
      "We work with both startups and established companies. Whether you're just starting out or looking to scale, we tailor our services to meet your specific needs and business goals.",
  },
  {
    id: "item-3",
    question: "What platforms do you use for no-code websites?",
    answer:
      "We primarily work with modern no-code platforms like Webflow, Framer, and other industry-leading tools that allow us to create high-performance, scalable websites without compromising on quality or functionality.",
  },
  {
    id: "item-4",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks from start to finish, while branding or comprehensive digital marketing campaigns may require 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: "item-5",
    question: "Can you help with just one part of the project?",
    answer:
      "Absolutely, we're happy to collaborate in the way that best complements your team's workflow. We can jump in as creative partners, support your internal team, or handle everything from concept to execution.",
  },
  {
    id: "item-6",
    question: "What's your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the scope, complexity, and timeline. We offer transparent pricing with no hidden fees. After understanding your requirements, we'll provide a detailed proposal with clear deliverables and costs.",
  },
  {
    id: "item-7",
    question: "Do you offer ongoing support after the project is finished?",
    answer:
      "Yes! We offer various ongoing support and maintenance packages to ensure your digital presence continues to perform at its best. This includes website updates, performance monitoring, SEO maintenance, and marketing campaign management.",
  },
];

export default function FAQ() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-5"
      className="w-full max-w-[606px] flex flex-col"
    >
      {faqData.map((faq) => (
        <Accordion.Item
          key={faq.id}
          value={faq.id}
          className={`border-b border-border-gray`}
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
  );
}
