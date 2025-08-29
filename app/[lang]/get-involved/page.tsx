'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import img1 from "@/public/asset/placeholoder.jpg";
import img2 from "@/public/asset/placeholoder.jpg";
import img3 from "@/public/asset/placeholoder.jpg";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/app/shared/footer/footer';
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

// Testimonials data
const testimonials = [
  {
    quote:
      "Honestly, the military took everything we had. One thing they couldn’t take was my father’s scholarly work during his final days under arrest. I am happy to have an organization that will make his work available to many others.",
    name: "Kokeb Kassa",
    title: "Daughter of H.E Dejazmatch Kassa Wolde Mariam",
    image: img1,
  },
  {
    quote:
      "This organization helps preserve the legacy of our ancestors and provides access to knowledge for future generations.",
    name: "Abebe Bekele",
    title: "Grandson of Ras Desta Damtew",
    image: img2,
  },
  {
    quote:
      "It is vital that Ethiopia’s history is documented and accessible. I am proud to support this mission.",
    name: "Sara Mekonnen",
    title: "Historian & Researcher",
    image: img3,
  },
];

export default function GetInvolvedPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pathname = usePathname();

  // Autoplay effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      <main className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic pt-16 md:pt-0`}>
        {/* Header Section */}
        <section className="py-16 px-6 text-center max-w-4xl h-[600px] mx-auto flex flex-col justify-center items-center">
          <section className="px-6 md:text-start w-[400px] mb-12">
            <h1 className={`${arapey.variable} font-arapey text-3xl md:text-[45px] font-light leading-snug inline-block`}>
              <div className="inline-block pr-[70px] md:pr-0">
                <span>Get</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
                />
              </div>
              <br />
              <div className="inline-block pl-[30px] md:pl-[80px]">
                <div className="inline-block">
                  <span>Involved</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
                  />
                </div>
              </div>
            </h1>
          </section>
          <div className="space-y-3 text-[18px] text-left text-gray-700">
            <p>
              The military dictatorship did everything in its power to erase the contributions of Emperor Haile Selassie’s government to modern Ethiopia.
              They embarked on a program to eradicate any positive association with the prior regime.
              Fifty years later, we are determined to restore this history to its rightful place.
              We want future generations to understand their history, debate its successes and shortcomings and chart a path forward that is armed with knowledge.
            </p>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section
          className="bg-primary py-20 relative flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Active Testimonial with animation */}
          <div className="w-full md:w-[60%] mx-auto bg-white text-center rounded-md shadow-lg mx-4 h-[400px] flex items-center justify-center relative overflow-hidden px-8 py-12">
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
                  <p className="font-bold">{testimonials[currentSlide].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentSlide].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
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

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2  p-2 rounded-full "
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
          >
            &#8592;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2  p-2 rounded-full "
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
          >
            &#8594;
          </button>

          {/* Donate Button */}
          <Button className="mt-10">
            <Link href={`/${pathname.split("/")[1]}/donate`}>Donate</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
