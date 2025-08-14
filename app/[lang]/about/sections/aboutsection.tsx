"use client";

import React from "react";
import Image from "next/image";

import img1 from "@/public/asset/lineofjudah.svg";
import img2 from "@/public/asset/haileselasie.svg";
import img3 from "@/public/asset/imgabout3.png";
import img4 from "@/public/asset/imgabout4.png";
import img5 from "@/public/asset/telekibeb.jpg";
import img6 from "@/public/asset/telecom.jpg";
import img7 from "@/public/asset/bank2.jpg";
import img8 from "@/public/asset/library.jpg";
import img9 from "@/public/asset/cinema.jpg";
import img10 from "@/public/asset/bibble.jpg";
import img11 from "@/public/asset/Assab.jpeg";
import img12 from "@/public/asset/aviation.jpg";
import img13 from "@/public/asset/batamariam.jpg";
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

const AboutPage = ({
  aboutpageTexts,
}: {
  aboutpageTexts: any;
}) => {
  return (
        <MantineProvider>
    <div className="bg-[#f8f5ef] text-[#2b2a28] flex flex-col items-center font-serif ">
      

      {/* Hero Section */}
    
        <section className="w-full flex flex-col items-center justify-center mb-4 pt-32 md:pb-16">
   <section className="px-6 text-center md:text-start w-full md:w-[600px] md:mb-12">
  <h1 className="font-light leading-snug inline-block mb-10 md:mb-0">
    {/* Line 1 */}
    <div className="inline-block">
      <span className="font-serif text-3xl md:text-[45px]">{aboutpageTexts.introheading1}</span>
    <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay:0 }}
                className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
    </div>
    <br />

    {/* Line 2 */}
    <div className="inline-block  md:pl-[200px] mt-4">
      <div className="inline-block">
        <span className="font-serif text-3xl md:text-[45px]">{aboutpageTexts.introheading2}</span>
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
        <section className="flex flex-col md:flex-row items-center justify-center gap-[50px]">
          <Image
            src={img2}
            alt="Emperor Haile Selassie"
            width={350}
            height={350}
            className="object-cover"
          />
          <p className="text-[18px] md:w-[550px] px-6 md:px-0 leading-relaxed">
           {aboutpageTexts.storyp1}
          </p>
        </section>
      </section>

      {/* Legacy Section */}
      <section className="pb-12 w-full px-6 md:px-0 md:w-[70%] mx-auto text-[18px] leading-relaxed flex flex-col gap-4">
        <p>
          {aboutpageTexts.storyp2}
        </p>
        <p>
              {aboutpageTexts.storyp3}
        </p>
      </section>

      {/* Reflection Section */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-0 md:w-[70%]">
        <section className="flex items-center pb-12 w-full md:w-1/2">
          <div className="text-sm">
            <div className="inline-block mb-3">
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
        <section className="px-6 pb-12 flex flex-col items-center justify-center w-full md:w-1/2">
          <Image src={img1} alt="Building" width={500} height={350} className="mb-4" />
        </section>
      </div>

      {/* Featured Section */}
      <div className="flex items-center justify-center  w-full">
        <div className="bg-[#f8f5ef] text-[#2b2a28] flex flex-col justify-center  md:w-[70%] font-serif py-8">
          <h2 className="text-xl flex items-end font-semibold border-l-2 border-[#b07936] pl-2 md:pl-4 mx-10 pb-2 h-[50px]">{aboutpageTexts.Visionheading}</h2>
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
      <section className="px-6 py-[60px] md:w-[75%] flex flex-col gap-[20px] items-center">
        <Image src={img3} alt="Building" width={700} height={350} className="mb-8 w-full" />
        <p className="text-[18px]">
     {aboutpageTexts.storyp5}
        </p>
      </section>

      {/* Image Carousel */}
      <section className=" w-full md:w-[75%] flex items-center justify-center pb-12">
  <Carousel
  withIndicators
  height={250}
  slideSize="33.3%"
  slideGap="sm"
  loop
  align="center"
  slidesToScroll={3}
  className="p-6 w-full"
>
    {[img10, img13, img11, img5, img6, img7, img8, img9, img14, img15, img16].map((imgSrc, index) => (
      <Carousel.Slide key={index}>
        <div className="relative w-full h-full">
          <Image
            src={imgSrc}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
      </Carousel.Slide>
    ))}
  </Carousel>
</section>


      {/* Final Section */}
      <section className="px-6 pb-12 text-[18px] md:w-[75%]">
        <p>
         {aboutpageTexts.storyp6}
        </p>
      </section>
    </div>
    </MantineProvider>
  );
};

export default AboutPage;
