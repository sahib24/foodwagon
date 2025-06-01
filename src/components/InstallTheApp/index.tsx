import Image from "next/image";

export default function InstallAppSection() {
  return (
    <div className="lg:bg-[url('/install.png')] bg-[url('/install1.png')] bg-cover bg-center w-full h-[500px]">
      <div className="flex items-center justify-center lg:justify-end lg:pr-20 h-full">
        <div className="text-center md:text-left p-4 md:p-12">
          <h2 className="text-3xl md:text-[45px] font-bold text-[#FFB800] mb-4">
            Install the app
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6 w-[400px]">
            It never been easier to order food. Look for the finest discounts
            and you will be lost in a world of delectable food.
          </p>
          <div className="flex justify-left gap-2">
            <Image
              src="/Google.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
            />
            <Image
              src="/Google1.png"
              alt="Download on the App Store"
              width={160}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
