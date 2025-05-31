"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-[url('/AreYou.png')] bg-cover bg-center w-full h-[500px]">
      <div className="max-w-6xl mx-auto text-left space-y-6 px-6 py-16 md:px-12 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Are you starving?
        </h1>
        <p className="text-sm md:text-base ">
          Within a few clicks, find meals that are accessible near you
        </p>

        <div className="bg-white rounded-xl p-6 md:p-7 flex flex-col w-full max-w-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <button className="flex items-center gap-1 px-4 py-2 rounded-md text-[#FB693B] bg-orange-100 font-medium text-sm shadow justify-center">
              <Image
                src="/AreYou/bike.png"
                alt="delivery icon"
                width={18}
                height={18}
              />
              Delivery
            </button>
            <button className="flex items-center gap-1 px-4 py-2 rounded-md text-gray-600 font-medium text-sm  bg-white justify-center">
              <Image
                src="/AreYou/haturi.png"
                alt="pickup icon"
                width={15}
                height={15}
              />
              Pickup
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 w-full space-y-3 sm:space-y-0">
            <div className="flex items-center sm:w-[500px] bg-gray-100 rounded-lg px-4 py-2 gap-2">
              <Image
                src="/AreYou/location.png"
                alt="location icon"
                width={15}
                height={15}
              />
              <input
                type="text"
                placeholder="Enter Your Address"
                className="bg-transparent  outline-none text-gray-700 text-sm"
              />
            </div>
            <button className="bg-[#FB693B] hover:bg-orange-600 flex items-center justify-center text-white px-2 py-2 rounded-lg font-medium gap-1 text-[14px]">
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
