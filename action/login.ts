"use client";
import z from "zod";
import { formSchema } from "@/app/appointments/page";
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
 const { Name,email, gender, dob, timeofbirth, PlaceOfBirth} =validatedFields.data;

  try {
    // Attempt to send appointment email
    await sendAppointmentEmail(Name, email, gender, dob, timeofbirth, PlaceOfBirth);
    
    // Return success message if the email is sent
    return {
      success: 'Form submitted successfully',
    };
  } catch (err) {
    // Catch any errors that occur while sending the email
    console.error("Error while sending appointment email:", err);
    return {
      error: 'Failed to send appointment email. Please try again later.',
    };
  }
};
