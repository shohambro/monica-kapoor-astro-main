"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Philosopher, Open_Sans, Montserrat } from "next/font/google";
import { cn } from "@/utils/cn";
import Link from "next/link";

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
    quote: "I have had a lot of personal readings, but this one was by far the best. I found Monica was not dissapointed at all, she makes you feel very comfortable and at ease when you are eager to know more and more about life! Strongly recommend this lovely lovely woman! Looove you Monica!, see you soon!",
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
    quote: "Amazing person. Gives very accurate personal readings about oneself. She helps understand your problems and guides you in the right direction. She is wonderful and doesn't do it for money. I strongly recommend you to visit her once, if you have any problems, she surely will enlighten the path for you.",
    name: "Nirmal Singh Ji",
    title: "",
    image: "/images/GuruJiPic.jpg",
  },
  {
    quote: "I really want to thank Monica mam she helped me a lot, her remedies were so simple, I have done those remedy easily.she is 24*7available on chat assistant.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote: "Monica Kapoor is the queen of astrology, the best ever experience in my life she takes away all my problems with a click of her finger. Wonderful remedies suggested by her.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote: "Always my go-to mentor and perfect guidance 🫶🏻 blessed to have her🙏🏻🧿",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote: "I have consulted Monica mam so many times and really believe in her predictions. She told me to perform simple remedies and luckily they worked for me. Thanks mam.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote: "The way she helped her client is commendable and always 24*7 available for customer service. Thank you mam for the support I will always be obliged❣🙏",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote: "Amazing person, gives very accurate personal readings about oneself. She helps you understand your problem and guides you in the right direction. She is not one of those who does it for money, she is very helpful and is a wonderful person. I strongly recommend you to visit her once, if you have any problems, she cant give you the solution but surely will enlighten the path for you.. It surely helps.",
    name: "Anjali Khanna",
    title: "",
    image: "/images/Anjali.jpg",
  },
  {
    quote: "I recently had an incredible tarot reading with Monica. Her intuitive and no-nonsense approach provided me with valuable insights that will help me in the coming year. Her reading was precise, practical, and deeply resonant. I highly recommend her services, even for those new to tarot readings.",
    name: "Gautam Khanna",
    title: "",
    image: "/images/Gautam.jpg",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[55rem] w-full bg-gradient-to-br from-yellow-400 to-orange-500 relative flex flex-col items-center justify-center overflow-hidden">
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
      <div className="mt-6">
        <Link href={"/testimonials"}>
          <button className="text-sm w-auto px-6 py-3 mt-4 bg-orange-500 hover:bg-white text-white hover:text-green-300 font-semibold rounded-lg transition duration-300">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
