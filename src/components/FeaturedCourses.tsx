"use client";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

function FeaturedCourses() {
  return (
    <div className="py-12 bg-white">
      <div>
        <div className="text-center">
          <h2 className="text-base text-green-300 font-semibold tracking-wide uppercase">
            JAI GURU JI
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#6a1818] sm:text-4xl">
            Available Services
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center h-auto">
          {/* Service Card */}
          <div className="flex flex-col rounded-[22px] border border-[#6a1818] bg-white dark:bg-[#f7b335] overflow-hidden h-full max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-[#6a1818]">
                Numerology
              </p>
              <p className="text-sm text-[#6a1818] dark:text-[#6a1818] flex-grow">
                Discover the power of numbers and their influence on your life path, relationships, and destiny. Unlock the secrets to balance and harmony through personalized insights.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="flex flex-col rounded-[22px] border border-[#6a1818] bg-white dark:bg-[#f7b335] overflow-hidden h-full max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-[#6a1818]">
                Tarot Reading
              </p>
              <p className="text-sm text-[#6a1818] dark:text-[#6a1818] flex-grow">
                Gain clarity and direction through the art of tarot. Our expert readings provide guidance on love, career, and life&apos;s challenges, revealing the answers you seek.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="flex flex-col rounded-[22px] border border-[#6a1818] bg-white dark:bg-[#f7b335] overflow-hidden h-full max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
              <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-[#6a1818]">
                Psychic Reading
              </p>
              <p className="text-sm text-[#6a1818] dark:text-[#6a1818] flex-grow">
                Tap into the unseen and connect with higher realms. Our psychic readings offer deep insights into your present and future, empowering you to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 border  bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-300"
        >
          Book A Service
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
