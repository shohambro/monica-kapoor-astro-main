"use client";

import React from "react";
import Image from "next/image";
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

const services = [
  {
    title: "Stones",
    description:
      "Discover nature's treasures - handpicked precious and semi-precious stones that combine timeless beauty with powerful energetic properties.",
    image: "/images/Stones.jpg",
    link: "/products/stones",
  },
  {
    title: "Bracelets",
    description:
      "Wear the cosmos on your wrist with our custom-designed zodiac bracelets, featuring carefully selected stones aligned with your astrological energies.",
    image: "/images/LapisLazuli.jpg",
    link: "/products/bracelets",
  },
  {
    title: "Yantras",
    description:
      "Sacred geometric patterns meticulously crafted to harness cosmic energies, helping manifest your goals and enhance spiritual practices.",
    image: "/images/Saraswati.jpg",
    link: "/products/yantras",
  },
  {
    title: "Our Specialty",
    description:
      "Pure, alcohol-free botanical perfumes crafted through traditional distillation, capturing the sacred essence of flowers, herbs, and precious woods.",
    image: "/images/ChandanAttar.png",
    link: "/products/specialty",
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1
        className={cn(
          "text-4xl md:text-6xl text-center font-bold mb-12 text-[#6a1818]",
          headingFont.className
        )}
      >
        Products Available
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg overflow-hidden w-80 transform hover:scale-105 transition-all duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={320}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2
                className={cn(
                  "text-2xl font-bold text-[#6a1818] dark:text-white",
                  headingFont.className
                )}
              >
                {service.title}
              </h2>
              <p
                className={cn(
                  "mt-4 text-[#6a1818] dark:text-gray-300 text-sm",
                  paragraphFont.className
                )}
              >
                {service.description}
              </p>
              <Link href={service.link || "#"}>
                <button className="mt-6 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
