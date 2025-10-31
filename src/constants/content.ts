/**
 * Centralized Content Data
 *
 * All hardcoded content data consolidated in one place.
 * This makes it easier to:
 * - Maintain consistency across the application
 * - Prepare for CMS integration (Payload CMS)
 * - Update content without touching component files
 * - Enable i18n in the future
 */

// ============================================================================
// TESTIMONIALS
// ============================================================================

export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  metric?: {
    value: string;
    label: string;
  };
  layout: "large" | "medium" | "small";
  quoteSize?: "default" | "small";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "mehmet-yilmaz",
    quote:
      "Entering the German market seemed impossible with all the paperwork and regulations. Güney handled everything — from contracts to payment setup. We closed our first €500K deal within 6 months.",
    author: {
      name: "Mehmet Yılmaz",
      title: "CEO, Yılmaz Tekstil",
      avatar: "/w1.avif",
    },
    metric: {
      value: "€500K",
      label: "First year European revenue",
    },
    layout: "large",
  },
  {
    id: "ayse-demir",
    quote:
      "From booth logistics to meeting scheduling, everything was organized perfectly. We generated 45 qualified leads at our first European trade fair.",
    author: {
      name: "Ayşe Demir",
      title: "Export Manager, Demir Makina",
      avatar: "/w1.avif",
    },
    metric: {
      value: "45+",
      label: "Qualified leads generated",
    },
    layout: "medium",
    quoteSize: "small",
  },
  {
    id: "can-ozdemir",
    quote:
      "Payment transfers were always our biggest worry. Güney set up secure banking channels and we've had zero issues in 2 years.",
    author: {
      name: "Can Özdemir",
      title: "Finance Director, Özdemir Metal",
      avatar: "/w1.avif",
    },
    layout: "small",
    quoteSize: "small",
  },
  {
    id: "emre-kara",
    quote:
      "The contract templates and legal guidance saved us months of back-and-forth. We knew exactly what to expect.",
    author: {
      name: "Emre Kara",
      title: "Owner, Kara Ambalaj",
      avatar: "/w1.avif",
    },
    layout: "small",
    quoteSize: "small",
  },
];

// ============================================================================
// BLOG POSTS
// ============================================================================

export interface BlogPost {
  id: string;
  image: string;
  author: string;
  readTime: string;
  title: string;
  tags: string[];
  date: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "german-mistakes",
    image: "/b1.avif",
    author: "Güney Kılıç",
    readTime: "5 Min Read",
    title:
      "5 Common Mistakes Turkish Manufacturers Make When Entering Germany",
    tags: ["Market Entry", "Germany"],
    date: "Jan 25, 2025",
    featured: true,
  },
  {
    id: "international-payments",
    image: "/b1.avif",
    author: "Güney Kılıç",
    readTime: "4 Min Read",
    title: "How to Structure International Payments for Manufacturing Exports",
    tags: ["Payments", "Finance"],
    date: "Jan 20, 2025",
  },
  {
    id: "trade-fair-guide",
    image: "/b1.avif",
    author: "Güney Kılıç",
    readTime: "6 Min Read",
    title: "Trade Fair Success: A Complete Guide for First-Time Exhibitors",
    tags: ["Trade Fairs", "Strategy"],
    date: "Jan 15, 2025",
  },
];

// ============================================================================
// PROJECTS / OUR WORK
// ============================================================================

export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "hannover-messe-2024",
    title: "Hannover Messe 2024",
    image: "/our-work/1.jpg",
    tags: ["Germany", "Industrial Tech"],
  },
  {
    id: "k-messe-dusseldorf-2023",
    title: "K Messe Düsseldorf 2023",
    image: "/our-work/2.jpg",
    tags: ["Germany", "Plastics & Rubber"],
  },
  {
    id: "bauma-munich-2024",
    title: "Bauma Munich 2024",
    image: "/our-work/3.jpg",
    tags: ["Germany", "Construction"],
  },
  {
    id: "metav-dusseldorf-2024",
    title: "METAV Düsseldorf 2024",
    image: "/our-work/4.jpg",
    tags: ["Germany", "Metalworking"],
  },
  {
    id: "iaa-frankfurt-2023",
    title: "IAA Frankfurt 2023",
    image: "/our-work/5.jpg",
    tags: ["Germany", "Automotive"],
  },
  {
    id: "ism-cologne-2024",
    title: "ISM Cologne 2024",
    image: "/our-work/6.jpg",
    tags: ["Germany", "Sweets & Snacks"],
  },
];

// ============================================================================
// IMPACT STATS
// ============================================================================

export interface Stat {
  number: string;
  title: string;
  description: string;
}

export const STATS: Stat[] = [
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

// ============================================================================
// PROCESS STEPS
// ============================================================================

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Market Assessment",
    description:
      "We analyze your product fit for European markets and identify the best entry strategy based on your capabilities and goals.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Legal & Documentation Setup",
    description:
      "Get all contracts, compliance documents, and legal frameworks in place — translated, reviewed, and ready to sign.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Payment Infrastructure",
    description:
      "Set up secure international payment channels, banking relationships, and transfer mechanisms to minimize risk and delays.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Trade Fair Execution",
    description:
      "From booth design to logistics and meeting scheduling, we handle every detail so you focus on closing deals.",
  },
  {
    id: "step-5",
    number: "05",
    title: "Ongoing Support & Growth",
    description:
      "Continuous support for contract renewals, new market entries, and operational challenges as your European presence grows.",
  },
];

// ============================================================================
// FAQ ITEMS
// ============================================================================

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
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

// ============================================================================
// PRICING FEATURES
// ============================================================================

export interface PricingFeature {
  id: string;
  text: string;
}

export const PRICING_FEATURES: PricingFeature[] = [
  {
    id: "consultation",
    text: "60 minutes consultation session",
  },
  {
    id: "payment",
    text: "Secure payment at booking",
  },
  {
    id: "fees",
    text: "No hidden fees",
  },
  {
    id: "action-plan",
    text: "Personalized action plan included",
  },
];

// ============================================================================
// HERO DATA
// ============================================================================

export interface TrustedCompanyLogo {
  id: string;
  src: string;
  alt: string;
}

export const HERO_TRUSTED_LOGOS: TrustedCompanyLogo[] = [
  { id: "logo-1", src: "/logos/l1.svg", alt: "Siemens" },
  { id: "logo-2", src: "/logos/l2.svg", alt: "Bosch" },
  { id: "logo-3", src: "/logos/l3.svg", alt: "Mercedes-Benz" },
  { id: "logo-4", src: "/logos/l4.svg", alt: "BMW" },
  { id: "logo-5", src: "/logos/l5.svg", alt: "Volkswagen" },
  { id: "logo-6", src: "/logos/l6.svg", alt: "BASF" },
];

export interface ReviewerAvatar {
  src: string;
  alt: string;
}

export const HERO_REVIEWERS: ReviewerAvatar[] = [
  { src: "/p1.avif", alt: "Mehmet Yılmaz - Manufacturing Director" },
  { src: "/p2.avif", alt: "Ayşe Demir - Export Manager" },
  { src: "/p3.avif", alt: "Can Özdemir - CEO" },
];
