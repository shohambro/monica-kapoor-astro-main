'use client';

import React from 'react';
import Image from 'next/image';
import Scroll1 from "../../public/images/Scroll1.jpg";
import Scroll2 from "../../public/images/Scroll2.jpg";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-12 text-[#6a1818]">
        Monica Kapoor
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Placeholder for Image 1 */}
        <div className="w-80 h-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
          <p className="text-gray-400 dark:text-gray-600 font-semibold">
            Image 1 Placeholder
          </p>
        </div>

        {/* Placeholder for Image 2 */}
        <div className="w-80 h-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
          <p className="text-gray-400 dark:text-gray-600 font-semibold">
            Image 2 Placeholder
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 bg-white dark:bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-[#6a1818] mb-6">
          MS. MONICA KAPOOR: YOUR GUIDE TO CLARITY, PURPOSE, AND TRANSFORMATION
        </h2>
        <p className="text-gray-600 dark:text-[#6a1818] text-lg leading-relaxed mb-6">
          With over 24 years of enriching experience in the education sector in Delhi-NCR, Monica Ji has emerged as one of India's most sought-after experts in Tarot, Numerology, Psychic Guidance, Emotional Psychology, and Life Coaching. 
        </p>
        <p className="text-gray-600 dark:text-[#6a1818] text-lg leading-relaxed mb-6">
          As a spiritual guide and trusted counselor, she has helped millions heal emotional trauma, unlock their true potential, and navigate life’s challenges by blending spirituality with practical wisdom.
        </p>
        <p className="text-gray-600 dark:text-[#6a1818] text-lg leading-relaxed mb-6">
          In this piece, Ms. Monica Kapoor delves into the subtle ways the universe communicates with us. From incorporating meditation into your daily routine to using astrology as a tool for better decision-making, she shares profound insights that can bring transformative change. Learn how to align your energy with your aspirations, tap into the power of your mind, and create harmony in the midst of chaos. Whether you are curious about spiritual practices or seeking actionable tools to live a more purposeful life, her guidance offers something for everyone.
        </p>
        <blockquote className="italic border-l-4 border-orange-500 pl-4 text-gray-800 dark:text-[#6a1818]">
          The universe speaks in whispers—through numbers, colors, and even animals. It is always offering answers. 
          <br />
          The real question is: Are you listening? 
          <br />
          If you pay attention, you will find the divine everywhere—even in the brief pause between an inhale and exhale. 
          <br />
          Think of Google as a metaphor for God—overflowing with answers, but only if you are willing to ask. Align your mind, and the universe will support you on your journey."
        </blockquote>
      </div>
    </div>
  );
}

export default AboutPage;
