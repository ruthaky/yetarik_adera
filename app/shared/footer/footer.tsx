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

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLinkClick = (path: string) => {
    close(); // Close the menu
    router.push(path); // Navigate to the specified path
  };
  return (
    <div>
      <footer className="bg-[#2b2a28] text-white px-6 py-10 text-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-bold mb-1">YETARIK ADERA</h4>
            <p>Contact us: info@yetarikadera.org</p>
            <div className="flex space-x-2 mt-2">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">TikTok</a>
              <a href="#">Medium</a>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="mb-1">Get the freshest news from us:</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-2 py-1 text-black"
              />
              <button className="bg-orange-400 text-black px-3 py-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-xs mt-4 flex justify-between">
          <p>Terms • Privacy • Accessibility • Legal</p>
          <p>Design with love © yetarikadera 2024</p>
        </div>
      </footer>
    </div>
  );
}
