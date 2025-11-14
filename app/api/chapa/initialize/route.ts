import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Hit Chapa API with:", body);

    const response = await fetch("https://api.chapa.co/v1/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: body.amount,
        currency: "ETB",
        phone_number: body.phone_number,
        tx_ref: `tx-${Date.now()}`,
        callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        "customization[title]": "Donation Payment",
        "customization[description]": "Thank you for supporting our cause",
      }),
    });

    const data = await response.json();
    console.log("Chapa response:", data);

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: error.message || "Payment initialization failed" },
      { status: 500 }
    );
  }
}
