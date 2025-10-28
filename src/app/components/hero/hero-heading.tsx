import { Sparkles, Zap } from "lucide-react";

export default function HeroHeading() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-text-primary font-bold xl:text-5xl md:text-4xl text-3xl tracking-tighter xl:leading-[72px] text-center">
        Where Trade Meets <br className="md:block hidden" /> Opportunity{" "}
        <br className="sm:hidden block" />
        <span className="inline-flex -space-x-3 mr-1 sm:mt-0 mt-1.5">
          <span className="bg-bg-sky-light size-11 flex items-center justify-center rounded-xl rotate-[9deg]" aria-hidden="true">
            <Sparkles size={20} className="text-brand-sky fill-brand-sky" />
          </span>
          <span className="bg-bg-coral-light size-11 flex items-center justify-center rounded-xl rotate-[-8deg] shadow-avatar-ring" aria-hidden="true">
            <Zap size={20} className="text-brand-coral fill-brand-coral" />
          </span>
        </span>{" "}
      </h1>
      <p className="max-w-[500px] mx-auto text-text-secondary text-center text-sm">
        Expand Your Business in Europe — Confidently. Lead your business to
        global connections.
      </p>
    </div>
  );
}
