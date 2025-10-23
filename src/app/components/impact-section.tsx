import LShape from "./LShape";
import LShapeReverse from "./LShapeReverse";
import StatCard from "./stat-card";

const STATS = [
  {
    number: "1,200+",
    title: "Successful Projects Delivered",
    description:
      "From startups to enterprises, we've built high-performing websites and digital experiences that drive real results.",
  },
  {
    number: "5K+",
    title: "Ad Campaigns Optimized",
    description:
      "We've helped brands lower acquisition costs and boost ROI with data-driven paid media strategies.",
  },
  {
    number: "$10M+",
    title: "Revenue Generated for Clients",
    description:
      "Our strategic design, marketing, and conversion optimization have helped businesses scale and maximize profits.",
  },
];

export default function ImpactSection() {
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
              <p className="text-xs text-text-primary font-medium">Impact</p>
            </div>
          </div>
          <h2 className="font-bold xl:text-4xl md:text-3xl text-2xl text-center text-text-primary max-w-[550px] mx-auto">
            Bravio simplifies the process,{" "}
            <br className="xl:block hidden" />
            <span className="text-text-muted">and delivers results.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.number}
              number={stat.number}
              title={stat.title}
              description={stat.description}
              className={
                index === STATS.length - 1 ? "md:col-span-2 xl:col-span-1" : ""
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
