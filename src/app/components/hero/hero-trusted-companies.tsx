"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { HeroTrustedCompaniesProps } from "./types";

const DEFAULT_LOGOS = [
  { src: "/logos/l1.svg", alt: "Company logo 1" },
  { src: "/logos/l2.svg", alt: "Company logo 2" },
  { src: "/logos/l3.svg", alt: "Company logo 3" },
  { src: "/logos/l4.svg", alt: "Company logo 4" },
  { src: "/logos/l5.svg", alt: "Company logo 5" },
  { src: "/logos/l6.svg", alt: "Company logo 6" },
];

export default function HeroTrustedCompanies({
  title = "TRUSTED BY TOP COMPANIES",
  logos = DEFAULT_LOGOS,
  animationDuration = 20,
}: HeroTrustedCompaniesProps = {}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="md:gap-6 gap-5 flex flex-col items-center justify-center" aria-label="Trusted companies">
      <p className="uppercase text-text-muted text-xs font-medium">
        {title}
      </p>
      <div
        className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-white after:to-transparent after:content-['']"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8 w-max"
          animate={isPaused ? {} : { x: ["-50%", "0%"] }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-8 items-center">
              {logos.map((logo, index) => (
                <Image
                  key={`${arrayIndex}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
