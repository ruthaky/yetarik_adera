'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import donationImage from '@/public/asset/asset12.jpeg'
import { Button } from '@/components/ui/button'
import Navbar from '@/app/shared/navbar/navbar'
import Footer from '@/app/shared/footer/footer'
import { Arapey, Noto_Serif_Ethiopic } from 'next/font/google'
import Link from 'next/link'

// Fonts
const arapey = Arapey({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arapey",
})

const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"],
  subsets: ["ethiopic"],
  display: "swap",
  variable: "--font-noto-ethiopic",
})

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [frequency, setFrequency] = useState<'One time' | 'Monthly'>('One time')
  const [loading, setLoading] = useState(false)


  const handleDonate = async () => {
    const amount = selectedAmount || Number(customAmount)

    if (!amount || amount <= 0) {
      alert("Please enter a valid donation amount.")
      return
    }

    if (!phoneNumber) {
      alert("Please enter your phone number.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/chapa/initialize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amount.toString(),
            phone_number: phoneNumber,
          }),
        }
      )

      const data = await response.json()

      if (data?.status === "success" && data?.data?.checkout_url) {
        window.location.href = data.data.checkout_url
      } else {
        console.error("Unexpected Chapa response:", data)
        alert("Payment initialization failed. Please try again.")
      }
    } catch (error) {
      console.error("Error initializing donation:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <section
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic text-black px-4 sm:px-6 py-12 pt-24 md:pt-32 flex items-center`}
      >
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={donationImage}
              alt="Donation"
              className="rounded-md shadow-lg w-full h-auto object-cover max-h-[400px] md:max-h-[650px]"
              priority
            />
          </div>

          {/* Donation Form IN ETB */}
          <div className="bg-white p-6 sm:p-8 rounded-md w-full md:w-1/2 space-y-6 border border-[#B27C3A]">
            {/* Amount Section */}
            <div>
              <h2 className="text-lg sm:text-xl mb-4 border-b-2 border-[#B27C3A] pb-1">
               Donate in Birr
              </h2>
              <div className="space-y-4">

                {/* Custom Amount */}
                <input
                  type="number"
                  placeholder="Enter donation amount"
                  className="w-full h-[40px] p-2 rounded-md border border-gray-300 text-black"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
            
              <input
                type="tel"
                placeholder="Enter phone number, e.g. 0912345678"
                className="w-full h-[40px] p-2 rounded-md border border-gray-300 text-black"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

           

            {/* Donate Button */}
            <Button
              onClick={handleDonate}
              disabled={loading}
              className="mt-6 sm:mt-10 w-full sm:w-auto"
            >
              {loading ? "Processing..." : "Donate"}
            </Button>
         
          </div>
   <Link href="https://buy.stripe.com/test_7sY14n2Cf6mFbiggtc9k400">
            <Button
             
              disabled={loading}
              className="mt-6 sm:mt-10 w-full sm:w-auto"
            >
            Donate in USD
            </Button>
            </Link>

            {/* Donation Form IN USD */}
            <div className="hidden bg-white p-6 sm:p-8 rounded-md w-full md:w-1/2 space-y-6 border border-[#B27C3A]">
            {/* Amount Section */}
            <div>
              <h2 className="text-lg sm:text-xl mb-4 border-b-2 border-[#B27C3A] pb-1">
               Donate in USD
              </h2>
              <div className="space-y-4">

                {/* Custom Amount */}
                <input
                  type="number"
                  placeholder="Enter donation amount"
                  className="w-full h-[40px] p-2 rounded-md border border-gray-300 text-black"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
            
              <input
                type="tel"
                placeholder="Enter phone number, e.g. 0912345678"
                className="w-full h-[40px] p-2 rounded-md border border-gray-300 text-black"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

           

            {/* Donate Button */}
            <Button
              onClick={handleDonate}
              disabled={loading}
              className="mt-6 sm:mt-10 w-full sm:w-auto"
            >
              {loading ? "Processing..." : "Donate"}
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default DonationSection
