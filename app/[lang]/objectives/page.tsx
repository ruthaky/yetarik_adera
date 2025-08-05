'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import img1 from "@/public/asset/Kiddie.webp";
import img2 from "@/public/asset/Laly.jpg";
import img3 from "@/public/asset/Tegi.svg";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Example avatar images (replace with your own)
const team = [
  {
    name: 'Tony Fred, CEO',
    title: 'Chief Executive Officer',
    image: img1,
  },
  {
    name: 'Mich Stark, COO',
    title: 'Chief Operational Officer',
    image: img2,
  },
  {
    name: 'Aline Turner, CTO',
    title: 'Chief Technical Officer',
    image: img3,
  },
  {
    name: 'Iris Joe, CFO',
    title: 'Chief Financial Officer',
    image: img1,
  },
]

export default function Objectives() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const pathname = usePathname();
  return (
    <main className="font-serif">
      {/* Header Section */}
      <section className="bg-white py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Get Involved</h1>
        <div className="space-y-3 text-lg text-gray-700">
          <p>
            The military dictatorship did everything in its power to erase the contributions of Emperor Haile Selassie’s government to modern Ethiopia.
          </p>
          <p>
            They embarked on a program to eradicate any positive association with the prior regime.
          </p>
          <p>
            Fifty years later, we are determined to restore this history to its rightful place.
          </p>
          <p>
            We want future generations to understand their history, debate its successes and shortcomings and chart a path forward that is armed with knowledge.
          </p>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="bg-gradient-to-r from-[#FFDF47] via-[#FFD700] to-[#f4c000] py-20 relative">
        <div className="max-w-3xl mx-auto bg-white text-center p-8 rounded-md shadow-lg mx-4">
          <blockquote className="text-lg italic text-gray-800">
            “Honestly, the military took everything we had. One thing they couldn’t take was my father’s scholarly work during his final days under arrest. I am happy to have an organization that will make his work available to many others.”
          </blockquote>
          <div className="mt-6 flex flex-col items-center">
            <Image
              src={img1}
              alt="Kokeb Kassa"
              width={60}
              height={60}
              className="rounded-full mb-2"
            />
            <p className="font-bold">Kokeb Kassa</p>
            <p className="text-sm text-gray-600">Daughter of H.E Dejazmatch Kassa Wolde Mariam</p>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? 'bg-black' : 'bg-black/40'
              }`}
            ></div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
        >
          &#8594;
        </button>
       <Button>
         <Link href={`/${pathname.split("/")[1]}/donate`}> Donate</Link>
           
          </Button>
      </section>

      {/* Executive Team Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Discover our executive team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {team.map((member : any, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
