import Image from "next/image";

export default function DiscountCardGrid() {
  return (
    <div className="custom-container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10 justify-items-center">
        <div className=" w-fit ">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/Greys/1.png"
              alt="15% Off"
              width={400}
              height={200}
              className="hover:scale-105 transition-transform duration-300 object-cover"
            />
            <Image
              src="/Greys/D1.png"
              alt="15% Off"
              width={80}
              height={80}
              className="absolute bottom-0 left-0 z-10 xl:w-[120px] 
               xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[45px] w-[120px] 
               h-[70px]"
            />
          </div>

          <p className="font-semibold text-gray-800 mt-6">Greys Vage</p>
          <p className="text-sm text-orange-600 bg-orange-100 px-2 py-1 inline-block rounded mt-2 font-semibold">
            6 Days Remaining
          </p>
        </div>

        <div className="rounded-lg w-fit">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/Greys/2.png"
              alt="15% Off"
              width={400}
              height={200}
              className="hover:scale-105 transition-transform duration-300 object-cover"
            />
            <Image
              src="/Greys/D2.png"
              alt="15% Off"
              width={80}
              height={80}
              className="absolute bottom-0 left-0 z-10 xl:w-[120px] 
               xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[45px] w-[120px] 
               h-[70px]"
            />
          </div>
          <p className="font-semibold text-gray-800 mt-6">Greys Vage</p>
          <p className="text-sm text-orange-600 bg-orange-100 px-2 py-1 inline-block rounded mt-2 font-semibold">
            6 Days Remaining
          </p>
        </div>

        <div className="rounded-lg w-fit">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/Greys/3.png"
              alt="15% Off"
              width={400}
              height={200}
              className="hover:scale-105 transition-transform duration-300 object-cover"
            />
            <Image
              src="/Greys/D3.png"
              alt="15% Off"
              width={80}
              height={80}
              className="absolute bottom-0 left-0 z-10 xl:w-[120px] 
               xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[45px] w-[120px] 
               h-[70px]"
            />
          </div>
          <p className="font-semibold text-gray-800 mt-6">Greys Vage</p>
          <p className="text-sm text-orange-600 bg-orange-100 px-2 py-1 inline-block rounded mt-2 font-semibold">
            7 Days Remaining
          </p>
        </div>

        <div className="rounded-lg w-fit">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/Greys/4.png"
              alt="15% Off"
              width={400}
              height={200}
              className="hover:scale-105 transition-transform duration-300 object-cover"
            />
            <Image
              src="/Greys/D4.png"
              alt="15% Off"
              width={80}
              height={80}
              className="absolute bottom-0 left-0 z-10 xl:w-[120px] 
               xl:h-[70px] lg:w-[100px] lg:h-[60px] md:w-[80px] md:h-[45px] w-[120px] 
               h-[70px]"
            />
          </div>
          <p className="font-semibold text-gray-800 mt-6">Greys Vage</p>
          <p className="text-sm text-orange-600 bg-orange-100 px-2 py-1 inline-block rounded mt-2 font-semibold">
            8 Days Remaining
          </p>
        </div>
      </div>
    </div>
  );
}
