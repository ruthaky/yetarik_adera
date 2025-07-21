import React from "react";
import img1 from "@/public/asset/Kiddie.webp";
import img2 from "@/public/asset/Laly.jpg";
import img3 from "@/public/asset/Tegi.svg";
import Image from "next/image";

interface BoardMember {
  name: string;
  title: string;
  image: string;
  description?: string;
}

const members: BoardMember[] = Array.from({ length: 8 }, (_, i) => ({
  name: "Seble Nebiyeloul",
  title: "Chair",
  image: `/images/member${i + 1}.jpg`, // Replace with actual image paths
  description:
    i % 2 !== 0
      ? "Imply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text"
      : undefined,
}));

const BoardMembers: React.FC = () => {
  return (
    <section className="bg-[#F3EFE6] text-gray-800 px-6 md:px-20 pt-32 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#4A2C13]">
          <span className="border-b-2 border-[#B1864F] pb-2">Board</span>{" "}
          Members
        </h2>
      </div>
      <div className="flex w-full">
        <div className="grid md:grid-cols-2 gap-12 w-1/2">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <Image
                src={img1}
                alt={member.name}
                className="w-[230px] h-[230px] object-cover rounded-full border border-gray-400"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-serif text-[#4A2C13] border-b border-[#B1864F] inline-block">
                  {member.name}
                </h3>
                <h3 className="text-lg font-serif text-[#4A2C13] inline-block">
                  {member.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <div>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard...Simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard...Simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard...
          </div>
          <div>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard...Simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard...Simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard...
          </div>
          <div>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard...Simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard...Simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard...
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
