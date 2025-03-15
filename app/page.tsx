import { HeroCard } from "./homepage/_components/HeroSectioncards";
import PledgeForm from "./homepage/_components/pledgeForm"; // Fixed spelling
import { HeroSection } from "./homepage/header";
import { MarqueeDemo } from "./homepage/Merquee";
import SwiperHome from "./homepage/SwiperHome";
import SwiperComponent from "./homepage/SwiperImage";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <HeroSection />

      <div className="w-full flex flex-col h-auto md:h-screen">
  <div className="h-auto md:h-1/2 w-full">
    <MarqueeDemo />
  </div>
  <div className="h-auto md:h-1/2 w-full">
    <SwiperHome />
  </div>
</div>

<div className="h-1/2 w-full">
      <HeroCard />
      </div>

      {/* Pledge Form Section */}
      <div className="container mx-auto w-full mt-20 md:mt-0">
  <PledgeForm />
</div>

      {/* Swiper Component */}
      <div className="w-full h-auto md:h-1/2 mt-40 md:mt-0 sm:mt-0 mb-20 flex justify-center items-center">
  <SwiperComponent />
</div>

    </div>
  );
}
