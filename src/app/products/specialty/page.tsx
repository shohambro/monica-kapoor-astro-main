"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "../../../components/Modal";
import { Philosopher, Open_Sans } from 'next/font/google';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

interface Specialty {
  title: string;
  description: string;
  image: string;
}

const specialties: Specialty[] = [
  {
    title: "Divine Rose Attar",
    description:
      "Astrology posits that specific perfumes, such as Divine Rose Attar, can ameliorate various life challenges. For instance, offering rose perfume to deities is believed to facilitate successful love marriages. Furthermore, applying sandalwood perfume to a brown purse on the waxing moon's first day is purported to enhance financial stability. Additionally, offering Harsringar perfume to Lord Vishnu on Thursdays is considered efficacious in mitigating marital discord. These aromatic remedies, deeply rooted in ancient wisdom, demonstrate the profound connection between fragrance, devotion, and the harmonious unfolding of life's events.",
    image: "/images/RoseAttar.jpg",
  },
  {
    title: "Divine Chandan Attar",
    description:
      "Astrology suggests that applying sandalwood perfume daily can mitigate the adverse influences of Rahu, particularly during its Mahadasha. Sandalwood, intrinsically linked to the Moon, promotes emotional equilibrium and mental tranquility. This fragrant remedy not only alleviates stress but also fosters a sense of peace and inner harmony.",
    image: "/images/ChandanAttar.jpg",
  },
];

const OurSpecialty = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (specialty: Specialty) => {
    setSelectedSpecialty(specialty);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpecialty(null);
  };

  const handleAddToCart = () => {
    if (selectedSpecialty) {
      alert(`${selectedSpecialty.title} has been added to your cart.`);
    }
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className={`${philosopher.className} text-4xl md:text-6xl text-center font-bold mb-12 text-[#6a1818]`}>
        Our Specialty
      </h1>
      <div className="flex flex-wrap justify-center gap-20 p-8">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-3 text-center rounded-2xl shadow-lg w-80 overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Image
              src={specialty.image}
              alt={`Image of ${specialty.title}`}
              width={320}
              height={200}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="p-6">
              <h2 className={`${philosopher.className} text-lg md:text-2xl text-center font-bold mb-8 text-[#6a1818]`}>
                {specialty.title}
              </h2>
              <button
                onClick={() => openModal(specialty)}
                className="mt-6 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className={`${openSans.className} max-w-2xl mx-auto mt-12 p-6 bg-white/90 rounded-lg shadow-lg text-center`}>
        <p className="text-gray-700 text-lg">
          Note - We have a wide range of attar (perfumes) available. If you are interested in purchasing any of our fragrances, please feel free to contact us directly via email.
        </p>
      </div>

      {selectedSpecialty && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedSpecialty.image}
          title={selectedSpecialty.title}
          description={selectedSpecialty.description}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default OurSpecialty;