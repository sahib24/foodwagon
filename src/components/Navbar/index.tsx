"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-3">
      <div className="  sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-around gap-4">
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <Image
            src="/navbar/foodwagon.png"
            alt="foodwagon Logo"
            width={160}
            height={160}
            className=" h-auto w-fit"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center text-sm text-gray-700 gap-1 text-center md:text-left">
          <p className="text-[16px] font-bold ">Deliver to:</p>
          <Image src="/navbar/map.png" alt="map icon" width={15} height={15} />
          <p className="text-gray-500">Current Location</p>
          <p className="font-bold ml-1 text-gray-800">
            Mohammadpur Bus Stand, Dhaka
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-end">
          <button className="flex items-center gap-2 text-[14px] hover:text-orange-500 transition font-semibold">
            <Image
              src="/navbar/Search.png"
              alt="search icon"
              width={15}
              height={18}
            />
            Search Food
          </button>

          <button className="flex items-center gap-2 bg-white text-[#FFB30E] py-2 px-4 shadow-lg shadow-[#ffb30e6a] font-bold ">
            <Image
              src="/navbar/login.png"
              alt="login icon"
              width={15}
              height={15}
            />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
