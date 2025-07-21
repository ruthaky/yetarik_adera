"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "@/public/asset/mart1.webp"; // Replace with correct image
import { Button } from "@/components/ui/button";
import img2 from "@/public/asset/imgabout2.png";

interface Martyr {
  name: string;
  title: string;
  image: string;
  description: string;
}

export default function MartyrsPage() {
  const [showMartyrs, setShowMartyrs] = useState(false);
  const [selectedMartyr, setSelectedMartyr] = useState<Martyr | null>(null);

  const martyrs: Martyr[] = Array.from({ length: 8 }, (_, i) => ({
    name: "Akililu Habtewold",
    title: "Public Servant",
    image: "/images/member1.jpg", // Update per martyr
    description:
      "The story of Emperor Haile Selassie and the public servants who shaped Ethiopia during his reign is one we can't afford to forget. Their legacy is part of who we are, and it deserves to be remembered with truth and dignity. We're here to preserve that history, support those who want to learn from it, and share it with future generations. Everything we do is rooted in honoring the past and making sure it’s never erased.",
  }));

  return (
    <main className="min-h-screen bg-[#f5f0e8] text-gray-800 font-sans">
      {/* Hero */}
      <section className="relative w-full h-[75vh]">
        {/* <Image
          src={img1}
          alt="70 Martyrs of Mount Abay"
          fill
          className="object-cover object-top"
          priority
        /> */}

        <div className="flex flex-col items-center justify-center text-center  pt-[200px] text-black px-4">
          <h1 className=" text-5xl font-bold mb-4">68 Martyrs</h1>
          {/* <p className="text-lg max-w-2xl">
            Honoring the legacy of faith, courage, and sacrifice.
          </p> */}
          <div className="space-y-6 text-lg leading-relaxed w-[70%] mt-5">
            <p className="text-left">
              The Seventy Martyrs were devout Christians who lived during a time
              of persecution. They gathered on Mount Abay, where they continued
              to worship and spread the gospel, despite growing threats against
              their lives. Refusing to renounce their faith, they stood strong
              in the face of trials and tribulations. Many of them were leaders
              and teachers who guided others in the Christian faith, bringing
              light to their communities even as darkness grew around them.
              Today, we remember them not only for their martyrdom but for their
              unwavering commitment to truth, justice, and love. Their sacrifice
              continues to inspire believers around the world.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 pb-12 flex flex-col items-center justify-center">
        <Image src={img2} alt="Building" className="w-[600px] mb-4" />
        <p className="text-sm"></p>
      </section>

      {/* Description */}
      <section className="w-[70%] mx-auto px-6 pb-20 text-center md:text-left">
        {/* <h2 className="text-3xl font-bold mb-6 text-gray-900">
          The Story of the 70 Martyrs
        </h2> */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            The Seventy Martyrs were devout Christians who lived during a time
            of persecution. They gathered on Mount Abay, where they continued to
            worship and spread the gospel, despite growing threats against their
            lives.
          </p>
          <p>
            Refusing to renounce their faith, they stood strong in the face of
            trials and tribulations. Many of them were leaders and teachers who
            guided others in the Christian faith, bringing light to their
            communities even as darkness grew around them.
          </p>
          <p>
            Today, we remember them not only for their martyrdom but for their
            unwavering commitment to truth, justice, and love. Their sacrifice
            continues to inspire believers around the world.
          </p>
          <Button onClick={() => setShowMartyrs(!showMartyrs)}>
            {showMartyrs ? "Hide Martyrs" : "View Martyrs"}
          </Button>
        </div>
      </section>

      {/* Martyrs Section */}
      {showMartyrs && (
        <section className="bg-[#F3EFE6] text-gray-800 px-6 md:px-20 py-20">
          <div className="text-center mb-16 w-full max-w-6xl mx-auto">
            <h2 className="text-[40px] text-left font-serif text-[#4A2C13]">
              Civilian Officials Executed, Saturday, November 23, 1974
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {martyrs.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 cursor-pointer"
                onClick={() => setSelectedMartyr(member)}
              >
                <Image
                  src={img1}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-[230px] h-[230px] object-cover rounded-full border border-gray-400 shadow-md"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-serif text-[#4A2C13] border-b border-[#B1864F]">
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
        <div className="fixed inset-0 bg-[#4C3519]/75 z-50 flex items-center justify-center p-6">
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
                src={img1}
                alt={selectedMartyr.name}
                className="w-[250px] h-[300px] object-cover rounded-md shadow-lg"
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
  );
}
