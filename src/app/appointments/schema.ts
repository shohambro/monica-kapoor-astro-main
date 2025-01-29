import { z } from "zod";

export const formSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required",
  }),
  dob: z.string().refine(
    (value) => {
      if (!value) return false;
      const date = new Date(value);
      return !isNaN(date.getTime()) && date >= new Date(1900, 0, 1);
    },
    { message: "Date of birth must be at least 2000-01-01" }
  ),
  timeofbirth: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Invalid time format, must be HH:mm (24-hour format)"
    )
    .refine((value) => {
      const [hours, minutes] = value.split(":").map(Number);
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
    }, "Time must be valid within a 24-hour range"),
  PlaceOfBirth: z.string().min(1, "Place of birth is required"),
  preferredSlot: z.enum(["morning", "day", "evening"], {
    message: "Please select a valid time slot",
  }),
  preferredDate: z.string().refine(
    (value) => {
      if (!value) return false;
      const date = new Date(value);
      const today = new Date();
      return !isNaN(date.getTime()) && date >= today;
    },
    { message: "Preferred date must be today or a future date" }
  ),
  preferredTime: z
    .string()
    .regex(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Invalid time format, must be HH:mm (24-hour format)"
    )
    .refine((value) => {
      const [hours, minutes] = value.split(":").map(Number);
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
    }, "Time must be valid within a 24-hour range"),
  modeOfConsultation: z.enum(["online", "offline"], {
    message: "Please select a valid consultation mode",
  }),
  mobileNumber: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^[0-9]{10}$/, "Invalid mobile number format. Must be 10 digits."),
});


export type FormData = z.infer<typeof formSchema>;