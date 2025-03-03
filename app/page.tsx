

import { HeroCard } from "./homepage/_components/HeroSectioncards";
import PeldgeForm from "./homepage/_components/pledgeForm";
import { HeroSection } from "./homepage/header";
import { MarqueeDemo } from "./homepage/Merquee";
import SwiperComponent from "./homepage/SwiperImage";




export default function Home() {
  return (
    <div>
      <div className="w-full  mx-auto">
        <HeroSection />
        <div> <MarqueeDemo/></div>
        <HeroCard />
      </div>
      <div className="w-full container mx-auto">
       <PeldgeForm />
       <div className="h-[50vh]">
<SwiperComponent/>
</div>
      </div>
      
    
    </div>
  )}
