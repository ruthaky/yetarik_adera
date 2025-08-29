"use client";
import {Martyrs, Martyrs2, Martyrs3 } from "@/app/[lang]/martyrs/data/martyrs";
import { useState, useEffect } from "react"; 
import Image from "next/image";
import img1 from "@/public/asset/mart1.webp"; // Replace with correct image
import { Button } from "@/components/ui/button";
import img2 from "@/public/asset/martyrsbw.jpg";
import { motion } from "framer-motion";
import Footer from "@/app/shared/footer/footer";
import { IconSearch } from "@tabler/icons-react"
import { Arapey, Noto_Serif_Ethiopic } from 'next/font/google'
import img5 from "@/public/asset/martyrs1.jpg";
import img8 from "@/public/asset/school 2.jpg";
import img12 from "@/public/asset/aviation.jpg";
import img14 from "@/public/asset/line.jpg";

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

interface Martyrs {
  name: {
    en: string;
    am: string;
  };
  image: any;
  description: {
    en: string;
    am: string;
  };
}

interface Martyrs2 {
  name: {
    en: string;
    am: string;
  };
  image: any;
  description: {
    en: string;
    am: string;
  };
}

interface Martyrs3 {
  name: {
    en: string;
    am: string;
  };
  image: any;
  description: {
    en: string;
    am: string;
  };
}

export default function MartyrsPage() {
  const [showMartyrs, setShowMartyrs] = useState(false);
  const [selectedMartyr, setSelectedMartyr] = useState<Martyrs | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'am'>('en');

  // Get current language from URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/am')) {
      setCurrentLanguage('am');
    } else {
      setCurrentLanguage('en');
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // Create a unified array with proper language support
  const allMartyrs = [
    ...Martyrs.map(martyr => ({
      ...martyr,
      displayName: martyr.name[currentLanguage],
      displayDescription: martyr.description[currentLanguage],
      title: martyr.name[currentLanguage] // For compatibility with existing code
    })),
    ...Martyrs2.map(martyr => ({
      ...martyr,
      displayName: martyr.name[currentLanguage],
      displayDescription: martyr.description[currentLanguage],
      title: martyr.name[currentLanguage] // Use name as title since title doesn't exist
    })),
    ...Martyrs3.map(martyr => ({
      ...martyr,
      displayName: martyr.name[currentLanguage],
      displayDescription: martyr.description[currentLanguage],
      title: martyr.name[currentLanguage] // Use name as title since title doesn't exist
    }))
  ];

  const filteredMartyrs = allMartyrs.filter((martyr) =>
    martyr.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper function to get display text based on language
  const getDisplayText = (martyr: any, field: 'name' | 'description') => {
    if (martyr[field] && typeof martyr[field] === 'object') {
      return martyr[field][currentLanguage];
    }
    return martyr[field] || martyr[`display${field.charAt(0).toUpperCase() + field.slice(1)}`];
  };

  return (
    <>
    <main className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic min-h-screen text-gray-800 font-sans pt-32 `}>
      {/* Hero */}
    <section className="relative w-full">
  {/* Title Section */}
  <div className="flex flex-col items-center justify-center text-center text-black px-4">
    <div className="mb-10 sm:mb-10 flex justify-center items-center">
      <section className="px-4 sm:px-6 text-start w-auto">
        <h1 className={`${arapey.variable} font-arapey text-3xl md:text-[45px] leading-snug inline-block`}>
          {/* Line 1 */}
          <div className="inline-block">
            <span className="">68</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0 }}
              className="h-[2px] w-[150px] sm:w-[300px] lg:w-[900px] bg-primary mt-1"
            />
          </div>
          <br />
          {/* Line 2 */}
          <div className="inline-block pl-12 sm:pl-10 lg:pl-[80px]">
            <span className="">Martyrs</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0 }}
              className="h-[2px] w-[150px] sm:w-[300px] lg:w-[900px] bg-primary mt-1"
            />
          </div>
        </h1>
      </section>
    </div>

    {/* Intro Text */}
    <div className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic space-y-4 sm:space-y-6 text-[18px] leading-relaxed w-full w-[95%] md:w-[75%] text-left`}>
      <p>
        In 1974, during the transitional period following the end of Emperor
        Haile Selassie's administration, 68 senior government officials and
        public servants were executed by the Derg regime without trial. These
        individuals, who held high office and played key roles in Ethiopia's
        development, were taken from prison and summarily killed in one of the
        most tragic and unjust acts in the country's modern history.
        <br />
        <br />
        The 68 martyrs represented a generation of leaders who contributed
        significantly to national progress through their service,
        professionalism, and dedication. Their loss marked a turning point in
        Ethiopian history and serves as a powerful reminder of the dangers of
        political violence and the erosion of rule of law.
      </p>
    </div>
  </div>
</section>

{/* Image Section */}
<div className="w-full flex items-center justify-center mt-10"><section className="w-full md:w-[74%] pb-12">
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-4 px-6">
            {[img2, img12, img5,  img8, img14].map((imgSrc, index) => (
              <div key={`marq-${index}`} className="flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
                <Image
                  src={imgSrc}
                  alt={`marquee-${index}`}
                  width={320}
                  height={220}
                  className="object-fit w-[240px] h-[160px] sm:w-[280px] sm:h-[200px] md:w-[320px] md:h-[220px] "
                />
              </div>
            ))}
          </div>
          {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-[#F7F4E9] to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-[#F7F4E9] to-transparent"></div> */}
        </div>
      </section></div>


{/* Description Section */}
<section className="w-full max-w-[95%] md:max-w-[75%] mx-auto px-4 sm:px-0  pb-10 text-left">
  <div className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic space-y-4 sm:space-y-6 text-[18px] sm:text-base md:text-lg leading-relaxed text-black `}>
    <p className="text-left">
      The 68 martyrs represented a generation of leaders who contributed
      significantly to national progress through their service,
      professionalism, and dedication. Their loss marked a turning point in
      Ethiopian history and serves as a powerful reminder of the dangers of
      political violence and the erosion of rule of law.
    </p>
    {/* <p className="text-left">
      The 68 martyrs represented a generation of leaders who contributed
      significantly to national progress through their service,
      professionalism, and dedication. Their loss marked a turning point in
      Ethiopian history and serves as a powerful reminder of the dangers of
      political violence and the erosion of rule of law.
    </p> */}
    {/* <p className="text-left">
      The 68 martyrs represented a generation of leaders who contributed
      significantly to national progress through their service,
      professionalism, and dedication. Their loss marked a turning point in
      Ethiopian history and serves as a powerful reminder of the dangers of
      political violence and the erosion of rule of law.
    </p> */}
   
  </div> <Button
      className="mt-4 sm:mt-6"
      onClick={() => setShowMartyrs(!showMartyrs)}
    >
      {showMartyrs ? "Hide Martyrs" : "View Martyrs"}
    </Button>
</section>


      {/* Martyrs Section */}
      {showMartyrs && (
        <section className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic text-gray-800 px-6 md:px-20 py-0`}>

 <div className="max-w-6xl mx-auto">
  <div className="w-full flex items-end justify-end mb-10">
    {/* <div className="flex gap-2">
      <button
        onClick={() => setCurrentLanguage('en')}
        className={`px-4 py-2 rounded ${
          currentLanguage === 'en' 
            ? 'bg-[#B1864F] text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition-colors`}
      >
        English
      </button>
      <button
        onClick={() => setCurrentLanguage('am')}
        className={`px-4 py-2 rounded ${
          currentLanguage === 'am' 
            ? 'bg-[#B1864F] text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition-colors`}
      >
        አማርኛ
      </button>
    </div> */}
    
    <input
      type="text"
      placeholder={currentLanguage === 'am' ? "በስም ፈልግ..." : "Search by name..."}
      className="w-[350px] p-3 border-b-2 border-[#B1864F] bg-transparent text-black focus:outline-none"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
     {searchTerm.trim() !== "" ? (
  filteredMartyrs.length > 0 ? (
    <div className="grid grid-cols-2  md:grid-cols-3 gap-6">
      {filteredMartyrs.map((martyr : any, index) => (
         <div
                key={index}
                className="flex flex-col items-center gap-4 py-[20px] cursor-pointer"
                onClick={() => setSelectedMartyr(martyr)}
              >
                <Image
                  src={martyr.image}
                  alt={getDisplayText(martyr, 'name')}
                  unoptimized
                  width={200}
                  height={200}
                  className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-fit rounded-full "
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-[15px]  text-[#4A2C13] border-b border-[#B1864F]">
                    {getDisplayText(martyr, 'name')}
                  </h3>
                  {/* <p className="text-sm text-gray-600">{martyr.title || getDisplayText(martyr, 'name')}</p> */}
                </div>
              </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">
      {currentLanguage === 'am' ? 'ምንም አርበኞች አልተገኙም።' : 'No martyrs found.'}
    </p>
  )
) : null}

    </div>

          <div className="text-center mb-16 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[36px]  text-left text-[#4A2C13]">
              {currentLanguage === 'am' 
                ? 'የተገደሉ ሲቪል ባለሥልጣናት፣ ቅዳመ ሰኞ፣ ህዳር 23፣ 1967 ዓ.ም.'
                : 'Civilian Officials Executed, Saturday, November 23, 1974'
              }
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
            {Martyrs.map((member : any, index) => (
             <div
                key={index}
                className="flex flex-col items-center gap-4 py-[20px] cursor-pointer"
                onClick={() => setSelectedMartyr(member)}
              >
                <Image
                  src={member.image}
                  alt={member.name[currentLanguage]}
                  unoptimized
                  width={200}
                  height={200}
                  className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-fit rounded-full "
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-[15px]  text-[#4A2C13] border-b border-[#B1864F]">
                    {member.name[currentLanguage]}
                  </h3>
                  {/* <p className="text-sm text-gray-600">{member.name[currentLanguage]}</p> */}
                </div>
              </div>
            ))}
          </div>
           <div className="text-center my-16 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[36px] text-left  text-[#4A2C13]">
              {currentLanguage === 'am' 
                ? 'የተገደሉ የጦር ሰው ባለሥልጣናት፣ ቅዳመ ሰኞ፣ ህዳር 23፣ 1967 ዓ.ም.'
                : 'Military Officials Executed, Saturday, November 23, 1974'
              }
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
            {Martyrs2.map((member : any, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 py-[20px] cursor-pointer"
                onClick={() => setSelectedMartyr(member)}
              >
                <Image
                  src={member.image}
                  alt={member.name[currentLanguage]}
                  unoptimized
                  width={200}
                  height={200}
                  className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-fit rounded-full "
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-[15px]  text-[#4A2C13] border-b border-[#B1864F]">
                    {member.name[currentLanguage]}
                  </h3>
                  {/* <p className="text-sm text-gray-600">{member.name[currentLanguage]}</p> */}
                </div>
              </div>
            ))}
          </div>
           <div className="text-center my-16 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[36px] text-left  text-[#4A2C13]">
              {currentLanguage === 'am' 
                ? 'የተገደሉ የሃይማኖት ባለሥልጣናት፣ ቅዳመ ሰኞ፣ ህዳር 23፣ 1967 ዓ.ም.'
                : 'Religious Officials Executed, Saturday, November 23, 1974'
              }
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pb-16 max-w-6xl mx-auto">
            {Martyrs3.map((member : any, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 py-[20px] cursor-pointer"
                onClick={() => setSelectedMartyr(member)}
              >
                <Image
                  src={member.image}
                  alt={member.name[currentLanguage]}
                  unoptimized
                  width={200}
                  height={200}
                  className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-fit rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-[15px]  text-[#4A2C13] border-b border-[#B1864F]">
                    {member.name[currentLanguage]}
                  </h3>
                  {/* <p className="text-sm text-gray-600">{member.name[currentLanguage]}</p> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

 {/* Modal */}
{selectedMartyr && (
  <div
    className="fixed inset-0 bg-[#774E1D]/80 z-50 flex items-center justify-center p-6"
    onClick={() => setSelectedMartyr(null)} // close on outside click
  >
    <div
      className="rounded-lg w-full max-w-6xl p-6 md:p-12 relative flex flex-col md:flex-row items-center gap-8"
      onClick={(e) => e.stopPropagation()} // prevent close on inside click
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-200"
        onClick={() => setSelectedMartyr(null)}
      >
        &times;
      </button>

      {/* Martyr Image */}
      <div className="flex-shrink-0">
       <Image
  src={selectedMartyr.image}
  alt={getDisplayText(selectedMartyr, 'name')}
  className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] object-fit rounded-full block mx-auto"
/>

      </div>

      {/* Martyr Details */}
      <div className="text-white md:text-left text-center border-2 border-[#4C3519]/0 border-l-[#db9744] pl-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-2 border-[#4C3519]/0 border-b-[#db9744] pb-2">
          {getDisplayText(selectedMartyr, 'name')}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-justify max-w-xl">
          {getDisplayText(selectedMartyr, 'description')}
        </p>
      </div>
    </div>
  </div>
)}

    </main>
    <Footer />
    </>
  );
}
