import React from "react";
import img1 from "@/public/asset/event1.jpg";
import Image from "next/image";

interface Event {
  date: string;
  month: string;
  image: string;
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
    <section className="bg-[#F3EFE6] px-4 md:px-20 py-16 text-[#4A2C13]">
      <div className="text-center mb-16 mt-7">
        <h2 className="text-4xl md:text-5xl font-serif">
          <span className="border-b-2 border-[#B1864F] pb-2">Upcoming</span> Events
        </h2>
      </div>

      <div className="space-y-16">
        {events.map((event, index) => (
          <div key={index} className="border-b border-[#B1864F] pb-10">
            <div className="grid grid-cols-1 md:grid-cols-[70px_auto_1fr] gap-6 items-start">
              {/* Date */}
              <div className="text-center text-xl font-bold">
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

      <div className="mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-lg font-medium text-black hover:underline"
        >
          <span className="text-2xl">&#8592;</span> Previous Events
        </a>
      </div>
    </section>
  );
};

export default UpcomingEvents;
