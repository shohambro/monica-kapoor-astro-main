'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../../../components/Modal';
import { Philosopher, Open_Sans } from 'next/font/google';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

interface Yantra {
  title: string;
  image: string;
  description: string;
}

const yantras: Yantra[] = [
  { title: 'Vyapar Vriddhi Yantra', image: '/images/VyaparVriddhi.jpg', description: 'Enhances business growth and financial prosperity.' },
  { title: 'Lakshmi Ganesha Yantra', image: '/images/LakshmiGanesha.jpg', description: 'Invokes the blessings of Goddess Lakshmi and Lord Ganesha for wealth and wisdom.' },
  { title: 'Kuber Yantra', image: '/images/Kubera.jpg', description: 'Attracts wealth and financial stability with the blessings of Lord Kubera.' },
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
      <h1 className={`${philosopher.className} text-4xl md:text-6xl text-center font-bold mb-12 text-[#6a1818]`}>
        Yantras
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {yantras.map((yantra, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col"
          >
            <Image
              src={yantra.image}
              alt={yantra.title}
              width={320}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow">
              <h2 className={`${philosopher.className} text-lg md:text-2xl text-center font-bold mb-8 text-[#6a1818]`}>
                {yantra.title}
              </h2>
            </div>
            <button
              onClick={() => openModal(yantra)}
              className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-b-2xl"
            >
              Buy Now
            </button>
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
