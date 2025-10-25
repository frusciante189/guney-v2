import LShape from "./LShape";
import LShapeReverse from "./LShapeReverse";
import ServiceCards from "./service-cards";

export default function OurServices() {
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
                Our Services
              </p>
            </div>
          </div>
          <h2 className="font-bold xl:text-4xl xl:leading-12 md:leading-10 leading-8 md:text-3xl text-2xl text-text-primary max-w-[700px]">
            From ideas into high-impact solutions{" "}
            <br className="xl:block hidden" />
            <span className="text-text-muted">That inspires and convert</span>
          </h2>
        </div>
        <div className="bg-bg-gray-lighter rounded-[48px] p-5">
          <ServiceCards />
        </div>
      </div>
    </div>
  );
}
