import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#ffcf6720] to-[#ffffff28] py-12 text-center">
      <h2 className="text-2xl font-bold text-[#F17228] mb-12">
        How does it work
      </h2>

      <div className="custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-12 text-gray-700">
        <div className="flex flex-col items-center">
          <Image
            src="/HowDoes/1.png"
            alt="Select location"
            width={50}
            height={50}
          />

          <h3 className="font-semibold mb-2">Select location</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Choose the location where your food will be delivered.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/HowDoes/2.png"
            alt="Choose order"
            width={50}
            height={50}
          />

          <h3 className="font-semibold mb-2">Choose order</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Check over hundreds of menus to pick your favorite food.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/HowDoes/3.png"
            alt="Pay advanced"
            width={50}
            height={50}
          />

          <h3 className="font-semibold mb-2">Pay advanced</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            It&apos;s quick, safe, and simple. Select several methods of
            payment.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/HowDoes/4.png"
            alt="Enjoy meals"
            width={50}
            height={50}
          />

          <h3 className="font-semibold mb-2 mt-3">Enjoy meals</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Food is made and delivered directly to your home.
          </p>
        </div>
      </div>
    </section>
  );
}
