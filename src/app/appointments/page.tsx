"use client";

import React, { useState } from "react";
import Link from "next/link";

function BookAppointmentForm() {
  const servicePrices: { [key: string]: number } = {
    "Numerology": 500,
    "Tarot Reading": 700,
    "Psychic Reading": 900,
    "Magic Spells / Pujas": 1500,
  };

  const magicSpellOptions: { [key: string]: number } = {
    "Cleanse and Lock Your Aura": 1200,
    "Evil-Eye-Nazar-Lagna": 800,
    "Evil Eye (Nazar Lagna) for Pet": 600,
    "Spiritual Spells and Puja": 1500,
  };

  const [selectedService, setSelectedService] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [selectedMagicSpell, setSelectedMagicSpell] = useState<string>("");
  const [magicSpellPrice, setMagicSpellPrice] = useState<number | null>(null);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const service = e.target.value;
    setSelectedService(service);
    setPrice(servicePrices[service]);
    setSelectedMagicSpell("");
    setMagicSpellPrice(null);
  };

  const handleMagicSpellChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const spell = e.target.value;
    setSelectedMagicSpell(spell);
    setMagicSpellPrice(magicSpellOptions[spell]);
  };

  return (
    <div className="h-[50rem] w-full mt-3 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl text-[#6a1818] font-bold text-center mb-6">
          Appointment Form
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Enter your Mobile Number"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Date
            </label>
            <input
              type="date"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Time
            </label>
            <input
              type="time"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-black">
              Address
            </label>
            <textarea
              placeholder="Enter your address"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              rows={3}
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Service
            </label>
            <select
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              onChange={handleServiceChange}
            >
              <option value="">Select Service</option>
              {Object.keys(servicePrices).map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          {price !== null && (
            <div>
              <label className="block text-sm font-medium text-black">
                Price
              </label>
              <input
                type="text"
                value={price}
                readOnly
                className="w-full border text-black border-gray-300 rounded-lg p-2"
              />
            </div>
          )}
          {selectedService === "Magic Spells / Pujas" && (
            <>
              <div>
                <label className="block text-sm font-medium text-black">
                  Magic Spell / Puja
                </label>
                <select
                  className="w-full border text-black border-gray-300 rounded-lg p-2"
                  onChange={handleMagicSpellChange}
                >
                  <option value="">Select Magic Spell / Puja</option>
                  {Object.keys(magicSpellOptions).map((spell) => (
                    <option key={spell} value={spell}>
                      {spell}
                    </option>
                  ))}
                </select>
              </div>
              {magicSpellPrice !== null && (
                <div>
                  <label className="block text-sm font-medium text-black">
                    Magic Spell / Puja Price
                  </label>
                  <input
                    type="text"
                    value={magicSpellPrice}
                    readOnly
                    className="w-full border text-black border-gray-300 rounded-lg p-2"
                  />
                </div>
              )}
            </>
          )}
          <div className="sm:col-span-2 flex justify-center">
          <Link href={"/personal"}>
            <button
              type="submit"
              className="w-full p-3 bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-300 ease-in-out"
            >
              Book an Appointment
            </button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookAppointmentForm;
