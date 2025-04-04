"use client";
import z from "zod";
import { formSchema } from "@/app/appointments/schema";
import { sendAppointmentEmail } from "@/utils/mail";

export const Appointment = async (data: z.infer<typeof formSchema>) => {
  // Validate the form data using Zod schema
  const validatedFields = formSchema.safeParse(data);
  console.log(validatedFields.data);
  // If validation fails, return an error message
  if (!validatedFields.success) {
    return {
      error: 'Invalid form data',
      details: validatedFields.error.errors, // Capture specific validation errors
    };
  }

  // Destructure validated data for use in email sending
 const { Name,email, gender, dob, mobileNumber, timeofbirth, PlaceOfBirth, preferredSlot, preferredDate, preferredTime, modeOfConsultation} =validatedFields.data;

  try {
    // Attempt to send appointment email
    await sendAppointmentEmail(Name, email, gender, dob, mobileNumber, timeofbirth, PlaceOfBirth, preferredSlot, preferredDate, preferredTime, modeOfConsultation);
    
    return {
      success: 'Form submitted successfully',
    };
  } catch (err) {
    console.error("Error while sending appointment email:", err);
    return {
      error: 'Failed to send appointment email. Please try again later.',
    };
  }
};
