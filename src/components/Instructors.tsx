// Updated Instructors.tsx
"use client";
import React from "react";
import Image from "next/image";
import PodcastH2H from "../../public/images/PodcastH2H.png";
import Shorts1 from "../../public/images/Shorts1.jpg";
import Shorts2 from "../../public/images/Shorts2.jpg";
import Link from "next/link";

import { Philosopher, Open_Sans, Montserrat } from "next/font/google";
import { cn } from "@/utils/cn";

// Define fonts
const headingFont = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

const subheadingFont = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const paragraphFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

function YouTubeVideos() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center justify-center p-8 space-y-6">
      <h2
        className={cn(
          "text-4xl lg:text-5xl font-bold text-[#6a1818] text-center mb-8 mt-8",
          headingFont.className
        )}
      >
        Featured Podcasts And Clips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Short 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <a
            href="https://www.youtube.com/watch?v=7922yuQ2GTY"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={PodcastH2H}
              alt="Full Video Thumbnail"
              width={1200}
              height={500}
              className="w-full h-48 "
            />
          </a>
          <div className="p-4">
            <h3
              className={cn(
                "text-xl font-semibold text-gray-800",
                subheadingFont.className
              )}
            >
              🌟 Astrology and Numerology: All Secrets Revealed Ft. Monica Kapoor
            </h3>
            <a
              href="https://www.youtube.com/@Manuudevaal-y3h"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-gray-600 mt-2 hover:text-green-300 transition-colors duration-200",
                paragraphFont.className
              )}
            >
              H2H Conversations
            </a>
          </div>
        </div>
        {/* Short 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <a
            href="https://youtube.com/shorts/63mmhI05qKg?si=FkiZ3eooi9rhdaVn"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={Shorts1}
              alt="Short 1 Thumbnail"
              width={800}
              height={400}
              className="w-full h-48 object-center"
            />
          </a>
          <div className="p-4">
            <h3
              className={cn(
                "text-lg font-semibold text-gray-800",
                subheadingFont.className
              )}
            >
              Astrological Insights for Starting a Successful Business 🌟
            </h3>
            <a
              href="https://www.youtube.com/@manifestwithbijay/featured"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-gray-600 mt-2 hover:text-green-300 transition-colors duration-200",
                paragraphFont.className
              )}
            >
              manifestwithbijay
            </a>
          </div>
        </div>

        {/* Short 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <a
            href="https://youtube.com/shorts/YmwnS6Xyk7U?si=b9J_ELeMwOJk1pXa"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={Shorts2}
              alt="Short 2 Thumbnail"
              width={800}
              height={400}
              className="w-full h-48 object-right"
            />
          </a>
          <div className="p-4">
            <h3
              className={cn(
                "text-lg font-semibold text-gray-800",
                subheadingFont.className
              )}
            >
              It is Never Too Late to Start Fresh 🌟
            </h3>
            <a
              href="https://www.youtube.com/@manifestwithbijay/featured"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-gray-600 mt-2 hover:text-green-300 transition-colors duration-200",
                paragraphFont.className
              )}
            >
              manifestwithbijay
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link href={"/featured-videos"}>
          <button className="text-sm w-auto px-6 py-3 mt-4 bg-orange-500 hover:bg-white text-white hover:text-green-300 font-semibold rounded-lg transition duration-300">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default YouTubeVideos;
