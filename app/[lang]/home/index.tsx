"use client";
export const dynamic = "force-static";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/public/asset/circus.jpg";
import img2 from "@/public/asset/train.jpg";
import img3 from "@/public/asset/wetader.jpg";
import img4 from "@/public/asset/award2.jpg";
import img5 from "@/public/asset/library.jpg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Noto_Serif_Ethiopic } from "next/font/google";
import { Arapey } from "next/font/google";



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
  { src: img3, alt: "Historic Image 1" },
  { src: img4, alt: "Historic Image 2" },
  { src: img5, alt: "Historic Image 3" },
  { src: img2, alt: "Historic Image 4" },
  { src: img1, alt: "Historic Image 5" },
];

// Desktop/Tablet 3D styles
// Desktop/Tablet 3D styles
const slotStyles = [
  { className: "hidden sm:block w-28 md:w-[200px] h-[200px] md:h-[310px] mr-[-10px] md:mr-[-20px]", style: { transform: "perspective(1000px) rotateY(35deg)" } },
  { className: "hidden sm:block w-28 md:w-52 h-[200px] md:h-[310px]", style: { transform: "perspective(1000px) rotateY(25deg)" } },
  // Center image — mobile wider
  { className: "w-[250px] sm:w-[300px] md:w-[350px] h-[180px] sm:h-[250px] md:h-[300px] mt-2 sm:mt-8", style: { transform: "perspective(1000px) rotateY(0deg) scale(1.05)" } },
  { className: "hidden sm:block w-28 md:w-52 h-[200px] md:h-[310px]", style: { transform: "perspective(1000px) rotateY(-25deg)" } },
  { className: "hidden sm:block w-28 md:w-[200px] h-[200px] md:h-[310px] ml-[-10px] md:ml-[-20px]", style: { transform: "perspective(1000px) rotateY(-35deg)" } },
];


export default function HeroSection({ heroTexts }: { heroTexts: any }) {
  const pathname = usePathname();
  const [centerIndex, setCenterIndex] = useState(2);

  const prev = () => setCenterIndex((p) => (p - 1 + images.length) % images.length);
  const next = () => setCenterIndex((p) => (p + 1) % images.length);

  const getImageIndexForSlot = (slot: number) => {
    const offset = slot - 2;
    return (centerIndex + offset + images.length) % images.length;
  };

  const handleImageClick = (imgIndex: number) => setCenterIndex(imgIndex);

  return (
    <section className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic
 text-center py-16 sm:py-[130px] px-4 bg-[#F7F4E9] h-screen flex flex-col items-center justify-center md:mt-12`}>
      {/* Heading */}
      <div className="inline-block">
        <h1 className={`${arapey.variable} font-arapey text-[40px] sm:text-5xl md:text-6xl font-medium md:mb-4 animate-slideIn`}>
          <span className="font-header">{heroTexts.hero}</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[2px] w-[200px] sm:w-[300px] lg:w-[900px] bg-primary mt-0 mx-auto"
          />
        </h1>
      </div>

      {/* Subheading */}
      <p className="sm:text-lg md:text-xl my-4 animate-slideIn delay-100">
        {heroTexts.subheading1} <br />
        {heroTexts.subheading2}
      </p>

      {/* Carousel */}
      <div className="hidden md:flex relative mt-8 sm:mt-12 flex justify-center items-center gap-3 sm:gap-5 animate-slideIn delay-200">
        {/* Prev Button (hidden on mobile if swipe enabled) */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-0 sm:-left-10 z-10 p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-200 transition-transform hover:scale-110"
        >
          <FaChevronLeft />
        </button>

        {/* Images */}
        <div className="flex gap-3 sm:gap-5 overflow-x-auto sm:overflow-visible sm:perspective-[1000px] px-2 sm:px-0 scrollbar-hide">
          {slotStyles.map((pos, slot) => {
            const imgIndex = getImageIndexForSlot(slot);
            const img = images[imgIndex];
            return (
              <div
                key={imgIndex}
                onClick={() => handleImageClick(imgIndex)}
                className={`${pos.className} relative flex-shrink-0  overflow-hidden transition-transform duration-700 cursor-pointer`}
                style={{ ...pos.style, transformStyle: "preserve-3d" }}
              >
                <Image
  src={img.src}
  alt={img.alt}
  className="object-cover rounded-[8px] w-[300px] h-[220px] sm:w-[208px] sm:h-[260px] md:w-[350px] md:h-[300px]"
/>

              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="hidden sm:flex absolute right-0 sm:-right-10 z-10 p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-200 transition-transform hover:scale-110"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* moble image */}
   <Image
            src={img4}
            alt="Emperor Haile Selassie"
            width={330}
            height={330}
            className="object-cover w-[330px] h-[330px] md:hidden"
          />

      {/* Links */}
      <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center pt-10 sm:pt-[60px] animate-slideIn delay-300">
        <Link href={`/${pathname.split("/")[1]}/about`}>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:underline">
            {heroTexts.link1}
          </div>
        </Link>
        <Link href={`/${pathname.split("/")[1]}/martyrs`}>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:underline">
            {heroTexts.link4}
          </div>
        </Link>
        <Link href={`/${pathname.split("/")[1]}/get-involved`}>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:underline">
            {heroTexts.link3}
          </div>
        </Link>
      </div>
    </section>
  );
}
