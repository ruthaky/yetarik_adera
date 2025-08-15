"use client";
import React from "react";
import logo from "@/public/asset/SURGE CROPS.png";
import Image from "next/image";
import Link from "next/link";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";
import { Noto_Serif_Ethiopic } from "next/font/google";
// Noto Serif Ethiopic for body text
const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"], // normal
  subsets: ["ethiopic"], // supports Amharic, Tigrinya, etc.
  display: "swap",
  variable: "--font-noto-ethiopic",
});

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div>
      <footer className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic bg-[#333333] text-white p-6 md:px-14 md:py-16 text-sm overflow-x-hidden`}>
        <div className="flex md:flex-row flex-col justify-between">
          <div>
            <h4 className="font-bold text-[25px] mb-1">YETARIK ADERA</h4>
            <p className="py-2">Contact us: info@yetarikadera.org</p>
            <div className="flex space-x-6 mt-2">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">TikTok</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="mb-1 py-2">Get the freshest news from us:</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-2 py-1 text-black rounded-[4px] w-[250px]"
              />
              <button className="bg-[#B8B0BD] text-white px-4 py-2 rounded-[4px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#71777D] my-8"></div>
        <div className="text-xs mt-4 flex gap-2 flex-col md:flex-row justify-between text-[#92989F]">
          <div className="flex gap-1 md:gap-4 "><div>Terms & Conditions</div><div>|</div><div>Privacy Policy</div><div>|</div><div>Accessibility</div><div>|</div><div>Legal</div></div>
          
          <p>Design with love © yetarikadera 2024. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
