import React from "react";

const OrderBanner = () => {
  return (
    <div className="bg-[url('/are.png')] bg-cover bg-center h-[400px]">
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:w-[500px]">
          Are you ready to order with the best deals?
        </h1>
        <button className="mt-4 px-6 py-2 bg-gradient-to-b from-[#FF7A7A] via-[#FB693B] to-[#F65900]  hover:from-[#d86868] hover:via-[#dc5c35] hover:to-[#d25005] text-white font-semibold rounded cursor-pointer">
          PROCEED TO ORDER
        </button>
      </div>
    </div>
  );
};

export default OrderBanner;
