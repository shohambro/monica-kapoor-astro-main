"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Philosopher, Open_Sans } from "next/font/google";
import { cn } from "@/utils/cn";

const headingFont = Philosopher({
  subsets: ["latin"],
  weight: ["700"],
});

const paragraphFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

function page() {
  const services = [
    {
      title: "Numerology",
      description:
        "Unlock the mysteries of numbers and their influence on your life with our expert numerology service.",
      image: "/images/Numerology.jpg",
      price: 999,
    },
    {
      title: "Tarot Reading",
      description:
        "Discover insights into your past, present, and future with our personalized tarot readings.",
      image: "/images/Tarot.jpg",
      price: 999,
    },
    {
      title: "Psychic Reading",
      description:
        "Gain clarity and psychic guidance to navigate life challenges and unlock your inner potential.",
      image: "/images/Psychic1.jpg",
      price: 999,
    },
    {
      title: "Magic Spells / Pujas",
      description:
        "Experience powerful rituals and transformative spells tailored to bring peace and prosperity into your life.",
      image: "/images/MagicSpells.jpg",
      price: 1455,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1
        className={cn(
          "text-4xl md:text-6xl text-center font-bold mb-12 text-[#6a1818]",
          headingFont.className
        )}
      >
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-80 p-3 transform hover:scale-105 transition-all duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={384}
              height={240}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-64">
              <div>
                <h2
                  className={cn(
                    "text-2xl font-bold text-gray-800 dark:text-white",
                    headingFont.className
                  )}
                >
                  {service.title}
                </h2>
                <p
                  className={cn(
                    "mt-4 text-gray-600 dark:text-gray-300 text-sm",
                    paragraphFont.className
                  )}
                >
                  {service.description}
                </p>
              </div>
              <Link href="/appointments">
                <button className="mt-6 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-300">
                  Book Service @ {service.price}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
