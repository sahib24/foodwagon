import Image from "next/image";

const FoodCards = () => {
  return (
    <div className="custom-container px-4 sm:px-6 lg:px-0 py-10 space-y-10 mb-8 bg-white">
      <div className="bg-[#FFFFFF] rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[420px]">
        <div className="w-full lg:w-1/3 p-6 lg:p-10 flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 leading-snug">
            Best deals{" "}
            <span className="text-yellow-500">Crispy Sandwiches</span>
          </h3>
          <p className="text-gray-600 mb-6 text-base">
            Enjoy the large size of sandwiches. Complete perfect slice of
            sandwiches.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 mb-6 cursor-pointer to-orange-400 text-white font-semibold px-6 py-2 rounded ">
            Proceed to order
          </button>
        </div>
        <div className="relative w-full lg:w-2/3 h-64 lg:h-full">
          <Image
            src="/bestdeals/1.png"
            alt="Crispy Sandwiches"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse h-auto lg:h-[420px]">
        <div className="w-full lg:w-1/3 p-6 lg:p-10 flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 leading-snug">
            Celebrate parties with{" "}
            <span className="text-yellow-500">Fried Chicken</span>
          </h3>
          <p className="text-gray-600 mb-6 text-base">
            Get the best fried chicken smeared with a lip smacking lemon chili
            flavor. Check out best deals for fried chicken.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 mb-6 cursor-pointer to-orange-400 text-white font-semibold px-6 py-2 rounded ">
            Proceed to order
          </button>
        </div>
        <div className="relative w-full lg:w-2/3 h-64 lg:h-full">
          <Image
            src="/bestdeals/2.png"
            alt="Fried Chicken"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[420px]">
        <div className="w-full lg:w-1/3 p-6 lg:p-10 flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800 leading-snug">
            Wanna eat hot & spicy{" "}
            <span className="text-yellow-500">Pizza?</span>
          </h3>
          <p className="text-gray-600 mb-6 text-base">
            Pair up with a friend and enjoy the hot and crispy pizza pops. Try
            it with the best deals.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 mb-6 cursor-pointer to-orange-400 text-white font-semibold px-6 py-2 rounded ">
            Proceed to order
          </button>
        </div>
        <div className="relative w-full lg:w-2/3 h-64 lg:h-full">
          <Image
            src="/bestdeals/3.png"
            alt="Hot & Spicy Pizza"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
