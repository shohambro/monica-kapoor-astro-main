"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-datepicker/dist/react-datepicker.css";
import { Appointment } from "../../../action/login";
import { sendAppointmentEmail } from "@/utils/mail";
import PricingModal from "@/components/PricingModal";
import { formSchema, FormData } from "@/app/appointments/schema";

const AppointmentPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const defaultValues: FormData = {
    Name: "",
    email: "",
    gender: "male",
    dob: "",
    timeofbirth: "",
    PlaceOfBirth: "",
    preferredSlot: "morning",
    preferredDate: "",
    preferredTime: "",
    modeOfConsultation: "online",
    mobileNumber: "",
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
        try {
          await sendAppointmentEmail(
            data.Name,
            data.email,
            data.gender,
            data.dob,
            data.mobileNumber,
            data.timeofbirth,
            data.PlaceOfBirth,
            data.preferredSlot,
            data.preferredDate,
            data.preferredTime,
            data.modeOfConsultation
          );
          console.log("Email sent successfully");
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
        }
        
        setSuccess(true);
        console.log("Success:", response.success);
        reset(defaultValues);
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

  return (
    <div className="flex flex-col justify-center items-center space-y-2 min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 sm:px-3 py-12 pt-36">
      <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg mb-10 p-6 pt-8">
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
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-xs text-red-500">{errors.gender.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-black">Mobile Number</label>
            <input
              {...register("mobileNumber")}
              type="tel"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
              placeholder="Enter your mobile number"
            />
            {errors.mobileNumber && (
              <p className="text-xs text-red-500">{errors.mobileNumber.message}</p>
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

          {/* Preferred Slot */}
          <div>
            <label className="block text-sm font-medium text-black">
              Preferred Slot
            </label>
            <select
              {...register("preferredSlot")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            >
              <option value="morning">Morning</option>
              <option value="day">Day</option>
              <option value="evening">Evening</option>
            </select>
            {errors.preferredSlot && (
              <p className="text-xs text-red-500">{errors.preferredSlot.message}</p>
            )}
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm font-medium text-black">
              Preferred Date
            </label>
            <input
              {...register("preferredDate")}
              type="date"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.preferredDate && (
              <p className="text-xs text-red-500">{errors.preferredDate.message}</p>
            )}
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-medium text-black">
              Preferred Time
            </label>
            <input
              {...register("preferredTime")}
              type="time"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
            {errors.preferredTime && (
              <p className="text-xs text-red-500">{errors.preferredTime.message}</p>
            )}
          </div>

          {/* Mode of Consultation */}
          <div>
            <label className="block text-sm font-medium text-black">
              Mode of Consultation
            </label>
            <select
              {...register("modeOfConsultation")}
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            {errors.modeOfConsultation && (
              <p className="text-xs text-red-500">{errors.modeOfConsultation.message}</p>
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
      <button 
        onClick={openModal} 
        className="mt-6 px-3 py-2 bg-white hover:bg-green-300 text-orange-500 font-semibold rounded-lg transition duration-300"
      >
        View Pricing
      </button>
      {isModalOpen && <PricingModal onClose={closeModal} />}
    </div>
  );
};

export default AppointmentPage;