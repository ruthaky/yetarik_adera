import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";

const resend = new Resend("re_LF6Tccck_7FSQuSCwwvSr4vhNo7x9WL1q");

export async function POST(request: Request) {
 
  try {
    // const { name, email, phonenumber, message } = body;
 const body = await request.json();
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Verified sender email
      to: ['asmamawruth@gmail.com'], // Replace with your receiving email
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phonenumber: body.phonenumber,
        subject: body.subject,
        message: body.message,
      }),
    });

    // if (error) {
    //   return NextResponse.json({ error: error.message }, { status: 500 });
    // }

    return NextResponse.json({ status: "success", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
