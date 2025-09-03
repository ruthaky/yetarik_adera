"use client";
export const dynamic = "force-static";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/public/asset/asset1.jpeg";
import img2 from "@/public/asset/train.jpg";
import img3 from "@/public/asset/hostess.webp";
import img4 from "@/public/asset/award2 2.jpg";
import img5 from "@/public/asset/school 2.jpg";
import img7 from "@/public/asset/newimg17.jpeg";
import img8 from "@/public/asset/newimg9.jpeg";
import img9 from "@/public/asset/newimg18.jpeg";
import img10 from "@/public/asset/newimg7.jpeg";
import img11 from "@/public/asset/newimg1.jpeg";
import img12 from "@/public/asset/asset13.jpeg";
import img13 from "@/public/asset/newimg16.jpeg";
import img14 from "@/public/asset/newimg13.jpeg";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Noto_Serif_Ethiopic } from "next/font/google";
import { Arapey } from "next/font/google";

// Arapey for headers
const arapey = Arapey({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arapey",
});

// Noto Serif Ethiopic for body text
const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"],
  subsets: ["ethiopic"],
  display: "swap",
  variable: "--font-noto-ethiopic",
});

const images = [
  { src: img3, alt: "Historic Image 1" },
  { src: img4, alt: "Historic Image 2" },
  { src: img5, alt: "Historic Image 3" },
  { src: img12, alt: "Historic Image 3" },
  { src: img13, alt: "Historic Image 4" },
  { src: img14, alt: "Historic Image 5" },
  { src: img2, alt: "Historic Image 4" },
  { src: img1, alt: "Historic Image 5" },
  { src: img11, alt: "Historic Image 1" },
  { src: img7, alt: "Historic Image 2" },
  { src: img8, alt: "Historic Image 3" },
  { src: img9, alt: "Historic Image 4" },
  { src: img10, alt: "Historic Image 5" },
];

export default function HeroSection({ heroTexts }: { heroTexts: any }) {
  const pathname = usePathname();
  const [centerIndex, setCenterIndex] = useState(2);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section
      className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic bg text-center px-4 h-[calc(100vh-70px)] flex flex-col items-center justify-end mt-[50px] pt-16 sm:pt-[100px]`}
    >
      {/* Heading */}
      <div className="inline-block">
        <h1
          className={`${arapey.variable} font-arapey text-[40px] sm:text-5xl md:text-6xl font-medium md:mb-4 animate-slideIn`}
        >
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
      <p className="sm:text-lg md:text-[16px] my-4 animate-slideIn delay-100 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
     {heroTexts.subheading1}
      
      </p>

      {/* Scrolling Images */}
      <div className="hidden md:flex relative sm:mt-6 w-full overflow-hidden pb-10">
      <div className="flex w-max animate-marquee space-x-6 py-4">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg 
                       w-[260px] h-[500px] sm:w-[300px] sm:h-[560px] lg:w-[330px] lg:h-[250px] 
                       cursor-pointer"
            onClick={() => setSelectedImg(img.src)}
          >
            <Image
              src={img.src}
              alt={`scroll-img-${i}`}
              fill
              className="object-fit border border-primary border-2 rounded-2xl"
              sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 340px"
            />
          </div>
        ))}
      </div>

      {/* left & right gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F7F4E9] to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F7F4E9] to-transparent"></div>

      {/* Fullscreen Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
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
    </div>


      {/* Mobile static image */}
      <Image
        src={img4}
        alt="Emperor Haile Selassie"
        width={330}
        height={330}
        className="object-cover w-[330px] h-[330px] md:hidden rounded-2xl my-6"
      />

      {/* Links */}
       <div className="flex flex-wrap gap-4 sm:gap-8 items-center justify-center  pb-10  animate-slideIn delay-300">
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
