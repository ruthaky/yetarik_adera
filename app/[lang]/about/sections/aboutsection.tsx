"use client";

import React, { useState } from "react";
import Image from "next/image";

import img1 from "@/public/asset/lineofjudah.svg";
import img2 from "@/public/asset/haileselasie.svg";
import img3 from "@/public/asset/imgabout3.png";
import img5 from "@/public/asset/telekibeb.jpg";
import img6 from "@/public/asset/stationguy.jpg";
import img7 from "@/public/asset/bankbw.jpg";
import img8 from "@/public/asset/school 2.jpg";
import img9 from "@/public/asset/cinemabw.jpg";
import img10 from "@/public/asset/bibble.jpg";
import img12 from "@/public/asset/aviation.jpg";
import img14 from "@/public/asset/line.jpg";
import img15 from "@/public/asset/unradio.jpg";
import img16 from "@/public/asset/motor.jpg";
import { motion } from "framer-motion";

import logo from "/logo.svg";
import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
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

const AboutPage = ({
  aboutpageTexts,
}: {
  aboutpageTexts: any;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
        <MantineProvider>
    <div className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic text-[#2b2a28] flex flex-col items-center `}>
      

      {/* Hero Section */}
    
        <section className="w-full flex flex-col items-center justify-center mb-4 pt-[170px] md:pb-16">
   <section className="px-6 text-center md:text-start w-full md:w-[600px] md:mb-12">
  <h1 className={`${arapey.variable} font-arapey font-medium leading-snug inline-block mb-10 md:mb-0 `}>
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
        <section className="flex flex-col md:flex-row items-center justify-center gap-[50px] w-[75%]">
          <Image
            src={img1}
            alt="Emperor Haile Selassie"
            width={350}
            height={350}
            className="object-fit h-[300px] w-[400px] "
          />
          <p className="text-[18px] md:w-[750px] px-6 md:px-0 leading-relaxed">
           {aboutpageTexts.storyp1}
           <br></br>
           <br></br>
           {aboutpageTexts.storyp3}
          </p>
          
        </section>
<div className="w-[75%] flex items-start "> <Button
      className="mt-4 sm:mt-10"
      onClick={() => setExpanded((prev) => !prev)}
      aria-expanded={expanded}
    >
    {expanded ? 'Read Less' : 'Read More'}
    </Button></div>
       
      </section>


      {expanded && (
      <>
      {/* Reflection Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-0 md:w-[75%]">
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
            <p className="text-[18px] leading-relaxed">
              {aboutpageTexts.missionStory}
            </p>
          </div>
        </section>
        <section className="flex flex-col justify-end items-end w-full md:w-1/2">
          <Image src={img5} alt="Building" width={400} height={300} className="object-cover mb-4 h-[250px] w-[470px] rounded-[15px]" />
        </section>
      </div>

      {/* Featured Section */}
      <div className="flex items-center justify-center  w-full">
        <div className="text-[#2b2a28] flex flex-col justify-center  md:w-[75%]  py-8">
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
      <section className="py-[60px] md:w-[75%] flex flex-col gap-[20px] items-center">
        <Image src={img3} alt="Building" width={700} height={350} className="mb-8 w-full rounded-[15px]" />
        <p className="text-[18px]">
     {aboutpageTexts.storyp5}
        </p>
      </section>

      {/* Image Carousel */}
      <section className="w-full md:w-[75%] pb-12">
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 px-6 border border-primary py-2">
            {[img10, img12, img5, img6, img7, img8, img9, img14, img15, img16, img10, img12, img5, img6, img7, img8, img9, img14, img15, img16].map((imgSrc, index) => (
              <div key={`marq-${index}`} className="flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={imgSrc}
                  alt={`marquee-${index}`}
                  width={320}
                  height={220}
                  className="object-fit w-[240px] h-[160px] sm:w-[280px] sm:h-[200px] md:w-[320px] md:h-[220px] rounded-[15px]"
                />
              </div>
            ))}
          </div>
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-[#F7F4E9] to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-[#F7F4E9] to-transparent"></div> */}
        </div>
      </section>


      {/* Final Section */}
      <section className="pb-12 text-[18px] md:w-[75%]">
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
