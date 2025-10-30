import { Sparkles, Zap } from "lucide-react";
import { IconBadge } from "@/components/atoms";

export default function HeroHeading() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-text-primary font-bold xl:text-5xl md:text-4xl text-3xl tracking-tighter xl:leading-[72px] text-center">
        Where Trade Meets <br className="md:block hidden" /> Opportunity{" "}
        <br className="sm:hidden block" />
        <span className="inline-flex -space-x-3 mr-1 sm:mt-0 mt-1.5">
          <IconBadge icon={Sparkles} color="sky" rotation={9} />
          <IconBadge icon={Zap} color="coral" rotation={-8} showShadow />
        </span>{" "}
      </h1>
      <p className="max-w-[500px] mx-auto text-text-secondary text-center text-sm">
        Expand Your Business in Europe — Confidently. Lead your business to
        global connections.
      </p>
    </div>
  );
}
