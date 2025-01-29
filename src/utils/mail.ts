"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAppointmentEmail = async (
    Name: string,
    email: string,
    gender: string,
    dob: string,
    timeofbirth: string,
    PlaceOfBirth: string,
    preferredSlot: string,
    preferredDate: string,
    preferredTime: string,
    modeOfConsultation: string
) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "divineblessingsladyoffortune@gmail.com",
        subject: "New Appointment Confirmation",
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Appointment Confirmation</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333333;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ffffff;
                    }
                    .header {
                        background-color: #4a90e2;
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .content {
                        padding: 20px;
                        background-color: #f9f9f9;
                        border: 1px solid #dddddd;
                        border-radius: 0 0 5px 5px;
                    }
                    .detail-row {
                        margin-bottom: 10px;
                        padding: 10px;
                        background-color: white;
                        border-radius: 3px;
                    }
                    .label {
                        font-weight: bold;
                        color: #4a90e2;
                    }
                    .footer {
                        margin-top: 20px;
                        text-align: center;
                        color: #666666;
                        font-size: 12px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Appointment Confirmation</h1>
                    </div>
                    <div class="content">
                        <p>Thank you for scheduling your appointment. Here are your details:</p>
                        
                        <div class="detail-row"><span class="label">Name:</span> ${Name}</div>
                        <div class="detail-row"><span class="label">Email:</span> ${email}</div>
                        <div class="detail-row"><span class="label">Gender:</span> ${gender}</div>
                        <div class="detail-row"><span class="label">Date of Birth:</span> ${dob}</div>
                        <div class="detail-row"><span class="label">Time of Birth:</span> ${timeofbirth}</div>
                        <div class="detail-row"><span class="label">Place of Birth:</span> ${PlaceOfBirth}</div>
                        <div class="detail-row"><span class="label">Preferred Slot:</span> ${preferredSlot}</div>
                        <div class="detail-row"><span class="label">Preferred Date:</span> ${preferredDate}</div>
                        <div class="detail-row"><span class="label">Preferred Time:</span> ${preferredTime}</div>
                        <div class="detail-row"><span class="label">Mode of Consultation:</span> ${modeOfConsultation}</div>

                        <p>If you need to make any changes to your appointment or have any questions, please don't hesitate to contact us.</p>
                    </div>
                    <div class="footer">
                        <p>This is an automated message. Please do not reply to this email.</p>
                        © 2025 Divine Monica. All rights reserved.
                    </div>
                </div>
            </body>
            </html>
        `
    });
};
