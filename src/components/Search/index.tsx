import Image from "next/image";

const foodItems = [
  { name: "Pizza", image: "/search/1.png" },
  { name: "Burger", image: "/search/2.png" },
  { name: "Noodles", image: "/search/3.png" },
  { name: "Sub-sandwich", image: "/search/4.png" },
  { name: "Chowmein", image: "/search/5.png" },
  { name: "Steak", image: "/search/6.png" },
];

export default function FoodCarousel() {
  return (
    <div className="custom-container bg-gradient-to-b from-[#ffcf6720] to-[#ffffff28] py-14 px-4 md:px-10">
      <div className="flex justify-between items-center mb-10 flex-wrap gap-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Search by Food
        </h2>

        <div className="flex items-center gap-2">
          <p className="text-[#FF9A0E] font-semibold text-sm cursor-pointer">
            View All
          </p>
          <button className="rounded-full hover:scale-105 cursor-pointer transition">
            <Image
              src="/search/left.png"
              alt="Left Arrow"
              width={50}
              height={50}
            />
          </button>
          <button className="rounded-full hover:scale-105 cursor-pointer transition">
            <Image
              src="/search/right.png"
              alt="Right Arrow"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 sm:gap-x-6 md:gap-x-10">
        {foodItems.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] rounded-full overflow-hidden relative shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
