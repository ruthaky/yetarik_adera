"use client"
import React from "react";
import img1 from "@/public/asset/517747556_1140462981461790_5752099992240461032_n.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
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

interface Event {
  date: string;
  month: string;
  image: any;
  title: string;
  location: string;
  time: string;
  description: string;
}

const events: Event[] = [
  {
    date: "23",
    month: "JUN",
    image: img1, // Replace with actual image paths
    title: "Event Name",
    location: "1015 California Ave, Los Angeles CA",
    time: "7:00 pm - 8:00 pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "23",
    month: "JUN",
   image: img1,
    title: "Event Name",
    location: "1015 California Ave, Los Angeles CA",
    time: "7:00 pm - 8:00 pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "23",
    month: "JUN",
    image: img1,
    title: "Event Name",
    location: "1015 California Ave, Los Angeles CA",
    time: "7:00 pm - 8:00 pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const UpcomingEvents: React.FC = () => {
  return (
    <>
    <section className={`${notoSerifEthiopic.variable} font-notoSerifEthiopic py-16 pt-[70px] text-[#4A2C13] flex flex-col items-start`}>
      <div className="text-center md:mb-[30px] mt-[50px] px-6 md:px-20">
        <h2 className={` ${arapey.variable} font-arapey text-3xl md:text-5xl `}>
          <span className=" pb-2">Annual</span> Event
          
        </h2><motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0 }}
              className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
            />
          
      </div>

<div className="hidden h-[450px] w-full bg-[#B1864F] relative overflow-hidden">
  {/* Background Image */}
  <Image
    src={img1}
    alt="img1"
    className="w-full h-full object-cover rounded-md shadow-md"
    width={0}
    height={0}
  />

  {/* Gradient + Backdrop Blur Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm z-10" />
        

  {/* Content on top of the blurred gradient */}
  <div className="absolute bottom-0 left-0 w-full h-[200px] p-6 md:p-20 flex gap-5 items-center z-20">
    <div className="flex flex-col justify-center text-white text-xl font-bold">
      <p className="text-sm border-b border-[#B1864F] pb-1">April</p>
      <p className="text-3xl">23</p>
    </div>
    <p className={` ${arapey.variable} font-arapey text-white text-[30px] `}>Annual Event</p>
     
  </div>
</div>
 <div className="md:space-y-16 px-6 md:px-20">
       
          <div className="border-b border-[#B1864F] py-12">
            <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
              {/* Date */}
              <div className="text-center text-xl font-bol w-16 md:w-auto">
                <p className="text-sm border-b border-[#B1864F] pb-1">JUNE</p>
                <p className="text-3xl text-black">15</p>
              </div>

              {/* Image */}
              <Image
                src={img1}
                alt="Event Name"
                className="w-[400px] h-auto object-cover rounded-md shadow-md"
                width={0}
                height={0}
              />

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-1">Event Name</h3>
                <p className="text-sm text-gray-800 mb-1">1015 California Ave, Los Angeles CA</p>
                <p className="text-sm text-gray-700 mb-3">7:00 pm - 8:00 pm</p>
                <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-black border-b border-[#B1864F] inline-flex items-center gap-1"
                >
                  View Event Details <span className="ml-1">&gt;</span>
                </a>
              </div>
            </div>
          </div>
     
      </div>

      <div className="text-center md:mb-[30px] mt-[50px] px-6 md:px-20">
        <h2 className={` ${arapey.variable} font-arapey text-3xl md:text-4xl `}>
          <span className=" pb-2">Upcoming</span> Events
          
        </h2><motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0 }}
              className="h-[2px] w-[300px] lg:w-[900px] bg-primary mt-1"
            />
          
      </div>

      <div className="md:space-y-16 px-6 md:px-20">
        {events.map((event, index) => (
          <div key={index} className="border-b border-[#B1864F] py-12">
            <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
              {/* Date */}
              <div className="text-center text-xl font-bol w-16 md:w-auto">
                <p className="text-sm border-b border-[#B1864F] pb-1">{event.month}</p>
                <p className="text-3xl text-black">{event.date}</p>
              </div>

              {/* Image */}
              <Image
                src={event.image}
                alt={event.title}
                className="w-[280px] h-auto object-cover rounded-md shadow-md"
                width={0}
                height={0}
              />

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-gray-800 mb-1">{event.location}</p>
                <p className="text-sm text-gray-700 mb-3">{event.time}</p>
                <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-black border-b border-[#B1864F] inline-flex items-center gap-1"
                >
                  View Event Details <span className="ml-1">&gt;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 px-6 md:px-20">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-lg font-medium text-black hover:underline"
        >
          <span className="text-2xl">&#8592;</span> Previous Events
        </a>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default UpcomingEvents;
