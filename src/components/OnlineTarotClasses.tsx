"use client";

import Image from "next/image";
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

function OnlineTarotClasses() {
  return (
    <div className="py-16 bg-gradient-to-br from-yellow-400 to-orange-500">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={cn(
              "text-4xl lg:text-5xl font-bold text-[#6a1818]",
              font.className
            )}
          >
            Online Tarot Classes
          </h2>
          <p
            className={cn(
              "mt-3 text-sm uppercase text-green-600 tracking-wide",
              font_3.className
            )}
          >
            Learn from anywhere in the world
          </p>
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="w-full aspect-square border-2 border-[#6a1818] rounded-xl overflow-hidden bg-white">
            <Image
              src="/images/photo6.jpeg"
              alt="Tarot Class 1"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full aspect-square border-2 border-[#6a1818] rounded-xl overflow-hidden bg-white">
            <Image
              src="/images/MandalaLogo.png"
              alt="Tarot Class 2"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full aspect-square border-2 border-[#6a1818] rounded-xl overflow-hidden bg-white">
            <Image
              src="/images/certificate.jpeg"
              alt="Tarot Class 3"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Paragraph */}
        <div className="max-w-3xl mx-auto text-center">
          <p
            className={cn(
              "text-xl lg:text-xl font-bold text-[#6a1818]",
              font_2.className
            )}
          >
            Awaken Your Mystic Power – Attract Abundance, Fame & Global
            Mastery! "Mystic Divine Blessings Tarot Institute by Monica Kapoor"
            is officially launched! Start your professional and certified Tarot
            Training today, guided by Guruji’s blessings. Dive deeper into
            intuition, healing, and Tarot Reading to unlock your potential. Step
            Into the World of Tarot – Start Your Learning Today! What You Will
            Receive: Divine Blessings + Professional Certification. Classes open
            for students worldwide. Limited Seats. DM on WhatsApp to reserve your seat
            today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnlineTarotClasses;
