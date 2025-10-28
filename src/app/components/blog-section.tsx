"use client";

import { Badge } from "@/components/atoms";
import { SectionContainer, SectionContent } from "./ui/section-container";
import { BlogCard } from "./ui/blog-card";
import { motion } from "motion/react";

interface BlogPost {
  id: string;
  image: string;
  author: string;
  readTime: string;
  title: string;
  tags: string[];
  date: string;
  featured?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
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

export default function BlogSection() {
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
          <Badge>Blog</Badge>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-content-max-width-lg">
            Latest insights and guides
          </h2>
          <p className="text-text-tertiary max-w-content-max-width-xs">
            Practical articles on business growth, international expansion, and market strategies.
          </p>
        </motion.div>
        <motion.div
          className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {BLOG_POSTS.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              author={post.author}
              readTime={post.readTime}
              title={post.title}
              tags={post.tags}
              date={post.date}
              featured={post.featured}
            />
          ))}
        </motion.div>
      </SectionContent>
    </SectionContainer>
  );
}
