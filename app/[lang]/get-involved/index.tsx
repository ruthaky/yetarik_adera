'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import img1 from "@/public/asset/Testimonial1.jpg";
import img2 from "@/public/asset/testimonial2.jpg";
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
      "Honestly, the military took everything we had.  One thing they couldn't take was my father's scholarly work during his final days under arrest.  I am happy to have an organization that will make his work available to many others",
    name: "Kokeb Kassa",
    title: "Daughter of H.E. Dejazmatch Kassa Wolde Mariam",
    image: img1,
  },
  {
    quote:
      "As the grandchild of one of the 70, I only know about them through family stories.  Being involved with Yetarik Adera helps me get to know my grandfather and the work her did.  It's also a great chance to connect with others who, like me, treasure this part of their history.",
    name: "Anna Amha",
    title: "Grandchild of Dejazmatch Kassa Wolde Mariam",
    image: img2,
  },
];

export default function GetInvolvedPage({
    getInvolvedTexts,
  }: {
    getInvolvedTexts: any;
  }) {
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
                <span>{getInvolvedTexts.heading1}</span>
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
                  <span>{getInvolvedTexts.heading2}</span>
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
            {getInvolvedTexts.description}
            </p>
          </div>
           {/* Donate Button */}
           <Button className="mt-10 rounded-[4px]">
            <Link href={`/${pathname.split("/")[1]}/donate`}> {getInvolvedTexts.button}</Link>
          </Button>
        </section>

        {/* Testimonial Slider */}
        <section
          className="hidden bg-primary py-20 relative flex flex-col items-center"
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

         
        </section>
      </main>
      <Footer />
    </>
  );
}
