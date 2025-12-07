// Updated Instructors.tsx
"use client";
import React from "react";
import Image from "next/image";
import PodcastH2H from "../../public/images/PodcastH2H.png";
import Shorts1 from "../../public/images/Shorts1.jpg";
import Shorts2 from "../../public/images/Shorts2.jpg";
import photo8 from "../../public/images/photo8.jpeg";
import adycted from "../../public/images/adycted.jpeg";
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-6xl">
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
                "text-md font-semibold text-gray-800",
                subheadingFont.className
              )}
            >
              🌟 Astrology and Numerology: All Secrets Revealed Ft. Monica
              Kapoor
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
                "text-md font-semibold text-gray-800",
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
            href="https://www.youtube.com/watch?si=i0uDYv3uqypjuxfh&v=S550A5zt4JA&feature=youtu.be"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={photo8}
              alt="Short 2 Thumbnail"
              width={800}
              height={400}
              className="w-full h-48 object-right"
            />
          </a>
          <div className="p-4">
            <h3
              className={cn(
                "text-md font-semibold text-gray-800",
                subheadingFont.className
              )}
            >
              Decode your destiny - Astrology x Numerology - With Trade Commissioner Ankitt Jain
            </h3>
            <a
              href="https://www.youtube.com/@TheKnickKnackShow"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-gray-600 mt-2 hover:text-green-300 transition-colors duration-200",
                paragraphFont.className
              )}
            >
              TheKnickKnackShow
            </a>
          </div>
        </div>

           {/* Short 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <a
            href="https://youtu.be/Av9BwFXnbzo?si=riLazngytFQrMcZe"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={adycted}
              alt="Short 2 Thumbnail"
              width={800}
              height={400}
              className="w-full h-48 object-right"
            />
          </a>
          <div className="p-4">
            <h3
              className={cn(
                "text-md font-semibold text-gray-800",
                subheadingFont.className
              )}
            >
              2026 Predictions Revealed | Numerology, Sun Energy & Angel Numbers Explained with Monica Kapoor
            </h3>
            <a
              href="https://www.youtube.com/@TheAdyctedShow"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-gray-600 mt-2 hover:text-green-300 transition-colors duration-200",
                paragraphFont.className
              )}
            >
              The Adycted Show
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
