import Image from "next/image";

const FoodCards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sandwich Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 bg-gray-200">
            <Image
              src="/sandwich.jpg"
              alt="Crispy Sandwiches"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Best deals Crispy Sandwiches
            </h3>
            <p className="text-gray-600 mb-4">
              Enjoy the large size of sandwiches. Complete perfect slice of
              sandwiches.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
              PROCEED TO ORDER
            </button>
          </div>
        </div>

        {/* Fried Chicken Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 bg-gray-200">
            <Image
              src="/chicken.jpg"
              alt="Fried Chicken"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Celebrate parties with Fried Chicken
            </h3>
            <p className="text-gray-600 mb-4">
              Get the best fried chicken smeared with a lip smacking lemon chili
              flavor. Check out best deals for fried chicken.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
              Proceed to order
            </button>
          </div>
        </div>

        {/* Pizza Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 bg-gray-200">
            <Image
              src="/pizza.jpg"
              alt="Hot & Spicy Pizza"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Wanna eat hot & spicy Pizza?
            </h3>
            <p className="text-gray-600 mb-4">
              Pair up with a friend and enjoy the hot and crispy pizza pops. Try
              it with the best deals.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
              PROCEED TO ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
