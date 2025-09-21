"use client";

import React, { useState } from "react";
import Image from "next/image";

// import img1 from "@/public/asset/lineofjudah.svg";
import img2 from "@/public/asset/newimg10.jpeg";
import img3 from "@/public/asset/imgabout3.png";
import img4 from "@/public/asset/asset3.jpeg";
import img5 from "@/public/asset/asset10.jpeg";
import img7 from "@/public/asset/bankbw.jpg";
import img8 from "@/public/asset/school 2.jpg";
import img9 from "@/public/asset/cinemabw.jpg";
import img10 from "@/public/asset/asset11.jpeg";
// import img11 from "@/public/asset/newimg9.jpeg";
import img12 from "@/public/asset/aviation.jpg";
import img13 from "@/public/asset/newimg8.jpeg";
import img14 from "@/public/asset/line.jpg";
import img15 from "@/public/asset/unradio.jpg";
import img16 from "@/public/asset/motor.jpg";
import img17 from "@/public/asset/asset9.jpeg";
import img18 from "@/public/asset/4kilo.jpeg";
// import img19 from "@/public/asset/asset12.jpeg";

import { motion } from "framer-motion";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Noto_Serif_Ethiopic } from "next/font/google";
import { Arapey } from "next/font/google";
import { Button } from "@/components/ui/button";



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
const images = [
  img10, img12, img5, img7,
  img4, img8, img18, img9,
  img14, img15, img13, img16,
];

const AboutPage = ({
  aboutpageTexts,
}: {
  aboutpageTexts: any;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  return (
        <MantineProvider>
    <div className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic text-[#2b2a28] flex flex-col items-center `}>
      

      {/* Hero Section */}
    
        <section className="w-full flex flex-col items-center justify-start mb-6 pt-[120px] md:pt-[170px] md:pb-16">
   <section className="px-6 text-center md:text-start w-full md:w-[600px] mb-4 md:mb-12">
  <h1 className={`${arapey.variable} font-arapey font-medium leading-snug inline-block mb-4 md:mb-0 `}>
    {/* Line 1 */}
    <div className="inline-block">
      <span className="text-3xl md:text-5xl">{aboutpageTexts.introheading1}</span>
    <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay:0 }}
                className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
    </div>
    <br />

    {/* Line 2 */}
    <div className="inline-block  md:pl-[200px] mt-4 ">
      <div className="inline-block">
        <span className=" text-3xl md:text-[45px]">{aboutpageTexts.introheading2}</span>
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

        {/* Image and Text Section */}
        <section className="flex flex-col md:flex-row items-stretch justify-center md:gap-[50px] w-[90%] md:w-[80%]">
  {/* Image wrapper */}
  <div className="relative w-[400px] flex-shrink-0">
    <Image
      src={img17}
      alt="Emperor Haile Selassie"
      fill
      className="hidden md:flex object-cover border border-primary border-2 rounded-2xl"
    />
  </div>

  {/* Text */}
  <p className="text-[16px] md:w-[750px] leading-relaxed">
    {aboutpageTexts.storyp1}
    <br />
    <br />
    {aboutpageTexts.storyp3}
  </p>
</section>


<div className="w-[90%] md:w-[80%] flex items-start "> <Button
      className="mt-4 sm:mt-10 rounded-[4px]" 
      onClick={() => setExpanded((prev) => !prev)}
      aria-expanded={expanded}
    >
    {expanded ? aboutpageTexts.button1 : aboutpageTexts.button2}
    </Button></div>

       
      </section>


      {expanded && (
      <>
      {/* Reflection Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-0 md:w-[80%]">
        <section className="flex pb-12 w-full md:w-1/2">
          <div className="text-sm">
            <div className="inline-block mb-4">
              <h3 className="text-[22px] font-semibold">{aboutpageTexts.missionheading}</h3>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
            </div>
            <p className="text-[16px] leading-relaxed">
              {aboutpageTexts.missionStory}
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-end items-end w-full md:w-1/2">
          <Image src={img2} alt="Building" width={400} height={300} className="object-cover mb-4 h-[250px] w-[470px] border border-primary border-2 rounded-2xl" />
        </section>
      </div>

      {/* Featured Section */}
      <div className="flex items-center justify-center  w-full">
        <div className="text-[#2b2a28] flex flex-col justify-center  md:w-[80%]  py-8">
          <h2 className="text-xl flex items-end font-semibold border-l-2 border-[#b07936] pl-2 md:pl-4 mx-10 pb-4 h-[50px]">{aboutpageTexts.Visionheading}</h2>
          <div className="border-t border-[#b07936]">
            {/* First Row */}
            <div className="grid md:grid-cols-2 md-2 md:gap-8 md:border-b border-[#b07936]   px-10 h-full">
              <div className="h-full w-full p-2 md:p-4  border-l-2 border-[#b07936] ">
                <p className="font-bold">{aboutpageTexts.vision1}</p>
                <p>
                 {aboutpageTexts.vision1note}
                </p>
              </div>
              <div className="h-full w-full p-2 md:p-4 border-l-2 border-[#b07936] md:border-none">
                <p className="font-bold">{aboutpageTexts.vision2}</p>
                <p>
                 {aboutpageTexts.vision2note}
                </p>
              </div>
            </div>
            {/* Second Row */}
            <div className="grid md:grid-cols-2  md-2 md:gap-8  border-b border-[#b07936] px-10 h-full flex items-center">
              <div className="h-full w-full p-2 md:p-4  border-l-2 border-[#b07936] ">
                <p className="font-bold">{aboutpageTexts.vision3}</p>
                <p>
                  {aboutpageTexts.vision3note}
                </p>
              </div>
              <div className="h-full w-full p-2 md:p-4  border-l-2 border-[#b07936] md:border-none">
                <p className="font-bold">{aboutpageTexts.vision4}</p>
                <p>
            {aboutpageTexts.vision4note}
                </p>
              </div>
            </div>
          </div>
           <h2 className="text-xl flex items-end font-semibold border-l-2 border-[#b07936] pl-2 mx-10 pb-2 h-[50px] "></h2>
        </div>
      </div>

      {/* Commitment Section */}
      <section className="py-4 md:py-6 w-[90%] md:w-[80%] flex flex-col md:gap-[20px] items-center">
        <Image src={img3} alt="Building" width={700} height={350} className="mb-8 w-full border border-primary border-2 rounded-2xl h-[150px] md:h-[500px]" />
        <p className="text-[16px]">
     {aboutpageTexts.storyp5}
        </p>
      </section>

      {/* Image Carousel */}
      <section className="w-full md:w-[80%] pb-4 md:pb-6">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 px-6 py-4">
          {/* Duplicate the images for smooth infinite loop */}
          {[...Array(2)].map((_, i) =>
            images.map((imgSrc, index) => (
              <div
                key={`marq-${i}-${index}`}
                className="flex-shrink-0 overflow-hidden rounded-lg shadow-sm cursor-pointer"
                onClick={() => setSelectedImg(imgSrc.src)} // show modal on click
              >
                <Image
                  src={imgSrc}
                  alt={`marquee-${i}-${index}`}
                  width={320}
                  height={220}
                  className="object-fit w-[240px] h-[160px] sm:w-[280px] sm:h-[200px] md:w-[320px] md:h-[220px] border border-primary border-2 rounded-2xl"
                />
              </div>
            ))
          )}
        </div>

        {/* Gradient fades on sides */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-[#F7F4E9] to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-[#F7F4E9] to-transparent"></div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)} // close when clicking backdrop
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
          <Image
            src={selectedImg}
            alt="fullscreen"
            width={1000}
            height={800}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
        </div>
      )}
    </section>



      {/* Final Section */}
      <section className="pb-12 text-[16px] w-[90%] md:w-[80%]">
        <p>
         {aboutpageTexts.storyp6}
        </p>
      </section>
      </>
      )}
    </div>
    </MantineProvider>
  );
};

export default AboutPage;
