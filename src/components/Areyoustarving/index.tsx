"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [selectedOption, setSelectedOption] = useState("delivery");

  return (
    <div className="bg-[url('/AreYou.png')] bg-cover bg-center w-full h-[500px]">
      <div className="space-y-6 custom-container py-16 md:py-24 flex flex-col h-full">
        <div className="w-full max-w-[630px] mx-auto lg:mx-0 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Are you starving?
          </h1>
          <p className="text-sm md:text-md mt-5">
            Within a few clicks, find meals that are accessible near you
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 flex flex-col w-full max-w-[630px] space-y-4 mx-auto lg:mx-0">
          <div className="flex flex-row justify-start space-x-4">
            <button
              onClick={() => setSelectedOption("delivery")}
              className={`flex items-center gap-1 px-4 py-2 rounded-md font-medium text-sm  ${
                selectedOption === "delivery"
                  ? "text-[#FB693B] bg-orange-100"
                  : "text-gray-600 bg-white"
              }`}
            >
              <Image
                src="/AreYou/bike.png"
                alt="delivery icon"
                width={18}
                height={18}
              />
              Delivery
            </button>

            <button
              onClick={() => setSelectedOption("pickup")}
              className={`flex items-center gap-1 px-4 py-2 rounded-md font-medium text-sm  ${
                selectedOption === "pickup"
                  ? "text-[#FB693B] bg-orange-100"
                  : "text-gray-600 bg-white"
              }`}
            >
              <Image
                src="/AreYou/haturi.png"
                alt="pickup icon"
                width={15}
                height={15}
              />
              Pickup
            </button>
          </div>

          <div className="flex flex-row items-center gap-2 w-full justify-center flex-wrap sm:flex-nowrap">
            <div className="flex items-center w-full sm:w-[450px] bg-gray-100 rounded-lg px-4 py-2 gap-2">
              <Image
                src="/AreYou/location.png"
                alt="location icon"
                width={15}
                height={15}
              />
              <input
                type="text"
                placeholder="Enter Your Address"
                className="bg-transparent outline-none text-gray-700 text-sm w-full"
              />
            </div>
            <button
              className="bg-gradient-to-b from-[#FF7A7A] via-[#FB693B] to-[#F65900]
             hover:from-[#d86868] hover:via-[#dc5c35] hover:to-[#d25005]
             transition-all duration-300
             cursor-pointer flex items-center justify-center text-white py-2 rounded font-medium gap-1 text-[16px] px-4"
            >
              <Image
                src="/AreYou/search.png"
                alt="search icon"
                width={12}
                height={12}
              />
              Find Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
