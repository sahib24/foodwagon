import Image from "next/image";

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Foodworld",
      image: "/featured/1.png",
      logo: "/featured/a.png",
      rating: 46,
      offer: "20% off",
      status: "Opens tomorrow",
    },
    {
      id: 2,
      name: "Pizzahub",
      image: "/featured/2.png",
      logo: "/featured/b.png",
      rating: 40,
      offer: "15% off",
      status: "Opens tomorrow",
    },
    {
      id: 3,
      name: "Donuts hut",
      image: "/featured/3.png",
      logo: "/featured/c.png",
      rating: 20,
      offer: "10% off",
      status: "Open Now",
    },
    {
      id: 4,
      name: "Subway",
      image: "/featured/4.png",
      logo: "/featured/d.png",
      rating: 50,
      offer: "15% off",
      status: "Open Now",
    },
    {
      id: 5,
      name: "Ruby Tuesday",
      image: "/featured/5.png",
      logo: "/featured/e.png",
      rating: 26,
      offer: "10% off",
      status: "Open Now",
    },
    {
      id: 6,
      name: "Kuakata Fried Chicken",
      image: "/featured/6.png",
      logo: "/featured/f.png",
      rating: 53,
      offer: "25% off",
      status: "Open Now",
    },
    {
      id: 7,
      name: "Red Square",
      image: "/featured/7.png",
      logo: "/featured/g.png",
      rating: 45,
      offer: "10% off",
      status: "Open Now",
    },
    {
      id: 8,
      name: "Taco Bell",
      image: "/featured/8.png",
      logo: "/featured/h.png",
      rating: 35,
      offer: "10% off",
      status: "Open Now",
    },
  ];

  return (
    <div className="custom-container py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Featured Restaurants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="rounded overflow-hidden">
            <div className="relative mb-6">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={500}
                height={300}
                className="w-full h-full rounded hover:scale-105 transition duration-300"
              />
              <div className="absolute top-3 left-3 space-x-2 flex">
                <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {restaurant.offer}
                </span>
                <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                  Fast
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Image
                src={restaurant.logo}
                alt={`${restaurant.name} Logo`}
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <span className="text-sm font-semibold block">
                  {restaurant.name}
                </span>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <span>★</span>
                  <span>{restaurant.rating}</span>
                </div>
              </div>
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded ${
                restaurant.status === "Open Now"
                  ? "bg-green-100 text-green-600"
                  : "bg-orange-100 text-orange-500"
              }`}
            >
              {restaurant.status}
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-gradient-to-r cursor-pointer from-yellow-400 mb-6 to-orange-400 text-white font-semibold px-6 py-2 rounded   ">
          View All &gt;
        </button>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;
