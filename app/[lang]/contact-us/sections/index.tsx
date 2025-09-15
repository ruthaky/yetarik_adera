"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); 
  const [showForm, setShowForm] = useState(false);

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
    <section className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic text-[#4A2C13] py-32 px-6 md:px-20 flex flex-col justify-center items-center`}>
     {/* Header */}
      <div className="text-center mb-10 flex justify-center ">
        <section className="px-6 w-auto">
          <h1 className={`${arapey.variable} font-arapey text-3xl md:text-[45px] font-light leading-snug inline-block`}>
            <div className="inline-block md:pr-0">
              <span className="">{contactText.heading1}</span>
<motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[2px] w-[300px] bg-primary mt-1"
              />
            </div>
            <br />
            <div className="inline-block pl-[70px] md:pl-[200px]">
              <div className="inline-block">
                <span className="">{contactText.heading2}</span>
      <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
              </div>
            </div>
          </h1>
        </section>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white w-full md:w-[80%] shadow-md overflow-hidden">
        {/* Contact Info */}
        <div className="bg-[#2C2C2C] text-white p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold mb-4">{contactText.contactdetail}</h3>

            <ul className="space-y-5 text-[16px]">
              <li className="flex items-center gap-2">
                <span>📞</span> 0928291967
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> yetarikadera@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                {contactText.location1}
                <br></br>
                {contactText.location2}
              </li>
            </ul>
          </div>

          <div className="mt-10 flex space-x-4">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        {/* Right Column: Reveal button or Form */}
        {!showForm ? (
          <div className="p-8 flex items-center justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#B77B36] text-white px-6 py-3 rounded shadow hover:bg-[#a86e2f] transition"
            >
              {contactText.button}
            </button>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-[16px] mb-1">
              {contactText.Fname}
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
             
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-[16px] mb-1">
              {contactText.Lname}
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
             
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-[16px] mb-1">
              {contactText.email}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
           
                required
              />
            </div>
            <div>
              <label htmlFor="phonenumber" className="block text-[16px] mb-1">
              {contactText.phonenumber}
              </label>
              <input
                type="text"
                id="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
               
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-[16px] mb-2">
            {contactText.subject}
            </label>
            <div className="flex flex-wrap gap-4 text-sm">
              {[ contactText.opt1 , contactText.opt2, contactText.opt3 ,contactText.opt4 ].map((option) => (
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
            <label htmlFor="message" className="block text-[16px] mb-1">
            {contactText.message}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
              rows={4}
          
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#B77B36] text-white px-6 py-2 rounded shadow hover:bg-[#a86e2f] transition"
          >
         {contactText.button}
          </button>{status && (
            <p className={`mt-4 font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>
              {status}</p> )}
        </form>
        )}
       
            
         
      </div>
      
    </section>
  );
}
