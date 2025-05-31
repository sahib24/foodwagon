import Image from "next/image";
import React from "react";

const OrderBanner = () => {
  return (
    <div className="relative w-full h-48 md:h-64 lg:h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden">
      <Image
        src="/are.png"
        alt="Ready to order with best deals"
        fill
        className="object-cover opacity-70"
      />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Are you ready to order with the best deals?
        </h1>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors">
          PROCEED TO ORDER
        </button>
      </div>
    </div>
  );
};

export default OrderBanner;
