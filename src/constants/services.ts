/**
 * Services data for ServiceCards component
 * Using discriminated unions for type-safe service cards
 */

import { FileText, Globe, Lock, Users, Shield, CheckSquare, type LucideIcon } from "lucide-react";

export interface ServiceTagData {
  icon: LucideIcon;
  text: string;
}

export interface ChecklistItemData {
  text: string;
  checked: boolean;
  highlighted?: boolean;
}

export interface ChatMessage {
  sender: string;
  role: string;
  message: string;
  time: string;
}

// Base interface for all service cards
interface BaseServiceCard {
  id: string;
  title: string;
  description: string;
  gridClass: string;
}

// Image service card (requires image, no optional props)
export interface ImageServiceCard extends BaseServiceCard {
  type: "image";
  image: string;
}

// Tags service card (requires tags array)
export interface TagsServiceCard extends BaseServiceCard {
  type: "tags";
  tags: ServiceTagData[];
}

// Checklist service card (requires checklist array, optional button)
export interface ChecklistServiceCard extends BaseServiceCard {
  type: "checklist";
  checklist: ChecklistItemData[];
  showButton?: boolean;
}

// Chat service card (requires chat message)
export interface ChatServiceCard extends BaseServiceCard {
  type: "chat";
  chat: ChatMessage;
}

// Dark service card (minimal, optional button)
export interface DarkServiceCard extends BaseServiceCard {
  type: "dark";
  showButton?: boolean;
}

// Discriminated union - each type has its required props
export type ServiceCardData =
  | ImageServiceCard
  | TagsServiceCard
  | ChecklistServiceCard
  | ChatServiceCard
  | DarkServiceCard;

export const SERVICES: ServiceCardData[] = [
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
