import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Numerology from "../../public/images/Numerology.jpg";
import Scroll1 from "../../public/images/Scroll1.jpg";
import Scroll2 from "../../public/images/Scroll2.jpg";
import Scroll3 from "../../public/images/Scroll3.jpg";

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
      "Monica Kapoor delivers precise astrological predictions and actionable guidance.",
  },
];

const astrologyImages = [
  "/images/Numerology.jpg",
  "/images/Scroll1.jpg",
  "/images/Scroll2.jpg", 
  "/images/Scroll3.jpg",
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={astrologyContent} images={astrologyImages} />
    </div>
  );
}

export default WhyChooseUs;
