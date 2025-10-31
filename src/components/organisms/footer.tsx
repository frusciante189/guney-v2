"use client";

import { Badge, StatusIndicator } from "@/components/atoms";
import { FooterLink } from "@/components/atoms/footer-link";
import { EmailInput, Logo, BookCallButton } from "@/components/molecules";
import { SectionContainer } from "@/components/organisms/section-container";
import { motion } from "motion/react";
import { FOOTER_COMPANY_LINKS, FOOTER_SOCIAL_LINKS, FOOTER_LEGAL_LINKS } from "@/constants/navigation";
import { FADE_IN_UP } from "@/constants/animations";

export const Footer = () => {
  return (
    <SectionContainer id="contact" variant="dark" className="pb-10!">
          <div className="xl:gap-20 md:gap-16 gap-12 flex flex-col items-center">
            <motion.div
              className="flex flex-col items-center xl:gap-5 gap-4"
              {...FADE_IN_UP}
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
              <BookCallButton className="p-1.5 gap-2 max-w-max" />
              <div className="flex items-center gap-3">
                <StatusIndicator />
                <span className="text-white/60 text-xs">
                  Slots are available during October
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col gap-5 w-full">
              <div className="h-[156px] flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
                <p className="lg:text-[16rem] md:text-[12rem] sm:text-9xl text-8xl font-bold text-white/80 opacity-20 text-center mask-fade-vertical">
                  Gune<span className="text-brand-coral">y</span>
                </p>
              </div>
              <div className="grid lg:grid-cols-6 grid-cols-4 lg:gap-20 gap-12 mt-5">
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-2.5">
                  <Logo />
                  <p className="text-white/60 text-sm max-w-[250px]">
                    Helping Turkish manufacturers expand into European markets
                    with confidence.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <div className="flex flex-col gap-4">
                    {FOOTER_COMPANY_LINKS.map((link) => (
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
                    {FOOTER_SOCIAL_LINKS.map((link) => (
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
                  {FOOTER_LEGAL_LINKS.map((link) => (
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
    </SectionContainer>
  );
}
