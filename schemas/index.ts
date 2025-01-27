import { z } from "zod";

// Service Prices for Appointment
const servicePrices = {
  "Numerology": 500,
  "Tarot Reading": 700,
  "Psychic Reading": 900,
  "Magic Spells / Pujas": 1500,
};

// Magic Spell Prices for Appointment
const magicSpellPrices = {
  "Cleanse and Lock Your Aura": 1200,
  "Evil-Eye-Nazar-Lagna": 800,
  "Evil Eye (Nazar Lagna) for Pet": 600,
  "Spiritual Spells and Puja": 1500,
};

// Appointment Form Schema
export const AppointmentFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters"),

  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),

  email: z
    .string()
    .email("Invalid email address"),

  dob: z
    .string()
    .regex(/^\d{2}-\d{2}-\d{4}$/, "Date of birth must be in DD-MM-YYYY format"),

  timeOfBirth: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time of birth must be in HH:mm format"),

  placeOfBirth: z
    .string()
    .min(2, "Place of birth must be at least 2 characters long")
    .max(100, "Place of birth must be less than 100 characters"),

  service: z
    .enum(Object.keys(servicePrices) as [keyof typeof servicePrices]),

  magicSpell: z
    .string()
    .optional()
    .refine(
      (value) => value === undefined || Object.keys(magicSpellPrices).includes(value),
      { message: "Invalid magic spell selected" }
    ),

  price: z
    .number()
    .positive("Price must be a positive number"),
});
