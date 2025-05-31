import React from "react";
import Image from "next/image";
const SearchByFood = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold text-black mb-6">Search by Food</h1>

      <div className="space-y-4">
        {/* Pizza */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <Image
            src="/path-to-your-image/pizza.png"
            alt="Pizza"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mr-4"
          />
          <span className="text-lg font-medium">Pizza</span>
        </div>

        {/* Burger */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <span className="text-lg font-medium">Burger</span>
        </div>

        {/* Noodles */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <span className="text-lg font-medium">Noodles</span>
        </div>

        {/* Sub-sandwich */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <span className="text-lg font-medium">Sub-sandwich</span>
        </div>

        {/* Chowmein */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <span className="text-lg font-medium">Chowmein</span>
        </div>

        {/* Steak */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <span className="text-lg font-medium">Steak</span>
        </div>
      </div>
    </div>
  );
};

export default SearchByFood;
