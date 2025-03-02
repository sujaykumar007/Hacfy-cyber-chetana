import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";

const reviews = [
  {
    name: "Cybercrime Losses in Karnataka",
    number: 74,
    body: "Unbelievable statistics that show the growing threat of cybercrime.",
  },
  {
    name: "Cybercrime Cases reported in Karnataka",
    number: 56,
    body: "An alarming rise in cybercrime incidents affecting businesses and individuals.",
  },
  {
    name: "Industry Impact",
    number: 146,
    body: "A massive impact on industries, calling for stronger security measures.",
  },
  {
    name: "Daily Cybercrime Cases Registered in Karnataka",
    number: 789,
    body: "Shocking daily reports emphasize the need for cyber safety awareness.",
  },
];

const ReviewCard = ({
  name,
  number,
  body,
}: {
  name: string;
  number: number;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-60 w-full md:w-[22%] cursor-pointer overflow-hidden rounded-xl border p-6 flex flex-col items-center text-center",
        "border-gray-300 bg-white text-black shadow-md hover:bg-gray-100 transition-all"
      )}
    >
      <figcaption className="text-3xl font-bold">{name}</figcaption>
      <p className="text-sm mt-2 text-gray-700">{body}</p>

      <blockquote className="mt-4 text-4xl font-semibold">
        <NumberTicker value={number} decimalPlaces={0} className="text-6xl" />
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white py-10">
      <Marquee pauseOnHover className="[--duration:20s] flex w-full gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.number} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
    </div>
  );
}
