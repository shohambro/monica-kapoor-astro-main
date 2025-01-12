'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function ContactUsForm() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 py-12 pt-36 relative">
      {/* Background */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Form Content */}
      <div className="max-w-2xl mx-auto p-4 relative z-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-6 text-[#6a1818]">
          Personal Details
        </h1>
        <p className="text-[#6a1818] text-center mb-8">
          Fill out the details below for a personalized and accurate guidance.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-gray-50 text-black placeholder:text-gray-600"
            required
          />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-gray-50 text-black placeholder:text-gray-600"
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-gray-50 text-black placeholder:text-gray-600"
            required
          />
          <input
            type="time"
            name="timeOfBirth"
            value={formData.timeOfBirth}
            onChange={handleChange}
            placeholder="Time of Birth"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-gray-50 text-black placeholder:text-gray-600"
            required
          />
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            placeholder="Place of Birth"
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-gray-50 text-black"
            required
          />
          <button
            type="submit"
            className="w-full p-4 bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
