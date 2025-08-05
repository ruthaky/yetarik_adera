import React from "react";

export default function ContactSection({ contactText }: { contactText: any }) {
  return (
    <section className="bg-[#FDF9EE] text-[#4A2C13] py-32 px-6 md:px-20 flex flex-col justify-center items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif">
          <span className="border-b-2 border-[#B1864F] pb-2">Contact</span> Us
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl w-[80%] shadow-md overflow-hidden">
        {/* Contact Info */}
        <div className="bg-[#2C2C2C] text-white p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-sm mb-8">Say something to start a live chat!</p>

            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span> +1012 3456 789
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> demo@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </li>
            </ul>
          </div>

          <div className="mt-10 flex space-x-4">
            {/* Replace these with icons */}
            <a href="#">
              <span>🐦</span>
            </a>
            <a href="#">
              <span>📸</span>
            </a>
            <a href="#">
              <span>💬</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <form className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
                placeholder="+1 012 345 6789"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Select Subject?</label>
            <div className="flex flex-wrap gap-4 text-sm">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="subject"
                  className="mr-2"
                  defaultChecked
                />{" "}
                General Inquiry
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="subject" className="mr-2" /> General
                Inquiry
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="subject" className="mr-2" /> General
                Inquiry
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="subject" className="mr-2" /> General
                Inquiry
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              className="w-full border-b border-gray-400 bg-transparent outline-none py-1"
              rows={4}
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#B77B36] text-white px-6 py-2 rounded shadow hover:bg-[#a86e2f] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

