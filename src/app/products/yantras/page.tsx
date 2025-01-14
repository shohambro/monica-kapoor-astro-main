'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '../../../components/Modal'; // Adjust the import path as needed

const yantras = [
  { title: 'Vyapar Vriddhi Yantra', image: '/images/VyaparVriddhiYantra.jpg' },
  { title: 'Lakshmi Ganesha Yantra', image: '/images/LakshmiGaneshaYantra.jpg' },
  { title: 'Kubera Yantra', image: '/images/KuberaYantra.jpg' },
  { title: 'Lakshmi Yantra', image: '/images/LakshmiYantra.jpg' },
  { title: 'Kamala Yantra', image: '/images/KamalaYantra.jpg' },
  { title: 'Shri Sukta Yantra', image: '/images/ShriSuktaYantra.jpg' },
  { title: 'Chauntisa Yantra', image: '/images/ChauntisaYantra.jpg' },
  { title: 'Ganesha Yantra', image: '/images/GaneshaYantra.jpg' },
  { title: 'Kubera Yantra', image: '/images/KuberaYantra.jpg' },
  { title: 'Shiva Yantra', image: '/images/ShivaYantra.jpg' },
  { title: 'Rama Yantra', image: '/images/RamaYantra.jpg' },
  { title: 'Hanuman Yantra', image: '/images/HanumanYantra.jpg' },
  { title: 'Vishnu Yantra', image: '/images/VishnuYantra.jpg' },
  { title: 'Krishna Yantra', image: '/images/KrishnaYantra.jpg' },
  { title: 'Saraswati Yantra', image: '/images/SaraswatiYantra.jpg' },
  { title: 'Dasha Mahavidya Yantra', image: '/images/DashaMahavidyaYantra.jpg' },
  { title: 'Durga Yantra', image: '/images/DurgaYantra.jpg' },
];

const Yantras = () => {
  const [selectedYantra, setSelectedYantra] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (yantra) => {
    setSelectedYantra(yantra);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedYantra(null);
  };

  const handleAddToCart = () => {
    alert(`${selectedYantra?.title} has been added to your cart.`);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36 ">
      <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-12 text-[#6a1818]">
        Yantras
      </h1>
      <div className="flex-wrap justify-center gap-6 px-4 grid grid-cols-1 md:grid-cols-4">
        {yantras.map((yantra, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-80 transform hover:scale-105 transition-all duration-300"
          >
            <Image
              src={yantra.image}
              alt={yantra.title}
              width={320}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl text-nowrap font-bold text-gray-800 dark:text-white">
                {yantra.title}
              </h2>
              <button
                onClick={() => openModal(yantra)}
                className="mt-6 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedYantra && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedYantra.image}
          title={selectedYantra.title}
          description="Add a description here if needed." // Add unique descriptions if available
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Yantras;
