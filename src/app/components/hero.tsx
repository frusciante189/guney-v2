import {
  ArrowUpRight,
  Phone,
  Sparkle,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:pt-40 xl:pb-20 pt-28 md:pb-14 pb-10">
      <div className="flex flex-col xl:gap-20 gap-16">
        <div className="flex flex-col xl:gap-14 md:gap-11 gap-10">
          <div className="flex flex-col md:gap-9 gap-8">
            <div className="max-w-3xl mx-auto md:gap-6 gap-5 flex flex-col">
              <div className="bg-white border border-[#e5eaf0] rounded-full pl-3 py-1 pr-1 flex items-center">
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
              <h1 className="text-[#0f1115] font-bold text-5xl tracking-tighter leading-[72px] text-center">
                Where Trade Meets <br /> Opportunity{" "}
                <div className="inline-flex -space-x-3 mr-1">
                  <div className="bg-[#e0f5ff] size-11 flex items-center justify-center rounded-xl rotate-[9deg]">
                    <Sparkles size={20} color="#01aaff" fill="#01aaff" />
                  </div>
                  <div className="bg-[#ffefee] size-11 flex items-center justify-center rounded-xl rotate-[-8deg] shadow-[0_0_0_3px_rgb(255_255_255/1)]">
                    <Zap size={20} color="#ff5247" fill="#ff5247" />
                  </div>
                </div>{" "}
              </h1>
              <p className="max-w-[500px] mx-auto text-[#323745] text-center">
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
          <div>a</div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Hero;
