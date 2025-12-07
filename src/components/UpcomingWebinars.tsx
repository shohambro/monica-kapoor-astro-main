"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat, Philosopher } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { cn } from "@/utils/cn";
import { Dancing_Script } from "next/font/google";

const font = Philosopher({
  subsets: ["vietnamese"],
  weight: ["700"],
});

const font_2 = Open_Sans({
  subsets: ["greek"],
  style: ["italic"],
  weight: ["400"],
});

const font_3 = Montserrat({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["700"],
});

function BookAppointmentForm() {
  return (
    <div className="h-[50rem] w-full bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 text-center">
        {/* Heading */}
        <h2
          className={cn(
            "text-4xl text-[#6a1818] text-center mb-6",
            font.className
          )}
        >
          Connect on AstroTalk
        </h2>

        {/* Image Section - Two Square Images */}
        <div className="w-full flex flex-col items-center gap-6 mb-6">
          <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/astrotalk.jpeg"
              alt="Image 1"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-32 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/atprofile.jpeg"
              alt="Image 2"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Paragraph Section */}
        <p className="text-[#6a1818] italic text-lg leading-relaxed mb-6">
          She also has an active professional profile on Astrotalk where you can
          connect directly for personalized guidance and spiritual
          consultations. Through this platform, you can easily book sessions,
          chat, or call to receive accurate insights and remedies from anywhere
          in the world. If you are looking for authentic astrological guidance
          online, you can explore her Astrotalk profile by clicking the button
          below.
        </p>

        {/* Button with Link */}
        <Link
          href="https://chat.astrotalk.com/BnlV/j0phqq83?slug=Monica%20Kapoor"
          target="_blank"
        >
          <button className="w-full p-3 bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-300 ease-in-out">
            Visit Astrotalk Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookAppointmentForm;
