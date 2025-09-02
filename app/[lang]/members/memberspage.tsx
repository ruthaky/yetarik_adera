'use client';
import { useState } from "react";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Import images
import img1 from "@/public/asset/Kiddie.webp";
import img6 from "@/public/asset/Laly.jpg";
import img5 from "@/public/asset/Tegi.svg";
import img2 from "@/public/asset/atsedebw.jpg";
import img3 from "@/public/asset/monique.jpeg";
import img4 from "@/public/asset/gashamdebw.jpg";
import img7 from "@/public/asset/askadetchbw.jpg";
import img8 from "@/public/asset/hirut.jpeg";
import img9 from "@/public/asset/rahelbw.jpg";
import img10 from "@/public/asset/yoditbw.jpg";
import img11 from "@/public/asset/sirgut.jpeg";

import Footer from "@/app/shared/footer/footer";
import { Arapey, Noto_Serif_Ethiopic } from 'next/font/google'

const arapey = Arapey({ weight: ["400"], subsets: ["latin"], display: "swap", variable: "--font-arapey" });
const notoSerifEthiopic = Noto_Serif_Ethiopic({ weight: ["400"], subsets: ["ethiopic"], display: "swap", variable: "--font-noto-ethiopic" });

// Define member type
interface BoardMember {
  name: any;
  title: any;
  image: StaticImageData;
  description?: any;
}


const members: BoardMember[] = [
  {
    name: { en: "Seble Nebiyeloul", am: "ሰብለ ነቢየሉል" },
    title: { en: "Chair", am: "የቦርድ ሊቀመንበር" },
    image: img1,
    description: {
      en: [ "As a board member of Yetarik Adera, it is my privilege to highlight the immense value that our organization brings to preserving our history and educating future generations.", "Through our dedicated efforts in collecting oral histories, compiling photo archives, curating educational materials, creating documentary films, and publishing books, we aim to ensure that the stories of our past are not forgotten.", "Our commitment to the motto 'Never Again' stands as a testament to our resolve against persecution and unjust detention, as we strive to promote justice and remembrance in all our endeavors.", "Looking forward, the upcoming year holds great promise for us to continue making a meaningful impact and effecting positive change within our community. Together, let us march forward in unity, learning from the past to protect our future." ],
      am: ["የየታሪክ አደራ የቦርድ አባል እንደመሆኔ፣ ድርጅታችን ታሪካችንን በመጠበቅ እና መጪውን ትውልድ ለማስተማር የሚያበረክተውን የላቀ ጠቀሜታ ለማጉላት ትልቅ እድል ነው። ስደትን እና ኢፍትሃዊ እስራትን በመቃወም ቁርጠኝነታችንን ለማሳየት በምናደርገው ጥረት ሁሉ ፍትህን እና መታሰቢያን ለማጎልበት ስንጥር።»፣ `በጉጉት ስንጠባበቅ መጪው አመት በማህበረሰባችን ውስጥ ትርጉም ያለው ተጽእኖ እና አወንታዊ ለውጥ ለማምጣት ትልቅ ተስፋ ይሰጠናል። መጪውን ህይወታችንን ለመጠበቅ ካለፈው ተምረን በአንድነት ወደ ፊት እንገስግስ።"]
    }
  },
  {
    name: { en: "Atsede Mariam Assefa", am: "አፀደማርያም አሰፋ" },
    title: { en: "Vice Chair", am: "ምክትል ሊቀመንበር" },
    image: img2,
    description: {
      en: ["My name is Atsede Mariam Assefa, and I am the eldest daughter of Lt. Gen. Assefa Ayene. I was educated at the Lycée Guebre Mariam and left Ethiopia in 1971 for higher education first in France, and later in the US. From 1982 until I retired in 2019, I was the Executive Director of World Education Services, a not-for-profit organization in New York. In addition to Yetarik Adera, I am currently on the boards of organizations in the US and in Europe."," I joined Yetarik Adera because I believe in the organization’s purpose and goals of recording and preserving the foundational work of our fathers who rebuilt and modernized Ethiopia after the Italian war. Their history has been forgotten over the past 50 years and through Yetarik Adera we will strive to gain recognition for the rich legacy of our fathers and restore it to its rightful place in the history of Ethiopia." ],
      am: ["አፀደ ማርያም አሰፋ እባላለሁ የሌ/ጄኔራል አሰፋ አየኔ የበኩር ልጅ ነኝ። በሊሴ ገብረ ማርያም የተማርኩ ሲሆን በ1971 ከኢትዮጵያ ለከፍተኛ ትምህርት በመጀመሪያ ፈረንሳይ፣ በኋላም አሜሪካ ሄድኩ። ከ1982 ጀምሮ በ2019 ጡረታ እስክወጣ ድረስ፣ በኒውዮርክ ውስጥ ለትርፍ ያልተቋቋመ ድርጅት የዓለም ትምህርት አገልግሎት ዋና ዳይሬክተር ነበርኩ። ከየታሪክ አደራ በተጨማሪ በአሁኑ ጊዜ በአሜሪካ እና በአውሮፓ በድርጅቶች ቦርድ አባል ነኝ። ከኢጣሊያ ጦርነት በኋላ ኢትዮጵያን መልሰው የገነቡት እና ያዘምኑት አባቶቻችን የሠሩትን የመሠረት ሥራ የመዝግቦ እና የማቆየት የድርጅቱን ዓላማና ዓላማ ስለማምን ነው ከየታሪክ አደራ ጋር የተቀላቀልኩት። ታሪካቸው ባለፉት 50 አመታት ተረስቷል እና በዬታሪክ አደራ በኩል የአባቶቻችንን ትልቅ ትሩፋት እውቅና ለማግኘት እና በኢትዮጵያ ታሪክ ውስጥ ወደነበረበት ትክክለኛ ቦታ ለመመለስ እንጥራለን።"]
    }
  },
  {
    name: { en: "Monique Tamrat", am: "ሞኒክ ታምራት" },
    title: { en: "Secretary", am: "የቦርድ ጸሐፊ" },
    image: img3,
    description: {
      en: ["My name is Monique Tamrat, and I am the youngest of Colonel Tamrat Yigezu’s children. I have lived in Ethiopia all my life. I’ve attended Nazareth School, American Mission, and Addis Ababa University. With over 25 years of experience as a Marketing and Procurement Specialist for various NGOs, I am currently the Marketing Head at a private company specializing in spices."," I am honored to join the board of Yetarik Adera, primarily because its mission is to ensure that future generations understand the efforts of the officials of Atse Haile Selassie’s regime to modernize and effectively govern our country. I believe that so much of their contribution remains unacknowledged and I am confident that Yetarik Adera can help reverse many misconceptions.." ],
      am: ["ስሜ ሞኒክ ታምራት እባላለሁ ከኮሎኔል ታምራት ይገዙ ልጆች የመጨረሻ ልጅ ነኝ። ሕይወቴን ሙሉ ኢትዮጵያ ውስጥ ነው የኖርኩት። በናዝሬት ትምህርት ቤት፣ በአሜሪካ ሚሲዮን እና በአዲስ አበባ ዩኒቨርሲቲ ተምሬያለሁ። ከ25 ዓመታት በላይ በተለያዩ መንግሥታዊ ያልሆኑ ድርጅቶች የግብይትና ግዥ ባለሙያ ሆኜ ባገለገልኩበት ወቅት፣ በቅመማ ቅመም የግል ኩባንያ ውስጥ የማርኬቲንግ ኃላፊ ሆኛለሁ።›› በማለት የየታሪክ አደራ ቦርድ አባል በመሆኔ ትልቅ ክብር ይሰማኛል፣ በዋናነት ተልዕኮው የአጼ ኃይለሥላሴ መንግሥት ባለሥልጣናት አገራችንን ለማዘመንና በብቃት ለማስተዳደር የሚያደርጉትን ጥረት መጪው ትውልድ እንዲገነዘብ ለማድረግ ነው። ያበረከቱት አስተዋጽኦ ብዙም እውቅና ያልተሰጠው እንደሆነ አምናለሁ እናም ዬታሪክ አደራ ብዙ የተሳሳቱ አመለካከቶችን ለመቀልበስ እንደሚረዳ እርግጠኛ ነኝ።"]
    }
  },
  {
    name: { en: "Amde Akalework", am: "አምደ አካለወርቅ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img4,
    description: {
      en: ["Yetarik Adera is a continuation of Ye Michael Mehaber, whose committee was formed by a group of family member of the 68 martyrs slaughtered by the Derg and buried at Kidist Selassie. This mehaber took charge of running the monument constructed by the families of the 68. I was a member from the beginning. Unfortunately, as our members started to age, I took the initiative of forming a committee of the younger generation to prepare them to take over our work, as the history of these families is the history of Ethiopia. The challenges were many, but we've managed to create an NGO with a dynamic board that I am proud to be part of as a founding member." ],
      am: ["..."]
    }
  },
  {
    name: { en: "Askadetch Debebe", am: "አስካደች ደበበ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img7,
    description: {
      en: ["My Name is Askadech Debebe Hailemariam. I am the second daughter of Lt. General Debebe Hailemariam and W/o Sossena Abebe. I attended German School in Addis Ababa, then in 1962 I went to Vienna - Austria completed my high school and graduated in Law from the University of Vienna."," In 1999 I moved back to Addis Ababa and joined St.Michael Mehaber which was established for the memorial of the 60 dignitaries executed by the Derg without trial and then became a member of Yetarik Adera Organization."," The aim of Yetarik Adera is to create awareness to existing and future generation on the contributions of Emperor Haile Selassie and his cabinet for Ethiopia." ],
      am: ["የታሪክ አደራ የየሚካኤል መሀበር ቀጣይነት ያለው ኮሚቴው በደርግ የታረደ 68ቱ ሰማዕታት ቤተሰብ አባላት በመሆን በቅድስት ሥላሴ የተቀበሩ ናቸው። ይህ መሀበር በ68ቱ ቤተሰቦች የተሰራውን ሀውልት የማስኬድ ሃላፊነት ወስዷል።ከመጀመሪያው አባል ነበርኩ። እንደ አለመታደል ሆኖ አባሎቻችን እያረጀ ሲሄዱ የነዚህ ቤተሰቦች ታሪክ የኢትዮጵያ ታሪክ በመሆኑ ወጣቱን ትውልድ ኮሚቴ አቋቁሜ ስራችንን እንዲረከቡ ወስኛለሁ። ተግዳሮቶቹ ብዙ ነበሩ፣ ነገር ግን እንደ መስራች አባል በመሆኔ የሚያኮራኝ ተለዋዋጭ ቦርድ ያለው መንግስታዊ ያልሆነ ድርጅት መፍጠር ችለናል።"]
    }
  },
  {
    name: { en: "Laly Kassa", am: "ላሊ ካሳ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img6,
    description: {
      en: ["I joined the board of Yetarik Adera because I wanted to be part of an institution that reminds current and future Ethiopians of the service and sacrifices made by my father, uncles, and other government officials whose lives were tragically cut short."," Under the leadership of His Majesty, Emperor Haile Selassie I, this generation of public servants and their colleagues, many of whom also suffered years of imprisonment under the Derg, conceived and founded most of the institutions which are the foundations of the ones we have in Ethiopia today."," I believe their collective contributions have not been adequately recognized and that we have a responsibility to correct the historical record by giving them their rightful place in Ethiopian history." ],
      am: ["የየታሪክ አደራን ቦርድ የተቀላቀልኩት አባቴ፣ አጎቶቼ እና ሌሎች የመንግስት ባለስልጣናት ህይወታቸው በአሳዛኝ ሁኔታ የከፈሉትን አገልግሎት እና መስዋዕትነት የሚያስታውስ ተቋም አባል መሆን ስለፈለኩ ነው” ሲሉ በግርማዊ ቀዳማዊ አፄ ኃይለ ሥላሴ መሪነት ይህ የመንግስት ሰራተኛ ትውልድ እና የስራ ባልደረቦቻቸው፣ ከእነዚህም መካከል ብዙዎቹ በድርጅቱ ስር በተመሰረተባቸው ተቋማት ለብዙ አመታት ለእስር ተዳርገዋል። ዛሬ ኢትዮጵያ ውስጥ ካሉን መካከል።» የሚል እምነት አለኝ፤ የጋራ አስተዋጽዖዎቻቸው በቂ ዕውቅና ያልተሰጣቸው በመሆኑ በኢትዮጵያ ታሪክ ውስጥ ተገቢውን ቦታ በመስጠት የታሪክ መዛግብትን የማረም ኃላፊነት አለብን ብዬ አምናለሁ።"]
    }
  },
  {
    name: { en: "Hirut Tafesse", am: "ሂሩት ታፈሰ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img8,
    description: {
      en: ["I am the daughter of Major General Tafesse Lemma. I left Ethiopia shortly after the onset of the Red Terror. I pursued my education in the United States and have been employed in corporate America for a considerable period. In 2022, I returned to Addis and am currently working as a volunteer at a school near Ayat. My goal is to contribute in shaping future generations."," It has been an honor to participate in Ye Tarik Adera, which aims to highlight the sacrifices made by my father and his fellow officers."," It’s been my privilege to join an organization dedicated to preserving their/our history and ensuring that their narrative is included in educational curriculum, thereby preventing the recurrence of such atrocities in the future." ],
      am: ["የሜጀር ጀነራል ታፈሰ ለማ ልጅ ነኝ። ቀይ ሽብር እንደጀመረ ከኢትዮጵያ ወጣሁ። ትምህርቴን የተከታተልኩት በዩናይትድ ስቴትስ ሲሆን በኮርፖሬት አሜሪካ ውስጥ ለተወሰነ ጊዜ ተቀጥሬያለሁ። እ.ኤ.አ. በ 2022 ወደ አዲስ አበባ ተመለስኩ እና በአሁኑ ጊዜ አያት አቅራቢያ በሚገኝ ትምህርት ቤት በበጎ ፈቃደኝነት እየሰራሁ ነው። አላማዬ መጪውን ትውልድ በመቅረጽ የበኩሌን ማበርከት ነው:: አባቴ እና ባልደረቦቹ የከፈሉትን መስዋዕትነት ለማጉላት አላማ ባለው የየታሪክ አደራ ላይ መሳተፌ ትልቅ ክብር ነው:: ታሪካቸውን ለመጠበቅ እና ትረካቸዉ በትምህርት ስርአተ ትምህርት ውስጥ እንዲካተት በማድረግ የወደፊት እድገቶች እንዳይደጋገሙ ለማድረግ ወደተዘጋጀ ድርጅት መቀላቀል ትልቅ እድል ሆኖልኛል።"]
    }
  },
  {
    name: { en: "Rahel Kifle", am: "ራሄል ክፍሌ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img9,
    description: {
      en:["I am deeply honored to serve as a board member of Yetarik Adera, where I am committed to honoring the profound legacy and sacrifice of the Ethiopian government officials who served the administration of Emperor Haile Selassie I."," With a resolute dedication to Yetarik Adera's mission, I am focused on inspiring future generations by bridging the gap between them and the monumental work and legacy of their ancestors, cultivating in them a strong sense of pride, purpose, and continuity.","Professionally, I bring over three decades of rich experience with Ethiopian Airlines, starting as a Cabin Crew member and advancing to a leadership position as a Cabin Crew Supervisor for In-Flight Services. Driven by a passion for mentoring and nurturing the next generation of aviation professionals, I transitioned to EAL's Aviation Academy as a Senior Instructor, where I had the privilege of training new cabin crew members, imparting essential skills and industry knowledge.","I am excited and look forward to continuing to support Yetarik Adera’s mission." ],
      am: ["የቀዳማዊ አፄ ኃይለ ሥላሴ አስተዳደርን ሲያገለግሉ የቆዩትን የኢትዮጵያ መንግሥት ባለሥልጣናትን ጥልቅ ትሩፋትና መስዋዕትነት ለማክበር ቁርጠኛ በሆነበት የየታሪክ አደራ የቦርድ አባል በመሆኔ ትልቅ ክብር ይሰማኛል:: ኩራት፣ ዓላማ እና ቀጣይነት። በሙያተኛነቴ በኢትዮጵያ አየር መንገድ ከካቢን ቡድን አባልነት ጀምሬ እና በበረራ አገልግሎት ውስጥ የካቢን ሰራተኛ ተቆጣጣሪ ሆኜ ወደ አመራርነት ቦታ በመውጣት ከሶስት አስርት አመታት በላይ የዳበረ ልምድ አመጣለሁ። ቀጣዩን የአቪዬሽን ባለሙያዎችን ለመምከር እና ለመንከባከብ ባለው ፍቅር ተገፋፍቼ ወደ ኢኤል አቪዬሽን አካዳሚ እንደ ከፍተኛ አስተማሪ ተዛወርኩ፣ አዲስ የካቢን ቡድን አባላትን የማሰልጠን፣ አስፈላጊ ክህሎቶችን እና የኢንዱስትሪ እውቀትን ለመስጠት እድል አግኝቻለሁ።"]
    }
  },
  {
    name: { en: "Sirgut Tafesse", am: "ስርጉት ታፈሰ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img11,
    description: {
      en: ["I am the eldest daughter of Major General Tafesse Lemma. I moved to the US in the late ‘70s, finished my higher education in Arlington, Texas where I now reside with my husband and 3 daughters.","It is my privilege to be part of Yetarik Adera, charged with the responsibility of preserving and conveying the remarkable legacy and history of our fathers, brothers, and uncles who dedicated their lives to safeguard our country. They exemplified the core values of patriotism, loyalty, and leadership.","It is our duty to educate, inform, inspire, and safeguard the legacy of our forefathers, ensuring that we pass this knowledge on to our children and grandchildren."," “The legacy of heroes is the memory of a great name and the inheritance of a great example.” Benjamin Disraeli ","“Our nation owes a debt to its fallen heroes that we can never fully repay” Barack Obama" ],
      am: ["እኔ የሜጄር ጀነራል ታፈሰ ለማ የበኩር ልጅ ነኝ። በ70ዎቹ መገባደጃ ላይ ወደ አሜሪካ ተዛውሬ የከፍተኛ ትምህርቴን በአርሊንግተን ቴክሳስ አጠናቅቄ አሁን ከባለቤቴ እና ከ3 ሴት ልጆቼ ጋር የምኖረው። አገራችንን ለመጠበቅ ሕይወታቸውን የሰጡ የአባቶቻችንን፣ ወንድሞቻችንን እና አጎቶቻችንን አስደናቂ ውርስ እና ታሪክ በመጠበቅ እና በማስተላለፍ ኃላፊነት የተሸከመው የየታሪክ አደራ አካል መሆን ለእኔ ልዩ መብት ነው። የሀገር ፍቅር፣ ታማኝነት እና የአመራርን አንኳር እሴቶች በምሳሌነት አሳይተዋል። ይህን እውቀት ለልጆቻችን እና ለልጅ ልጆቻችን እንድናስተላልፍ በማድረግ የአባቶቻችንን ትሩፋት ማስተማር፣ማሳወቅ፣ማነሳሳት እና መጠበቅ የኛ ግዴታ ነው። ቤንጃሚን ዲስራኤሊ ሀገራችን ለወደቁት ጀግኖቿ ባለው እዳ ነው ፈጽሞ ልንከፍለው የማንችለው ባራክ ኦባማ"]
    }
  },
  {
    name: { en: "Tegist Worku", am: "ትግስት ወርቁ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img5,
    description: {
      en: ["Like many members of their generation, my father and my uncles loved their country more than anything else. My father spent his life serving his country, often leaving his young family behind for postings throughout Ethiopia.","I believe it is our responsibility now, to educate current and future generations of Ethiopia to honor the legacy of those who paid the ultimate sacrifice without justice and due process.","I wanted to be part of Yetarik Adera, whose goal is to recognize, not just my father and those who died with him, but the entire generation of public servants during the reign of Emperor Haile Selassie I, and their historic contributions to Ethiopia's progress. I want the accomplishments of these public servants, which have largely gone unrecognized, to be easily accessible to the public so that the record is set straight and available to all Ethiopians." ],
      am: ["አባቴና አጎቶቼም እንደሌሎች ትውልዳቸው ከምንም ነገር በላይ አገራቸውን ይወዳሉ። አባቴ ህይወቱን ያሳለፈው አገሩን በማገልገል ነው፣ ብዙ ጊዜ ወጣት ቤተሰቡን ትቶ በመላ ኢትዮጵያ ለሹመት ይሰጠዋል። ያለ ፍትህ እና ፍትህ ያለፍርድ መስዋዕትነት የከፈሉትን ትውልዶች እና ትውልዶች በቀዳማዊ አጼ ኃ/ማርያም የስልጣን ዘመናቸው የሞቱትን ብቻ ሳይሆን ትውልዱን በቀዳማዊ አጼ ኃ/ማርያም ዘመነ መንግስት ያበረከቱትን አስተዋፅዖ እውቅና የመስጠት አላማ የታሪክ አደራ አካል መሆን የፈለግኩት ለአሁኑም ሆነ ለወደፊት ትውልዶች ማስተማር ነው። እድገት ። የእነዚህ የመንግስት ሰራተኞች ስኬቶች በአብዛኛው እውቅና ሳይሰጡ ለህዝቡ በቀላሉ ተደራሽ እንዲሆኑ ሪከርዱ እንዲስተካከል እና ለሁሉም ኢትዮጵያውያን እንዲደርስ እፈልጋለሁ።"]
    }
  },
  {
    name: { en: "Yodit Amaha", am: "ዮዲት አማሃ" },
    title: { en: "Board Member", am: "የቦርድ አባል" },
    image: img10,
    description: {
      en: ["YeTarik Adera’s mission aligns with my sense of responsibility to preserve the past and bridge our history with the present to inform our future. Every generation has an obligation to share our stories of the past so that history serves a purpose and celebrates our identities.","Through the work of YeTarik Adera, my hope and prayer is to build today’s Ethiopia through the voices of the past and the vision of the youth.","In my own endeavors, I hope to continue serving as a global change agent and use my years of expertise in social work to elevate this mission.","Thank you for giving me the opportunity to serve." ],
      am: ["የታሪክ አደራ ተልእኮ ካለፈኝ ሃላፊነት ጋር ይጣጣማል እናም ታሪካችንን ከአሁኑ ጋር በማገናኘት የወደፊት ህይወታችንን ለማሳወቅ። ታሪክ አላማን እንዲያከብር እና ማንነታችንን እንዲያከብር እያንዳንዱ ትውልድ የኛን ታሪክ የማካፈል ግዴታ አለበት። በየታሪክ አደራ ስራ ተስፋዬ እና ጸሎቴ የዛሬይቱን ኢትዮጵያን በባለፉት ድምፆች እና በወጣቶች ራዕይ መገንባት ነው።"]
    }
  },
];


export default function BoardMembers({ memberTexts }: { memberTexts: any }) {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  // Detect language from pathname (/am or /en)
  const pathname = usePathname();
  const lang = pathname.startsWith("/am") ? "am" : "en";

  return (
    <>
      <section className={`${notoSerifEthiopic.variable} flex flex-row font-notoSerifEthiopic text-gray-800 px-6 md:px-20 pt-[70px] md:h-[1160px] overflow-y-hidden`}>
      
        {/* Members Columns */}
        <div className="flex w-1/2 gap-20 flex-wrap">
          {/* Column 1 */}
          <div className="hidden md:flex flex-col gap-8 w-auto overflow-hidden h-full">
            <div className="animate-infinite-scroll">
              {[...members.slice(0, 6), ...members.slice(0, 6)].map((member, index) => (
                <div key={`col1-${index}`} className="flex flex-col items-start gap-4 py-4" onClick={() => setSelectedMember(member)}>
                  <Image src={member.image} alt={member.name[lang]} className="w-[170px] h-[170px] object-cover rounded-full border border-primary border-2" />
                  <div>
                    <h3 className="text-lg text-[#4A2C13]">{member.name[lang]}</h3>
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-[1px] w-[300px] bg-primary mt-1" />
                    <h3 className="text-lg text-[#4A2C13]">{member.title[lang]}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="hidden md:flex flex-col gap-8 w-auto pt-[50px] overflow-hidden h-full">
            <div className="animate-infinite-scroll">
              {[...members.slice(6), ...members.slice(6)].map((member, index) => (
                <div key={`col2-${index}`} className="flex flex-col items-start gap-4 py-4" onClick={() => setSelectedMember(member)}>
                  <Image src={member.image} alt={member.name[lang]} className="w-[170px] h-[170px] object-cover rounded-full border border-primary border-2" />
                  <div>
                    <h3 className="text-lg text-[#4A2C13]">{member.name[lang]}</h3>
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-[1px] w-[300px] bg-primary mt-1" />
                    <h3 className="text-lg text-[#4A2C13]">{member.title[lang]}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile grid */}
          <div className="md:hidden grid grid-cols-2 gap-6 w-full">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-4" onClick={() => setSelectedMember(member)}>
                <Image src={member.image} alt={member.name[lang]} className="w-[120px] h-[120px] object-cover rounded-full border border-primary border-2" />
                <div>
                  <h3 className="text-lg text-[#4A2C13]">{member.name[lang]}</h3>
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-[1px] w-[300px] bg-primary mt-1" />
                  <h3 className="text-lg text-[#4A2C13]">{member.title[lang]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

  {/* Header */}
  <div className="text-left mb-10 mt-16 flex flex-col justify-start items-center w-2/3">
          <section className="pl-0 pb-12 text-left w-[300px] ">
            <h1 className={`${arapey.variable} font-arapey text-3xl md:text-[45px] font-light leading-snug inline-block`}>
              <div className="inline-block pr-14 md:pr-0">
                <span>{memberTexts.introheading1}</span>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-[2px] w-[300px] lg:w-[600px] bg-primary mt-1" />
              </div>
              <br />
              <div className="inline-block pl-[70px] md:pl-[60px]">
                <span>{memberTexts.introheading2}</span>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-[2px] w-[300px] lg:w-[500px] bg-primary mt-1" />
              </div>
            </h1>
          </section>
          <p className="text-left">
          {memberTexts.paragraph1}
        <br />
        <br />
        {memberTexts.paragraph2}
        <br />
        <br />
        {memberTexts.paragraph3}
        <br />
        <br />
        {memberTexts.paragraph4}
        <br />
        <br />
        {memberTexts.paragraph5}
    <br></br>
    <br></br>
    {memberTexts.paragraph6}

    </p>
    <div className="flex flex-col gap-2 w-full items-end py-8"><p className="">  {memberTexts.thankyou}</p>
   <p className="">  {memberTexts.seble}
   </p></div>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-[#774E1D]/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
            <div className="bg-[#4C3519]/0 rounded-lg w-full max-w-6xl p-6 relative flex flex-col md:flex-row items-center gap-6 overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-2 right-4 text-white text-3xl font-bold" onClick={() => setSelectedMember(null)}>&times;</button>
              <Image src={selectedMember.image} alt={selectedMember.name[lang]} width={250} height={300} className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] object-cover rounded-full " />
              <div className="text-white md:text-left text-center border-0 md:border-l-2 border-[#db9744] md:pl-4">
                <h2 className="text-xl md:text-3xl font-bold mb-4 border-b-0 md:border-b-2 border-[#db9744] pb-2">{selectedMember.name[lang]}</h2>
                <div className="text-sm md:text-lg space-y-3">
                  {selectedMember.description[lang].map((para: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, i: React.Key | null | undefined) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};


