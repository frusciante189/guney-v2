import { Phone } from "lucide-react";
import LShape from "./LShape";
import LShapeReverse from "./LShapeReverse";

export default function Pricing() {
  return (
    <div className="px-8 ">
      <div className="bg-bg-dark rounded-[48px]">
        <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:py-24 md:py-14 py-10 font-jakarta">
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
                  <p className="text-xs text-white font-medium">Pricing</p>
                </div>
              </div>
              <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-center text-white max-w-[550px] mx-auto">
                Flexible Pricing built to
                <br className="xl:block hidden" />
                <span className="text-white/60">Scale Businesses</span>
              </h2>
              <p className="text-white/60 max-w-[350px] mx-auto text-center">
                Choose from tailored packages that fits your business goals and
                timeline.
              </p>
            </div>

            <div
              className="p-8 md:p-10 xl:p-12 pt-0! flex flex-col items-center gap-8 max-w-2xl mx-auto"
              style={{
                boxShadow:
                  "0 2px 6px -4px #00000014, 0 3.02329px 1.51164px -0.625px #00000003, 0 7.16573px 3.58286px -1.25px #00000003, 0 13.071px 6.53551px -1.875px #00000003, 0 21.7306px 10.8653px -2.5px #00000003, 0 35.0931px 17.5465px -3.125px #00000003, 0 57.4439px 28.7219px -3.75px #00000003, 0 98.9145px 49.4572px -4.375px #00000000, 0 180px 90px -5px #00000000",
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-6xl md:text-7xl font-bold text-brand-coral">
                  €250
                </h3>
                <p className="text-white/60 text-sm">
                  One-time consultation fee
                </p>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="size-6 rounded-full bg-brand-coral flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-base text-white font-medium">
                    60 minutes consultation session
                  </span>
                </div>
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="size-6 rounded-full bg-brand-coral flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-base text-white font-medium">
                    Secure payment at booking
                  </span>
                </div>
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="size-6 rounded-full bg-brand-coral flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-base text-white font-medium">
                    No hidden fees
                  </span>
                </div>
                <div className="flex items-start gap-3 px-4 py-3">
                  <div className="size-6 rounded-full bg-brand-coral flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-base text-white font-medium">
                    Personalized action plan included
                  </span>
                </div>
              </div>

              <button
                className="p-3 bg-brand-coral rounded-full flex items-center hover:bg-opacity-90 transition-all mt-6"
                aria-label="Book a consultation call"
                type="button"
              >
                <div
                  className="size-8 bg-white/20 flex items-center justify-center rounded-full"
                  aria-hidden="true"
                >
                  <Phone size={16} className="text-white" />
                </div>
                <div className="py-1.5 px-4">
                  <span className="text-white text-base font-medium">
                    Book Now
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
