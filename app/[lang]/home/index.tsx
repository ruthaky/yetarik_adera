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

const images = [
  { src: img3, alt: "Historic Image 1" },
  { src: img4, alt: "Historic Image 2" },
  { src: img5, alt: "Historic Image 3" },
  { src: img2, alt: "Historic Image 4" },
  { src: img1, alt: "Historic Image 5" },
];

// Slot positions with perspective rotation
const slotStyles = [
  { className: "w-40 md:w-[200px] h-[310px] mr-[-20px]", style: { transform: "perspective(1000px) rotateY(35deg) scale(1)" } },
  { className: "w-40 md:w-52", style: { transform: "perspective(1000px) rotateY(25deg) scale(1)" } },
  { className: "w-[350px] h-[300px] mt-8", style: { transform: "perspective(1000px) rotateY(0deg) scale(1.1)" } },
  { className: "w-40 md:w-52", style: { transform: "perspective(1000px) rotateY(-25deg) scale(1)" } },
  { className: "w-40 md:w-[200px] h-[310px] ml-[-20px]", style: { transform: "perspective(1000px) rotateY(-35deg) scale(1)" } },
];

export default function HeroSection({ heroTexts }: { heroTexts: any }) {
  const pathname = usePathname();
  const [centerIndex, setCenterIndex] = useState(2); // start with 3rd image in center

  const prev = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  // Get image index for a slot based on centerIndex
  const getImageIndexForSlot = (slot: number) => {
    const offset = slot - 2; // slot 2 is center
    return (centerIndex + offset + images.length) % images.length;
  };

  // When an image is clicked, make it the center
  const handleImageClick = (imgIndex: number) => {
    setCenterIndex(imgIndex);
  };

  return (
    <section className="text-center py-[130px] px-4 bg-[#F7F4E9] h-screen">
      {/* Heading */}
      <div className="inline-block">
        <h1 className="text-5xl md:text-6xl font-medium mb-4 animate-slideIn">
          <span className="font-serif">{heroTexts.hero}</span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0 }}
            className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
          />
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-lg md:text-xl mt-4 animate-slideIn delay-100">
        {heroTexts.subheading1} <br />
        {heroTexts.subheading2}
      </p>

      {/* Carousel */}
      <div className="relative mt-12 flex justify-center items-center gap-5 animate-slideIn delay-200">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-10 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-200 transition-transform hover:scale-110"
        >
          <FaChevronLeft />
        </button>

        {/* Images */}
        <div className="flex gap-5 perspective-3d">
          {slotStyles.map((pos, slot) => {
            const imgIndex = getImageIndexForSlot(slot);
            const img = images[imgIndex];
            return (
              <div
                key={imgIndex}
                onClick={() => handleImageClick(imgIndex)}
                className={`${pos.className} relative shadow-lg overflow-hidden transition-transform duration-700 cursor-pointer`}
                style={{ ...pos.style, transformStyle: "preserve-3d" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover rounded-[8px]"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-0 md:-right-10 z-10 p-3 bg-white rounded-full shadow hover:bg-gray-200 transition-transform hover:scale-110"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Links */}
      <div className="flex gap-8 items-center justify-center pt-[60px] animate-slideIn delay-300">
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
        {/* <Link href={`/${pathname.split("/")[1]}/members`}>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:underline">
            {heroTexts.link2}
          </div>
        </Link> */}
        <Link href={`/${pathname.split("/")[1]}/get-involved`}>
          <div className="transition-transform duration-300 hover:-translate-y-1 hover:underline">
            {heroTexts.link3}
          </div>
        </Link>
      </div>
    </section>
  );
}
