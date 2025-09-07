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
            <h3 className="text-xl font-bold text-[#6a1818] mt-4 mb-4 text-center">Consultation Structure</h3>
            
            <div className="mb-4">
              <h4 className="font-bold text-[#6a1818] mb-2 text-center">🔹 Question Wise 🔹</h4>
              <ul>
                <li className="text-black text-center">
                  <span className="font-semibold">Question-Wise Consultation:</span> ₹1,650 (Up To 3 Questions)
                </li>
                <li className="text-black text-center">
                  <span className="font-semibold">Package Of 5 Questions:</span> ₹3,300 (Valid 1 Month)
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-[#6a1818] mb-2 text-center">🔹 Hourly Format 🔹</h4>
              <ul>
                <li className="text-black text-center">
                  <span className="font-semibold">30 Minutes Session:</span> ₹2,400
                </li>
                <li className="text-black text-center">
                  <span className="font-semibold">60 Minutes Session:</span> ₹3,600
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-bold text-[#6a1818] mb-2 text-center">🔹 Long-Term Regular Clients 🔹</h4>
              <ul>
                <li className="text-black text-center">
                  <span className="font-semibold">Monthly Package:</span> ₹4,500 (Up To 2 Sessions/Month + WhatsApp Support)
                </li>
              </ul>
            </div>

          </div>
        </div>
      
    </div>
  );
};

export default PricingModal;