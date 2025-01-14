'use client';

import Image from 'next/image';
import React from 'react';
import ProfilePicture from "../../public/images/ProfilePicture.jpg";
import HeroBack2 from "../../public/images/HeroBack2.jpg";
import GuruJi from "../../public/images/GuruJiPic.jpg";
import Numerology from "../../public/images/Numerology.jpg";
import Tarot from "../../public/images/Tarot.jpg";
import Psychic from "../../public/images/Psychic.jpg";
import Link from 'next/link';
// import { url } from 'inspector';

function page() {
  const services = [
    {
      title: 'Stones',
      description: 'Unlock the mysteries of numbers and their influence on your life with our expert numerology service.',
      image: '/images/Numerology.jpg', // Replace with your image path
      link: '/products/stones'
    },
    {
      title: 'Bracelets',
      description: 'Discover insights into your past, present, and future with our personalized tarot readings.',
      image: '/images/Tarot.jpg', // Replace with your image path
      link: '/products/bracelets'
    },
    {
      title: 'Yantras',
      description: 'Gain clarity and guidance from our experienced psychics to navigate life’s challenges.',
      image: '/images/Psychic.jpg', // Replace with your image path
      link: '/products/yantras'
    },
  ];

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-12 text-[#6a1818]">
        Products Available
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-80 transform hover:scale-105 transition-all duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={320}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {service.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
              <button  className="mt-6 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-300">
                <Link href={service.link}>View More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
