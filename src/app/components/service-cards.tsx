import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr gap-4">
      {/* Find New Clients */}
      <div className="lg:row-span-2 bg-white rounded-4xl p-7 flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
            Find New Clients
          </h3>
          <p className="text-sm text-text-tertiary">
            Targeted outreach in Germany & Europe, warm introductions, meeting
            facilitation.
          </p>
        </div>
        <div className="flex-1 flex items-end justify-center">
          <div
            className="relative max-w-[220px] max-h-[406px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(180deg, #000 65%, transparent 100%)",
              maskImage: "linear-gradient(180deg, #000 65%, transparent 100%)",
            }}
          >
            <Image
              src="/f1.avif"
              alt="Find New Clients"
              width={220}
              height={406}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contracts Sorted */}
      <div className="lg:col-span-2 bg-white rounded-4xl p-7 flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
            Contracts Sorted
          </h3>
          <p className="text-sm text-text-tertiary">
            Drafting & review so terms are clear, compliant, and protect your
            interests.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-4 max-w-[450px]">
          <span className="pl-3 pr-2.5 py-2.5 bg-bg-gray-light rounded-full text-xs leading-4 font-medium text-text-secondary flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="px-2">Sales Agreements</span>
          </span>
          <span className="pl-3 pr-2.5 py-2.5 bg-bg-gray-light rounded-full text-xs leading-4 font-medium text-text-secondary flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
            <span className="px-2">Distribution Terms</span>
          </span>
          <span className="pl-3 pr-2.5 py-2.5 bg-bg-gray-light rounded-full text-xs leading-4 font-medium text-text-secondary flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="px-2">NDAs</span>
          </span>
          <span className="pl-3 pr-2.5 py-2.5 bg-bg-gray-light rounded-full text-xs leading-4 font-medium text-text-secondary flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="px-2">Partnership Deals</span>
          </span>
          <span className="pl-3 pr-2.5 py-2.5 bg-bg-gray-light rounded-full text-xs leading-4 font-medium text-text-secondary flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span className="px-2">Legal Compliance</span>
          </span>
          <span className="pl-3 pr-2.5 py-2.5 bg-bg-gray-light rounded-full text-xs leading-4 font-medium text-text-secondary flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="px-2">Risk Protection</span>
          </span>
        </div>
      </div>

      {/* Secure Payments */}
      <div className="lg:col-span-2 bg-white rounded-4xl p-7 flex justify-between gap-12">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
              Secure Payments
            </h3>
            <p className="text-sm text-text-tertiary">
              Letters of credit, escrow, insured terms — ship with confidence
              and no surprises
            </p>
          </div>
          <button className="bg-white border border-border-light rounded-full p-1.5 flex items-center gap-2 max-w-max">
            <span className="px-2 py-1 text-sm font-medium text-text-secondary">
              Book a Call
            </span>
            <div className="size-7 rounded-full bg-bg-gray-light flex items-center justify-center">
              <ArrowUpRight className="text-text-primary" size={16} />
            </div>
          </button>
        </div>
        <div
          className="flex flex-col w-[264px] border border-border-gray rounded-[18px] px-1.5 pt-1.5 pb-7"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, #000 65%, transparent 100%)",
            maskImage: "linear-gradient(180deg, #000 65%, transparent 100%)",
          }}
        >
          <div className="flex items-center justify-between pr-3.5 pl-3 py-3 bg-bg-gray-lighter rounded-[14px]">
            <span className="text-xs font-medium text-text-primary">
              Letters of Credit
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-brand-coral flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-3.5 py-1.5 mt-1.5">
            <span className="text-xs font-medium text-text-primary">
              Escrow Services
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-brand-coral flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-3.5 py-1.5">
            <span className="text-xs font-medium text-text-primary">
              Payment Insurance
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-brand-coral flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between px-3.5 py-1.5">
            <span className="text-xs font-medium text-text-muted">
              Bank Guarantees
            </span>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-border-gray"></div>
          </div>
          <div className="flex items-center justify-between px-3.5 py-1.5">
            <span className="text-xs font-medium text-text-muted">
              Advance Payment Protection
            </span>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-border-gray"></div>
          </div>
          <div className="flex items-center justify-between px-3.5 py-1.5">
            <span className="text-xs font-medium text-text-muted">
              Currency Risk Management
            </span>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-border-gray"></div>
          </div>
        </div>
      </div>

      {/* Trade Fair Support */}
      <div className="lg:col-span-2 bg-white rounded-4xl p-7 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
            Trade Fair Support
          </h3>
          <p className="text-sm text-text-tertiary">
            From booking to booth and follow-ups — maximize visibility and ROI
            at key fairs.
          </p>
        </div>
        <div
          className="flex flex-col gap-3 border border-border-gray rounded-[18px] p-4"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, #000 65%, transparent 100%)",
            maskImage: "linear-gradient(180deg, #000 65%, transparent 100%)",
          }}
        >
          <div className="flex items-center gap-2 pb-2 border-b border-border-gray">
            <div className="size-8 rounded-full bg-brand-coral flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-text-primary">John Doe</p>
              <p className="text-xs text-text-muted">Fair Organizer</p>
            </div>
            <span className="text-xs text-text-muted">2:30 PM</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-bg-gray-lighter rounded-2xl rounded-tl-none p-3 max-w-[70%]">
              <p className="text-xs text-text-secondary">
                Booth space confirmed for next week&apos;s fair!
              </p>
            </div>
            <div className="bg-brand-coral/10 rounded-2xl rounded-tr-none p-3 ml-auto max-w-[70%]">
              <p className="text-xs text-text-secondary">
                Perfect! Can you send booth specs?
              </p>
            </div>
            <div className="bg-bg-gray-lighter rounded-2xl rounded-tl-none p-3 max-w-[70%]">
              <p className="text-xs text-text-secondary">
                Sending now. Also added parking passes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* On-the-Ground Problem Solving */}
      <div className="relative bg-bg-dark rounded-4xl p-7 flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            backgroundImage: "url(/pattern.png)",
            backgroundRepeat: "repeat",
            backgroundPosition: "center top",
            backgroundSize: "32px auto",
            WebkitMaskImage: "linear-gradient(45deg, #0000 32%, #000 117%)",
            maskImage: "linear-gradient(45deg, #0000 32%, #000 117%)",
          }}
        />
        <div className="relative z-10 flex flex-col gap-5">
          <h3 className="text-xl xl:text-2xl font-bold">
            <span className="text-white">On-the-Ground</span>
            <br />
            <span className="text-white/60">Problem Solving</span>
          </h3>
          <button className="bg-white border border-border-light rounded-full p-1.5 flex items-center gap-2 max-w-max">
            <span className="px-2 py-1 text-sm font-medium text-text-secondary">
              Book a Call
            </span>
            <div className="size-7 rounded-full bg-bg-gray-light flex items-center justify-center">
              <ArrowUpRight className="text-text-primary" size={16} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
