import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  onAddToCart: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, title, description, onAddToCart }) => {

 
  if (!isOpen) return null;

  return (
    <div  className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute right-2 text-4xl text-red-500 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <div className="p-6 text-center">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-2xl text-black font-bold mt-4">{title}</h2>
          <p className="text-black mt-2">{description}</p>
          <button
            onClick={onAddToCart}
            className="mt-6 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
