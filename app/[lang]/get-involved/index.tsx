'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import img1 from "@/public/asset/Testimonial1.jpg"
import img2 from "@/public/asset/testimonial2.jpg"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/app/shared/footer/footer'
import { Arapey, Noto_Serif_Ethiopic } from 'next/font/google'

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

// Testimonials data
const testimonials = [
  {
    quote:
      "Honestly, the military took everything we had. One thing they couldn't take was my father's scholarly work during his final days under arrest. I am happy to have an organization that will make his work available to many others.",
    name: "Kokeb Kassa",
    title: "Daughter of H.E. Dejazmatch Kassa Wolde Mariam",
    image: img1,
  },
  {
    quote:
      "As the grandchild of one of the 70, I only know about them through family stories. Being involved with Yetarik Adera helps me get to know my grandfather and the work he did. It's also a great chance to connect with others who, like me, treasure this part of their history.",
    name: "Anna Amha",
    title: "Grandchild of Dejazmatch Kassa Wolde Mariam",
    image: img2,
  },
]

export default function GetInvolvedPage({
  getInvolvedTexts,
}: {
  getInvolvedTexts: any
}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pathname = usePathname()

  // Autoplay effect
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <>
      <main
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic pt-24 md:pt-28`}
      >
        {/* Header Section */}
        <section className="text-center w-[90%] md:w-[80%] mx-auto flex flex-col justify-center items-center pb-20">
          {/* Headings */}
          <div className="px-6 md:text-start mb-8 md:mb-14">
            <h1
              className={`${arapey.variable} font-arapey text-3xl md:text-[48px] font-light leading-snug`}
            >
              <div className="inline-block">
                <span>{getInvolvedTexts.heading1}</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-[2px] w-full bg-primary mt-1"
                />
              </div>
              <br />
              <div className="inline-block mt-2 pl-[80px]">
                <span>{getInvolvedTexts.heading2}</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-[2px] w-full bg-primary mt-1"
                />
              </div>
            </h1>
          </div>

          {/* Description */}
          <div className="text-black leading-relaxed text-left space-y-6 md:text-[17px]">
            <p className="text-xl font-bold text-gray-900">
            {getInvolvedTexts.fourpillar}
            </p>
            <p>
            {getInvolvedTexts.pillartext}
            </p>

            {/* 1. Build the Archive Center */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                1. {getInvolvedTexts.pillar1}
              </h2>
              <p>
              {getInvolvedTexts.pillar1desc}
              </p>
             
            </div>

            {/* 2. Develop the Research Library */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                2.        {getInvolvedTexts.pillar2}
              </h2>
              <p>
              {getInvolvedTexts.pillar2desc}
              </p>
            
            </div>

            {/* 3. Promote Public Education and Outreach */}
            <div>
              <h2 className="font-bold text-lg mb-2">
              3. {getInvolvedTexts.pillar3}
              </h2>
              <p>
              {getInvolvedTexts.pillar3desc}
              </p>
        
            </div>

            {/* 4. Preserve the Martyrs Cemetery */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                4. {getInvolvedTexts.pillar4}
              </h2>
              <p>
                {/* Join us in the ongoing maintenance and preservation of the
                Martyrs Cemetery as a sacred national monument and a place of
                remembrance. Support is needed for: */}
{getInvolvedTexts.pillar4desc}
              </p>
            
            </div>   <div className="text-black">
  <h2 className="font-bold text-2xl mb-4 mt-6">
    {getInvolvedTexts.how}
  </h2>

  <ul className="space-y-4 mt-2">
    <li className="flex items-center gap-3">
      <span>{getInvolvedTexts.how1}</span>
      <Button className="rounded-md px-4 py-2 text-sm shadow-sm">
        <Link href={`/${pathname.split("/")[1]}/donate`}>
          {getInvolvedTexts.button1}
        </Link>
      </Button>
    </li>

    <li className="flex items-center gap-3">
      <span>{getInvolvedTexts.how2}</span>
      <Button className="rounded-md px-4 py-2 text-sm shadow-sm">
        <Link href={`/${pathname.split("/")[1]}/donate`}>
          {getInvolvedTexts.button2}
        </Link>
      </Button>
    </li>

    <li>
      <span>{getInvolvedTexts.how3}</span>
    </li>

    <li>
      <span>{getInvolvedTexts.how4}</span>
    </li>
  </ul>
</div>
          </div>

       

         
        </section>

        {/* Testimonial Slider */}
        <section
          className="hidden bg-primary py-20 relative flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full md:w-[60%] mx-auto bg-white text-center rounded-md shadow-lg h-[400px] flex items-center justify-center relative overflow-hidden px-8 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-full flex flex-col justify-between p-4"
              >
                <blockquote className="text-lg italic text-gray-800 flex-1 flex items-center justify-center px-2">
                  “{testimonials[currentSlide].quote}”
                </blockquote>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    width={70}
                    height={70}
                    className="rounded-full mb-2 w-[70px] h-[70px]"
                  />
                  <p className="font-bold">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentSlide].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-black" : "bg-black/40"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
          >
            &#8592;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % testimonials.length)
            }
          >
            &#8594;
          </button>
        </section>
      </main>

      <Footer />
    </>
  )
}
