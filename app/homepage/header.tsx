import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="w-full flex flex-col justify-center  p-20 gap-y-10 ">
      <div className="flex flex-col  justify-center  gap-y-6">
        <div className="text-5xl font-bold text-primary">Securing your Digital Future</div>
        <div className="text-2xl font-medium text-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, tempore perferendis?
        </div>
        <div className="flex gap-x-6">
          <Button asChild>
            <Link href="/">Something</Link>
          </Button>
          <Button className="bg-gray-600">Secondary</Button>
        </div>
      </div>
    </div>
  );
}
