export const dynamic = "force-static";
import Image from "next/image";
import React from "react";
import img1 from "@/public/asset/img1.jpg";
import img2 from "@/public/asset/img2.png";
import Link from "next/link";

export default function HeroSection() {
  const images = [img1, img2, img1, img2, img1];

  return (
    <section className="text-center py-[130px] px-4 bg-[#F7F4E9]">
      <h1 className="text-5xl md:text-6xl font-medium mb-4">
         <span className="border-b-[3px] border-[#B27C3A] font-serif ">Yetarik Adera</span>
      </h1>
      <p className="text-lg md:text-xl mt-8">
        Honoring The Past <br />
        Inspiring The Future
      </p>

      {/* Rotating/tilted card images */}
      <div className="mt-12 flex justify-center gap-4 flex-wrap">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`w-40 md:w-48 h-60 relative rounded-md shadow-lg overflow-hidden
              transition-transform duration-300
              ${
                idx === 0
                  ? "-rotate-6"
                  : idx === 1
                    ? "-rotate-3"
                    : idx === 3
                      ? "rotate-3"
                      : idx === 4
                        ? "rotate-6"
                        : ""
              }`}
          >
            <Image
              src={img}
              alt={`Historic Image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px, 192px"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-8 items-center justify-center py-8 ">
        <Link href="/about"><div>About Us</div></Link>
        <Link href="/members"><div>Members</div></Link>
       <Link href="/getinvolved"><div>Get Involved</div></Link> 
      </div>
    </section>
  );
}
