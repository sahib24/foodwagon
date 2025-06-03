"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const foodItems = [
  { name: "Pizza", image: "/search/1.png" },
  { name: "Burger", image: "/search/2.png" },
  { name: "Noodles", image: "/search/3.png" },
  { name: "Sub-sandwich", image: "/search/4.png" },
  { name: "Chowmein", image: "/search/5.png" },
  { name: "Steak", image: "/search/6.png" },
  { name: "Burger", image: "/search/2.png" },
];

export default function FoodCarousel() {
  return (
    <div className="custom-container bg-gradient-to-b from-[#ffcf6720] to-[#ffffff28] py-10 px-4 sm:px-6 md:px-10">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-y-4 sm:flex-row sm:justify-between sm:text-left text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 w-full sm:w-auto">
          Search by Food
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
          <p className="text-[#FF9A0E] font-semibold text-sm cursor-pointer">
            View All
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="swiper-button-prev-custom rounded-full z-10 cursor-pointer ">
              <Image
                src="/search/left.png"
                alt="Left Arrow"
                width={70}
                height={70}
                className="h-auto w-fit"
              />
            </button>
            <button className="swiper-button-next-custom rounded-full z-10 cursor-pointer  ">
              <Image
                src="/search/right.png"
                alt="Right Arrow"
                width={70}
                height={70}
                className="h-auto w-fit"
              />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          0: { slidesPerView: 3 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {foodItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="text-center flex flex-col items-center">
              <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-full overflow-hidden relative shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-800 text-center">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
