"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const CustomSwiper = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const prevRef = (node: HTMLElement | null) => {
    if (node !== null) setPrevEl(node);
  };

  const nextRef = (node: HTMLElement | null) => {
    if (node !== null) setNextEl(node);
  };

  return (
    <div className="relative custom-container py-6 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center py-8">
        Propular Items
      </h2>

      <div className="absolute top-1/2 left-1 lg:left-1 xl:left-6 z-10 -translate-y-1/2">
        <button
          ref={prevRef}
          className="text-white w-fit h-auto rounded-full flex items-center justify-center cursor-pointer"
        >
          <Image src="/search/left.png" alt="Left" width={60} height={60} />
        </button>
      </div>

      <div className="absolute top-1/2 right-1 lg:right-1 xl:right-6 z-10 -translate-y-1/2">
        <button
          ref={nextRef}
          className="text-white w-fit h-auto rounded-full flex items-center justify-center cursor-pointer"
        >
          <Image src="/search/right.png" alt="Right" width={60} height={60} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl,
          nextEl,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => swiper.navigation.update(), 100);
        }}
        className="py-6"
      >
        {[
          {
            id: 1,
            name: "Cheese Burger",
            restaurant: "Burger Arena",
            price: "$3.88",
            image: "/propular/1.png",
          },
          {
            id: 2,
            name: "Toffes Cake",
            restaurant: "Top Sticks",
            price: "$4.00",
            image: "/propular/2.png",
          },
          {
            id: 3,
            name: "Dancake",
            restaurant: "Cake World",
            price: "$1.99",
            image: "/propular/3.png",
          },
          {
            id: 4,
            name: "Crispy Sandwich",
            restaurant: "Fastfood Dine",
            price: "$3.00",
            image: "/propular/4.png",
          },
          {
            id: 5,
            name: "Thai Soup",
            restaurant: "Foody man",
            price: "$2.79",
            image: "/propular/5.png",
          },
          {
            id: 6,
            name: "New Dish",
            restaurant: "Tasty Hub",
            price: "$3.50",
            image: "/propular/2.png",
          },
        ].map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white px-6 py-4 rounded-xl shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={150}
                className="rounded-lg w-full h-[150px] object-cover mb-2"
              />
              <div>
                <h3 className="text-md font-semibold mb-1 text-left">
                  {item.name}
                </h3>
                <div className="text-sm text-yellow-600 flex items-center gap-1 mb-1 text-left">
                  <Image
                    src="/loca.png"
                    alt="location"
                    width={14}
                    height={14}
                  />
                  <span>{item.restaurant}</span>
                </div>
                <p className="text-base font-bold mb-2 text-gray-800 text-left">
                  {item.price}
                </p>
                <button className="bg-gradient-to-b from-[#FF7A7A] via-[#FB693B] to-[#F65900] hover:from-[#d86868] hover:via-[#dc5c35] hover:to-[#d25005] text-white py-2 rounded text-sm font-medium w-full">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
