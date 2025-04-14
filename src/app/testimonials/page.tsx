import React from "react";
import Image from "next/image";
import { Philosopher, Open_Sans } from "next/font/google";
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

const testimonials = [
  {
    quote:
      "Amazing person. Gives very accurate personal readings about oneself. She helps understand your problems and guides you in the right direction. She is wonderful and doesn't do it for money. I strongly recommend you to visit her once, if you have any problems, she surely will enlighten the path for you.",
    name: "Nirmal Singh Ji",
    title: "",
    image: "/images/GuruJiPic.jpg",
  },
  {
    quote:
      "Wow Monica😊. The intention of my experience was all about gaining clarity and insight into dear family members only. Monica is truly gifted, kind, and motivated words when conversations warrant. The experience was enjoyable. Monica was able to tell us things that really impacted our lives. Thank you again.",
    name: "Anjali",
    title: "",
    image: "/images/Anjali.jpg",
  },
  {
    quote:
      "I recently had an incredible tarot reading with Monica. Her intuitive and no-nonsense approach provided me with valuable insights that will help me in the coming year. Her reading was precise, practical, and deeply resonant. I highly recommend her services, even for those new to tarot readings.",
    name: "Gautam",
    title: "",
    image: "/images/Gautam.jpg",
  },
  {
    quote:
      "I had my first reading with Monica today. I went amazing, she was spot on! She helped me understand my problems in a very easy way. Thanks aunty!",
    name: "Jyoti",
    title: "",
    image: "/images/Jyoti.jpg",
  },
  {
    quote:
      "I have had a lot of personal readings, but this one was by far the best. I found Monica was not dissapointed at all, she makes you feel very comfortable and at ease when you are eager to know more and more about life! Strongly recommend this lovely lovely woman! Looove you Monica!, see you soon!",
    name: "Dipti S",
    title: "",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "Hi Monica, Thanks for providing an insightful personal reading.  Your assessment was accurate and more importantly the remedial and spell measures were simple and very pertinent. I recommend this to others seeking a logical and pertinent reading.",
    name: "Saloni",
    title: "",
    image: "/images/Saloni.jpg",
  },
  {
    quote:
      "Monica Kapoor was more of a friend than a tarot reader. Despite being polite and wearing a smile always she judged quite a few things correctly. A person feels filled with confidence after her tarot sessions. Recommended!",
    name: "Kajal",
    title: "",
    image: "/images/Kajal.jpg",
  },
  {
    quote:
      "I am so glad I sought astrological guidance from Monica regarding my career and life!  It provided valuable insights and left me feeling more confident and at peace about my future.",
    name: "Shoham Brojobasi",
    title: "",
    image: "/images/Shoham.jpg",
  },
  {
    quote:
      "I had my first personal reading today with Monica. It went amazing, she was spot on! She helped me understand my problems in a very easy way.",
    name: "Saksham Kumar",
    title: "",
    image: "/images/Saksham.jpg",
  },
  {
    quote:
      "Monica has a different approach towards her clients which is warm and personal. She connects instantly and helps in seeing the positive side of the situation. I am grateful to her as her accurate readings have restored my faith, thanks a ton!",
    name: "Mrs. M Soni",
    title: "",
    image: "/images/Msoni.jpg",
  },
  {
    quote:
      "I really want to thank Monica mam she helped me a lot, her remedies were so simple, I have done those remedy easily.she is 24*7available on chat assistant.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "Monica Kapoor is the queen of astrology, the best ever experience in my life she takes away all my problems with a click of her finger. Wonderful remedies suggested by her.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "Always my go-to mentor and perfect guidance 🫶🏻 blessed to have her🙏🏻🧿",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "I have consulted Monica mam so many times and really believe in her predictions. She told me to perform simple remedies and luckily they worked for me. Thanks mam.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "The way she helped her client is commendable and always 24*7 available for customer service. Thank you mam for the support I will always be obliged❣🙏",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "I liked her confidence in her prediction regarding my relationship issues. I hope everything turns out well, as predicted by her.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "Thank you again for the reading. just want to say you are by far the best astrologer to listen to. I always feel happy and excited when I have listened to you.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "She is my angel. She gives a lot guidance, positivity to me and everyone... Divine bless you Monica Ma'am. Love you. Shukrana... Shukrana... Shukrana...",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "She is really amazing and very helpful. Her prediction is always accurate and gonna keep connected in future. Thank you so much maaam.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },



  {
    quote:
      "Very helpful and accurate guidance along with remedies for both my career and marital life. Would recommend her for anyone looking for guidance and support.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "ma'am you are really amazing. thanks a lot for your guidance. And had a beautiful session. Thank you so much ma'am.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "you are such very kind person mam you feel me positive and confident. Thank you so much ma'am.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "Thank you ma'am, all the predictions are correct, and very helful. My all problems solved thanks.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "She is in an exceptional astrologer and healer... Will highly recommend to go to her if you need help.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  {
    quote:
      "I just wanted to say how much I loved your reading and remedies- you are very wise, kind and helpful. Thanks ma'am.",
    name: "Anonymous",
    title: "From-Astrotalk",
    image: "/images/Anonymous.jpg",
  },
  
];

const [featuredTestimonial, ...otherTestimonials] = testimonials;

function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1
        className={cn(
          "text-5xl text-[#6a1818] font-bold text-center mb-16",
          headingFont.className
        )}
      >
        Client Testimonials
      </h1>

      {/* Featured Testimonial */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4">
              <Image
                src={featuredTestimonial.image}
                alt={featuredTestimonial.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>
            <h2
              className={cn(
                "text-2xl font-bold text-[#6a1818] mb-2",
                headingFont.className
              )}
            >
              {featuredTestimonial.name}
            </h2>
            {featuredTestimonial.title && (
              <p
                className={cn(
                  "text-lg text-gray-600 mb-4",
                  paragraphFont.className
                )}
              >
                {featuredTestimonial.title}
              </p>
            )}
            <p
              className={cn(
                "italic text-gray-700 text-xl",
                paragraphFont.className
              )}
            >
              {featuredTestimonial.quote}
            </p>
          </div>
        </div>
      </div>

      {/* Other Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {otherTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 mr-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3
                  className={cn(
                    "text-xl font-semibold text-[#6a1818]",
                    headingFont.className
                  )}
                >
                  {testimonial.name}
                </h3>
                {testimonial.title && (
                  <p
                    className={cn(
                      "text-sm text-gray-600",
                      paragraphFont.className
                    )}
                  >
                    {testimonial.title}
                  </p>
                )}
              </div>
            </div>
            <p className={cn("italic text-gray-700", paragraphFont.className)}>
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
      <div className="col-span-full text-center mt-8">
    <p className={cn("text-2xl text-[#6a1818] font-semibold", headingFont.className)}>
      And many more...
    </p>
  </div>
    </div>
  );
}

export default Testimonials;
