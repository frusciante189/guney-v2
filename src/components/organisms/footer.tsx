"use client";

import { Asterisk, ArrowUpRight } from "lucide-react";
import { Button, Badge, StatusIndicator } from "@/components/atoms";
import { FooterLink } from "@/components/atoms/footer-link";
import { EmailInput } from "@/components/molecules";
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
              <Badge variant="dark">Book a call</Badge>
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-white max-w-content-max-width-md mx-auto">
                Ready to enter
                <br className="xl:block hidden" />
                European markets?
              </h2>
              <p className="text-white/60 max-w-content-max-width-xs mx-auto text-center">
                Let&apos;s discuss your expansion goals and create a clear
                roadmap for entering Europe.
              </p>
              <Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
                <span className="px-2 py-1">Book a Call</span>
              </Button>
              <div className="flex items-center gap-3">
                <StatusIndicator />
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
                    <p className="text-lg font-bold text-white">
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
                    <EmailInput />
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
