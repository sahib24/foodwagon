import Image from "next/image";

export default function InstallAppSection() {
  return (
    <div className="lg:bg-[url('/install.png')] bg-[url('/install1.png')] bg-cover bg-center w-full h-[520px] mb-8 flex flex-col lg:flex-row items-center justify-center lg:justify-end lg:pr-20">
      <div className="lg:hidden flex justify-center mt-4">
        <Image
          src="/mobile.png"
          alt="Mobile Preview"
          width={200}
          height={200}
          className="w-fit h-auto"
        />
      </div>

      <div className="text-center md:text-left p-4 md:p-12 pt-6 lg:pt-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[45px] font-bold text-[#FFB800] mb-4">
          Install the app
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 max-w-[90%] md:max-w-[400px] mx-auto lg:mx-0">
          It never been easier to order food. Look for the finest discounts and
          you will be lost in a world of delectable food.
        </p>
        <div className="flex justify-center lg:justify-start gap-2">
          <Image
            src="/Google.png"
            alt="Get it on Google Play"
            width={100}
            height={40}
            className="w-[100px] sm:w-[110px] md:w-[120px] lg:w-[140px] h-auto"
          />
          <Image
            src="/Google1.png"
            alt="Download on the App Store"
            width={100}
            height={40}
            className="w-[100px] sm:w-[110px] md:w-[120px] lg:w-[140px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
