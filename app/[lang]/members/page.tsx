'use client';
import { useState } from "react";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
// Import member images
import img1 from "@/public/asset/Kiddie.webp";
import img2 from "@/public/asset/Laly.jpg";
import img3 from "@/public/asset/Tegi.svg";
import img4 from "@/public/asset/Atsede.webp";
import img5 from "@/public/asset/monique.svg";
import img6 from "@/public/asset/Gash Amde.webp";
import img7 from "@/public/asset/Askadetch.svg";
import img8 from "@/public/asset/Hirut.webp";
import img9 from "@/public/asset/Rahel.svg";
import img10 from "@/public/asset/Yodit.webp";

// Define member type
interface BoardMember {
  name: string;
  title: string;
  image: StaticImageData;
  description?: string;
}


const members: BoardMember[] = [
  {
    name: "Seble Nebiyeloul",
    title: "Chair",
    image: img1,
    description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    name: "Laly",
    title: "Vice Chair",
    image: img2,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    name: "Tegi",
    title: "Secretary",
    image: img3,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    name: "Atsede",
    title: "Treasurer",
    image: img4,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    name: "Monique",
    title: "Member",
    image: img5,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    name: "Gash Amde",
    title: "Member",
    image: img6,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    name: "Askadetch",
    title: "Member",
    image: img7,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    name: "Hirut",
    title: "Member",
    image: img8,
     description:"Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
];

const BoardMembers: React.FC = () => {
    const [selectedMartyr, setSelectedMartyr] = useState<BoardMember | null>(null);
  return (
    <section className="bg-[#F3EFE6] text-gray-800 px-6 md:px-20 pt-32 py-20">
      {/* Header */}
      <div className="text-center mb-16 flex justify-center items-center">
        <section className="px-6 text-center w-auto">
          <h1 className="text-[45px] font-light leading-snug inline-block">
            <div className="inline-block">
              <span className="font-serif">Board</span>
<motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
            </div>
            <br />
            <div className="inline-block pl-[300px]">
              <div className="inline-block">
                <span className="font-serif">Members</span>
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
        <div className="flex flex-col gap-8 w-auto mt-[-200px] animate-infinite-scroll ">
          {members.slice(0, 5).map((member, index) => (
            <div key={index} className="flex flex-col items-start gap-4"  onClick={() => setSelectedMartyr(member)}>
              <Image
                src={member.image}
                alt={member.name}
                className="w-[190px] h-[190px] object-cover rounded-full border border-gray-400"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-serif text-[#4A2C13] inline-block">
                  {member.name}
                </h3>
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
                <h3 className="text-lg font-serif text-[#4A2C13] inline-block">
                  {member.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-8 w-auto mt-[-50px] animate-infinite-scroll ">
          {members.slice(5, 10).map((member, index) => (
            <div key={index} className="flex flex-col items-start gap-4"  onClick={() => setSelectedMartyr(member)}>
              <Image
                src={member.image}
                alt={member.name}
                className="w-[190px] h-[190px] object-cover rounded-full border border-gray-400"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-serif text-[#4A2C13] inline-block">
                  {member.name}
                </h3>
                  <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0 }}
                className="h-[1px] w-[300px] lg:w-[900px] bg-primary mt-1"
              />
                <h3 className="text-lg font-serif text-[#4A2C13] inline-block">
                  {member.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

         {/* Modal */}
              {selectedMartyr && (
                <div className="fixed inset-0 bg-[#4C3519]/90 z-50 flex items-center justify-center p-6">
                  <div className=" rounded-lg w-full max-w-6xl p-6 md:p-12 relative flex flex-col md:flex-row items-center gap-8">
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
                        alt={selectedMartyr.name}
                        className="w-[250px] h-[300px] object-cover shadow-lg"
                      />
                    </div>
        
                    {/* Martyr Details */}
                    <div className="text-white md:text-left text-center border-2 border-[#4C3519]/0 border-l-[#db9744] pl-4">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 border-2 border-[#4C3519]/0 border-b-[#db9744] pb-2">
                        {selectedMartyr.name}
                      </h2>
                      <p className="text-base md:text-lg leading-relaxed text-justify max-w-xl">
                        {selectedMartyr.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}

        {/* Description Column */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
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
      </div>
    </section>
  );
};

export default BoardMembers;
