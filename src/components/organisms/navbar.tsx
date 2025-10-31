"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Logo, NavLink, BookCallButton } from "@/components/molecules";
import { motion, AnimatePresence } from "motion/react";
import { MAIN_NAV_ITEMS } from "@/constants/navigation";
import { NAVBAR_ENTER, MOBILE_MENU_DROPDOWN } from "@/constants/animations";
import { useSmoothScroll } from "@/hooks";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll(() => setIsMobileMenuOpen(false));

  return (
    <header className="py-4 px-8 flex justify-center items-center sticky top-0 z-50">
      {/* Desktop Navbar */}
      <motion.nav
        className="bg-bg-newsletter rounded-full md:flex items-center gap-8 p-2 hidden"
        {...NAVBAR_ENTER}
      >
        <Logo onClick={(e) => scrollToSection(e, "home")} showHoverEffect />
        <div className="flex items-center">
          {MAIN_NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              href={item.href}
              label={item.label}
              variant="desktop"
              onClick={(e) => scrollToSection(e, item.id)}
            />
          ))}
        </div>
        <BookCallButton className="p-1.5 gap-2 max-w-max" />
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className="bg-bg-newsletter rounded-full flex md:hidden items-center justify-between w-full max-w-md p-2"
        {...NAVBAR_ENTER}
      >
        <Logo onClick={(e) => scrollToSection(e, "home")} />

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 hover:opacity-80 transition-opacity"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            {...MOBILE_MENU_DROPDOWN}
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation menu"
            className="fixed top-20 left-0 right-0 mx-8 bg-bg-newsletter rounded-3xl p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {MAIN_NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.id}
                  href={item.href}
                  label={item.label}
                  variant="mobile"
                  onClick={(e) => scrollToSection(e, item.id)}
                />
              ))}
              <div className="pt-4 border-t border-white/10">
                <BookCallButton className="p-1.5 gap-2 max-w-max" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
