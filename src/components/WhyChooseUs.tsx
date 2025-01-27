import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Philosopher } from 'next/font/google';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['700'],
});

const astrologyContent = [
  {
    title: "Why Numerology Matters: Unlocking the Secrets of Your Life Path",
    description:
      "Numerology provides profound insights into your personality, life challenges, and destiny. Monica Kapoor's expertise in numerology helps you decode the numbers that influence your life, offering clarity and direction like never before.",
  },
  {
    title: "High-Quality Astrological Products",
    description:
      "From carefully crafted yantras to powerful mantras, Monica Kapoor offers a range of authentic astrological tools designed to enhance your spiritual well-being.",
  },
  {
    title: "Best-in-Class Yantras and Mantras",
    description:
      "Empower your spiritual journey with meticulously energized yantras and personalized mantras.",
  },
  {
    title: "Accurate Predictions and Guidance",
    description:
      "Monica Kapoor offers insightful astrological guidance and actionable advice. She possesses a profound understanding of astrology and provides practical counsel to help individuals navigate life's challenges and make informed decisions.",
  },
];

const astrologyImages = [
  "/images/Numerology.jpg",
  "/images/BraceletScroll1.jpg",
  "/images/YantraScroll1.jpg",
  "/images/Scroll3.jpg",
];

function WhyChooseUs() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className={philosopher.className}>
        <StickyScroll 
          content={astrologyContent} 
          images={astrologyImages}
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;