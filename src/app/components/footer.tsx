"use client";

import { ArrowRight, Asterisk, AtSign } from "lucide-react";
import { SectionBadge } from "./ui/section-badge";
import { BookCallButton } from "./ui/book-call-button";
import { FooterLink } from "./ui/footer-link";
import { motion } from "motion/react";

interface FooterLinkItem {
  href: string;
  text: string;
}

const COMPANY_LINKS: FooterLinkItem[] = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Contact Us" },
  { href: "#", text: "Case Studies" },
];

const SOCIAL_LINKS: FooterLinkItem[] = [
  { href: "#", text: "Facebook" },
  { href: "#", text: "Instagram" },
  { href: "#", text: "Linked in" },
];

const LEGAL_LINKS: FooterLinkItem[] = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms of Service" },
];

export default function Footer() {
  return (
    <div className="px-8 ">
      <div className="bg-bg-dark rounded-section">
        <div className="container-app md:px-8 px-5 xl:pt-24 md:pt-14 pt-10 pb-10 font-jakarta">
          <div className="xl:gap-20 md:gap-16 gap-12 flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center xl:gap-5 gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBadge variant="dark">Book a call</SectionBadge>
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-white max-w-content-max-width-md mx-auto">
                Ready to enter
                <br className="xl:block hidden" />
                European markets?
              </h2>
              <p className="text-white/60 max-w-content-max-width-xs mx-auto text-center">
                Let's discuss your expansion goals and create a clear roadmap
                for entering Europe.
              </p>
              <BookCallButton />
              <div className="flex items-center gap-3">
                <div
                  className="size-1.5 bg-status-success shadow-status-pulse rounded-full animate-pulse-strong"
                  role="status"
                  aria-label="Available"
                />
                <span className="text-white/60 text-xs">
                  Slots are available during October
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col gap-5 w-full">
              <div className="h-[156px] flex items-center justify-center pointer-events-none select-none">
                <h1 className="lg:text-[16rem] md:text-[12rem] sm:text-9xl text-8xl font-bold text-white/80 opacity-20 text-center mask-fade-vertical">
                  Gune<span className="text-brand-coral">y</span>
                </h1>
              </div>
              <div className="grid lg:grid-cols-6 grid-cols-4 lg:gap-20 gap-12 mt-5">
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-1">
                    <div className="size-[30px] rounded-full bg-white flex items-center justify-center">
                      <Asterisk size={24} color="black" />
                    </div>
                    <p className="text-lg font-bold">
                      Gune<span className="text-brand-coral">y</span>
                    </p>
                  </div>
                  <p className="text-white/60 text-sm max-w-[250px]">
                    Helping Turkish manufacturers expand into European markets
                    with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <div className="flex flex-col gap-4">
                    {COMPANY_LINKS.map((link) => (
                      <FooterLink
                        key={link.text}
                        href={link.href}
                        text={link.text}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-medium text-white">Socials</h3>
                  <div className="flex flex-col gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <FooterLink
                        key={link.text}
                        href={link.href}
                        text={link.text}
                        external
                      />
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-2.5 lg:max-w-max max-w-content-max-width-sm">
                  <p>Newsletter</p>
                  <div className="flex flex-col gap-6">
                    <p className="text-white/60 text-sm max-w-content-max-width-form">
                      Get insights on European market trends, trade fairs, and
                      expansion strategies.
                    </p>
                    <div className="rounded-full p-2 flex items-center gap-2 border border-text-secondary bg-bg-newsletter transition-colors focus-within:border-brand-coral">
                      <div className="flex items-center gap-2 flex-1 pl-3">
                        <AtSign size={20} className="text-text-placeholder" />
                        <input
                          type="email"
                          placeholder="Enter your email..."
                          className="bg-transparent text-white text-sm outline-none flex-1 placeholder:text-text-placeholder caret-white"
                        />
                      </div>
                      <button className="bg-brand-coral rounded-full px-[22px] py-3 flex items-center justify-center hover:bg-brand-coral/90 transition-colors">
                        <ArrowRight className="text-white" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-white/60 text-xs">© 2025 Guney Cuceloglu</p>
                <div className="flex items-center gap-6">
                  {LEGAL_LINKS.map((link) => (
                    <FooterLink
                      key={link.text}
                      href={link.href}
                      text={link.text}
                      variant="small"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
