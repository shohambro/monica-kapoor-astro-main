'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '../../../components/Modal'; // Adjust the import path as needed

// Define the type for a Yantra
interface Yantra {
  title: string;
  image: string;
  description: string;
}

const yantras: Yantra[] = [
  { title: 'Vyapar Vriddhi Yantra', image: '/images/VyaparVriddhi.jpg', description: 'Enhances business growth and financial prosperity.' },
  { title: 'Lakshmi Ganesha Yantra', image: '/images/LakshmiGanesha.jpg', description: 'Invokes the blessings of Goddess Lakshmi and Lord Ganesha for wealth and wisdom.' },
  { title: 'Kubera Yantra', image: '/images/Kubera.jpg', description: 'Attracts wealth and financial stability with the blessings of Lord Kubera.' },
  { title: 'Lakshmi Yantra', image: '/images/Lakshmi.jpg', description: 'Dedicated to Goddess Lakshmi, it brings prosperity and abundance.' },
  { title: 'Kamala Yantra', image: '/images/Kamala.jpg', description: 'Removes obstacles and attracts divine blessings for spiritual growth.' },
  { title: 'Shri Sukta Yantra', image: '/images/ShriSukta.jpg', description: 'Aids in achieving material and spiritual wealth through Vedic mantras.' },
  { title: 'Chauntisa Yantra', image: '/images/Chauntisa.jpg', description: 'Enhances mental clarity and spiritual balance.' },
  { title: 'Ganesha Yantra', image: '/images/Ganesha.jpg', description: 'Removes obstacles and ensures success in all endeavors.' },
  { title: 'Shiva Yantra', image: '/images/Shiva.jpg', description: 'Offers protection and inner strength through Lord Shiva’s energy.' },
  { title: 'Rama Yantra', image: '/images/Rama.jpg', description: 'Promotes righteousness and harmony by invoking Lord Rama’s blessings.' },
  { title: 'Hanuman Yantra', image: '/images/Hanuman.jpg', description: 'Provides strength, courage, and protection from negative energies.' },
  { title: 'Vishnu Yantra', image: '/images/Vishnu.jpg', description: 'Brings stability, harmony, and divine blessings of Lord Vishnu.' },
  { title: 'Krishna Yantra', image: '/images/Krishna.jpg', description: 'Enhances love, devotion, and spiritual upliftment with Lord Krishna’s blessings.' },
  { title: 'Saraswati Yantra', image: '/images/Saraswati.jpg', description: 'Boosts knowledge, wisdom, and creativity with the blessings of Goddess Saraswati.' },
  { title: 'Dasha Mahavidya Yantra', image: '/images/DashaMahavidya.jpg', description: 'Balances energies and provides holistic growth through the ten wisdom goddesses.' },
  { title: 'Durga Yantra', image: '/images/Durga.jpg', description: 'Protects from evil influences and grants courage and victory.' },
];

const Yantras = () => {
  const [selectedYantra, setSelectedYantra] = useState<Yantra | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (yantra: Yantra) => {
    setSelectedYantra(yantra);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedYantra(null);
  };

  const handleAddToCart = () => {
    if (selectedYantra) {
      alert(`${selectedYantra.title} has been added to your cart.`);
    }
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36">
      <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-12 text-[#6a1818]">
        Yantras
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {yantras.map((yantra, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg w-80 overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Image
              src={yantra.image}
              alt={yantra.title}
              width={320}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
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
          description={selectedYantra.description}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Yantras;
