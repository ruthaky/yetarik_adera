"use client";
import {Martyrs, Martyrs2, Martyrs3 } from "@/app/[lang]/martyrs/data/martyrs";
import { useState } from "react"; 
import Image from "next/image";
import img1 from "@/public/asset/mart1.webp"; // Replace with correct image
import { Button } from "@/components/ui/button";
import img2 from "@/public/asset/martyrsstatue.jpeg";
import { motion } from "framer-motion";
import Footer from "@/app/shared/footer/footer";
import { IconSearch } from "@tabler/icons-react"

interface Martyrs {
  name: string;
  title: string;
  image: any;
  description: string;
}
interface Martyrs2 {
  name: string;
  title: string;
  image: any;
  description: string;
}
interface Martyrs3 {
  name: string;
  title: string;
  image: any;
  description: string;
}

export default function MartyrsPage() {
  const [showMartyrs, setShowMartyrs] = useState(false);
  const [selectedMartyr, setSelectedMartyr] = useState<Martyrs | null>(null);

  // const martyrs: Martyr[] = Array.from({ length: 8 }, (_, i) => ({
  //   name: "Akililu Habtewold",
  //   title: "Public Servant",
  //   image: "/images/member1.jpg", // Update per martyr
  //   description:
  //     "The story of Emperor Haile Selassie and the public servants who shaped Ethiopia during his reign is one we can't afford to forget. Their legacy is part of who we are, and it deserves to be remembered with truth and dignity. We're here to preserve that history, support those who want to learn from it, and share it with future generations. Everything we do is rooted in honoring the past and making sure it’s never erased.",
  // }));

  const [searchTerm, setSearchTerm] = useState("");

  const allMartyrs = [...Martyrs, ...Martyrs2, ...Martyrs3];

  const filteredMartyrs = allMartyrs.filter((martyr) =>
    martyr.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <main className="min-h-screen text-gray-800 font-sans bg-[#f8f5ef] pt-32 ">
      {/* Hero */}
    <section className="relative w-full">
  {/* Title Section */}
  <div className="flex flex-col items-center justify-center text-center text-black px-4">
    <div className="mb-10 sm:mb-10 flex justify-center items-center">
      <section className="px-4 sm:px-6 text-start w-auto">
        <h1 className="text-3xl md:text-[45px] font-light leading-snug inline-block">
          {/* Line 1 */}
          <div className="inline-block">
            <span className="font-serif">68</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0 }}
              className="h-[2px] w-[150px] sm:w-[300px] lg:w-[900px] bg-primary mt-1"
            />
          </div>
          <br />
          {/* Line 2 */}
          <div className="inline-block pl-12 sm:pl-20 lg:pl-[80px]">
            <span className="font-serif">Martyrs</span>
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
    <div className="space-y-4 sm:space-y-6 text-[18px] leading-relaxed w-full max-w-[95%] md:max-w-[70%] text-left">
      <p>
        In 1974, during the transitional period following the end of Emperor
        Haile Selassie's administration, 68 senior government officials and
        public servants were executed by the Derg regime without trial. These
        individuals, who held high office and played key roles in Ethiopia’s
        development, were taken from prison and summarily killed in one of the
        most tragic and unjust acts in the country’s modern history.
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
<section className="px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center justify-center">
  <Image
    src={img2}
    alt="Building"
    className="w-full max-w-[700px] h-auto mb-4 object-cover rounded-lg"
  />
</section>

{/* Description Section */}
<section className="w-full max-w-[95%] md:max-w-[70%] mx-auto px-4 sm:px-6 pb-10 text-left">
  <div className="space-y-4 sm:space-y-6 text-[18px] sm:text-base md:text-lg leading-relaxed text-black ">
    <p className="text-left">
      The 68 martyrs represented a generation of leaders who contributed
      significantly to national progress through their service,
      professionalism, and dedication. Their loss marked a turning point in
      Ethiopian history and serves as a powerful reminder of the dangers of
      political violence and the erosion of rule of law.
    </p>
    <p className="text-left">
      The 68 martyrs represented a generation of leaders who contributed
      significantly to national progress through their service,
      professionalism, and dedication. Their loss marked a turning point in
      Ethiopian history and serves as a powerful reminder of the dangers of
      political violence and the erosion of rule of law.
    </p>
    <p className="text-left">
      The 68 martyrs represented a generation of leaders who contributed
      significantly to national progress through their service,
      professionalism, and dedication. Their loss marked a turning point in
      Ethiopian history and serves as a powerful reminder of the dangers of
      political violence and the erosion of rule of law.
    </p>
   
  </div> <Button
      className="mt-4 sm:mt-6"
      onClick={() => setShowMartyrs(!showMartyrs)}
    >
      {showMartyrs ? "Hide Martyrs" : "View Martyrs"}
    </Button>
</section>


      {/* Martyrs Section */}
      {showMartyrs && (
        <section className=" text-gray-800 px-6 md:px-20 py-0">

 <div className="max-w-6xl mx-auto">
  <div className="w-full flex justify-end">
   
  <input
    type="text"
    placeholder="Search by name..."
    className="w-[350px] p-3 border-b-2 border-[#B1864F] bg-transparent mb-10 text-black focus:outline-none"
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
                         className="flex flex-col items-center gap-4 py-[20px] cursor-pointer w-[300px]"
                          onClick={() => setSelectedMartyr(martyr)}
        >
       <Image
            src={martyr.image.src}
            alt={martyr.name}
              unoptimized
                  width={200}
                  height={200}
            className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-center rounded-full border border-gray-400 shadow-md "
          />
             <div className="flex flex-col items-center">
                  <h3 className="text-[15px] font-serif text-[#4A2C13] border-b border-[#B1864F]">
                    {martyr.name}
                  </h3>
                  <p className="text-sm text-gray-600">{martyr.description}</p>
                </div>
         
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">No martyrs found.</p>
  )
) : null}

    </div>

          <div className="text-center mb-16 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[36px]  text-left font-serif text-[#4A2C13]">
              Civilian Officials Executed, Saturday, November 23, 1974
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
                  alt={member.name}
                  unoptimized
                  width={200}
                  height={200}
                  className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-fit rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-[15px] font-serif text-[#4A2C13] border-b border-[#B1864F]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center my-16 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[36px] text-left font-serif text-[#4A2C13]">
              Civilian Officials Executed, Saturday, November 23, 1974
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
                  alt={member.name}
                  unoptimized
                  width={200}
                  height={200}
                  className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-fit rounded-full "
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-[15px] font-serif text-[#4A2C13] border-b border-[#B1864F]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center my-16 w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[36px] text-left font-serif text-[#4A2C13]">
              Civilian Officials Executed, Saturday, November 23, 1974
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
                  alt={member.name}
                  unoptimized
                  width={200}
                  height={200}
                  className="w-[120px] h-[120px] md:w-[190px] md:h-[190px] object-fit rounded-full"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-[15px] font-serif text-[#4A2C13] border-b border-[#B1864F]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

 {/* Modal */}
{selectedMartyr && (
  <div
    className="fixed inset-0 bg-[#4C3519]/90 z-50 flex items-center justify-center p-6"
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
  alt={selectedMartyr.name}
  className="w-[150px] h-[150px] md:w-[270px] md:h-[270px] object-fit rounded-full block mx-auto"
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

    </main>
    <Footer />
    </>
  );
}
