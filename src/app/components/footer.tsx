import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  AtSign,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LShape from "./LShape";
import LShapeReverse from "./LShapeReverse";

export default function Footer() {
  return (
    <div className="px-8 ">
      <div className="bg-bg-dark rounded-[48px]">
        <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:pt-24 md:pt-14 pt-10 pb-10 font-jakarta">
          <div className="xl:gap-20 md:gap-16 gap-12 flex flex-col items-center">
            <div className="flex flex-col items-center xl:gap-5 gap-4">
              <div className="p-1.5 relative max-w-max">
                <div className="absolute top-0 right-0 rotate-270">
                  <LShapeReverse />
                </div>
                <div className="absolute bottom-0 left-0">
                  <LShape />
                </div>
                <div className="px-2">
                  <p className="text-xs text-white font-medium">Book a call</p>
                </div>
              </div>
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-white max-w-[550px] mx-auto">
                Join 1500+ professionals
                <br className="xl:block hidden" />
                elevating their brand
              </h2>
              <p className="text-white/60 max-w-[350px] mx-auto text-center">
                Schedule a free discovery call with us to talk strategy, goals,
                and how we can help you grow.
              </p>
              <button className="bg-white border border-border-light rounded-full p-1.5 flex items-center gap-2 max-w-max">
                <span className="px-2 py-1 text-sm font-medium text-text-secondary">
                  Book a call
                </span>
                <div className="size-7 rounded-full bg-bg-gray-light flex items-center justify-center">
                  <ArrowUpRight className="text-text-primary" size={16} />
                </div>
              </button>
              <div className="flex items-center gap-3">
                <div
                  className="size-1.5 bg-green-500 shadow-[0_0_0_2px_rgb(34_197_94/0.25)] rounded-full animate-pulse-strong"
                  role="status"
                  aria-label="Available"
                />
                <span className="text-white/60 text-xs">
                  Slots are available during October
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
              <div className="h-[156px] flex items-center justify-center pointer-events-none select-none">
                <h1
                  className="lg:text-[16rem] md:text-[12rem] sm:text-9xl text-8xl font-bold text-white/80 opacity-20 text-center"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 85%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 85%)",
                  }}
                >
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
                    Strategic web design, and campaigns tailored to drive result
                    and conversions.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-sm font-medium text-white">Socials</h3>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      Facebook
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      Instagram
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
                    >
                      Linked in
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-2.5 lg:max-w-max max-w-[450px]">
                  <p>Newsletter</p>
                  <div className="flex flex-col gap-6">
                    <p className="text-white/60 text-sm max-w-[260px]">
                      Stay ahead with design & marketing tips and strategies
                      that drive results.
                    </p>
                    <div className="rounded-full p-2 flex items-center gap-2 border border-text-secondary bg-[#25272c] transition-colors focus-within:border-brand-coral">
                      <div className="flex items-center gap-2 flex-1 pl-3">
                        <AtSign size={20} className="text-[#999999]" />
                        <input
                          type="email"
                          placeholder="Enter your email..."
                          className="bg-transparent text-white text-sm outline-none flex-1 placeholder:text-[#999999] caret-white"
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
                  <Link
                    href="#"
                    className="text-white/60 text-xs hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className="text-white/60 text-xs hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
