"use client";
import { Button } from "@/components/ui/button";
import { Arapey, Noto_Serif_Ethiopic } from "next/font/google";
import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

// Arapey for headers
const arapey = Arapey({
  weight: ["400"], // regular
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arapey",
});
// Noto Serif Ethiopic for body text
const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"], // normal
  subsets: ["ethiopic"], // supports Amharic, Tigrinya, etc.
  display: "swap",
  variable: "--font-noto-ethiopic",
});

export default function ContactSection({ contactText }: { contactText: any }) {
   const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    subject: "generalInquiry",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // null = no message, true = success, false = failure

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    setIsSuccess(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setIsSuccess(true);
        setFormData(initialFormData); // reset form
      } else {
        setStatus(`Error: ${result.error || "Failed to submit the form."}`);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again later.");
      setIsSuccess(false);
    }
  };
  return (
    <section className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic bg-[#FDF9EE] text-[#4A2C13] py-32 px-6 md:px-20 flex flex-col justify-center items-center`}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className={`${arapey.variable} font-arapey text-3xl md:text-5xl`}>
          <span className="border-b-2 border-[#B1864F] pb-2">Contact</span> Us
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white w-full md:w-[80%] shadow-md overflow-hidden">
        {/* Contact Info */}
        <div className="bg-[#2C2C2C] text-white p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>

            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span> +1012 3456 789
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> demo@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </li>
            </ul>
          </div>

          <div className="mt-10 flex space-x-4">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phonenumber" className="block text-sm mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="+1 012 345 6789"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm mb-2">
              Select Subject?
            </label>
            <div className="flex flex-wrap gap-4 text-sm">
              {["General Inquiry", "Support", "Feedback", "Other"].map((option) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value={option}
                    className="mr-2"
                    checked={formData.subject === option}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
              rows={4}
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#B77B36] text-white px-6 py-2 rounded shadow hover:bg-[#a86e2f] transition"
          >
            Send Message
          </button>{status && (
            <p className={`mt-4 font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
              {status}</p> )}
        </form>
    
            
         
      </div>
    </section>
  );
}
