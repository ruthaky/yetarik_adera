"use client";
import React, { useState, useEffect } from "react";
import img1 from "@/public/asset/event1.jpeg";
import img2 from "@/public/asset/event2.jpeg";
import img3 from "@/public/asset/event3.jpeg";
import img4 from "@/public/asset/event201.jpeg";
import img5 from "@/public/asset/event202.jpeg";
import img6 from "@/public/asset/event203.jpeg";
import img7 from "@/public/asset/Inauguralgala.jpeg";
import img8 from "@/public/asset/inauguralGala2.jpeg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/app/shared/footer/footer";
import { Arapey, Noto_Serif_Ethiopic } from "next/font/google";
import Link from "next/link";

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
  link:string;
}

const previous_events: Event[] = [
  {
    date: "23",
    month: "NOVEMBER",
    images: [img1, img2, img3], // three images
    title: "The 50th memorial anniversary of the Martyrs",
    location: "Addis Ababa, Ethiopia and DMV",
    time: "7:00 pm - 8:00 pm",
    description:
      "The 50th memorial anniversary of the Martyrs was commemorated worldwide. Family members, friends, and government representatives attended this significant event and expressed their respect in various ways.",
 link:"https://youtube.com/playlist?list=PL6QTP2ShnjE4T9QtTx481VrqgM5Nbf7-I&si=qWjIm7idXWuiHFeN",
    },
  {
    date: "23",
    month: "NOVEMBER",
    images: [img4, img5,img6 ], // three images
    title: "Event 2",
    location: "Addis Ababa, Ethiopia and DMV",
    time: "7:00 pm - 8:00 pm",
    description:
      "Yetarik Adera inaugurated its archive center located on the 9th floor of the Wemezeker compound. Its mission is to serve as a space for those interested in exploring and researching Ethiopia’s history between 1930 and 1974, which was a transformative era in the country’s journey toward modernization following the end of the Italian occupation.The center seeks to highlight the foundations and pillars laid during this period, which continue to shape Ethiopia’s accomplishments. Its collections include books, manuscripts, rare documents gathered from the families of former government officials, photographs, and artifacts.",
      link:"#",
    },
];

const upcoming_events: Event[] = [
  {
    date: "22",
    month: "NOVEMBER",
    images: [img7, img8, img7], // three images
    title: "Inaugural Gala",
    location: "Holiday Inn, 6401 Brandon Ave, Springfield, VA, 22150",
    time: "7:00 pm - 11:00 pm",
    description:
      "The 50th memorial anniversary of the Martyrs was commemorated worldwide. Family members, friends, and government representatives attended this significant event and expressed their respect in various ways.",
 link:"https://luma.com/50dd08bs",
    },
];

export default function UpcomingEvents ({
    eventTexts,
  }: {
    eventTexts: any;
  })  {
    // Store currentIndex for each event separately
    const [currentIndexes, setCurrentIndexes] = useState(
      Array(previous_events.length).fill(0)
    );
  
    // Auto-slide every 4s
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndexes((prev) =>
          prev.map((val, i) => (val + 1) % previous_events[i].images.length)
        );
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <>
      <section
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic py-12 py-16 pt-[70px] text-[#4A2C13] flex flex-col items-start`}
      >
                {/* Upcoming section title */}
         <div className="text-center md:mb-[30px] mt-[50px] px-6 md:px-20">
          <h2
            className={`${arapey.variable} font-arapey text-3xl md:text-5xl `}
          >
            <span className=" pb-2">Upcoming</span> Events
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0 }}
            className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
          />
        </div> 
            {/* Loop through events */}
            <div className="md:space-y-16 px-4 sm:px-6 md:px-20 w-full">
          {upcoming_events.map((event, index) => (
            <div
              key={index}
              className="border-b border-[#B1864F] py-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
                {/* Date */}
                <div className="text-center text-xl font-bold w-16 md:w-auto">
                  <p className="text-sm border-b border-[#B1864F] pb-1">
                    {event.month}
                  </p>
                  <p className="text-3xl text-black">{event.date}</p>
                </div>

                {/* Image slideshow */}
                <div className="relative w-full md:w-[400px] h-[300px] md:h-[250px] rounded-md shadow-md overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndexes[index]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={event.images[currentIndexes[index]]}
                        alt={event.title}
                        fill
                        className="object-fill rounded-2xl border border-primary border-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 hover:underline">
                    {event.title}
                  </h3> 
                  <p className="text-sm text-gray-800 mb-1">
                    {event.location}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">{event.time}</p>
                  <p className="text-[15px] sm:text-[16px] mb-4 w-full md:w-[600px]">
                    {event.description}
                  </p>
                  <Link href={event.link} ><p className="font-bold underline">RSVP Here</p></Link> 
                </div>
              </div>
            </div>
          ))}
        </div>

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

            {/* Loop through events */}
            <div className="md:space-y-16 px-4 sm:px-6 md:px-20 w-full">
          {previous_events.map((event, index) => (
            <div
              key={index}
              className="border-b border-[#B1864F] py-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
                {/* Date */}
                <div className="text-center text-xl font-bold w-16 md:w-auto">
                  <p className="text-sm border-b border-[#B1864F] pb-1">
                    {event.month}
                  </p>
                  <p className="text-3xl text-black">{event.date}</p>
                </div>

                {/* Image slideshow */}
                <div className="relative w-full md:w-[400px] h-[200px] md:h-[250px] rounded-md shadow-md overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndexes[index]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={event.images[currentIndexes[index]]}
                        alt={event.title}
                        fill
                        className="object-fit rounded-2xl border border-primary border-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div>
                <Link href={event.link} ><h3 className="text-lg sm:text-xl font-semibold mb-4 hover:underline">
                    {event.title}
                  </h3></Link>  
                  <p className="text-sm text-gray-800 mb-1">
                    {event.location}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">{event.time}</p>
                  <p className="text-[15px] sm:text-[16px] mb-4 w-full md:w-[600px]">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </section>
      <Footer />
    </>
  );
};
;
