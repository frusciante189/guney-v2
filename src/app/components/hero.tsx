import HeroBadge from "./hero/hero-badge";
import HeroHeading from "./hero/hero-heading";
import HeroCTA from "./hero/hero-cta";
import HeroSocialProof from "./hero/hero-social-proof";
import HeroVideo from "./hero/hero-video";
import HeroTrustedCompanies from "./hero/hero-trusted-companies";
import HeroTestimonialCard from "./hero/hero-testimonial-card";
import HeroTestimonialCardLeft from "./hero/hero-testimonial-card-left";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto md:px-8 px-5 xl:pt-40 xl:pb-20 pt-28 md:pb-14 pb-10 font-jakarta relative">
      {/* Testimonial Card Left - Positioned absolutely on the left */}
      <div className="absolute top-2/5 -translate-y-1/2 -left-12 xl:block hidden pointer-events-none">
        <HeroTestimonialCardLeft />
      </div>

      {/* Testimonial Card Right - Positioned absolutely on the right */}
      <div className="absolute top-2/5 -translate-y-1/2 -right-12 xl:block hidden pointer-events-none">
        <HeroTestimonialCard />
      </div>

      <div className="flex flex-col xl:gap-20 gap-16">
        <div className="flex flex-col xl:gap-14 md:gap-11 gap-10">
          <div className="flex flex-col md:gap-9 gap-8">
            <div className="max-w-3xl mx-auto md:gap-6 gap-5 flex flex-col items-center">
              <HeroBadge />
              <HeroHeading />
            </div>
            <div className="mx-auto">
              <HeroCTA />
            </div>
          </div>
          <HeroSocialProof />
        </div>
        <HeroVideo />
        <HeroTrustedCompanies />
      </div>
    </div>
  );
};

export default Hero;
