"use client;"
import { use } from "react";
import * as z from "zod";
import { AppointmentFormSchema } from "../../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
export const AppointmentForm = () => {
    const form = useForm<z.infer<typeof AppointmentFormSchema>>({
        resolver: zodResolver(AppointmentFormSchema),
        defaultValues:{
            name:"",
            email:"",
            mobile:"",
            dob:"",
            timeOfBirth:"",
            placeOfBirth:"",
        }
    })
    return (
        <>

        </>
    )
};
