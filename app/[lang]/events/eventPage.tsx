"use client";
import React, { useState } from "react";
import img1 from "@/public/asset/event1.jpeg";
import img2 from "@/public/asset/event2.jpeg";
import img3 from "@/public/asset/event3.jpeg";
import img4 from "@/public/asset/nov23ya-1.jpeg";
import img5 from "@/public/asset/nov23ya-2.jpeg";
import img6 from "@/public/asset/nov23ya-3.jpeg";
import img44 from "@/public/asset/nov23ya-4.jpeg";
import img55 from "@/public/asset/nov23ya-5.jpeg";
import img66 from "@/public/asset/nov23ya-6.jpeg";
import img7 from "@/public/asset/New Inagural gala1.jpeg";
import img8 from "@/public/asset/New Inagural gala2.jpeg";
import img10 from "@/public/asset/New Inagural gala3.jpeg";
import img9 from "@/public/asset/octoberevent3.jpeg";
import bs1 from "@/public/asset/booksigning1.jpeg";
import bs2 from "@/public/asset/booksigning11.jpeg";
import bs3 from "@/public/asset/booksigning111.jpeg";
import bs4 from "@/public/asset/booksigning2.jpeg";
import bs5 from "@/public/asset/booksigning3.jpeg";
import ar1 from "@/public/asset/armenia1.jpeg";
import ar2 from "@/public/asset/armenia-2.jpeg";
import ar3 from "@/public/asset/armenia-3.jpeg";
import ar4 from "@/public/asset/armenia-4.jpeg";
import ar5 from "@/public/asset/armenia-5.jpeg";
import fif1 from "@/public/asset/50th1.jpeg";
import fif2 from "@/public/asset/50th2.jpeg";
import fif3 from "@/public/asset/50th3.jpeg";
import fif4 from "@/public/asset/50th4.jpeg";
import fif5 from "@/public/asset/50th5.jpeg";
import fif6 from "@/public/asset/50th6.jpeg";
import hab1 from "@/public/asset/habte11.jpeg";
import hab2 from "@/public/asset/march14-1.jpeg";
import hab3 from "@/public/asset/march14-2.jpeg";
import hab4 from "@/public/asset/march14-3.jpeg";
import hab5 from "@/public/asset/march14-4.jpeg";
import hab6 from "@/public/asset/march14-5.jpeg";
import inaug1 from "@/public/asset/inag22.jpeg";
import inaug2 from "@/public/asset/inaug3.jpeg";
import inaug3 from "@/public/asset/inaug11.jpeg";

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
  
  description: string;
  link:string;
}

const upcoming_events: Event[] = [
 
];

const previous_events: Event[] = [
  {
    date: "14",
    month: "MARCH",
    // year: "2025",
    images: [hab1, hab2, hab3, hab4,hab5, hab6], 
    title: "Launching of Prime Minister Aklilu Habtewold book Written by Dr. Selamawit Tadesse",
    location: "",
  //remove time
    description:
      "On March 14,2026, Yetarik Adera hosted the launch of a compelling historical fiction work on the life of Prime Minister Aklilu, authored by Dr. Selamawit Tadesse, highlighting an important chapter in Ethiopia’s history.",
 link:"https://yetarikadera.rsvpify.com/",
    },
  {
    date: "8",
    month: "MARCH",
    // year: "2025",
    images: [ar1, ar2, ar3, ar4, ar5], 
    title: "The centuries old relationship and contributions of the Armenian community in Ethiopia ",
    location: "",
  //remove time
    description:
      "On March 8, 2026, the Embassy of the Republic of Armenia, together with Yetarik Adera, organized a commemorative event honoring the longstanding friendship between Armenia and Ethiopia and celebrating the significant contributions of Armenians to Ethiopia’s modernization over many centuries. During the event, the Ambassador of the Republic of Armenia and other distinguished guests delivered remarks highlighting the strong relationship between the two countries. Mr. Vartkes Nalbandian presented an insightful and educational account of this shared history and held a book signing for his book, I Want to Die with a Flag. The event was attended by ambassadors from ten different countries, demonstrating broad diplomatic support for Yetarik Adera’s efforts to recognize and promote international camaraderie and historical ties with Ethiopia.",
 link:"https://yetarikadera.rsvpify.com/",
    },
  {
    date: "22",
    month: "NOVEMBER",
    // year: "2025",
    images: [img7, img8, inaug1, inaug2, inaug3], 
    title: "Inaugural Gala",
    location: "The Waterford, 6715 Commerce Street, Springfield VA 22150",
  //remove time
    description:
      "On November 22,2025, Yetarik Adera hosted its fundraising gala in Virginia, USA to advance the development of the Archive Center. The event brought together a distinguished group of supporters and partners, where the Board presented a compelling vision of the Archive Center’s mission, current progress, and future priorities guided by its four strategic pillars.",
 link:"https://yetarikadera.rsvpify.com/",
    },
  {
    date: "4",
    month: "OCTOBER",
    // year: "2025",
    images: [bs2, bs3, bs5,img9,bs4,bs1 ], // three images
    title: "Ato Tekalign Gedamu book signing",
    location: "Addis Ababa, Ethiopia,  National Archives and Libraries (Wemezeker)",
     //remove time
    description:
      "On October 4, 2025, Yetarik Adera organized a book signing event for Ato Tekalign  Gedamu to mark the launch of the Amharic version of his memoir, Republican on the Throne. Ato Tekalign is a highly experienced economist, who served HIM, Derg and EPRDF.",
      link:"#",
    },
  {
    date: "23",
    month: "NOVEMBER",
    // year: "2025",
    images: [img1, img2, img3, fif1, fif2, fif3, fif6], // three images
    title: "The 50th memorial anniversary of the Martyrs",
    location: "Addis Ababa, Ethiopia and DMV",
   //remove time
    description:
      "The 50th memorial anniversary of the Martyrs was commemorated worldwide. Family members, friends, and government representatives attended this significant event and expressed their respect in various ways.",
 link:"https://youtube.com/playlist?list=PL6QTP2ShnjE4T9QtTx481VrqgM5Nbf7-I&si=qWjIm7idXWuiHFeN",
    },
  {
    date: "23",
    month: "NOVEMBER",
    images: [img4, img5,img6,img44, img55,img66 ],
    // year: "2025", // three images
    title: "Yetarik Adera Inaugural",
    location: "Addis Ababa, Ethiopia and DMV",
 
    description:
      "Yetarik Adera inaugurated its archive center located on the 9th floor of the National Archives and Libraries (Wemezeker) compound. Its mission is to serve as a space for those interested in exploring and researching Ethiopia’s history between 1930 and 1974, which was a transformative era in the country’s journey toward modernization following the end of the Italian occupation.The center seeks to highlight the foundations and pillars laid during this period, which continue to shape Ethiopia’s accomplishments. Its collections include books, manuscripts, rare documents, photographs, and artifacts gathered from the families of former government officials.",
      link:"#",
    },
   
];



export default function UpcomingEvents ({
    eventTexts,
  }: {
    eventTexts: any;
  })  {
    const [upcomingIndexes, setUpcomingIndexes] = useState(
      Array(upcoming_events.length).fill(0)
    );
    const [previousIndexes, setPreviousIndexes] = useState(
      Array(previous_events.length).fill(0)
    );

    const goToPreviousImage = (
      eventIndex: number,
      setIndexes: React.Dispatch<React.SetStateAction<number[]>>,
      imagesLength: number
    ) => {
      setIndexes((prev) =>
        prev.map((value, i) =>
          i === eventIndex ? (value - 1 + imagesLength) % imagesLength : value
        )
      );
    };

    const goToNextImage = (
      eventIndex: number,
      setIndexes: React.Dispatch<React.SetStateAction<number[]>>,
      imagesLength: number
    ) => {
      setIndexes((prev) =>
        prev.map((value, i) => (i === eventIndex ? (value + 1) % imagesLength : value))
      );
    };


  return (
    <>
      <section
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic py-12 py-16 pt-[70px] text-[#4A2C13] flex flex-col items-start`}
      >
                {/* Upcoming section title */}
         {/* <div className="text-center md:mb-[30px] mt-[50px] px-6 md:px-20">
          <h2
            className={`${arapey.variable} font-arapey text-3xl md:text-5xl `}
          >
<span className=" pb-2">{eventTexts.heading1}</span> 
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0 }}
            className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
          />
        </div>  */}
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
                <div className="relative w-full md:w-[400px] h-[300px] md:h-[400px] rounded-md shadow-md overflow-hidden">
                  <AnimatePresence>
                    <motion.div
                      key={upcomingIndexes[index]}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={event.images[upcomingIndexes[index]]}
                        alt={event.title}
                        fill
                        className="object-fill rounded-2xl border border-primary border-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {event.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label={`Previous image for ${event.title}`}
                        onClick={() =>
                          goToPreviousImage(index, setUpcomingIndexes, event.images.length)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        aria-label={`Next image for ${event.title}`}
                        onClick={() =>
                          goToNextImage(index, setUpcomingIndexes, event.images.length)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 hover:underline">
                    {event.title}
                  </h3> 
                  <p className="text-sm text-gray-800 mb-1">
                    {event.location}
                  </p>
                 
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
            <span className=" pb-2">{eventTexts.heading2}</span> 
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
                <div className="relative w-full md:w-[350px] h-[450px] md:h-[400px] rounded-md shadow-md overflow-hidden">
                  <AnimatePresence>
                    <motion.div
                      key={previousIndexes[index]}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={event.images[previousIndexes[index]]}
                        alt={event.title}
                        fill
                        className="object-cover rounded-2xl border border-primary border-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {event.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label={`Previous image for ${event.title}`}
                        onClick={() =>
                          goToPreviousImage(index, setPreviousIndexes, event.images.length)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        aria-label={`Next image for ${event.title}`}
                        onClick={() =>
                          goToNextImage(index, setPreviousIndexes, event.images.length)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div>
                <Link href={event.link} ><h3 className="text-lg sm:text-xl font-semibold mb-4 hover:underline">
                    {event.title}
                  </h3></Link>  
                  <p className="text-sm text-gray-800 mb-1">
                    {event.location}
                  </p>
                 
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
