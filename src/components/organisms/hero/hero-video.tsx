import { Play } from "lucide-react";
import Image from "next/image";
import { HeroVideoProps } from "./types";

export default function HeroVideo({
  thumbnailUrl = "/guney-pp.jpg",
  altText = "Guney - Trade Consultant",
  onPlayClick,
}: HeroVideoProps = {}) {
  return (
    <div className="p-3 border border-border-gray sm:w-[526px] sm:h-[351px] rounded-4xl mx-auto relative">
      <Image
        src={thumbnailUrl}
        width={526}
        height={352}
        alt={altText}
        className="object-cover rounded-4xl size-full"
      />
      <button
        onClick={onPlayClick}
        className="size-12 inline-flex rounded-2xl items-center justify-center bg-brand-coral absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:opacity-90 cursor-pointer"
        aria-label="Play introduction video"
        type="button"
      >
        <Play size={20} className="text-white fill-white" aria-hidden="true" />
      </button>
    </div>
  );
}
