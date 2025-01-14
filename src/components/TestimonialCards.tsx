"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "I really want to thank Monica mam she helped me a lot, her remedies were so simple, I have done those remedy easily.she is 24*7available on chat assistant.",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
  {
    quote:
      "Monica Kapoor is the queen of astrology,the best ever experience in my life she takes away all my problems with a click of her finger.Wonderful remedies suggested by her.",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
  {
    quote:
      "Always my go to mentor and perfect guidance 🫶🏻 blessed to have her🙏🏻🧿",
    name: "Uttara",
    title: "From-Astrotalk",
  },
  {
    quote:
      "I have consulted monica mam so many times and really believe in her predictions.She told me to perform simple remedies and luckily they worked for me. Thanks mam.",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
  {
    quote:
      "the way she helped her client is commendable and always 24*7 available for customer service.thank you mam for the support I will always be obliged❣️🙏",
    name: "Anonymous",
    title: "From-Astrotalk",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full bg-gradient-to-br from-yellow-400 to-orange-500 relative flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl lg:text-5xl text-[#6a1818] font-bold text-center mb-8 z-10">
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
