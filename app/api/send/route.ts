import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";

const resend = new Resend("re_FJQQNXDC_PniodFAmR6HbCg3xuprVziPH");

export async function POST(request: Request) {
 
  try {
    // const { name, email, phonenumber, message } = body;
 const body = await request.json();
    const data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>", // Verified sender email
      to: ["info@surgecrops.com"], // Replace with your receiving email
      subject: "New Contact Form Submission",
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        phonenumber: body.phonenumber,
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
