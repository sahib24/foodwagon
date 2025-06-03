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
    <div className="relative custom-container py-6 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center py-8">
        Propular Items
      </h2>

      <div className="absolute top-1/2  xl:left-8 md:left-0 z-10 -left-3 ">
        <button
          ref={prevRef}
          className="text-white w-fit h-auto rounded-full flex items-center justify-center cursor-pointer"
        >
          <Image
            src="/search/left.png"
            alt="Left"
            width={60}
            height={60}
            className="w-15 h-15 bg-[#FFB20E] rounded-full p-6 hover:custom-shadow:hover"
          />
        </button>
      </div>

      <div className="absolute top-1/2 xl:right-8 md:right-0 z-10 -right-3 hover:custom-shadow:hover">
        <button
          ref={nextRef}
          className="text-white w-fit h-auto rounded-full flex items-center justify-center cursor-pointer "
        >
          <Image
            src="/search/right.png"
            alt="Right"
            width={60}
            height={60}
            className="w-15 h-15 bg-[#FFB20E] rounded-full p-6 hover:custom-shadow:hover"
          />
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
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 0,
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
            slidesPerView: 4,
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
        className=""
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
            <div className="bg-white pl-5 pr-5 py-4 rounded-xl ">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={150}
                className="rounded-lg w-full h-full object-cover mb-2"
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
                <button className="bg-[#FB693B] hover:bg-[#d64f00] text-white cursor-pointer py-2 rounded text-sm font-medium w-full">
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
