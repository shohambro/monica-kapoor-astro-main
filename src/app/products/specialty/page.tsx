"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "../../../components/Modal"; // Update this path if Modal is in a different directory.

const specialties = [
  {
    title: "Divine Rose Ittar",
    description: "It is believed that the Divine Rose Ittar / Perfume will end financial problems. According to astrology, wear white clothes and offer rose perfume at any deity place. This can remove obstacles in your love marriage.",
    image: "/images/RoseAttar.jpg",
  },
  {
    title: "Divine Chandan Ittar",
    description: "Sandalwood helps balance the energy of the Moon. In Vedic astrology, the Moon influences our emotions and mind. Sandalwood is associated with the Moon and is known for bringing peace and emotional stability. Applying sandalwood perfume can calm your mind and reduce stress.",
    image: "/images/ChandanAttar.jpg",
  },
];

const OurSpecialty = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (specialty: any) => {
    setSelectedSpecialty(specialty);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpecialty(null);
  };

  const handleAddToCart = () => {
    alert(`${selectedSpecialty?.title} has been added to your cart.`);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-12 text-[#6a1818]">
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
              alt={specialty.title}
              width={320}
              height={200}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="p-6">
              <h2 className="text-xl text-nowrap font-bold text-gray-800 dark:text-white mb-4">
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
