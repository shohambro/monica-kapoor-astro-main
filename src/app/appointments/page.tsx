"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "react-datepicker/dist/react-datepicker.css";
import { Appointment } from "../../../action/login";
import { useState } from "react";
import PricingModal from "@/components/PricingModal";

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
});

type FormData = z.infer<typeof formSchema>;

const ReactHookFormWithZod: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const defaultValues = {
    Name: "",
    email: "",
    gender: undefined,
    dob: "",
    timeofbirth: "",
    PlaceOfBirth: "",
  };

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Form data:", data);
      const response = await Appointment(data);

      if (response.success) {
        setSuccess(true);
        console.log("Success:", response.success);
        // Reset form after successful submission
        reset(defaultValues);
        // Optional: Clear success message after a delay
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else if (response.error) {
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

  // Rest of your component remains the same...
  return (
    <div className="flex flex-col justify-center items-center space-y-2 min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 sm:px-3 py-12 pt-36">
      <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg  mb-10 p-6 pt-8">
        <h2 className="text-2xl text-[#6a1818] font-bold text-center mb-6">
          Personal Details
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              {...register("Name")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.Name && (
              <p className="text-xs text-red-500">{errors.Name.message}</p>
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
              <p className="text-xs text-red-500">{errors.email.message}</p>
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
              <p className="text-xs text-red-500">{errors.gender.message}</p>
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
              <p className="text-xs text-red-500">{errors.dob.message}</p>
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
              <p className="text-xs text-red-500">{errors.timeofbirth.message}</p>
            )}
          </div>

          {/* Place of Birth */}
          <div>
            <label className="block text-sm font-medium text-black">
              Place of Birth
            </label>
            <input
              {...register("PlaceOfBirth")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.PlaceOfBirth && (
              <p className="text-xs text-red-500">
                {errors.PlaceOfBirth.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Root Error */}
          {errors.root && (
            <p className="text-xs text-red-500 text-center mt-2">
              {errors.root.message}
            </p>
          )}
          {success && (
            <p className="text-xs text-green-500 text-center mt-2">
              Submitted Successfully.
            </p>
          )}
        </form>
      </div>
      <button onClick={openModal} className="mt-6 px-3 py-2 bg-white hover:bg-green-300 text-orange-500 font-semibold rounded-lg transition duration-300">View Pricing</button>
      {isModalOpen && (
        <PricingModal
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ReactHookFormWithZod;