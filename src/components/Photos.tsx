"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Philosopher } from "next/font/google";
import { cn } from "@/utils/cn";

const headingFont = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

const Photos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/HeroSmallBack.jpg",
    "/images/Podcast1.jpg",
    "/images/Scroll4.jpg",
    "/images/YT3.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white py-12">
      <h1
        className={cn(
          "text-4xl md:text-5xl text-center font-bold text-[#6a1818] mb-8",
          headingFont.className
        )}
      >
        Glimpses
      </h1>
      <p className="text-lg text-center text-[#6a1818] italic font-semibold mb-10">
        Cosmic conversations captured in still frames. <br/> Astrology, numerology,
        and the mysteries they hold.<br/> Glimpses into the stars and the numbers
        that guide us.
      </p>
      <div className="flex flex-col items-center">
        {/* Slideshow Container */}
        <div className="relative w-80 h-80 bg-white rounded-xl shadow-lg overflow-hidden mb-4">
          <Image
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            width={320}
            height={320}
            className="w-full h-full object-cover"
            priority
          />
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md"
          >
            &#10095;
          </button>
        </div>
        {/* Caption text */}
        <p className="text-center text-[#6a1818] italic font-medium">
          Glimpses From Several Podcasts And Interviews.
        </p>
      </div>
    </div>
  );
};

export default Photos;