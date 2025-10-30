"use client";

import { Badge } from "@/components/atoms";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { TestimonialCard } from "@/components/organisms/testimonial-card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Testimonial {
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

const TESTIMONIALS: Testimonial[] = [
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

export default function Testimonials() {
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
          <Badge>Client Testimonials</Badge>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-text-primary max-w-content-max-width-md mx-auto">
            Trusted by Turkish manufacturers <br className="xl:block hidden" />
            <span className="text-text-muted">expanding into Europe</span>
          </h2>
          <p className="text-text-tertiary max-w-content-max-width-xs mx-auto text-center">
            Real stories from manufacturers who successfully entered European
            markets.
          </p>
        </motion.div>
        <div className="w-full bg-bg-gray-lighter rounded-section p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "h-full",
                  testimonial.layout === "large" && "md:col-span-2 md:row-span-2",
                  testimonial.layout === "medium" && "md:col-span-2"
                )}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  metric={testimonial.metric}
                  layout={testimonial.layout}
                  quoteSize={testimonial.quoteSize}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
