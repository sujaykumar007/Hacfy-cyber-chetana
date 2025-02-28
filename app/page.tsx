import { HeroCard } from "./homepage/_components/HeroSectioncards";
import PeldgeForm from "./homepage/_components/pledgeForm";
import { HeroSection } from "./homepage/header";


export default function Home() {
  return (
    <div className="w-full  max-h-full flex flex-col gap-y-20 md:gap-y-32 items-center justify-center">
      <div className="w-full h container mx-auto mt-20 md:mt-32">
        <HeroSection />
        <HeroCard />
      </div>
      <div className="w-full container mx-auto">
       <PeldgeForm />
      </div>
    </div>
  )}
