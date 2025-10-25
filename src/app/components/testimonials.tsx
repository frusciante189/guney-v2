import { Crown } from "lucide-react";
import Image from "next/image";
import LShape from "./LShape";
import LShapeReverse from "./LShapeReverse";

export default function Testimonials() {
  return (
    <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:pb-24 md:pb-14 pb-10 font-jakarta">
      <div className="xl:gap-16 md:gap-14 gap-10 flex flex-col items-center">
        <div className="flex flex-col items-center xl:gap-5 gap-4">
          <div className="p-1.5 relative max-w-max">
            <div className="absolute top-0 right-0 rotate-270">
              <LShapeReverse />
            </div>
            <div className="absolute bottom-0 left-0">
              <LShape />
            </div>
            <div className="px-2">
              <p className="text-xs text-text-primary font-medium">
                Testimonials
              </p>
            </div>
          </div>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-text-primary max-w-[550px] mx-auto">
            Results that speaks volume <br className="xl:block hidden" />
            <span className="text-text-muted">Read success stories</span>
          </h2>
          <p className="text-text-tertiary max-w-[350px] mx-auto text-center">
            Find out how our happy clients are raving about us.
          </p>
        </div>
        <div className="w-full bg-bg-gray-lighter rounded-[48px] p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Card 1 - Sol yarı, büyük kart */}
            <div
              className="bg-white rounded-4xl p-8 flex flex-col justify-between gap-8 md:col-span-2 md:row-span-2"
              style={{
                boxShadow:
                  "0 2px 6px -4px #2c2d3014, 0 3.02329px 1.51164px -0.625px #2c2d3003, 0 7.16573px 3.58286px -1.25px #2c2d3003, 0 13.071px 6.53551px -1.875px #2c2d3003, 0 21.7306px 10.8653px -2.5px #2c2d3003, 0 35.0931px 17.5465px -3.125px #2c2d3003, 0 57.4439px 28.7219px -3.75px #2c2d3003, 0 98.9145px 49.4572px -4.375px #2c2d3000, 0 180px 90px -5px #2c2d3000",
              }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[40px] leading-12 text-text-primary font-bold">
                    8X
                  </h2>
                  <p className="font-bold text-text-tertiary text-xl">
                    Increase in conversion rate
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
                    className="size-5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                    <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                    <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                  </svg>
                  <p className="text-text-tertiary">
                    &quot;We needed a modern, high-converting website, and the
                    Bravio team delivered beyond expectations. Their design and
                    SEO expertise helped us increase conversion rate by 800% in
                    just two weeks. Highly recommend!&quot;
                  </p>
                </div>
              </div>

              {/* Bottom section */}
              <div className="flex items-end gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <Image
                    src="/w1.avif"
                    alt="David Callahan"
                    width={48}
                    height={48}
                    className="rounded-full size-12 object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-text-primary font-medium">
                      David Callahan
                    </p>
                    <p className="text-text-tertiary text-xs">
                      Marketing Director, Spotify
                    </p>
                  </div>
                </div>
                <div>
                  <Crown size={24} className="text-text-tertiary" />
                </div>
              </div>
            </div>

            {/* Card 2 - Sağ üst, tam genişlik */}
            <div
              className="bg-white rounded-4xl p-8 flex flex-col justify-between gap-8 md:col-span-2 md:min-h-[290px]"
              style={{
                boxShadow:
                  "0 2px 6px -4px #2c2d3014, 0 3.02329px 1.51164px -0.625px #2c2d3003, 0 7.16573px 3.58286px -1.25px #2c2d3003, 0 13.071px 6.53551px -1.875px #2c2d3003, 0 21.7306px 10.8653px -2.5px #2c2d3003, 0 35.0931px 17.5465px -3.125px #2c2d3003, 0 57.4439px 28.7219px -3.75px #2c2d3003, 0 98.9145px 49.4572px -4.375px #2c2d3000, 0 180px 90px -5px #2c2d3000",
              }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[40px] leading-12 text-text-primary font-bold">
                    2X
                  </h2>
                  <p className="font-bold text-text-tertiary text-xl">
                    Increase in lead generation
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
                    className="size-5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                    <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                    <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                  </svg>
                  <p className="text-text-tertiary text-sm leading-5">
                    &quot;From branding to website design, every detail was
                    meticulously handled. The team&apos;s expertise helped us
                    launch faster, and the results have been phenomenal!&quot;
                  </p>
                </div>
              </div>

              {/* Bottom section */}
              <div className="flex items-end gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <Image
                    src="/w1.avif"
                    alt="Sarah Mitchel"
                    width={48}
                    height={48}
                    className="rounded-full size-12 object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-text-primary font-medium">
                      Sarah Mitchel
                    </p>
                    <p className="text-text-tertiary text-xs">
                      Marketing Director, Google
                    </p>
                  </div>
                </div>
                <div>
                  <Crown size={24} className="text-text-tertiary" />
                </div>
              </div>
            </div>

            {/* Card 3 - Sağ alt sol */}
            <div
              className="bg-white rounded-4xl p-8 flex flex-col justify-between gap-8 min-h-[290px]"
              style={{
                boxShadow:
                  "0 2px 6px -4px #2c2d3014, 0 3.02329px 1.51164px -0.625px #2c2d3003, 0 7.16573px 3.58286px -1.25px #2c2d3003, 0 13.071px 6.53551px -1.875px #2c2d3003, 0 21.7306px 10.8653px -2.5px #2c2d3003, 0 35.0931px 17.5465px -3.125px #2c2d3003, 0 57.4439px 28.7219px -3.75px #2c2d3003, 0 98.9145px 49.4572px -4.375px #2c2d3000, 0 180px 90px -5px #2c2d3000",
              }}
            >
              <div className="flex flex-col gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
                  className="size-5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                  <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                  <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                </svg>
                <p className="text-text-tertiary text-sm leading-5">
                  &quot;Their animation work took our product videos to the next
                  level. The team truly understands user experience and
                  storytelling.&quot;
                </p>
              </div>

              {/* Bottom section */}
              <div className="flex items-center gap-3">
                <Image
                  src="/w1.avif"
                  alt="Tom Becker"
                  width={48}
                  height={48}
                  className="rounded-full size-12 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-text-primary font-medium">Tom Becker</p>
                  <p className="text-text-tertiary text-xs">
                    Founder, PulseCore
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Sağ alt sağ */}
            <div
              className="bg-white rounded-4xl p-8 flex flex-col justify-between gap-8 min-h-[290px]"
              style={{
                boxShadow:
                  "0 2px 6px -4px #2c2d3014, 0 3.02329px 1.51164px -0.625px #2c2d3003, 0 7.16573px 3.58286px -1.25px #2c2d3003, 0 13.071px 6.53551px -1.875px #2c2d3003, 0 21.7306px 10.8653px -2.5px #2c2d3003, 0 35.0931px 17.5465px -3.125px #2c2d3003, 0 57.4439px 28.7219px -3.75px #2c2d3003, 0 98.9145px 49.4572px -4.375px #2c2d3000, 0 180px 90px -5px #2c2d3000",
              }}
            >
              <div className="flex flex-col gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="var(--token-72f1587e-8bbc-424b-bdb9-13d999bb0e54, rgb(255, 81, 71))"
                  className="size-5"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
                  <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                  <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
                </svg>
                <p className="text-text-tertiary text-sm leading-5">
                  &quot;We needed a modern, high-converting website, and Bravio
                  delivered. Their expertise helped us increase conversion rate
                  by 400% in just a week!&quot;
                </p>
              </div>

              {/* Bottom section */}
              <div className="flex items-center gap-3">
                <Image
                  src="/w1.avif"
                  alt="Danielle Reyes"
                  width={48}
                  height={48}
                  className="rounded-full size-12 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-text-primary font-medium">
                    Danielle Reyes
                  </p>
                  <p className="text-text-tertiary text-xs">
                    Founder, Ember & Co
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
