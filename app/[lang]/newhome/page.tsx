"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import img1 from "@/public/asset/circus 2.jpg";
import img2 from "@/public/asset/train.jpg";
import img3 from "@/public/asset/hostess.webp";
import img4 from "@/public/asset/award2 2.jpg";
import img5 from "@/public/asset/school 2.jpg";
import img6 from "@/public/asset/hostess.webp";
import img7 from "@/public/asset/award2 2.jpg";
import img8 from "@/public/asset/school 2.jpg";

const images = [
  { src: img3, alt: "Historic Image 1" },
  { src: img4, alt: "Historic Image 2" },
  { src: img5, alt: "Historic Image 3" },
  { src: img2, alt: "Historic Image 4" },
  { src: img1, alt: "Historic Image 5" },
  { src: img6, alt: "Historic Image 5" },
  { src: img3, alt: "Historic Image 1" },
  { src: img4, alt: "Historic Image 2" },
  { src: img5, alt: "Historic Image 3" },
  { src: img2, alt: "Historic Image 4" },
  { src: img1, alt: "Historic Image 5" },
  { src: img6, alt: "Historic Image 5" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen  flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      <header className="absolute top-0 w-full flex justify-between items-center py-6 px-10">
        <div className="text-xl font-bold">BrandLyft</div>
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="#">Brands</a>
          <a href="#">Creators</a>
          <a href="#">Pricing</a>
          <a href="#">Use Cases</a>
          <a href="#">Contact</a>
        </nav>
        <div className="space-x-4">
          <button className="px-4 py-2 rounded-lg">Log in</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Sign up
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="text-center mt-20 max-w-3xl">
       
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Yetarik Adera
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Boost Your Brand with High-Impact Short Videos from our expert content
          creators. Our team is ready to propel your business forward.   Boost Your Brand with High-Impact Short Videos from our expert content
          creators. Our team is ready to propel your business forward.
        </p>
        
      </div>

      {/* Infinite Scrolling Images */}
      <div className="relative mt-12 w-full overflow-hidden">
        <div className="flex w-max animate-marquee space-x-6">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="flex-shrink-0 overflow-hidden shadow-lg">
              <Image
                src={img.src}
                alt={`scroll-img-${i}`}
                width={400}
                height={300}
                className="object-cover w-[400px] h-[200px] md:h-[300px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4"> <button className="mt-8 px-6 py-2  text-black border border-primary transition">
          Get Started
        </button>
        <button className="mt-8 px-6 py-2 text-black border border-primary transition">
          Get Started
        </button>
        <button className="mt-8 px-6 py-2 text-black border border-primary transition">
          Get Started
        </button></div>
     
    </section>
  );
}