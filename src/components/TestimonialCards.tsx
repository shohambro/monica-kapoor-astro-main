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
    quote: "I had my first reading with Monica today. I went amazing, she was spot on! She helped me understand my problems in a very easy way. Thanks aunty!",
    name: "Jyoti",
    title: "",
    image: "/images/Jyoti.jpg",
  },
  {
    quote: "I have had a lot of personal readings, but this one was by far the best. I found Monica was not dissapointed at all, she makes you feel very comfortable and at ease when you are eager to know more and more about life! Strongly recommend this lovely lovely woman! Looove you Monica!, see you soon for my next reading!",
    name: "Dipti S",
    title: "",
    image: "/images/Anonymous.jpg",
  },
  {
    quote: "Hi Monica, Thanks for providing an insightful personal reading.  Your assessment was accurate and more importantly the remedial and spell measures were simple and very pertinent. I recommend this to others seeking a logical and pertinent reading.",
    name: "Saloni",
    title: "",
    image: "/images/Saloni.jpg",
  },
  {
    quote: "Monica Kapoor was more of a friend than a tarot reader. Despite being polite and wearing a smile always she judged quite a few things correctly. A person feels filled with confidence after her tarot sessions. Recommended!",
    name: "Kajal",
    title: "",
    image: "/images/Kajal.jpg",
  },
  {
    quote: "I am so glad I sought astrological guidance from Monica regarding my career and life!  It provided valuable insights and left me feeling more confident and at peace about my future.",
    name: "Shoham Brojobasi",
    title: "",
    image: "/images/Shoham.jpg",
  },
  {
    quote: "I had my first personal reading today with Monica. It went amazing, she was spot on! She helped me understand my problems in a very easy way.",
    name: "Saksham Kumar",
    title: "",
    image: "/images/Saksham.jpg",
  },
  {
    quote: "Monica has a different approach towards her clients which is warm and personal. She connects instantly and helps in seeing the positive side of the situation. I am grateful to her as her accurate readings have restored my faith, thanks a ton!",
    name: "Mrs. M Soni",
    title: "",
    image: "/images/Msoni.jpg",
  },
  {
    quote: "Amazing person. Gives very accurate personal readings about oneself. She helps you understand your problem and guides you in the right direction. She is not one of those who does it for money, she is very helpful and is a wonderful person. I strongly recommend you to visit her once, if you have any problems, she cant give you the solution but surely will enlighten the path for you.",
    name: "Nirmal Singh",
    title: "",
    image: "/images/Nirmal.jpg",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[45rem] w-full bg-gradient-to-br from-yellow-400 to-orange-500 relative flex flex-col items-center justify-center overflow-hidden">
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
