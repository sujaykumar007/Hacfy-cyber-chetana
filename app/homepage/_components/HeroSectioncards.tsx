import * as React from "react";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export function HeroCard() {
  return (
    <div className="w-full py-24 md:py-36 px-4 md:px-12 bg-white text-black">
    {/* Hero Section */}
    <div className="w-full min-h-[600px] flex flex-col items-center py-16 md:py-6 rounded-3xl  text-black px-6 md:px-12 relative">
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full md:w-[80%] text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary-yellow">Cyber</h1>
        <p className="text-sm md:text-lg font-light">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium molestias odit consequuntur? Incidunt quidem temporibus aut corrupti voluptate vitae iste ab ea reprehenderit placeat. Tempora perferendis sit quia incidunt.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-64 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {["Detect", "Protect", "Respond"].map((title, index) => (
          <Card key={index} className="bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-3">
            <CardHeader className="flex items-center">
              <CardTitle className="text-xl md:text-2xl font-semibold text-primary-yellow">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm md:text-lg ml-4 md:ml-8">
              {title === "Detect" && "We use expert-led tools to detect vulnerabilities, identifying risks in infrastructure, applications, and networks."}
              {title === "Protect" && "Protect your business with continuous scanning, dark-web monitoring, and 24/7 defense against Advanced Persistent Threats."}
              {title === "Respond" && "Ensure security with our responsive services. Let Pentest People craft an Incident Response plan to minimize cyberattack damage."}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

  
  </div>
  );
}
