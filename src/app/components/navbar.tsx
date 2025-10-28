"use client";

import { Asterisk, Menu, X, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/atoms";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="py-4 px-8 flex justify-center items-center sticky top-0 z-50">
      {/* Desktop Navbar */}
      <motion.nav
        className="bg-bg-newsletter rounded-full md:flex items-center gap-8 p-2 hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
            <Asterisk size={24} color="black" />
          </div>
          <p className="text-lg font-bold text-white">
            Gune<span className="text-brand-coral">y</span>
          </p>
        </Link>
        <div className="flex items-center">
          <Link
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "services")}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            onClick={(e) => handleSmoothScroll(e, "work")}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="#process"
            onClick={(e) => handleSmoothScroll(e, "process")}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Process
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "pricing")}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            onClick={(e) => handleSmoothScroll(e, "faq")}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="#blog"
            onClick={(e) => handleSmoothScroll(e, "blog")}
            className="text-white/80 text-sm font-medium p-2 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </div>
        <Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
          <span className="px-2 py-1">Book a Call</span>
        </Button>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className="bg-bg-newsletter rounded-full flex md:hidden items-center justify-between w-full max-w-md p-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "home")}
          className="flex items-center gap-1"
        >
          <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
            <Asterisk size={24} color="black" />
          </div>
          <p className="text-lg font-bold text-white">
            Gune<span className="text-brand-coral">y</span>
          </p>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 mx-8 bg-bg-newsletter rounded-3xl p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="text-white/80 text-base font-medium py-3 px-4 hover:bg-white/10 rounded-xl transition-colors"
              >
                Services
              </Link>
              <Link
                href="#work"
                onClick={(e) => handleSmoothScroll(e, "work")}
                className="text-white/80 text-base font-medium py-3 px-4 hover:bg-white/10 rounded-xl transition-colors"
              >
                Work
              </Link>
              <Link
                href="#process"
                onClick={(e) => handleSmoothScroll(e, "process")}
                className="text-white/80 text-base font-medium py-3 px-4 hover:bg-white/10 rounded-xl transition-colors"
              >
                Process
              </Link>
              <Link
                href="#pricing"
                onClick={(e) => handleSmoothScroll(e, "pricing")}
                className="text-white/80 text-base font-medium py-3 px-4 hover:bg-white/10 rounded-xl transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="text-white/80 text-base font-medium py-3 px-4 hover:bg-white/10 rounded-xl transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#blog"
                onClick={(e) => handleSmoothScroll(e, "blog")}
                className="text-white/80 text-base font-medium py-3 px-4 hover:bg-white/10 rounded-xl transition-colors"
              >
                Blog
              </Link>
              <div className="pt-4 border-t border-white/10">
                <Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
                  <span className="px-2 py-1">Book a Call</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
