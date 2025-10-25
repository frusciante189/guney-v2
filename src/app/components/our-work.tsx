import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import LShape from "./LShape";
import LShapeReverse from "./LShapeReverse";

export default function OurWork() {
  return (
    <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:py-24 md:py-14 py-10 font-jakarta">
      <div className="xl:gap-16 md:gap-14 gap-10 flex flex-col">
        <div className="flex flex-col xl:gap-5 gap-4">
          <div className="p-1.5 relative max-w-max">
            <div className="absolute top-0 right-0 rotate-270">
              <LShapeReverse />
            </div>
            <div className="absolute bottom-0 left-0">
              <LShape />
            </div>
            <div className="px-2">
              <p className="text-xs text-text-primary font-medium">
                Our work
              </p>
            </div>
          </div>
          <div className="flex md:items-end justify-between md:flex-row flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-[700px]">
                How we&apos;ve helped other businesses.
              </h2>
              <p className="max-w-[450px] text-text-tertiary">
                See how we&apos;ve helped clients turn ambitious ideas into
                impactful digital products.
              </p>
            </div>
            <button className="bg-white border border-border-light rounded-full p-1.5 flex items-center gap-2 max-w-max">
              <span className="px-2 py-1 text-sm font-medium text-text-secondary">
                View all projects
              </span>
              <div className="size-7 rounded-full bg-bg-gray-light flex items-center justify-center">
                <ArrowUpRight className="text-text-primary" size={16} />
              </div>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="border border-border-gray bg-white rounded-4xl p-3.5 flex flex-col gap-3">
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-3xl">
              <Image
                src="/w1.avif"
                alt="Nova Threads Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="flex gap-3 items-start">
                <h6 className="text-text-primary xl:text-xl text-lg font-medium flex-1">
                  Nova Threads
                </h6>
                <div className="size-10 rounded-full bg-bg-gray-light flex items-center justify-center shrink-0">
                  <ArrowUpRight className="text-text-primary" size={16} />
                </div>
              </div>
              <div className="flex gap-3">
                <p className="text-text-tertiary text-xs font-medium">
                  Crypto
                </p>
                <p className="text-text-tertiary text-xs font-medium">
                  Web app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
