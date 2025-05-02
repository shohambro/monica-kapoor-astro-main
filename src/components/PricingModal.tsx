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
            <h3 className="text-xl font-bold text-[#6a1818] mt-4 mb-4">Pricing - Voice Call</h3>
            <ul>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Angel Guidance:</span> ₹199/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Divine Guidance:</span> ₹199/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Results Guidance:</span> ₹199/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Reunion:</span> ₹599/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Job Guidance:</span> ₹599/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Marriage Guidance:</span> ₹599/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Ex Partner Come Back:</span> ₹599/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">15 Minutes:</span> ₹663/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">30 Minutes:</span> ₹999/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">60 Minutes:</span> ₹4460/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Name Correction:</span> ₹4100/-
  </li>
  <li className="text-[#6a1818]">
    <span className="font-semibold">Overall Session:</span> ₹5550/-
  </li>
</ul>

          </div>
        </div>
      
    </div>
  );
};

export default PricingModal;
