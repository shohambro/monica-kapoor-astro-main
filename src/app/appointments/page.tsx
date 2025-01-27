"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "react-datepicker/dist/react-datepicker.css";
import { Appointment } from "../../../action/login";

export const formSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required",
  }),
  dob: z.string().refine(
    (value) => {
      if (!value) return false; // Ensure it's not empty
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
});

type FormData = z.infer<typeof formSchema>;

const ReactHookFormWithZod: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      Name: "",
      email: "",
      gender: undefined,
      dob: undefined,
      timeofbirth: undefined,
      PlaceOfBirth: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Form data:", data);
      const response = await Appointment(data);
  
      // Check the response for success or error
      if (response.success) {
        // Handle success - you can display a success message or redirect user
        console.log("Success:", response.success);
      } else if (response.error) {
        // Handle error - display the error message to the user
        console.error("Error:", response.error);
      }
  
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("root", {
        type: "manual",
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };
  

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 px-4">
      <div className="w-full mt-32 mb-20 max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl text-[#6a1818] font-bold text-center mb-6">
          Sign Up Form
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              {...register("Name")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.Name && (
              <p className="text-sm text-orangered">{errors.Name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              {...register("email")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.email && (
              <p className="text-sm text-orangered">{errors.email.message}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-black">Gender</label>
            <select
              {...register("gender")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-sm text-orangered">{errors.gender.message}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-black">
              Date of Birth
            </label>
            <input
              {...register("dob")}
              type="date"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.dob && (
              <p className="text-sm text-orangered">{errors.dob.message}</p>
            )}
          </div>

          {/* Time of Birth */}
          <div>
            <label className="block text-sm font-medium text-black">
              Time of Birth
            </label>
            <input
              {...register("timeofbirth")}
              type="time"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.timeofbirth && (
              <p className="text-sm text-orangered">
                {errors.timeofbirth.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Place of Birth</label>
            <input
              {...register("PlaceOfBirth")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.PlaceOfBirth && (
              <p className="text-sm text-orangered">{errors.PlaceOfBirth.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 rounded-lg py-2 text-lg"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Root Error */}
          {errors.root && (
            <p className="text-sm text-red-500 text-center mt-4">
              {errors.root.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReactHookFormWithZod;
