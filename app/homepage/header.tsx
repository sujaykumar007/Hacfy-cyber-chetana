import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export function HeroSection() {
  return (
    <div className="w-full justify-center items-center text-center md:text-left px-6 md:px-20 py-20 ">
      <div className="flex flex-col gap-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Awareness Today, Security Tomorrow.
        </h1>
        <p className="text-lg md:text-2xl font-medium text-gray-700">
          Stay ahead of cyber threats with cutting-edge security solutions and expert guidance.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 justify-center md:justify-start">
          <Button asChild>
            <Link href="/">Get Started</Link>
          </Button>
          <Button className="bg-gray-600 hover:bg-gray-700 text-white">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

