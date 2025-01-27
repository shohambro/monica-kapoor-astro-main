import React from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  onAddToCart?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  image,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold text-gray-800 mt-4">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
