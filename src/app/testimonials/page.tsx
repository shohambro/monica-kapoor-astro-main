import React from 'react';
import Image from 'next/image';
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
    quote: "I had my first reading with Monica today. I went amazing, she was spot on! She helped me understand my problems in a very easy way. Thanks aunty!",
    name: "Jyoti",
    title: "",
    image: "/images/Jyoti.jpg",
  },
  // ... (rest of the testimonials from the previous component)
];

function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-16 px-4">
      <h1 className={cn("text-5xl text-[#6a1818] font-bold text-center mb-16", headingFont.className)}>
        Client Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
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
                <h3 className={cn("text-xl font-semibold text-[#6a1818]", headingFont.className)}>
                  {testimonial.name}
                </h3>
                {testimonial.title && (
                  <p className={cn("text-sm text-gray-600", paragraphFont.className)}>
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
    </div>
  );
}

export default Testimonials;