"use client";

import {
  ArrowUpRight,
  Phone,
  Play,
  Sparkle,
  Sparkles,
  Star,
  WandSparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  const logos = [
    "/logos/l1.svg",
    "/logos/l2.svg",
    "/logos/l3.svg",
    "/logos/l4.svg",
    "/logos/l5.svg",
    "/logos/l6.svg",
  ];

  return (
    <div className="max-w-[1000px] mx-auto md:px-8 px-5 xl:pt-40 xl:pb-20 pt-28 md:pb-14 pb-10">
      <div className="flex flex-col xl:gap-20 gap-16">
        <div className="flex flex-col xl:gap-14 md:gap-11 gap-10">
          <div className="flex flex-col md:gap-9 gap-8">
            <div className="max-w-3xl mx-auto md:gap-6 gap-5 flex flex-col items-center">
              <div className="bg-white border border-[#e5eaf0] rounded-full pl-3 py-1 pr-1 flex items-center max-w-max">
                <div className="size-1.5 bg-green-500 shadow-[0_0_0_2px_rgb(34_197_94/0.25)] rounded-full animate-pulse-strong" />
                <p className="text-[#0f1115] text-xs py-1 pl-2.5 pr-3">
                  Slots are available for October
                </p>
                <hr className="w-px h-3 bg-[#e2e7ee] sm:block hidden" />
                <div className="sm:pl-3 py-0.5 pr-0.5 flex items-center gap-2">
                  <p className="text-[#0f1115] text-xs sm:block hidden">
                    Upcoming event: Munich 2026
                  </p>
                  <button className="bg-[#f3f5f6] cursor-pointer transition-colors size-6 rounded-full flex items-center justify-center">
                    <ArrowUpRight color="#323745" size={12} />
                  </button>
                </div>
              </div>
              <h1 className="text-[#0f1115] font-bold xl:text-5xl md:text-4xl text-3xl tracking-tighter xl:leading-[72px] text-center">
                Where Trade Meets <br className="md:block hidden" /> Opportunity{" "}
                <br className="sm:hidden block" />
                <div className="inline-flex -space-x-3 mr-1 sm:mt-0 mt-1.5">
                  <div className="bg-[#e0f5ff] size-11 flex items-center justify-center rounded-xl rotate-[9deg]">
                    <Sparkles size={20} color="#01aaff" fill="#01aaff" />
                  </div>
                  <div className="bg-[#ffefee] size-11 flex items-center justify-center rounded-xl rotate-[-8deg] shadow-[0_0_0_3px_rgb(255_255_255/1)]">
                    <Zap size={20} color="#ff5247" fill="#ff5247" />
                  </div>
                </div>{" "}
              </h1>
              <p className="max-w-[500px] mx-auto text-[#323745] text-center text-sm">
                Expand Your Business in Europe — Confidently. Lead your business
                to global connections.
              </p>
            </div>
            <div className="mx-auto">
              <button className="p-2.5 bg-[#151619] rounded-full flex items-center">
                <div className="size-7 bg-white/13 flex items-center justify-center rounded-full">
                  <Phone size={14} />
                </div>
                <div className="py-1 px-3">
                  <p className="text-white text-sm">Book a call</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <div className="flex items-center -space-x-2">
              <Image
                src="/p1.avif"
                width={36}
                height={36}
                className="size-9 rounded-full shadow-[0_0_0_3px_rgb(255_255_255/1)] object-cover"
                alt="Reviewer 1"
              />
              <Image
                src="/p2.avif"
                width={36}
                height={36}
                className="size-9 rounded-full shadow-[0_0_0_3px_rgb(255_255_255/1)] object-cover"
                alt="Reviewer 2"
              />
              <Image
                src="/p3.avif"
                width={36}
                height={36}
                className="size-9 rounded-full shadow-[0_0_0_3px_rgb(255_255_255/1)] object-cover"
                alt="Reviewer 3"
              />
              <div className="size-9 flex items-center justify-center font-medium text-[#0f1115] outline outline-[#e5eaf0] shadow-[0_0_0_3px_rgb(255_255_255/1)] rounded-full bg-[#f9fafb] text-xs">
                +2K
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-0.5">
                <Star size={14} color="#323745" fill="#323745" />
                <Star size={14} color="#323745" fill="#323745" />
                <Star size={14} color="#323745" fill="#323745" />
                <Star size={14} color="#323745" fill="#323745" />
                <Star size={14} color="#323745" fill="#323745" />
              </div>
              <span className="text-[#50576b] text-xs font-medium">
                From 1.5K reviews
              </span>
            </div>
          </div>
        </div>
        <div className="p-3 border border-[#e5eaf0] sm:w-[526px] sm:h-[351px] rounded-4xl mx-auto relative">
          <Image
            src="/guney-pp.jpg"
            width={526}
            height={352}
            alt="Guney"
            className="object-cover rounded-4xl size-full"
          />
          <div className="size-12 inline-flex rounded-2xl items-center justify-center bg-[#ff5247] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:opacity-90 cursor-pointer">
            <Play size={20} color="white" fill="white" />
          </div>
        </div>
        <div className="md:gap-6 gap-5 flex flex-col items-center justify-center">
          <h1 className="uppercase text-[#697289] text-xs font-medium">
            TRUSTED BY TOP COMPANIES
          </h1>
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-white after:to-transparent after:content-['']">
            <motion.div
              className="flex gap-8 w-max"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex gap-8 items-center">
                  {logos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
