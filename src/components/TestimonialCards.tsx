"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Philosopher, Open_Sans, Montserrat } from "next/font/google";
import { cn } from "@/utils/cn";

const headingFont = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

const paragraphFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const musicSchoolTestimonials = [
  {
    quote: "I really want to thank Monica mam she helped me a lot, her remedies were so simple, I have done those remedy easily.she is 24*7available on chat assistant.",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
  {
    quote: "Monica Kapoor is the queen of astrology, the best ever experience in my life she takes away all my problems with a click of her finger. Wonderful remedies suggested by her.",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
  {
    quote: "Always my go-to mentor and perfect guidance 🫶🏻 blessed to have her🙏🏻🧿",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
  {
    quote: "I have consulted Monica mam so many times and really believe in her predictions. She told me to perform simple remedies and luckily they worked for me. Thanks mam.",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
  {
    quote: "The way she helped her client is commendable and always 24*7 available for customer service. Thank you mam for the support I will always be obliged❣️🙏",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[35rem] w-full bg-gradient-to-br from-yellow-400 to-orange-500 relative flex flex-col items-center justify-center overflow-hidden">
      <h1 className={cn("text-4xl lg:text-5xl text-[#6a1818] font-bold text-center mb-16 mt-0 z-10", headingFont.className)}>
        Client Testimonials
      </h1>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;