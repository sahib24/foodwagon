"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-0 py-4  custom-container">
      <div className="flex flex-col lg:flex-row md:items-center md:justify-between ">
        <div className="flex justify-center md:justify-startm sm:mb-2">
          <Image
            src="/navbar/foodwagon.png"
            alt="foodwagon Logo"
            width={125}
            height={130}
            className="h-fit w-auto"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1 text-sm sm:mb-2 text-gray-700 text-center md:text-left">
          <p className="text-[13px] font-bold">Deliver to:</p>
          <Image src="/navbar/map.png" alt="map icon" width={15} height={15} />
          <p className="text-gray-500 text-[13px]">Current Location</p>
          <p className="font-bold ml-1 text-gray-800 text-[13px]">
            Mohammadpur Bus Stand, Dhaka
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-center md:justify-end relative">
          {showSearch && (
            <div className="">
              <input
                type="text"
                placeholder="Search for delicious food..."
                className="w-full pl-4 pr-10 py-2.5mb-2 rounded border border-[#ffb30e6a] text-sm placeholder:text-gray-400 "
              />
            </div>
          )}

          <button
            onClick={handleSearchToggle}
            className="flex items-center gap-1 text-[12px] hover:text-orange-500 transition font-bold cursor-pointer"
          >
            <Image
              src="/navbar/Search.png"
              alt="search icon"
              width={15}
              height={18}
            />
            Search Food
          </button>

          <button className="flex items-center text-[12px] gap-1.5 bg-white text-[#FFB30E] hover:text-black py-2 px-3.5 shadow-md font-bold rounded-md">
            <Image
              src="/navbar/login.png"
              alt="login icon"
              width={10}
              height={10}
            />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
