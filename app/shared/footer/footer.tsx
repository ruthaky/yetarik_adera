"use client";
import React from "react";
import logo from "@/public/asset/SURGE CROPS.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Noto_Serif_Ethiopic } from "next/font/google";

const notoSerifEthiopic = Noto_Serif_Ethiopic({
  weight: ["400"],
  subsets: ["ethiopic"],
  display: "swap",
  variable: "--font-noto-ethiopic",
});

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "en"; // detect language

  // ✅ Footer translations
  const footerText = {
    en: {
      title: "YETARIK ADERA",
      contact: "Contact us: yetarikadera@gmail.com",
      donate: "Donate",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      accessibility: "Accessibility",
      legal: "Legal",
      copyright: "Design with love © yetarikadera 2024. All rights reserved",
      socials: {
        instagram: "Instagram",
        youtube: "YouTube",
        tiktok: "TikTok",
        facebook: "Facebook",
      },
    },
    am: {
      title: "የታሪክ አደራ",
      contact: "አግኙን: yetarikadera@gmail.com",
      donate: "ልገሳ አቅርብ",
      terms: "ውሎች እና ሁኔታዎች",
      privacy: "የግላዊነት ፖሊሲ",
      accessibility: "አካል ጉዳተኝነት",
      legal: "ሕጋዊ",
      copyright: "በፍቅር የተዘጋጀ © የታሪክ አደራ 2024። ሁሉም መብቶች ተጠብቀዋል።",
      socials: {
        instagram: "ኢንስታግራም",
        youtube: "ዩቲዩብ",
        tiktok: "ቲክቶክ",
        facebook: "ፌስቡክ",
      },
    },
  };

  const t = footerText[currentLang as "en" | "am"];

  return (
    <div>
      <footer
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic bg-[#333333] text-white p-6 md:px-14 md:py-16 text-sm overflow-x-hidden`}
      >
        <div className="flex md:flex-row flex-col justify-between">
          <div>
            <h4 className="font-bold text-[25px] mb-1">{t.title}</h4>
            <p className="py-2">{t.contact}</p>
            <div className="flex space-x-6 mt-2">
              <a href="#">{t.socials.instagram}</a>
              <a href="#">{t.socials.youtube}</a>
              <a href="#">{t.socials.tiktok}</a>
              <a href="#">{t.socials.facebook}</a>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex gap-2">
              <button className="bg-primary text-white px-4 py-2 rounded-[4px]">
                {t.donate}
              </button>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-primary my-8"></div>
        <div className="text-xs mt-4 flex gap-2 flex-col md:flex-row justify-between text-[#92989F]">
          <div className="flex gap-1 md:gap-4">
            <div>{t.terms}</div>
            <div>|</div>
            <div>{t.privacy}</div>
            <div>|</div>
            <div>{t.accessibility}</div>
            <div>|</div>
            <div>{t.legal}</div>
          </div>

          <p>{t.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
