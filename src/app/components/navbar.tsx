"use client";

import { Asterisk } from "lucide-react";
import React from "react";
import { BookCallButton } from "./ui/book-call-button";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="py-4 px-8 flex justify-center items-cente sticky top-0 z-50">
      <motion.nav
        className="bg-bg-newsletter rounded-full flex items-center gap-8 p-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="#home"
          onClick={(e) => handleSmoothScroll(e, 'home')}
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
            <Asterisk size={24} color="black" />
          </div>
          <p className="text-lg font-bold">
            Gune<span className="text-brand-coral">y</span>
          </p>
        </Link>
        <div className="flex items-center">
          <Link
            href="#services"
            onClick={(e) => handleSmoothScroll(e, 'services')}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            onClick={(e) => handleSmoothScroll(e, 'work')}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="#process"
            onClick={(e) => handleSmoothScroll(e, 'process')}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Process
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, 'pricing')}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, 'faq')}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="#blog"
            onClick={(e) => handleSmoothScroll(e, 'blog')}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </div>
        <BookCallButton />
      </motion.nav>
    </header>
  );
};

export default Navbar;
