"use client";

import Image from "next/image";

export default function FeaturedRestaurants() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">
        Featured Restaurants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Foodworld */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative">
            <Image
              src="/images/food1.jpg"
              alt="Foodworld"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 space-y-1">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                20% off
              </span>
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/foodworld.png"
                alt="Foodworld logo"
                width={24}
                height={24}
              />
              <h3 className="text-sm font-semibold">Foodworld</h3>
            </div>
            <p className="text-yellow-500 text-sm font-semibold">⭐ 46</p>
            <p className="text-xs font-medium inline-block px-2 py-1 rounded bg-orange-100 text-orange-600">
              Opens tomorrow
            </p>
          </div>
        </div>

        {/* Pizzahub */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative">
            <Image
              src="/images/food2.jpg"
              alt="Pizzahub"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 space-y-1">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                15% off
              </span>
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/pizzahub.png"
                alt="Pizzahub logo"
                width={24}
                height={24}
              />
              <h3 className="text-sm font-semibold">Pizzahub</h3>
            </div>
            <p className="text-yellow-500 text-sm font-semibold">⭐ 40</p>
            <p className="text-xs font-medium inline-block px-2 py-1 rounded bg-orange-100 text-orange-600">
              Opens tomorrow
            </p>
          </div>
        </div>

        {/* Donuts hut - Dunkin */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative">
            <Image
              src="/images/food3.jpg"
              alt="Donuts hut"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 space-y-1">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                10% off
              </span>
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/dunkin.png"
                alt="Dunkin logo"
                width={24}
                height={24}
              />
              <h3 className="text-sm font-semibold">Donuts hut</h3>
            </div>
            <p className="text-yellow-500 text-sm font-semibold">⭐ 20</p>
            <p className="text-xs font-medium inline-block px-2 py-1 rounded bg-green-100 text-green-600">
              Open Now
            </p>
          </div>
        </div>

        {/* Donuts hut - Subway */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative">
            <Image
              src="/images/food4.jpg"
              alt="Donuts hut"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-2 left-2 space-y-1">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                15% off
              </span>
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                Fast
              </span>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/subway.png"
                alt="Subway logo"
                width={24}
                height={24}
              />
              <h3 className="text-sm font-semibold">Donuts hut</h3>
            </div>
            <p className="text-yellow-500 text-sm font-semibold">⭐ 50</p>
            <p className="text-xs font-medium inline-block px-2 py-1 rounded bg-green-100 text-green-600">
              Open Now
            </p>
          </div>
        </div>

        {/* বাকিগুলো চাইলে একইভাবে add করতে পারো */}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
          View All &rarr;
        </button>
      </div>
    </section>
  );
}
