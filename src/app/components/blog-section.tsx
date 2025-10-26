import LShapeReverse from "./LShapeReverse";
import LShape from "./LShape";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BlogSection() {
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
                From the Blog
              </p>
            </div>
          </div>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-[700px]">
            Latest news and updates
          </h2>
          <p className="text-text-tertiary max-w-[350px]">
            Stay ahead with strategies that blend design, tech, and marketing
            to drive measurable business results.
          </p>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1   gap-6">
          <div className="flex flex-col gap-5 xl:col-span-2 cursor-pointer">
            <Image
              src={"/b1.avif"}
              width={556}
              height={372}
              alt="Blog"
              className="rounded-[20px] w-full h-auto"
            />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <p className="text-text-tertiary text-xs font-medium">
                    Marcus Silva
                  </p>
                  <div className="size-[3px] bg-[#838b9e] rounded-full" />
                  <p className="text-text-tertiary text-xs font-medium">
                    3 Min Read
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-text-primary font-medium">
                      From Click to Client: Mastering the Customer Journey
                    </p>
                  </div>
                  <ArrowUpRight className="text-text-primary" size={20} />
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 border border-border-gray rounded-full text-[11px] leading-4 text-text-primary">
                    Web Design
                  </button>
                  <button className="px-3 py-1.5 border border-border-gray rounded-full text-[11px] leading-4 text-text-primary">
                    UI/UX
                  </button>
                </div>
                <p className="text-text-muted text-xs font-medium">
                  Jan 25, 2025
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 cursor-pointer">
            <Image
              src={"/b1.avif"}
              width={556}
              height={372}
              alt="Blog"
              className="rounded-[20px] w-full h-auto"
            />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <p className="text-text-tertiary text-xs font-medium">
                    Marcus Silva
                  </p>
                  <div className="size-[3px] bg-[#838b9e] rounded-full" />
                  <p className="text-text-tertiary text-xs font-medium">
                    3 Min Read
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-text-primary font-medium">
                      From Click to Client: Mastering the Customer Journey
                    </p>
                  </div>
                  <ArrowUpRight className="text-text-primary" size={20} />
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 border border-border-gray rounded-full text-[11px] leading-4 text-text-primary">
                    Web Design
                  </button>
                  <button className="px-3 py-1.5 border border-border-gray rounded-full text-[11px] leading-4 text-text-primary">
                    UI/UX
                  </button>
                </div>
                <p className="text-text-muted text-xs font-medium">
                  Jan 25, 2025
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 cursor-pointer">
            <Image
              src={"/b1.avif"}
              width={556}
              height={372}
              alt="Blog"
              className="rounded-[20px] w-full h-auto"
            />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <p className="text-text-tertiary text-xs font-medium">
                    Marcus Silva
                  </p>
                  <div className="size-[3px] bg-[#838b9e] rounded-full" />
                  <p className="text-text-tertiary text-xs font-medium">
                    3 Min Read
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-text-primary font-medium">
                      From Click to Client: Mastering the Customer Journey
                    </p>
                  </div>
                  <ArrowUpRight className="text-text-primary" size={20} />
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 border border-border-gray rounded-full text-[11px] leading-4 text-text-primary">
                    Web Design
                  </button>
                  <button className="px-3 py-1.5 border border-border-gray rounded-full text-[11px] leading-4 text-text-primary">
                    UI/UX
                  </button>
                </div>
                <p className="text-text-muted text-xs font-medium">
                  Jan 25, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
