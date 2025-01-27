"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { Montserrat, Philosopher } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { cn } from "@/utils/cn";
import {Dancing_Script } from "next/font/google";

const font = Philosopher({
  subsets:["vietnamese"],
  // style:["italic"],
  weight:["700"]
})

const font_2 = Open_Sans({
  subsets:["greek"],
  style:["italic"],
  weight:["400"]
})

const font_3 = Montserrat({
  subsets:["latin"],
  style:["normal"],
  weight:["700"]
})

function FeaturedCourses() {
  return (
    <div className="py-12  bg-gradient-to-br from-yellow-400 to-orange-500">
      <div>
        <div className="text-center">
          <h2 className={cn("text-base text-green-600 font-bold tracking-wide uppercase",font_3.className)}>
            JAI GURU JI
          </h2>
          <p className={cn("mt-2 text-4xl lg:text-5xl leading-8 font-bold tracking-tight text-[#6a1818] sm:text-4xl",font.className)}>
            Available Services
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center h-auto">
          {/* Numerology */}
          <div className="flex flex-col rounded-[22px] border border-[#6a1818] bg-white dark:bg-white overflow-hidden h-full max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
              <p className={cn("text-lg sm:text-3xl font-semibold text-[#6a1818] mt-2 mb-6  dark:text-[#6a1818]",font.className)}>
                Numerology
              </p>
              <div><Image src="/images/Numerology2.jpg" alt="Numerology2" width={320} height={200} className="h-48 object-cover rounded-md"></Image></div>
              <p className={cn("text-sm mt-4 text-[#6a1818] dark:text-[#6a1818] flex-grow",font_2.className)}>
                Discover the power of numbers and their influence on your life path, relationships, and destiny. Unlock the secrets to balance and harmony through personalized insights.
              </p>
            </div>
          </div>

          {/* Tarot */}
          <div className="flex flex-col rounded-[22px] border border-[#6a1818] bg-white dark:bg-white overflow-hidden h-full max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
              <p className={cn("text-lg sm:text-3xl font-semibold text-[#6a1818] mt-2 mb-6 dark:text-[#6a1818]",font.className)}>
                Tarot Reading
              </p>
              <div><Image src="/images/Tarot2.jpg" alt="Tarot2" width={320} height={200} className="h-48 object-cover rounded-md"></Image></div>
              <p className={cn("text-sm mt-4 text-[#6a1818] dark:text-[#6a1818] flex-grow",font_2.className)}>
                Gain clarity and direction through the art of tarot. Our expert readings provide guidance on love, career, and life&apos;s challenges, revealing the answers you seek.
              </p>
            </div>
          </div>

          {/* Psychic */}
          <div className="flex flex-col rounded-[22px] border border-[#6a1818] bg-white dark:bg-white overflow-hidden h-full max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
              <p className={cn("text-lg sm:text-3xl font-semibold text-[#6a1818] mt-2 mb-6 dark:text-[#6a1818]",font.className)}>
                Psychic Reading
              </p>
              <div><Image src="/images/Psychic2.jpg" alt="Psychic2" width={320} height={200} className="h-48 object-cover rounded-md"></Image></div>
              <p className={cn("text-sm mt-4 text-[#6a1818] dark:text-[#6a1818] flex-grow",font_2.className)}>
                Tap into the unseen and connect with higher realms. Our psychic readings offer deep insights into your present and future, empowering you to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 border-none bg-orange-500 hover:bg-white text-white hover:text-green-300 font-semibold rounded-lg transition duration-300"
        >
          Book A Service
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
