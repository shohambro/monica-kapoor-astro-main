"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AppointmentFormSchema } from "../../schemas";
import { Appointment } from "../../action/login";

export default function SignupFormDemo() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof AppointmentFormSchema>>({
    resolver: zodResolver(AppointmentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      dob: "",
      timeOfBirth: "",
      placeOfBirth: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof AppointmentFormSchema>) => {
    console.log("Form submitted");
    // try {
    //   const response = await Appointment(data); // Wait for the response
    //   if (response?.success) {
    //     console.log(response);
    //     form.reset();
    //     setSuccess(response.success);
    //   }
    // } catch (err) {
    //   console.error("Error during appointment submission:", err);
    //   setError("Something went wrong, please try again.");
    // }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-black">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-4">
        Appointment Form
      </h2>
      <p className="text-neutral-600 text-sm dark:text-neutral-300 mb-6">
        Fill out the form below to book an appointment.
      </p>

      <form 
        className="grid grid-cols-1 gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {/* Name */}
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="Enter your name"
            type="text"
          />
        </LabelInputContainer>

        {/* Email */}
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...form.register("email")}
            placeholder="Enter your email"
            type="email"
          />
        </LabelInputContainer>

        {/* Mobile */}
        <LabelInputContainer>
          <Label htmlFor="mobile">Mobile</Label>
          <Input
            id="mobile"
            {...form.register("mobile")}
            placeholder="Enter your mobile number"
            type="text"
          />
        </LabelInputContainer>

        {/* Date of Birth */}
        <LabelInputContainer>
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            {...form.register("dob")}
            type="date"
          />
        </LabelInputContainer>

        {/* Time of Birth */}
        <LabelInputContainer>
          <Label htmlFor="timeOfBirth">Time of Birth</Label>
          <Input
            id="timeOfBirth"
            {...form.register("timeOfBirth")}
            type="time"
          />
        </LabelInputContainer>

        {/* Place of Birth */}
        <LabelInputContainer>
          <Label htmlFor="placeOfBirth">Place of Birth</Label>
          <Input
            id="placeOfBirth"
            {...form.register("placeOfBirth")}
            placeholder="Enter your place of birth"
            type="text"
          />
        </LabelInputContainer>

        {/* Error */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        {/* Submit Button */}
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          type="submit"
          disabled={form.formState.isSubmitting} // Disable button while submitting
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
