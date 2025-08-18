'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import donationImage from '@/public/asset/asset12.jpeg'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/ui/navbar'
import Footer from '@/app/shared/footer/footer'
import { Arapey, Noto_Serif_Ethiopic } from 'next/font/google'

// Fonts
const arapey = Arapey({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arapey",
});

const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"],
  subsets: ["ethiopic"],
  display: "swap",
  variable: "--font-noto-ethiopic",
});

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [frequency, setFrequency] = useState<'One time' | 'Monthly'>('One time')
  const [searchTerm, setSearchTerm] = useState("")

  const donationOptions = [
    { amount: 10, label: 'The story of Emperor Haile Selassie' },
    { amount: 25, label: 'The story of Emperor Haile Selassie' },
    { amount: 50, label: 'The story of Emperor Haile Selassie' },
  ]

  return (
    <>
      <Navbar />
      <section className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic bg-[#f4f1e8] text-black px-4 sm:px-6 py-12 md:pt-32 flex items-center`}>
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={donationImage}
              alt="Martyrs"
              className="rounded-md shadow-lg w-full h-auto object-cover max-h-[400px] md:max-h-[650px]"
              priority
            />
          </div>

          {/* Donation Options */}
          <div className="bg-white p-6 sm:p-8 rounded-md w-full md:w-1/2 space-y-6 border border-[#B27C3A]">
            {/* Amount Section */}
            <div>
              <h2 className="text-lg sm:text-xl mb-4 border-b-2 border-[#B27C3A] pb-1">
                Choose a donation amount
              </h2>
              <div className="space-y-4">
                {donationOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="amount"
                      value={option.amount}
                      checked={selectedAmount === option.amount}
                      onChange={() => setSelectedAmount(option.amount)}
                      className="form-radio h-5 w-5 border-black focus:ring-[#B27C3A] text-[#B27C3A]"
                    />
                    <span className="text-base sm:text-lg">
                      ${option.amount} {option.label}
                    </span>
                  </label>
                ))}
                <input
                  type="text"
                  placeholder="Enter Amount"
                  className="w-full sm:w-[350px] h-[40px] p-2 sm:p-3 rounded-md border border-gray-300 text-black"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Frequency Section */}
            <div>
              <h2 className="text-lg sm:text-xl mb-4 border-b-2 border-[#B27C3A] pb-1">
                Choose a donation frequency
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                {['One time', 'Monthly'].map((f) => (
                  <label key={f} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value={f}
                      checked={frequency === f}
                      onChange={() => setFrequency(f as 'One time' | 'Monthly')}
                      className="form-radio h-5 w-5 border-black focus:ring-[#B27C3A] text-[#B27C3A]"
                    />
                    <span
                      className={`text-base sm:text-lg ${
                        frequency === f ? 'text-[#B27C3A]' : 'text-black'
                      }`}
                    >
                      {f}
                    </span>
                  </label>
                ))}
              </div>

              <Button className="mt-6 sm:mt-10 w-full sm:w-auto">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default DonationSection
