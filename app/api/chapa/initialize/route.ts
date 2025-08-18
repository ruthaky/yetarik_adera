// app/api/chapa/initialize/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch("https://api.chapa.co/v1/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: body.amount,
        currency: "ETB",
        email: body.email,
        first_name: body.first_name,
        last_name: body.last_name,
        tx_ref: `tx-${Date.now()}`,
        callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/chapa/verify`,
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      }),
    });

    const data = await response.json();

    // 🔴 Log raw response if status != success
    if (data.status !== "success") {
      console.error("Chapa Error:", data);
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: error.message || "Payment initialization failed" },
      { status: 500 }
    );
  }
}
