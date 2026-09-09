import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secretKey = process.env.CHAPA_SECRET_KEY;
  if (!secretKey) {
    console.error("Payment initialization unavailable: CHAPA_SECRET_KEY is not configured.");
    return NextResponse.json(
      { error: "Donations are temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();
    const lang = typeof body.lang === "string" && body.lang.trim() ? body.lang.trim() : "en";
    const origin = new URL(req.url).origin;
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || origin).replace(/\/$/, "");

    const response = await fetch("https://api.chapa.co/v1/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: body.amount,
        currency: "ETB",
        phone_number: body.phone_number,
        tx_ref: `tx-${Date.now()}`,
        callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
        return_url: `${baseUrl}/${lang}/donate/receipt`,
        "customization[title]": "Donation Payment",
        "customization[description]": "Thank you for supporting our cause",
      }),
    });

    const data = await response.json();
    if (!response.ok || data?.status !== "success") {
      console.error("Chapa initialization failed with HTTP status:", response.status);
      return NextResponse.json(
        { error: "Payment initialization failed. Please check your donation details and try again." },
        { status: 502 }
      );
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Payment initialization failed. Please try again." },
      { status: 500 }
    );
  }
}
