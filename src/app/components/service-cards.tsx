"use client";

import Image from "next/image";
import { FileText, Globe, Lock, Users, Shield, CheckSquare, LucideIcon } from "lucide-react";
import { ServiceTag } from "./ui/service-tag";
import { ChecklistItem } from "./ui/checklist-item";
import { BookCallButton } from "./ui/book-call-button";
import { motion } from "motion/react";

interface ServiceTagData {
  icon: LucideIcon;
  text: string;
}

interface ChecklistItemData {
  text: string;
  checked: boolean;
  highlighted?: boolean;
}

interface ChatMessage {
  sender: string;
  role: string;
  message: string;
  time: string;
}

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  type: "image" | "tags" | "checklist" | "chat" | "dark";
  gridClass: string;
  image?: string;
  tags?: ServiceTagData[];
  checklist?: ChecklistItemData[];
  chat?: ChatMessage;
  showButton?: boolean;
}

const SERVICES: ServiceCardData[] = [
  {
    id: "find-clients",
    title: "Find New Clients",
    description: "Targeted outreach in Germany & Europe, warm introductions, meeting facilitation.",
    type: "image",
    gridClass: "lg:row-span-2",
    image: "/f1.avif",
  },
  {
    id: "contracts",
    title: "Contracts Sorted",
    description: "Drafting & review so terms are clear, compliant, and protect your interests.",
    type: "tags",
    gridClass: "lg:col-span-2",
    tags: [
      { icon: FileText, text: "Sales Agreements" },
      { icon: Globe, text: "Distribution Terms" },
      { icon: Lock, text: "NDAs" },
      { icon: Users, text: "Partnership Deals" },
      { icon: CheckSquare, text: "Legal Compliance" },
      { icon: Shield, text: "Risk Protection" },
    ],
  },
  {
    id: "secure-payments",
    title: "Secure Payments",
    description: "Letters of credit, escrow, insured terms — ship with confidence and no surprises",
    type: "checklist",
    gridClass: "lg:col-span-2",
    showButton: true,
    checklist: [
      { text: "Letters of Credit", checked: true, highlighted: true },
      { text: "Escrow Services", checked: true },
      { text: "Payment Insurance", checked: true },
      { text: "Bank Guarantees", checked: false },
      { text: "Advance Payment Protection", checked: false },
      { text: "Currency Risk Management", checked: false },
    ],
  },
  {
    id: "trade-fair",
    title: "Trade Fair Support",
    description: "From booking to booth and follow-ups — maximize visibility and ROI at key fairs.",
    type: "chat",
    gridClass: "lg:col-span-2",
    chat: {
      sender: "John Doe",
      role: "Fair Organizer",
      time: "2:30 PM",
      message: "Booth space confirmed for next week's fair!",
    },
  },
  {
    id: "problem-solving",
    title: "On-the-Ground",
    description: "Problem Solving",
    type: "dark",
    gridClass: "",
    showButton: true,
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr gap-4">
      {SERVICES.map((service, index) => {
        if (service.type === "image") {
          return (
            <motion.div
              key={service.id}
              className={`${service.gridClass} bg-white rounded-4xl p-7 flex flex-col gap-14`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-tertiary">{service.description}</p>
              </div>
              <div className="flex-1 flex items-end justify-center">
                <div className="relative max-w-[220px] max-h-[406px] mask-fade-bottom">
                  <Image
                    src={service.image!}
                    alt={service.title}
                    width={220}
                    height={406}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          );
        }

        if (service.type === "tags") {
          return (
            <motion.div
              key={service.id}
              className={`${service.gridClass} bg-white rounded-4xl p-7 flex flex-col justify-between gap-2`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-tertiary">{service.description}</p>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-4 max-w-content-max-width-sm">
                {service.tags?.map((tag, index) => (
                  <ServiceTag key={index} icon={tag.icon} text={tag.text} />
                ))}
              </div>
            </motion.div>
          );
        }

        if (service.type === "checklist") {
          return (
            <motion.div
              key={service.id}
              className={`${service.gridClass} bg-white rounded-4xl p-7 flex justify-between gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-tertiary">{service.description}</p>
                </div>
                {service.showButton && <BookCallButton />}
              </div>
              <div className="flex flex-col w-[264px] border border-border-gray rounded-[18px] px-1.5 pt-1.5 pb-7 mask-fade-bottom">
                {service.checklist?.map((item, index) => (
                  <ChecklistItem
                    key={index}
                    text={item.text}
                    checked={item.checked}
                    highlighted={item.highlighted}
                  />
                ))}
              </div>
            </motion.div>
          );
        }

        if (service.type === "chat") {
          return (
            <motion.div
              key={service.id}
              className={`${service.gridClass} bg-white rounded-4xl p-7 flex flex-col gap-8`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-tertiary">{service.description}</p>
              </div>
              <div className="flex flex-col gap-3 border border-border-gray rounded-[18px] p-4 mask-fade-bottom">
                <div className="flex items-center gap-2 pb-2 border-b border-border-gray">
                  <div className="size-8 rounded-full bg-brand-coral flex items-center justify-center text-white text-xs font-bold">
                    JD
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-text-primary">
                      {service.chat?.sender}
                    </p>
                    <p className="text-xs text-text-muted">{service.chat?.role}</p>
                  </div>
                  <span className="text-xs text-text-muted">{service.chat?.time}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-bg-gray-lighter rounded-2xl rounded-tl-none p-3 max-w-[70%]">
                    <p className="text-xs text-text-secondary">
                      {service.chat?.message}
                    </p>
                  </div>
                  <div className="bg-brand-coral/10 rounded-2xl rounded-tr-none p-3 ml-auto max-w-[70%]">
                    <p className="text-xs text-text-secondary">
                      Perfect! Can you send booth specs?
                    </p>
                  </div>
                  <div className="bg-bg-gray-lighter rounded-2xl rounded-tl-none p-3 max-w-[70%]">
                    <p className="text-xs text-text-secondary">
                      Sending now. Also added parking passes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        }

        if (service.type === "dark") {
          return (
            <motion.div
              key={service.id}
              className={`${service.gridClass} relative bg-bg-dark rounded-4xl p-7 flex flex-col justify-end overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                  backgroundImage: "url(/pattern.png)",
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center top",
                  backgroundSize: "32px auto",
                  WebkitMaskImage: "linear-gradient(45deg, #0000 32%, #000 117%)",
                  maskImage: "linear-gradient(45deg, #0000 32%, #000 117%)",
                }}
              />
              <div className="relative z-10 flex flex-col gap-5">
                <h3 className="text-xl xl:text-2xl font-bold">
                  <span className="text-white">{service.title}</span>
                  <br />
                  <span className="text-white/60">{service.description}</span>
                </h3>
                {service.showButton && <BookCallButton />}
              </div>
            </motion.div>
          );
        }

        return null;
      })}
    </div>
  );
}
