"use client";
import React, { useState, useEffect } from "react";
import img1 from "@/public/asset/event1.jpeg";
import img2 from "@/public/asset/event2.jpeg";
import img3 from "@/public/asset/event3.jpeg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/app/shared/footer/footer";
import { Arapey, Noto_Serif_Ethiopic } from "next/font/google";

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

interface Event {
  date: string;
  month: string;
  images: any[]; // now holds multiple images
  title: string;
  location: string;
  time: string;
  description: string;
}

const events: Event[] = [
  {
    date: "15",
    month: "JUNE",
    images: [img1, img2, img3], // three images
    title: "The 50th memorial anniversary of the Martyrs",
    location: "Addis Ababa, Ethiopia and DMV",
    time: "7:00 pm - 8:00 pm",
    description:
      "The 50th memorial anniversary of the Martyrs was commemorated worldwide. Family members, friends, and government representatives attended this significant event and expressed their respect in various ways.",
  },
];

export default function UpcomingEvents ({
    eventTexts,
  }: {
    eventTexts: any;
  })  {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events[0].images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic py-12 py-16 pt-[70px] text-[#4A2C13] flex flex-col items-start`}
      >
        <div className="text-center md:mb-[30px] mt-[30px] md:mt-[50px] px-4 sm:px-6 md:px-20">
          <h2 className={`${arapey.variable} font-arapey text-3xl md:text-5xl`}>
            <span className=" pb-2">{eventTexts.heading}</span> 
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0 }}
            className="h-[2px] w-[200px] sm:w-[300px] lg:w-[900px] bg-primary mt-1 mx-auto"
          />
        </div>

        {/* First event with image slideshow */}
        <div className="md:space-y-16 px-4 sm:px-6 md:px-20 w-full">
          <div className="border-b border-[#B1864F] py-12">
            <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
              {/* Date */}
              <div className="text-center text-xl font-bol w-16 md:w-auto">
                <p className="text-sm border-b border-[#B1864F] pb-1">
                  {events[0].month}
                </p>
                <p className="text-3xl text-black">{events[0].date}</p>
              </div>

              {/* Image slideshow */}
              <div className="relative w-full  md:w-[400px] h-[200px] md:h-[250px]  rounded-md shadow-md overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={events[0].images[currentIndex]}
                      alt={events[0].title}
                      fill
                      className="object-cover rounded-2xl border border-primary border-2"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

           
              {/* Content */}
              <div >
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  {events[0].title}
                </h3>
                <p className="text-sm text-gray-800 mb-1">
                  {events[0].location}
                </p>
                <p className="text-sm text-gray-700 mb-3">{events[0].time}</p>
                <p className="text-[15px] sm:text-[16px] mb-4 w-full md:w-[600px]">
                  {events[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming section title */}
        {/* <div className="text-center md:mb-[30px] mt-[50px] px-6 md:px-20">
          <h2
            className={`${arapey.variable} font-arapey text-3xl md:text-4xl `}
          >
            <span className=" pb-2">Upcoming</span> Events
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0 }}
            className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
          />
        </div> */}
      </section>
      <Footer />
    </>
  );
};
;
