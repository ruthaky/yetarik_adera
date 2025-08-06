"use client"
export const dynamic = "force-static";
import Image from "next/image";
import React from "react";
import img1 from "@/public/asset/circus.jpg";
import img2 from "@/public/asset/train.jpg";
import img3 from "@/public/asset/wetader.jpg";
import img4 from "@/public/asset/award2.jpg";
import img5 from "@/public/asset/library.jpg"
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

import Link from "next/link";

export default function HeroSection({heroTexts}:{heroTexts: any;}) {
  const images = [img1, img2, img1, img2, img1];
  const pathname = usePathname();
  return (
  <section className="text-center py-[130px] px-4 bg-[#F7F4E9] h-screen">
    <div className="inline-block ">
  <h1 className="text-5xl md:text-6xl font-medium mb-4 animate-slideIn">
    <span className="font-serif ">
    {heroTexts.hero}

    </span>
     <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0 }}
                  className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
                />
  </h1>
 
  </div>
  <p className="text-lg md:text-xl mt-4 animate-slideIn delay-100">
    {heroTexts.subheading1} <br />
   {heroTexts.subheading2}
  </p>

 <div className="mt-6  flex justify-center gap-5 flex-wrap animate-slideIn delay-200">
  {/* Image 1 */}
  <div
    className="w-40 md:w-[200px] h-[310px] mr-[-20px] relative shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105"
    style={{
      transform: "perspective(1000px) rotateY(35deg) scale(1)",
      transformStyle: "preserve-3d",
    }}
  >
    <Image
      src={img3}
      alt="Historic Image 1"
      fill
      className="object-cover rounded-[8px] "
      sizes="(max-width: 768px) 160px, 192px"
    />
  </div>

  {/* Image 2 */}
  <div
    className="w-40 md:w-52 relative shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105"
    style={{
      transform: "perspective(1000px) rotateY(25deg) scale(1)",
      transformStyle: "preserve-3d",
    }}
  >
    <Image
      src={img4}
      alt="Historic Image 2"
      fill
      className="object-cover rounded-[8px]"
      sizes="(max-width: 768px) 160px, 192px"
    />
  </div>

  {/* Image 3 (center) */}
  <div
    className="w-[350px] h-[300px] mt-8 relative shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105"
    style={{
      transform: "perspective(1000px) rotateY(0deg) scale(1.1)",
      transformStyle: "preserve-3d",
    }}
  >
    <Image
      src={img5}
      alt="Historic Image 3"
      fill
      className="rounded-[8px] "
      sizes="(max-width: 768px) 160px, 192px"
    />
  </div>

  {/* Image 4 */}
  <div
    className="w-40 md:w-52 relative shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105"
    style={{
      transform: "perspective(1000px) rotateY(-25deg) scale(1)",
      transformStyle: "preserve-3d",
    }}
  >
    <Image
      src={img2}
      alt="Historic Image 4"
      fill
      className="object-cover rounded-[8px]"
      sizes="(max-width: 768px) 160px, 192px"
    />
  </div>

  {/* Image 5 */}
  <div
    className="w-40 md:w-[200px] h-[310px] ml-[-20px] relative shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105"
    style={{
      transform: "perspective(1000px) rotateY(-35deg) scale(1)",
      transformStyle: "preserve-3d",
    }}
  >
    <Image
      src={img1}
      alt="Historic Image 5"
      fill
      className="object-cover rounded-[8px]"
      sizes="(max-width: 768px) 160px, 192px"
    />
  </div>
</div>

  <div className="flex gap-8 items-center justify-center pt-12 animate-slideIn delay-300">
    <Link href={`/${pathname.split("/")[1]}/about`}>
      <div className="transition-transform duration-300 hover:-translate-y-1 hover:underline">
        {heroTexts.link1}
      </div>
    </Link>
    <Link href={`/${pathname.split("/")[1]}/members`}>
      <div className="transition-transform duration-300 hover:-translate-y-1 hover:underline">
        {heroTexts.link2}
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
