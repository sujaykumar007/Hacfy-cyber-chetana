import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardContent = [
  {
    id: 1,
    title: "2457",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas.",
  },
  {
    id: 2,
    title: "2457",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptasm.",
  },
  {
    id: 3,
    title: "2457",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas.",
  },
];

export function HeroCard() {
  return (
    <div className="grid grid-cols-1 px-12 md:grid-cols-3 gap-6">
      {cardContent.map((item) => (
        <Card key={item.id} className="w-[350px]">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{item.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
