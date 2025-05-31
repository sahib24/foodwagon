"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const items = [
  {
    name: "Cheese Burger",
    place: "Burger Arena",
    price: "$3.88",
    image: "/images/burger.jpg",
  },
  {
    name: "Toffe's Cake",
    place: "Top Sticks",
    price: "$4.00",
    image: "/images/cake.jpg",
  },
  {
    name: "Dancake",
    place: "Cake World",
    price: "$1.99",
    image: "/images/dancake.jpg",
  },
  {
    name: "Crispy Sandwitch",
    place: "Fastfood Dine",
    price: "$3.00",
    image: "/images/sandwich.jpg",
  },
  {
    name: "Thai Soup",
    place: "Foody man",
    price: "$2.79",
    image: "/images/soup.jpg",
  },
  {
    name: "Toffe's Cake",
    place: "Top Sticks",
    price: "$4.00",
    image: "/images/cake.jpg",
  },
];

export default function PopularItems() {
  return (
    <div className="px-4 py-10 bg-white max-w-screen-xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Popular items
      </h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg shadow-lg overflow-hidden bg-white">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.place}</p>
                <p className="text-base font-semibold text-gray-800 mt-2">
                  {item.price}
                </p>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
