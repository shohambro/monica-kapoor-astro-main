import React, { useState } from "react";

interface PricingModalProps {
    onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({
  onClose,
}) => {
  

  return (
    <div className="flex justify-center items-center">
      
       
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold text-[#6a1818] mb-4">Pricing - Voice Notes</h3>
            <ul className="space-y-2">
              <li className="text-black">
                <span className="font-semibold">1 Question:</span> ₹555
              </li>
              <li className="text-black">
                <span className="font-semibold">2 Questions:</span> ₹777
              </li>
              <li className="text-black">
                <span className="font-semibold">3 Questions:</span> ₹999
              </li>
              <li className="text-black">
                <span className="font-semibold">4 Questions:</span> ₹1111
              </li>
              <li className="text-black">
                <span className="font-semibold">5 Questions:</span> ₹1313
              </li>
              <li className="text-black">
                <span className="font-semibold">6 Questions:</span> ₹1515
              </li>
              <li className="text-black">
                <span className="font-semibold">7 Questions:</span> ₹1717
              </li>
              <li className="text-black">
                <span className="font-semibold">8 Questions:</span> ₹1919
              </li>
              <li className="text-black">
                <span className="font-semibold">9 Questions:</span> ₹2121
              </li>
              <li className="text-black">
                <span className="font-semibold">10 Questions:</span> ₹2222
              </li>
              <li className="text-black">
                <span className="font-semibold">Unlimited Questions:</span> ₹3333
              </li>
            </ul>
            <h3 className="text-xl font-bold text-[#6a1818] mt-4 mb-4">Pricing - Voice Call</h3>
            <ul>
              <li className="text-black">
                <span className="font-semibold">30 Minutes:</span> ₹3333
              </li>
              <li className="text-black">
                <span className="font-semibold">1 Hour:</span> ₹4444
              </li>
              <li className="text-black">
                <span className="font-semibold">2 Hours:</span> ₹5555
              </li>
            </ul>
          </div>
        </div>
      
    </div>
  );
};

export default PricingModal;
