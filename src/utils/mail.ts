"use server"
import {Resend} from "resend";

const resend = new Resend("re_GixMUj8H_QAXoPHbaUWHGsUKawXV35WbJ");

export const sendAppointmentEmail = async (
    Name: string,
    email: string,
    gender:string,
    dob: string,
    timeofbirth: string,
    PlaceOfBirth: string
) => {
    await resend.emails.send({
        from:"onboarding@resend.dev",
        to:email,
        subject:"New Appointment",
        html: `<p> Name: ${Name} <br/> Email: ${email} <br/> Gender: ${gender} <br/> DOB: ${dob} <br/> Time of Birth: ${timeofbirth} <br/> Place of Birth: ${PlaceOfBirth} <br/> <br/> Click </p>`
    })
}