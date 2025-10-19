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
              <div className="inline-block mt-2">
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
          <div className="text-gray-700 leading-relaxed text-left space-y-6 md:text-[17px]">
            <p className="text-xl font-bold text-gray-900">
              A Four-Pillar Approach
            </p>
            <p>
              We welcome your support in building a lasting legacy for the era
              of Imperial Haile Selassie I (1929–1966). You can participate
              through the following initiatives:
            </p>

            {/* 1. Build the Archive Center */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                1. Build the Archive Center
              </h2>
              <p>
                Help us create a comprehensive digital and physical archive by
                identifying and connecting with potential donors who may possess
                unique materials from the era.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <span className="font-bold">Documents</span>: Official papers,
                  personal letters, books, diaries, and notebooks.
                </li>
                <li>
                  <span className="font-bold">Multimedia</span>: Historical
                  films, photographs, and audio recordings.
                </li>
                <li>
                  <span className="font-bold">Artifacts</span>: Items that
                  reflect the social and cultural life of the period.
                </li>
              </ul>
            </div>

            {/* 2. Develop the Research Library */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                2. Develop the Research Library
              </h2>
              <p>
                Support the establishment of a world-class research library to
                serve scholars, students, and the public.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <span className="font-bold">Historical Books</span>: Scholarly
                  works and publications relevant to the era.
                </li>
                <li>
                  <span className="font-bold">Photographic Records</span>:
                  Pictures that document key milestones in Ethiopia’s
                  modernization.
                </li>
                <li>
                  <span className="font-bold">Film Archives</span>:
                  Documentaries and newsreels from the period.
                </li>
              </ul>
            </div>

            {/* 3. Promote Public Education and Outreach */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                3. Promote Public Education & Outreach
              </h2>
              <p>
                Participate in our mission to educate the public and ensure an
                accurate historical record. This involves:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <span className="font-bold">
                    Identifying Speakers and Influencers
                  </span>
                  : Connecting scholars, authors, and influential figures for
                  lectures, book signings, and panel discussions.
                </li>
                <li>
                  <span className="font-bold">Curriculum Development</span>:
                  Advocating for the inclusion of this significant era in formal
                  educational curricula.
                </li>
                <li>
                  <span className="font-bold">Public Programs</span>: Hosting
                  events that engage both the public and a new generation of
                  Ethiopians.
                </li>
              </ul>
            </div>

            {/* 4. Preserve the Martyrs Cemetery */}
            <div>
              <h2 className="font-bold text-lg mb-2">
                4. Preserve the Martyrs Cemetery
              </h2>
              <p>
                Join us in the ongoing maintenance and preservation of the
                Martyrs Cemetery as a sacred national monument and a place of
                remembrance. Support is needed for:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>
                  <span className="font-bold">Physical Maintenance</span>:
                  Ensuring the grounds and monuments are respectfully preserved.
                </li>
                <li>
                  <span className="font-bold">Operational Expenses</span>:
                  Helping cover costs required to keep this iconic site open and
                  accessible to the public.
                </li>
              </ul>
            </div>
          </div>

          {/* Donate Button */}
          <Button className="mt-12 rounded-[6px] px-6 py-3 text-[17px] shadow-md">
            <Link href={`/${pathname.split("/")[1]}/donate`}>
              {getInvolvedTexts.button}
            </Link>
          </Button>
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
