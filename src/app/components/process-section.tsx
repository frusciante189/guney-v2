import LShapeReverse from "./LShapeReverse";
import LShape from "./LShape";

export default function ProcessSection() {
  return (
    <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:py-24 md:py-14 py-10 font-jakarta">
      <div className="xl:gap-16 lg:gap-14 gap-10 flex lg:flex-row flex-col">
        <div className="flex flex-col xl:gap-5 gap-4 xl:max-w-[450px] max-w-max flex-1">
          <div className="p-1.5 relative max-w-max">
            <div className="absolute top-0 right-0 rotate-270">
              <LShapeReverse />
            </div>
            <div className="absolute bottom-0 left-0">
              <LShape />
            </div>
            <div className="px-2">
              <p className="text-xs text-text-primary font-medium">
                Our process
              </p>
            </div>
          </div>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-[700px]">
            A proven & effective
            <br />
            <span className="text-text-muted">workflow process.</span>
          </h2>
          <p className="max-w-[350px] text-text-tertiary">
            We dig deep into your goals, customers, and challenges to align on
            strategy and direction.
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3">
            <div className="pt-6 flex flex-col relative">
              <div className="size-10 text-sm font-medium text-text-primary border border-[#d9dfe8] rounded-full flex items-center justify-center">
                01
              </div>
              <div className="absolute top-[72px] right-[18px] bottom-[-17px] left-[19px] bg-[#ebedf0]"></div>
            </div>
            <div className="p-6 flex flex-col gap-2.5 mb-[72px]">
              <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                Discover & Strategy
              </h3>
              <p className="text-sm text-text-tertiary">
                Through discovery workshops and research, we start by defining a
                strategy aligned with your vision.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="pt-6 flex flex-col relative">
              <div className="size-10 text-sm font-medium text-text-primary border border-[#d9dfe8] rounded-full flex items-center justify-center">
                02
              </div>
              <div className="absolute top-[72px] right-[18px] bottom-[-17px] left-[19px] bg-[#ebedf0]"></div>
            </div>
            <div className="p-6 flex flex-col gap-2.5 mb-[72px]">
              <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                Discover & Strategy
              </h3>
              <p className="text-sm text-text-tertiary">
                Through discovery workshops and research, we start by defining a
                strategy aligned with your vision.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="pt-6 flex flex-col relative">
              <div className="size-10 text-sm font-medium text-text-primary border border-[#d9dfe8] rounded-full flex items-center justify-center">
                03
              </div>
              <div className="absolute top-[72px] right-[18px] bottom-[-17px] left-[19px] bg-[#ebedf0]"></div>
            </div>
            <div className="p-6 flex flex-col gap-2.5 mb-[72px]">
              <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                Discover & Strategy
              </h3>
              <p className="text-sm text-text-tertiary">
                Through discovery workshops and research, we start by defining a
                strategy aligned with your vision.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="pt-6 flex flex-col relative">
              <div className="size-10 text-sm font-medium text-text-primary border border-[#d9dfe8] rounded-full flex items-center justify-center">
                04
              </div>
              <div className="absolute top-[72px] right-[18px] bottom-[-17px] left-[19px] bg-[#ebedf0]"></div>
            </div>
            <div className="p-6 flex flex-col gap-2.5 mb-[72px]">
              <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                Discover & Strategy
              </h3>
              <p className="text-sm text-text-tertiary">
                Through discovery workshops and research, we start by defining a
                strategy aligned with your vision.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="pt-6 flex flex-col relative">
              <div className="size-10 text-sm font-medium text-text-primary border border-[#d9dfe8] rounded-full flex items-center justify-center">
                05
              </div>
            </div>
            <div className="p-6 flex flex-col gap-2.5 mb-[72px]">
              <h3 className="text-xl xl:text-2xl font-bold text-text-primary">
                Discover & Strategy
              </h3>
              <p className="text-sm text-text-tertiary">
                Through discovery workshops and research, we start by defining a
                strategy aligned with your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
