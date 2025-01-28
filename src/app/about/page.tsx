'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Philosopher, Open_Sans } from 'next/font/google';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/Scroll1.jpg',
    '/images/Scroll2.jpg',
    '/images/Scroll3.jpg',
    '/images/Scroll4.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className={`${philosopher.className} text-4xl md:text-6xl text-center font-bold mb-12 text-[#6a1818]`}>
        Monica Kapoor
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Slideshow */}
        <div className="w-80 h-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative">
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
      </div>
      <div className="max-w-5xl mx-auto mt-12 bg-white dark:bg-white rounded-2xl shadow-lg p-8">
        {/* New Text Block */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-[#6a1818] text-lg italic font-bold rounded-lg p-6 mb-8">
          Embrace the universe&apos;s magic. Your unique path is written in the stars. Let us delve into your birth chart and
          uncover the cosmic map guiding you towards a life of meaning, happiness, and prosperity.
        </div>
        <h2 className={`${philosopher.className} text-lg md:text-4xl text-center font-bold mb-8 text-[#6a1818]`}>
          MS. MONICA KAPOOR: YOUR GUIDE TO CLARITY, PURPOSE, AND TRANSFORMATION
        </h2>
        <p className="text-gray-600 dark:text-[#6a1818] text-lg leading-relaxed mb-6">
          With over 24 years of enriching experience in the education sector in Delhi-NCR, Monica Ji has emerged as one
          of India&apos;s most sought-after experts in Tarot, Numerology, Psychic Guidance, Emotional Psychology, and
          Life Coaching.
        </p>
        <p className="text-gray-600 dark:text-[#6a1818] text-lg leading-relaxed mb-6">
          As a spiritual guide and trusted counselor, she has helped millions heal emotional trauma, unlock their true
          potential, and navigate life&apos;s challenges by blending spirituality with practical wisdom.
        </p>
        <p className="text-gray-600 dark:text-[#6a1818] text-lg leading-relaxed mb-6">
          In this piece, Ms. Monica Kapoor delves into the subtle ways the universe communicates with us. From
          incorporating meditation into your daily routine to using astrology as a tool for better decision-making, she
          shares profound insights that can bring transformative change. Learn how to align your energy with your
          aspirations, tap into the power of your mind, and create harmony in the midst of chaos. Whether you are
          curious about spiritual practices or seeking actionable tools to live a more purposeful life, her guidance
          offers something for everyone.
        </p>
        <blockquote className="italic border-l-4 border-orange-500 pl-4 text-gray-800 dark:text-[#6a1818]">
          The universe speaks in whispers—through numbers, colors, and even animals. It is always offering answers. 
          <br />
          The real question is: Are you listening? 
          <br />
          If you pay attention, you will find the divine everywhere—even in the brief pause between an inhale and exhale. 
          <br />
          Think of Google as a metaphor for God—overflowing with answers, but only if you are willing to ask. Align your mind, and the universe will support you on your journey.&quot;
          <br />
          <br />
          Best Regards,
          <br />
          Monica Kapoor
        </blockquote>
      </div>
    </div>
  );
}

export default AboutPage;
