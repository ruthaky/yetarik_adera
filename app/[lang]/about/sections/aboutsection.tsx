import React from "react";
import img1 from "@/public/asset/imgabout1'.png";
import img2 from "@/public/asset/imgabout2.png";
import img3 from "@/public/asset/imgabout3.png";
import img4 from "@/public/asset/imgabout4.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-[#f8f5ef] text-[#2b2a28] font-serif">
      {/* Header */}
      <header className="bg-[#2b2a28] text-white flex justify-between items-center px-6 py-3">
        <span className="text-sm">Eng/Amh</span>
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6" />
        </div>
        <button className="text-xl">&#9776;</button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-light leading-snug">
          <span className="border-b-2 border-orange-400">Our Purpose,</span>
          <br />
          <span className="border-b-2 border-orange-400">Rooted in Legacy</span>
        </h1>
      </section>

      {/* Image and Text Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-[100px] px-6 pb-12">
        <Image
          src={img1}
          alt="Emperor Haile Selassie"
          className="w-[400px] h-[400px] object-cover"
        />
        <p className="text-sm max-w-md leading-relaxed">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard...Simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard...Simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard...
        </p>
      </section>

      {/* Legacy Section */}
      <section className="pb-12 w-[70%] mx-auto text-sm leading-relaxed">
        <p>
          The story of Emperor Haile Selassie and the public servants who shaped
          Ethiopia during his reign is one we can’t afford to forget...The story
          of Emperor Haile Selassie and the public servants who shaped Ethiopia
          during his reign is one we can’t afford to forget...The story of
          Emperor Haile Selassie and the public servants who shaped Ethiopia
          during his reign is one we can’t afford to forget...
        </p>
      </section>

      {/* Featured Section */}
      <div className="flex items-center justify-center">
        <div className="bg-[#f8f5ef] text-[#2b2a28] flex flex-col justify-center w-[70%] font-serif py-8">
          <h2 className="text-xl font-semibold border-l-4 border-[#b07936] pl-2 mb-2">
            Featured
          </h2>
          <div className="border-t border-[#b07936]">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-8 py-4 border-b border-[#b07936]">
              <div>
                <p className="font-medium">Simply</p>
                <p className="">Dummy Text Of The Printing</p>
              </div>
              <div>
                <p className="font-medium">Simply</p>
                <p className="">Dummy Text Of The Printing</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-8 py-4 border-b border-[#b07936]">
              <div>
                <p className="font-medium">Simply Dummy</p>
                <p className="">Text Of The Printing  And Drawing</p>
              </div>
              <div>
                <p className="font-medium">Simply Dummy</p>
                <p className="">Text Of The Printing  And Drawing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <section className="px-6 pb-12 flex flex-col items-center justify-center">
        <Image src={img2} alt="Building" className="w-[500px] mb-4" />
        <p className="text-sm">
          The story of Emperor Haile Selassie and the public servants who shaped
          Ethiopia during his reign...
        </p>
      </section>

      {/* Reflection Section */}
      <div className="flex justify-center">
        <section className="flex items-center pb-12 w-[70%]">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-semibold border-b border-orange-400 mb-2">
                    Reflection
                  </h3>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry’s standard...
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* Image Section */}
      <section className="px-6 pb-12">
        <Image src={img3} alt="Building" className="w-full h-[450px] mb-4" />
        <p className="text-sm">
          The story of Emperor Haile Selassie and the public servants who shaped
          Ethiopia during his reign... The story of Emperor Haile Selassie and
          the public servants who shaped Ethiopia during his reign... The story
          of Emperor Haile Selassie and the public servants who shaped Ethiopia
          during his reign... The story of Emperor Haile Selassie and the public
          servants who shaped Ethiopia during his reign...
        </p>
      </section>

      {/* Image Grid */}
      <section className="px-6 pb-12 grid grid-cols-2 md:grid-cols-5 gap-2">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <Image
              key={idx}
              src={img4}
              alt="Thumbnail"
              className="w-full h-32 object-cover"
            />
          ))}
      </section>

      {/* Final Text Section */}
      <section className="px-6 pb-12 text-sm">
        <p>
          The story of Emperor Haile Selassie and the public servants who shaped
          Ethiopia during his reign is one we can’t afford to forget... The
          story of Emperor Haile Selassie and the public servants who shaped
          Ethiopia during his reign... The story of Emperor Haile Selassie and
          the public servants who shaped Ethiopia during his reign... The story
          of Emperor Haile Selassie and the public servants who shaped Ethiopia
          during his reign...
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
