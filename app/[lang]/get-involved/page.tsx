'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import img1 from "@/public/asset/placeholoder.jpg";
import img2 from "@/public/asset/placeholoder.jpg";
import img3 from "@/public/asset/placeholoder.jpg";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

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

export default function GetInvolvedPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const pathname = usePathname();
  return (
    <main className="font-serif bg-[#F7F4E9]">
      {/* Header Section */}
      <section className="py-16 px-6 text-center max-w-4xl h-[600px] mx-auto flex flex-col justify-center items-center">
          <section className="px-6 text-start w-[400px] mb-12">
  <h1 className="text-[45px] font-light leading-snug inline-block">
    {/* Line 1 */}
    <div className="inline-block">
      <span className="font-serif">Get</span>
    <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay:0 }}
                className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
    </div>
    <br />

    {/* Line 2 */}
    <div className="inline-block pl-[80px]">
      <div className="inline-block">
        <span className="font-serif">Involved</span>
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
        <div className="space-y-3 text-lg text-gray-700">
          <p>
            The military dictatorship did everything in its power to erase the contributions of Emperor Haile Selassie’s government to modern Ethiopia.
          
            They embarked on a program to eradicate any positive association with the prior regime.
          
            Fifty years later, we are determined to restore this history to its rightful place.
          
            We want future generations to understand their history, debate its successes and shortcomings and chart a path forward that is armed with knowledge.
          </p>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="bg-primary py-20 relative flex flex-col items-center">
        <div className="max-w-3xl mx-auto bg-white text-center p-8 rounded-md shadow-lg mx-4">
          <blockquote className="text-lg italic text-gray-800">
            “Honestly, the military took everything we had. One thing they couldn’t take was my father’s scholarly work during his final days under arrest. I am happy to have an organization that will make his work available to many others.”
          </blockquote>
          <div className="mt-6 flex flex-col items-center ">
            <Image
              src={img1}
              alt="Kokeb Kassa"
              width={60}
              height={60}
              className="rounded-full mb-2 w-[70px] h-[70px]"
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
       <Button className='mt-10'>
         <Link href={`/${pathname.split("/")[1]}/donate`}> Donate</Link>
           
          </Button>
      </section>

      {/* Executive Team Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Discover our executive team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full object-cover  w-[100px] h-[100px]"
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
