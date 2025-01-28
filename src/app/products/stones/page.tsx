"use client";

import Image from "next/image";
import React from "react";

const Stones = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36 flex flex-col items-center">
      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <Image
            src="/images/Gemstone1.jpg" // Replace with the actual image path
            alt="Placeholder Image 1"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/images/Gemstone2.jpg" // Replace with the actual image path
            alt="Placeholder Image 2"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <Image
            src="/images/Gemstone3.jpg" // Replace with the actual image path
            alt="Placeholder Image 3"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-75 max-w-3xl text-center">
        <p className="text-[#6a1818] dark:text-white text-3xl font-medium">
          Please note: We have intentionally not uploaded stones for sale on our website. This is because we aim to provide personalized recommendations tailored to your birth date and Janam Rashi. If you are interested in purchasing stones, kindly connect with us via email for guidance and recommendations.
        </p>
      </div>
    </div>
  );
};

export default Stones;
