"use client";
import React, { useState } from "react";
import img1 from "@/public/asset/event1.jpeg";
import img2 from "@/public/asset/event2.jpeg";
import img3 from "@/public/asset/event3.jpeg";
import img4 from "@/public/asset/nov23ya-1.jpeg";
import img5 from "@/public/asset/nov23ya-2.jpeg";
import img6 from "@/public/asset/nov23ya-3.jpeg";
import img44 from "@/public/asset/nov23ya-4.jpeg";
import img55 from "@/public/asset/nov23ya-5.jpeg";
import img66 from "@/public/asset/nov23ya-6.jpeg";
import img7 from "@/public/asset/New Inagural gala1.jpeg";
import img8 from "@/public/asset/New Inagural gala2.jpeg";
import img10 from "@/public/asset/New Inagural gala3.jpeg";
import img9 from "@/public/asset/octoberevent3.jpeg";
import bs1 from "@/public/asset/booksigning1.jpeg";
import bs2 from "@/public/asset/booksigning11.jpeg";
import bs3 from "@/public/asset/booksigning111.jpeg";
import bs4 from "@/public/asset/booksigning2.jpeg";
import bs5 from "@/public/asset/booksigning3.jpeg";
import ar1 from "@/public/asset/armenia1.jpeg";
import ar2 from "@/public/asset/armenia-2.jpeg";
import ar3 from "@/public/asset/armenia-3.jpeg";
import ar4 from "@/public/asset/armenia-4.jpeg";
import ar5 from "@/public/asset/armenia-5.jpeg";
import fif1 from "@/public/asset/50th1.jpeg";
import fif2 from "@/public/asset/50th2.jpeg";
import fif3 from "@/public/asset/50th3.jpeg";
import fif4 from "@/public/asset/50th4.jpeg";
import fif5 from "@/public/asset/50th5.jpeg";
import fif6 from "@/public/asset/50th6.jpeg";
import hab1 from "@/public/asset/habte11.jpeg";
import hab2 from "@/public/asset/march14-1.jpeg";
import hab3 from "@/public/asset/march14-2.jpeg";
import hab4 from "@/public/asset/march14-3.jpeg";
import hab5 from "@/public/asset/march14-4.jpeg";
import hab6 from "@/public/asset/march14-5.jpeg";
import inaug1 from "@/public/asset/inag22.jpeg";
import inaug2 from "@/public/asset/inaug3.jpeg";
import inaug3 from "@/public/asset/inaug11.jpeg";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/app/shared/footer/footer";
import { Arapey, Noto_Serif_Ethiopic } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

type LocalizedText = {
  en: string;
  am: string;
};

interface Event {
  date: LocalizedText;
  month: LocalizedText;
  images: any[]; // now holds multiple images
  title: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  link: string;
}

const upcoming_events: Event[] = [
 
];

const previous_events: Event[] = [
  {
    date: { en: "14", am: "5" },
    month: { en: "MARCH", am: "መጋቢት" },
    images: [hab1, hab2, hab3, hab4, hab5, hab6],
    title: {
      en: "Launching of Prime Minister Aklilu Habtewold book Written by Dr. Selamawit Tadesse",
      am: "በዶክተር ሰላማዊት ታደሰ የተጻፈው የጠቅላይ ሚኒስትር አክሊሉ ሃብተወልድ መጽሐፍ ምርቃት",
    },
    location: { en: "", am: "" },
    description: {
      en: "On March 14,2026, Yetarik Adera hosted the launch of a compelling historical fiction work on the life of Prime Minister Aklilu, authored by Dr. Selamawit Tadesse, highlighting an important chapter in Ethiopia’s history.",
      am: "መጋቢት 5 ቀን 2018 ዓ.ም. የታሪክ አደራ በዶክተር ሰላማዊት ታደሰ የተጻፈውንና የጠቅላይ ሚኒስትር አክሊሉን ሃብተወልድን የሕይወት ታሪክ እና ሥራዎች የሚተርከውን ድንቅ ታሪካዊ-ልቦለድ መጽሐፍ ምርቃት አካሂዷል። ይህ መጽሐፍ በኢትዮጵያ ታሪክ ውስጥ ተዘንግቶ የቆየን አንድን ወሳኝ ምዕራፍ በልዩ ሁኔታ የሚያጎላ ነው።",
    },
    link: "https://yetarikadera.rsvpify.com/",
  },
  {
    date: { en: "8", am: "29" },
    month: { en: "MARCH", am: "የካቲት" },
    images: [ar1, ar2, ar3, ar4, ar5],
    title: {
      en: "The centuries old relationship and contributions of the Armenian community in Ethiopia ",
      am: "የዘመናት ታሪክ ያለው የኢትዮጵያና የአርሜኒያ ግንኙነት እና በኢትዮጵያ ይኖሩ የነበሩ አርሜኒያውያን ለኢትዮጵያ ያበረከቱት አስተዋጽኦ",
    },
    location: { en: "", am: "" },
  description: {
    en: `On March 8, 2026, the Embassy of the Republic of Armenia, together with Yetarik Adera, organized a commemorative event honoring the longstanding friendship between Armenia and Ethiopia and celebrating the significant contributions of Armenians to Ethiopia’s modernization over many centuries.
  
  During the event, the Ambassador of the Republic of Armenia and other distinguished guests delivered remarks highlighting the strong relationship between the two countries. Mr. Vartkes Nalbandian presented an insightful and educational account of this shared history and held a book signing for his book, I Want to Die with a Flag.
  
  The event was attended by ambassadors from ten different countries, demonstrating broad diplomatic support for Yetarik Adera’s efforts to recognize and promote international camaraderie and historical ties with Ethiopia.`,
    
    am: `የካቲት 29 ቀን 2018 ዓ.ም. የአርሜኒያ ሪፐብሊክ ኤምባሲ ከታሪክ አደራ ጋር በመተባበር በአርሜኒያ እና በኢትዮጵያ መካከል ያለውን የቆየ ወዳጅነት የሚዘክር እና አርሜኒያውያን በኢትዮጵያ የዘመናዊነት ሂደት ውስጥ ለዘመናት ያበረከቱትን ጉልህ አስተዋጽኦ የሚያወሳ የመታሰቢያ መርሃ ግብር አዘጋጅተው ነበር።\n\nበዝግጅቱ ወቅት የአርሜኒያ ሪፐብሊክ መንግሥት የኢትዮጵያ አምባሳደር እና ሌሎች ጥሪ የተደረገላቸው ታዋቂ እንግዶች በሁለቱ አገራት መካከል ያለውን ጠንካራ ግንኙነት የሚያጎላ ንግግር አድርገዋል።ሚስተር ቫርትኬዝ ናልባንዲያን ይህንን የጋራ ታሪክ የተመለከተ ጥልቅ እና ትምህርታዊ ገለጻ ያቀረቡ ሲሆን "ባንዲራ ሳይኖረኝ እንዳልሞት" የሚል ርዕስ ተሰጥቶት የተተረጐመው መጽሓፋቸው ላይ ፊርማ የማስፈረም እና ከደራሲው ጋር ፎቶ የመነሳት ሥነ ሥርዓት ተካሂዷል። (የመጽሓፉ የእንግሊዘኛ ርዕስ “Armenians of Ethiopia: A Compendium - Gondar, Adua, Ankober, Harar, Dire Dawa, and Addis Ababa (1515–2020)” ሲሰኝ የታተመውም እ.ኣ.ኣ. በ2023 ነው።)
  
  በዝግጅቱ ላይ ከአስር የተለያዩ አገራት የመጡ አምባሳደሮች የተገኙ ሲሆን፣ ይህም የታሪክ አደራ ዓለም አቀፍ እውቅና እንዲኖረውና እንዲሁም ከዓለም አቀፉ ማኅበረሰብ ጋር ወዳጅነት እንዲመሠረት እድል ይፈጥርለታል። በተጨማሪም የተለያዩ አገራት ከኢትዮጵያ ጋር ያላቸውን ታሪካዊ ትስስር ለማስታወስ ብሎም እንዲጐለብት ለማድረግ፣ የታሪክ አደራ ላደረገው ጥረት፣ የተሰጠ ዲፕሎማሲያዊ ድጋፍ ነው።`,
  },
  
  link: "https://yetarikadera.rsvpify.com/",
},
  {
    date: { en: "22", am: "13" },
    month: { en: "NOVEMBER", am: "ህዳር" },
    images: [img7, img8, inaug1, inaug2, inaug3],
    title: { en: "Inaugural Gala", am: "የመጀመሪያው የገቢ ማሰባሰቢያ ፕሮግራም" },
    location: {
      en: "The Waterford, 6715 Commerce Street, Springfield VA 22150",
      am: "ዘ ዋተርፎርድ፣ 6715 ኮሜርስ ስትሪት፣ ስፕሪንግፊልድ ቨርጂኒያ 22150",
    },
    description: {
      en: "On November 22,2025, Yetarik Adera hosted its fundraising gala in Virginia, USA to advance the development of the Archive Center. The event brought together a distinguished group of supporters and partners, where the Board presented a compelling vision of the Archive Center’s mission, current progress, and future priorities guided by its four strategic pillars.",
      am: "ህዳር 13 ቀን 2018 ዓ.ም.፣ የታሪክ አደራ፤ የታሪካዊ ሰነዶች ማከማቻ ማዕከሉን ለማቋቋም እንዲያግዝ በአሜሪካ ቨርጂኒያ ግዛት ታላቅ የገቢ ማሰባሰቢያ ፕሮግራም አዘጋጅቶ ነበር። በዝግጅቱ ላይ የታሪክ ኣደራ ደጋፊዎች እንዲሁም አጋሮች የተገኙ ሲሆን፣ የድርጅቱ የቦርድ አባላትም የማዕከሉን ተልዕኮ፣ ራዕይ፣  እስካሁን የተመዘገቡ ስኬቶችን እና ቀጣይ የትኩረት ኣቅጣጫዎችን በተመለከተ ኣሳማኝ የሆነ ገለፃ ያቀረቡ ሲሆን ይህንን ዓላማ ለማሳካት እንደሚተጉ ቃል ገብተዋል። ",
    },
    link: "https://yetarikadera.rsvpify.com/",
  },
  {
    date: { en: "4", am: "24" },
    month: { en: "OCTOBER", am: "መስከረም" },
    images: [bs2, bs3, bs5, img9, bs4, bs1],
    title: {
      en: "Ato Tekalign Gedamu book signing",
      am: "የአቶ ተካልኝ ገዳሙ የመጽሐፍ ምርቃት እና የፊርማ ሥነ-ሥርዓት",
    },
    location: {
      en: "Addis Ababa, Ethiopia,  National Archives and Libraries (Wemezeker)",
      am: "አአዲስ አበባ፤ የኢትዮጵያ ብሔራዊ ቤተ-መጻሕፍት እና ቤተ-መዛግብት ኤጀንሲ (ወመዘክር)",
    },
    description: {
      en: `On October 4, 2025, Yetarik Adera organized a book signing event for Ato Tekalign Gedamu to mark the launch of the Amharic version of his memoir, Republican on the Throne. Ato Tekalign is a highly experienced economist who served during the reigns of HIM, the Derg, and the EPRDF.`,
    
      am: `መስከረም 24 ቀን 2018 ዓ.ም.፣ የታሪክ አደራ የአቶ ተካልኝ ገዳሙ "ሪፐብሊካኑ በነገሥታት ዙፋን ላይ" በሚል ርዕስ ከእንግሊዘኛ ወደ ኣማርኛ የተረጐሙት ግለ-ታሪካቸው ለንባብ መብቃቱን ምክንያት በማድረግ ከደራሲው ጋር ኣብሮ ፎቶ የመነሳት እና የመጽሓፍ ፊርማ ሥነ-ሥርዓት ኣዘጋጅቶ ነበር።
    
    ኣቶ ተካልኝ ይህንን መጽሓፍ “Republicans on the Throne: A Personal Account of Ethiopia's Modernization and Painful Quest for Democracy” በሚል ርዕስ በእንግሊዘኛ ቋንቋ ለመጀመሪያ ጊዜ ያሳተሙት እ.ኣ.ኣ. በ2011 ነበር። ኣቶ ተካልኝ በግርማዊ ቀዳማዊ ኃይለ ሥላሴ፣ በደርግ እና በኢህአዴግ ዘመነ መንግሥታት ውስጥ ያገለገሉ ከፍተኛ ልምድ ያላቸው የምጣኔ ሀብት ባለሙያ ናቸው።`,
    },
    link: "#",
  },
  {
    date: { en: "23", am: "14" },
    month: { en: "NOVEMBER", am: "ህዳር" },
    images: [img1, img2, img3, fif1, fif2, fif3, fif6],
    title: {
      en: "The 50th memorial anniversary of the Martyrs",
      am: "የሰማዕታቱ 50ኛ ዓመት መታሰቢያ አዲስ አበባ፣ ኢትዮጵያ እና ዲ.ኤም.ቪ (DMV)",
    },
    location: {
      en: "Addis Ababa, Ethiopia and DMV",
      am: "አዲስ አበባ፣ ኢትዮጵያ እና ዲኤምቪ",
    },
    description: {
      en: "The 50th memorial anniversary of the Martyrs was commemorated worldwide. Family members, friends, and government representatives attended this significant event and expressed their respect in various ways.",
      am: "50ኛው የሰማዕታት መታሰቢያ በዓለም ዙሪያ በድምቀት ታስቦ ውሏል። የቤተሰብ አባላት፣ ወዳጅ ዘመዶች እና የመንግሥት ተወካዮች በዚህ ታላቅ መርሃ ግብር ላይ በመገኘት አክብሮታቸውን በተለያዩ መንገዶች ገልጸዋል።",
    },
    link: "https://youtube.com/playlist?list=PL6QTP2ShnjE4T9QtTx481VrqgM5Nbf7-I&si=qWjIm7idXWuiHFeN",
  },
  {
    date: { en: "23", am: "23" },
    month: { en: "NOVEMBER", am: "ህዳር" },
    images: [img4, img5, img6, img44, img55, img66],
    title: { en: "Yetarik Adera Inaugural", am: "የታሪክ አደራ ምረቃ " },
    location: {
      en: "Addis Ababa, Ethiopia and DMV",
      am: "አዲስ አበባ፣ ኢትዮጵያ እና ዲ.ኤም.ቪ (DMV)",
    },
    description: {
      en: `Yetarik Adera inaugurated its archive center located on the 9th floor of the National Archives and Libraries (Wemezeker) compound. Its mission is to serve as a space for those interested in exploring and researching Ethiopia’s history between 1930 and 1974, which was a transformative era in the country’s journey toward modernization following the end of the Italian occupation. The center seeks to highlight the foundations and pillars laid during this period, which continue to shape Ethiopia’s accomplishments. Its collections include books, manuscripts, rare documents, photographs, and artifacts gathered from the families of former government officials.`,
    
      am: `የታሪክ አደራ በብሔራዊ ቤተ-መጻሕፍት እና ቤተ-መዛግብት ኤጀንሲ (ወመዘክር) ግቢ ውስጥ በ9ኛው ፎቅ ላይ የሚገኘውን የሰነዶች እና መዛግብት ማዕከሉን መርቋል። የማዕከሉ ተልዕኮ ከጣሊያን ወረራ በኋላ በኢትዮጵያ የዘመናዊነት ጉዞ ውስጥ ትልቅ ለውጥ የታየበትን እና ከ1930 እስከ 1974 (እ.ኤ.አ.) ያለውን የታሪክ ወቅት ለመመርመር እና ለማጥናት ለሚፈልጉ አካላት እንደ መረጃ ማዕከል ማገልገል ነው።
    
    ማዕከሉ፤ በዚያ ዘመን መሠረታቸው የተጣለውንና ዛሬም ድረስ ለኢትዮጵያ ስኬቶች መሠረት የሆኑትን ምሰሶዎች ጎልተው እንዲታዩ ለማድረግ ይጥራል።
    
    በማዕከሉ ውስጥ የሚገኙት ክምችቶች ከቀ.ኃ.ሥ. መንግሥት ባለሥልጣናት ቤተሰቦች የተሰበሰቡ መጻሕፍትን፣ የባለሥልጣናቱ የግል ማስታወሻዎችን፣ ታሪካዊ እና ብርቅዬ ሰነዶችን፣ ፎቶግራፎችን እና የተለያዩ ታሪካዊ ቁሳቁሶችን ያካትታል።`,
    },
    link: "#",
  },
];



export default function UpcomingEvents ({
    eventTexts,
  }: {
    eventTexts: any;
  })  {
    const pathname = usePathname();
    const lang = pathname.startsWith("/am") ? "am" : "en";
    const [upcomingIndexes, setUpcomingIndexes] = useState(
      Array(upcoming_events.length).fill(0)
    );
    const [previousIndexes, setPreviousIndexes] = useState(
      Array(previous_events.length).fill(0)
    );

    const goToPreviousImage = (
      eventIndex: number,
      setIndexes: React.Dispatch<React.SetStateAction<number[]>>,
      imagesLength: number
    ) => {
      setIndexes((prev) =>
        prev.map((value, i) =>
          i === eventIndex ? (value - 1 + imagesLength) % imagesLength : value
        )
      );
    };

    const goToNextImage = (
      eventIndex: number,
      setIndexes: React.Dispatch<React.SetStateAction<number[]>>,
      imagesLength: number
    ) => {
      setIndexes((prev) =>
        prev.map((value, i) => (i === eventIndex ? (value + 1) % imagesLength : value))
      );
    };


  return (
    <>
      <section
        className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic py-12 py-16 pt-[70px] text-[#4A2C13] flex flex-col items-start`}
      >
                {/* Upcoming section title */}
         {/* <div className="text-center md:mb-[30px] mt-[50px] px-6 md:px-20">
          <h2
            className={`${arapey.variable} font-arapey text-3xl md:text-5xl `}
          >
<span className=" pb-2">{eventTexts.heading1}</span> 
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0 }}
            className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
          />
        </div>  */}
            {/* Loop through events */}
            <div className="md:space-y-16 px-4 sm:px-6 md:px-20 w-full">
          {upcoming_events.map((event, index) => (
            <div
              key={index}
              className="border-b border-[#B1864F] py-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
                {/* Date */}
                <div className="text-center text-xl font-bold w-16 md:w-auto">
                  <p className="text-sm border-b border-[#B1864F] pb-1">
                    {event.month[lang]}
                  </p>
                  <p className="text-3xl text-black">{event.date[lang]}</p>
                </div>

                {/* Image slideshow */}
                <div className="relative w-full md:w-[400px] h-[300px] md:h-[400px] rounded-md shadow-md overflow-hidden">
                  <AnimatePresence>
                    <motion.div
                      key={upcomingIndexes[index]}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={event.images[upcomingIndexes[index]]}
                        alt={event.title[lang]}
                        fill
                        className="object-fill rounded-2xl border border-primary border-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {event.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label={`Previous image for ${event.title[lang]}`}
                        onClick={() =>
                          goToPreviousImage(index, setUpcomingIndexes, event.images.length)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        aria-label={`Next image for ${event.title[lang]}`}
                        onClick={() =>
                          goToNextImage(index, setUpcomingIndexes, event.images.length)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 hover:underline">
                    {event.title[lang]}
                  </h3> 
                  <p className="text-sm text-gray-800 mb-1">
                    {event.location[lang]}
                  </p>
                 
                  <p className="text-[15px] sm:text-[16px] mb-4 w-full md:w-[600px] whitespace-pre-line">
                    {event.description[lang]}
                  </p>
                  <Link href={event.link} ><p className="font-bold underline">{lang === "am" ? "እዚህ ይመዝገቡ" : "RSVP Here"}</p></Link> 
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center md:mb-[30px] mt-[30px] md:mt-[50px] px-4 sm:px-6 md:px-20">
          <h2 className={`${arapey.variable} font-arapey text-3xl md:text-5xl`}>
            <span className=" pb-2">{eventTexts.heading2}</span> 
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0 }}
            className="h-[2px] w-[200px] sm:w-[300px] lg:w-[900px] bg-primary mt-1 mx-auto"
          />
        </div>

            {/* Loop through events */}
            <div className="md:space-y-16 px-4 sm:px-6 md:px-20 w-full">
          {previous_events.map((event, index) => (
            <div
              key={index}
              className="border-b border-[#B1864F] py-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
                {/* Date */}
                <div className="text-center text-xl font-bold w-16 md:w-auto">
                  <p className="text-sm border-b border-[#B1864F] pb-1">
                    {event.month[lang]}
                  </p>
                  <p className="text-3xl text-black">{event.date[lang]}</p>
                </div>

                {/* Image slideshow */}
                <div className="relative w-full md:w-[350px] h-[450px] md:h-[400px] rounded-md shadow-md overflow-hidden">
                  <AnimatePresence>
                    <motion.div
                      key={previousIndexes[index]}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={event.images[previousIndexes[index]]}
                        alt={event.title[lang]}
                        fill
                        className="object-cover rounded-2xl border border-primary border-2"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {event.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        aria-label={`Previous image for ${event.title[lang]}`}
                        onClick={() =>
                          goToPreviousImage(index, setPreviousIndexes, event.images.length)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        aria-label={`Next image for ${event.title[lang]}`}
                        onClick={() =>
                          goToNextImage(index, setPreviousIndexes, event.images.length)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/45 text-white text-xl leading-none flex items-center justify-center hover:bg-black/65"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Content */}
                <div>
                <Link href={event.link} ><h3 className="text-lg sm:text-xl font-semibold mb-4 hover:underline">
                    {event.title[lang]}
                  </h3></Link>  
                  <p className="text-sm text-gray-800 mb-1">
                    {event.location[lang]}
                  </p>
                 
                  <p className="text-[15px] sm:text-[16px] mb-4 w-full md:w-[600px] whitespace-pre-line">
                    {event.description[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </section>
      <Footer />
    </>
  );
};
;
