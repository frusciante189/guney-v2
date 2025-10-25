export default function HeroTestimonialCard() {
  return (
    <div className="relative">
      {/* Decorative background card */}
      <div
        className="absolute inset-0 bg-white rounded-2xl w-[250px] rotate-[9deg]"
        style={{
          border: "1px solid #eff3f7",
        }}
      />

      {/* Main testimonial card */}
      <div
        className="bg-white rounded-2xl w-[250px] rotate-15 overflow-hidden relative z-10"
        style={{
          padding: "22px",
          boxShadow: `
          0px 2px 6px -4px rgba(15, 25, 62, 0.08),
          0px -0.2px 0px 0.3px rgb(217, 223, 232),
          0px 1.3436836425447838px 0.6718418212723919px -0.625px rgba(44, 45, 48, 0.02),
          0px 3.184767494094558px 1.592383747047279px -1.25px rgba(44, 45, 48, 0.02),
          0px 5.80934510345105px 2.904672551725525px -1.875px rgba(44, 45, 48, 0.02),
          0px 9.658024572418071px 4.829012286209036px -2.5px rgba(44, 45, 48, 0.02),
          0px 15.596922177565284px 7.798461088782642px -3.125px rgba(44, 45, 48, 0.02),
          0px 25.530614085937845px 12.765307042968923px -3.75px rgba(44, 45, 48, 0.01),
          0px 43.96199341069441px 21.980996705347206px -4.375px rgba(44, 45, 48, 0.01),
          0px 80px 40px -5px rgba(44, 45, 48, 0)
        `,
        }}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-2.5">
            <p className="text-xs font-medium" style={{ color: "#50576b" }}>
              &quot;Bravio nailed our MVP design with a fast turnaround and
              incredible attention to detail.&quot;
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="var(--token-67b490dc-d3b7-4020-8dab-9b587b280140, rgb(159, 170, 193))"
              className="size-10"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
              <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
              <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z"></path>{" "}
            </svg>
          </div>
          <p className="text-xs font-medium" style={{ color: "#0f1115" }}>
            - Sarah Mitchel
          </p>
        </div>
      </div>
    </div>
  );
}
