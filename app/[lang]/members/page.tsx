'use client';
import { useState } from "react";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
// Import member images
import img1 from "@/public/asset/Kiddie.webp";
import img6 from "@/public/asset/Laly.jpg";
import img5 from "@/public/asset/Tegi.svg";
import img2 from "@/public/asset/Atsede.webp";
import img3 from "@/public/asset/monique.jpeg";
import img4 from "@/public/asset/Gash Amde.webp";
import img7 from "@/public/asset/Askadetch.svg";
import img8 from "@/public/asset/hirut.jpeg";
import img9 from "@/public/asset/Rahel.svg";
import img10 from "@/public/asset/Yodit.webp";
import img11 from "@/public/asset/sirgut.jpeg";
import placeholder from "@/public/asset/placeholoder.jpg"
import Footer from "@/app/shared/footer/footer";
import { Arapey, Noto_Serif_Ethiopic } from 'next/font/google'

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


// Define member type
interface BoardMember {
  name: string;
  title: string;
  image: StaticImageData;
  description?: any;
}


const members: BoardMember[] = [
  {
    name: "Seble Nebiyeloul",
    title: "Chair",
    image: img1,
  description: [
  "As a board member of Yetarik Adera, it is my privilege to highlight the immense value that our organization brings to preserving our history and educating future generations.",
  "Through our dedicated efforts in collecting oral histories, compiling photo archives, curating educational materials, creating documentary films, and publishing books, we aim to ensure that the stories of our past are not forgotten.",
  "Our commitment to the motto 'Never Again' stands as a testament to our resolve against persecution and unjust detention, as we strive to promote justice and remembrance in all our endeavors.",
  "Looking forward, the upcoming year holds great promise for us to continue making a meaningful impact and effecting positive change within our community. Together, let us march forward in unity, learning from the past to protect our future."
]
},
  {
    name: "Atsede Mariam Assefa",
    title: "Vice Chair",
    image: img2,
     description:["My name is Atsede Mariam Assefa, and I am the eldest daughter of Lt. Gen. Assefa Ayene. I was educated at the Lycée Guebre Mariam and left Ethiopia in 1971 for higher education first in France, and later in the US. From 1982 until I retired in 2019, I was the Executive Director of World Education Services, a not-for-profit organization in New York. In addition to Yetarik Adera, I am currently on the boards of organizations in the US and in Europe."," I joined Yetarik Adera because I believe in the organization’s purpose and goals of recording and preserving the foundational work of our fathers who rebuilt and modernized Ethiopia after the Italian war. Their history has been forgotten over the past 50 years and through Yetarik Adera we will strive to gain recognition for the rich legacy of our fathers and restore it to its rightful place in the history of Ethiopia."
]},
  {
    name: "Monique Tamrat",
    title: "Secretary",
    image: img3,
     description:["My name is Monique Tamrat, and I am the youngest of Colonel Tamrat Yigezu’s children.  I have lived in Ethiopia all my life. I’ve attended Nazareth School, American Mission, and Addis Ababa University. With over 25 years of experience as a Marketing and Procurement Specialist for various NGOs, I am currently the Marketing Head at a private company specializing in spices."," I am honored to join the board of Yetarik Adera, primarily because its mission is to ensure that future generations understand the efforts of the officials of Atse Haile Selassie’s regime to modernize and effectively govern our country. I believe that so much of their contribution remains unacknowledged and I am confident that Yetarik Adera can help reverse many misconceptions.."
]},
  {
    name: "Amde Akalework",
    title: "Board Member",
    image: img4,
     description:["Yetarik Adera is a continuation of Ye Michael Mehaber, whose committee was formed by a group of family member of the 68 martyrs slaughtered by the Derg and buried at Kidist Selassie.  This mehaber took charge of running the monument constructed by the families of the 68.  I was a member from the beginning.  Unfortunately, as our members started to age, I took the initiative of forming a committee of the younger generation to prepare them to take over our work, as the history of these families is the history of Ethiopia.  The challenges were many, but we've managed to create an NGO with a dynamic board that I am proud to be part of as a founding member."
]},
  {
    name: "Askadetch Debebe",
    title: "Board Member",
    image: img7,
     description:["My Name is Askadech Debebe Hailemariam. I am the second daughter of Lt. General Debebe Hailemariam and W/o Sossena Abebe. I attended German School in Addis Ababa, then in 1962 I went to Vienna - Austria completed my high school and graduated in Law from the University of Vienna."," In 1999 I moved back to Addis Ababa and joined St.Michael Mehaber which  was established for the memorial of the 60 dignitaries executed by the Derg without trial and then became a member of Yetarik Adera Organization."," The aim of Yetarik Adera is to create awareness to existing and future generation on the contributions of Emperor Haile Selassie and his cabinet for Ethiopia."
]},{
    name: "Laly Kassa",
    title: "Board Member",
    image: img6,
     description:["I joined the board of Yetarik Adera because I wanted to be part of an institution that reminds current and future Ethiopians of the service and sacrifices made by my father, uncles, and other government officials whose lives were tragically cut short."," Under the leadership of His Majesty, Emperor Haile Selassie I, this generation of public servants and their colleagues, many of whom also suffered years of imprisonment under the Derg, conceived and founded most of the institutions which are the foundations of the ones we have in Ethiopia today."," I believe their collective contributions have not been adequately recognized and that we have a responsibility to correct the historical record by giving them their rightful place in Ethiopian history."
]},
  {
    name: "Hirut Tafesse",
    title: "Board Member",
    image: img8,
     description:["I am the daughter of Major General Tafesse Lemma. I left Ethiopia shortly after the onset of the Red Terror. I pursued my education in the United States and have been employed in corporate America for a considerable period. In 2022, I returned to Addis and am currently working as a volunteer at a school near Ayat. My goal is to contribute in shaping future generations."," It has been an honor to participate in Ye Tarik Adera, which aims to highlight the sacrifices made by my father and his fellow officers."," It’s been my privilege to join an organization dedicated to preserving their/our history and ensuring that their narrative is included in educational curriculum, thereby preventing the recurrence of such atrocities in the future."
]},
    {
    name: "Rahel Kifle",
    title: "Board Member",
    image: img9,
     description:["I am deeply honored to serve as a board member of Yetarik Adera, where I am committed to honoring the profound legacy and sacrifice of the Ethiopian government officials who served the administration of Emperor Haile Selassie I."," With a resolute dedication to Yetarik Adera's mission, I am focused on inspiring future generations by bridging the gap between them and the monumental work and legacy of their ancestors, cultivating in them a strong sense of pride, purpose, and continuity.","Professionally, I bring over three decades of rich experience with Ethiopian Airlines, starting as a Cabin Crew member and advancing to a leadership position as a Cabin Crew Supervisor for In-Flight Services.  Driven by a passion for mentoring and nurturing the next generation of aviation professionals, I transitioned to EAL's Aviation Academy as a Senior Instructor, where I had the privilege of training new cabin crew members, imparting essential skills and industry knowledge.","I am excited and look forward to continuing to support Yetarik Adera’s mission."
]},
   {
    name: "Sirgut Tafesse",
    title: "Board Member",
    image: img11,
     description:["I am the eldest daughter of Major General Tafesse Lemma. I moved to the US in the late ‘70s, finished my higher education in Arlington, Texas where I now reside with my husband and 3 daughters.","It is my privilege to be part of Yetarik Adera, charged with the responsibility of preserving and conveying the remarkable legacy and history of our fathers, brothers, and uncles who dedicated their lives to safeguard our country. They exemplified the core values of patriotism, loyalty, and leadership.","It is our duty to educate, inform, inspire, and safeguard the legacy of our forefathers, ensuring that we pass this knowledge on to our children and grandchildren."," “The legacy of heroes is the memory of a great name and the inheritance of a great example.”   Benjamin Disraeli ","“Our nation owes a debt to its fallen heroes that we can never fully repay”  Barack Obama"
]},
    {
    name: "Tegist Worku",
    title: "Board Member",
    image: img5,
     description:["Like many members of their generation, my father and my uncles loved their country more than anything else.  My father spent his life serving his country, often leaving his young family behind for postings throughout Ethiopia.","I believe it is our responsibility now, to educate current and future generations of Ethiopia to honor the legacy of those who paid the ultimate sacrifice without justice and due process.","I wanted to be part of Yetarik Adera, whose goal is to recognize, not just my father and those who died with him, but the entire generation of public servants during the reign of Emperor Haile Selassie I, and their historic contributions to Ethiopia's progress.  I want the accomplishments of these public servants, which have largely gone unrecognized, to be easily accessible to the public so that the record is set straight and available to all Ethiopians."
]},
  {
    name: "Yodit Amaha",
    title: "Board Member",
    image: img10,
     description:["YeTarik Adera’s mission aligns with my sense of responsibility to preserve the past and bridge our history with the present to inform our future. Every generation has an obligation to share our stories of the past so that history serves a purpose and celebrates our identities.","Through the work of YeTarik Adera, my hope and prayer is to build today’s Ethiopia through the voices of the past and the vision of the youth.","In my own endeavors, I hope to continue serving as a global change agent and use my years of expertise in social work to elevate this mission.","Thank you for giving me the opportunity to serve."
]},
    {
    name: "Yemane Demisse",
    title: "Board Member",
    image: placeholder,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
    
];

const BoardMembers: React.FC = () => {
    const [selectedMartyr, setSelectedMartyr] = useState<BoardMember | null>(null);
  return (
    <>
    <section className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic bg-[#F3EFE6] text-gray-800 px-6 md:px-20 pt-[70px] md:h-screen overflow-y-hidden`}>
      {/* Header */}
      <div className="text-center mb-10 mt-16 flex justify-center items-center">
        <section className="px-6 text-center w-auto">
          <h1 className={`${arapey.variable} font-arapey text-3xl md:text-[45px] font-light leading-snug inline-block`}>
            <div className="inline-block pr-14 md:pr-0">
              <span className="">Board</span>
<motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
            </div>
            <br />
            <div className="inline-block pl-[70px] md:pl-[300px]">
              <div className="inline-block">
                <span className="">Members</span>
      <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
              </div>
            </div>
          </h1>
        </section>
      </div>

      {/* Members and Text */}
      <div className="flex w-full gap-20 flex-wrap">
       
 {/* Column 1 */}
<div className="hidden md:flex flex-col gap-8 w-auto mt-[-250px] overflow-hidden h-full">
  <div className="animate-infinite-scroll">
    <div className="">
    {members.slice(0, 6).map((member, index) => (
      <div key={`col1-${index}`} className="flex flex-col items-start gap-4 py-4 " onClick={() => setSelectedMartyr(member)}>
        <Image
          src={member.image}
          alt={member.name}
          className="w-[170px] h-[170px] object-fit rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.name}</h3>
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0 }} className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1" />
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.title}</h3>
        </div>
      </div>
     
    ))}
 </div>
    {/* duplicate list for seamless looping */}
        <div className="">
    {members.slice(0, 6).map((member, index) => (
      <div key={`col1-dup-${index}`} className="flex flex-col items-start gap-4 py-4" onClick={() => setSelectedMartyr(member)}>
        <Image
          src={member.image}
          alt={member.name}
          className="w-[170px] h-[170px] object-fit rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.name}</h3>
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0 }} className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1" />
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.title}</h3>
        </div>
      </div>
    ))}
    </div>
  </div>
</div>


        {/* Column 2 */}
    
<div className="hidden md:flex flex-col gap-8 w-auto mt-[-250px] pt-[150px] overflow-hidden h-full">
  <div className="animate-infinite-scroll">
    {members.slice(6, 13).map((member, index) => (
      <div key={`col1-${index}`} className="flex flex-col items-start gap-4 py-4" onClick={() => setSelectedMartyr(member)}>
        <Image
          src={member.image}
          alt={member.name}
          className="w-[170px] h-[170px] object-fit rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.name}</h3>
           <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0 }} className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1" />
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.title}</h3>
        </div>
      </div>
    ))}

    {/* duplicate list for seamless looping */}
    {members.slice(6, 13).map((member, index) => (
      <div key={`col1-dup-${index}`} className="flex flex-col items-start gap-4 py-4" onClick={() => setSelectedMartyr(member)}>
        <Image
          src={member.image}
          alt={member.name}
          className="w-[170px] h-[170px] object-fit rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.name}</h3>
           <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0 }} className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1" />
          <h3 className="text-lg text-[#4A2C13] inline-block">{member.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>


<div className="flex flex-col gap-4 w-full md:w-1/2 text-[18px]">
          <div>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </div>
          <div>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
          </div>
          <div>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard  Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          </div>
        </div>
        <div className="md:hidden grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
                    {members.map((member:any, index) => (
                      <div key={index} className="flex flex-col items-center gap-4"  onClick={() => setSelectedMartyr(member)}>
              <Image
                src={member.image}
                alt={member.name}
                className="w-[120px] h-[120px] object-fit rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-lg  text-[#4A2C13] inline-block">
                  {member.name}
                </h3>
                  <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
                <h3 className="text-lg  text-[#4A2C13] inline-block">
                  {member.title}
                </h3>
              </div>
            </div>
                    ))}
                  </div>
{/* Modal */}
{selectedMartyr && (
  <div
    className="fixed inset-0 bg-[#4C3519]/90 z-50 flex items-center justify-center p-4 sm:p-8"
    onClick={() => setSelectedMartyr(null)}
  >
    <div
      className="bg-[#4C3519]/0 rounded-lg w-full max-w-6xl p-4 sm:p-6 md:p-12 relative flex flex-col md:flex-row items-center gap-6 md:gap-8 overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-3 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl font-bold hover:text-gray-200"
        onClick={() => setSelectedMartyr(null)}
      >
        &times;
      </button>

      {/* Martyr Image */}
      <div className="flex-shrink-0">
        <Image
          src={selectedMartyr.image}
          alt={selectedMartyr.name}
          width={250}
          height={300}
          className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] object-fit rounded-full block mx-auto"
        />
      </div>

      {/* Martyr Details */}
      <div className="text-white md:text-left text-center border-0 md:border-l-2 border-[#db9744] md:pl-4 max-w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 border-b-0 md:border-b-2 border-[#db9744] pb-2">
          {selectedMartyr.name}
        </h2>
        <div className="text-sm sm:text-base md:text-lg space-y-3">
          {selectedMartyr.description.map((para: any, i: any) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
)}


        {/* Description Column */}
        
      </div>
      <div>



      </div>
    </section>
    <Footer />
    </>
  );
};

export default BoardMembers;
