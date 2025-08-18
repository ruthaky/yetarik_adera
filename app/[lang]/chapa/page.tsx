"use client";

export default function PayButton() {
  const handlePay = async () => {
    const res = await fetch("/api/chapa/initialize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: "100",
        email: "customer@example.com",
        first_name: "Ruth",
        last_name: "Tuti",
      }),
    });

    const data = await res.json();

    if (data.status === "success") {
      window.location.href = data.data.checkout_url;
    } else {
      console.error("Chapa Init Error:", data);
      alert(data.message || "Payment initialization failed");
    }
  };

  return (
    <button
      onClick={handlePay}
      className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
    >
      Pay with Chapa
    </button>
  );
}
