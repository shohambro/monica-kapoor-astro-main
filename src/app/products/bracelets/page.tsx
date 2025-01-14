'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../../../components/Modal';

interface Bracelet {
  title: string;
  description: string;
  image: string;
}

const bracelets: Bracelet[] = [
  {
    title: 'Amethyst Bracelet',
    description: 'A stunning purple quartz crystal, known as the stone of clarity, symbolizing purification, inspiration, and protection.',
    image: '/images/Amethyst.jpg',
  },
  {
    title: 'Rose Quartz Bracelet',
    description: 'The stone of love, with its feminine pink hue, symbolizing emotional healing, harmony, and calm energy.',
    image: '/images/RoseQuartz.jpg',
  },
  {
    title: 'Citrine Bracelet',
    description: 'A yellow-orange quartz crystal, symbolizing joy, positivity, and wealth while promoting energy balance.',
    image: '/images/Citrine.jpg',
  },
  {
    title: 'Black Tourmaline Bracelet',
    description: 'The ultimate stone of protection, symbolizing security, balance, and grounding energy.',
    image: '/images/BlackTourmaline.jpg',
  },
  {
    title: 'Jade Bracelet',
    description: 'A green stone of prosperity, symbolizing success, purity, and vitality, while promoting balance and well-being.',
    image: '/images/Jade.jpg',
  },
  {
    title: 'Auralite 23 Bracelet',
    description: 'A rare Amethyst with 23 elements, symbolizing vitality, clarity, and whole-body healing.',
    image: '/images/Auralite23.jpg',
  },
  {
    title: 'Jasper Bracelet',
    description: 'The stone of balance, symbolizing stability, strength, and negativity absorption with nurturing energy.',
    image: '/images/Jasper.jpg',
  },
  {
    title: 'Apatite Bracelet',
    description: 'A multi-hued stone of manifestation, symbolizing inspiration, clarity, and enhanced communication.',
    image: '/images/Apatite.jpg',
  },
  {
    title: 'Kunzite Bracelet',
    description: 'A pink crystal of emotion, symbolizing love, tranquility, and emotional healing.',
    image: '/images/Kunzite.jpg',
  },
  {
    title: 'Aquamarine Bracelet',
    description: 'A calming blue gemstone, symbolizing serenity, intuition, and mental clarity while reducing stress.',
    image: '/images/Aquamarine.jpg',
  },
  {
    title: 'Tiger Eye Bracelet',
    description: 'A chatoyant quartz stone symbolizing confidence, willpower, and protection while attracting good luck and balance.',
    image: '/images/TigerEye.jpg',
  },
  {
    title: 'Lapis Lazuli Bracelet',
    description: 'A celestial blue stone of wisdom, symbolizing truth, inspiration, and self-awareness while enhancing inner peace.',
    image: '/images/LapisLazuli.jpg',
  },
  {
    title: 'Moonstone Bracelet',
    description: 'A pearly stone symbolizing hope and sensitivity, believed to soothe the mind and balance emotions.',
    image: '/images/Moonstone.jpg',
  },
  {
    title: 'Amazonite Bracelet',
    description: 'A blue-green stone of truth, symbolizing harmony and emotional healing while calming the brain and nervous system.',
    image: '/images/Amazonite.jpg',
  },
  {
    title: 'Fluorite Bracelet',
    description: 'A colorful crystal symbolizing peace and mindfulness, believed to neutralize negativity and boost health.',
    image: '/images/Fluorite.jpg',
  },
  {
    title: 'Aventurine Bracelet',
    description: 'A green quartz symbolizing intellect and optimism, believed to attract good luck and mitigate electromagnetic radiation.',
    image: '/images/Aventurine.jpg',
  },
  {
    title: 'Angelite Bracelet',
    description: 'A glacier-blue stone symbolizing peace and harmony, believed to enhance spiritual awareness and protection.',
    image: '/images/Angelite.jpg',
  },
  {
    title: 'Seven Chakras Bracelet',
    description: 'Representing the body’s energy points, symbolizing balance and alignment for a stress-free, abundant life.',
    image: '/images/SevenChakras.jpg',
  },
  {
    title: 'Agate Bracelet',
    description: 'A striped white-brown stone symbolizing harmony and grounding while calming the mind and healing negativity.',
    image: '/images/Agate.jpg',
  },
  {
    title: 'Rutilated Red Copper Quartz',
    description: 'A quartz with needle-like inclusions, symbolizing development, freedom, and happiness while promoting goal-oriented thinking.',
    image: '/images/RutilatedRed.jpg',
  },
];

const Bracelets = () => {
  const [selectedBracelet, setSelectedBracelet] = useState<Bracelet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (bracelet: Bracelet) => {
    setSelectedBracelet(bracelet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBracelet(null);
  };

  const handleAddToCart = () => {
    if (selectedBracelet) {
      alert(`${selectedBracelet.title} has been added to your cart.`);
    }
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-12 text-[#6a1818]">
        Bracelets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {bracelets.map((bracelet, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg w-80 overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Image
              src={bracelet.image}
              alt={bracelet.title}
              width={320}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {bracelet.title}
              </h2>
              <button
                onClick={() => openModal(bracelet)}
                className="mt-6 w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedBracelet && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedBracelet.image}
          title={selectedBracelet.title}
          description={selectedBracelet.description}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Bracelets;
