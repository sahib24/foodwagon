import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className="bg-[#FEEFD0] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row justify-around items-center gap-8 py-8 px-6 md:px-12">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Image
            src="/daily/1.png"
            alt="Daily Discounts"
            width={50}
            height={50}
          />
          <div>
            <h4 className="text-lg font-bold text-orange-600">Daily</h4>
            <p className="text-lg font-bold text-orange-600">Discounts</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-12 bg-gray-300"></div>

        <div className="flex items-center gap-3 text-center md:text-left">
          <Image src="/daily/2.png" alt="Live Tracing" width={50} height={50} />
          <div>
            <h4 className="text-lg font-bold text-orange-600">Live</h4>
            <p className="text-lg font-bold text-orange-600">Tracing</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-12 bg-gray-300"></div>

        <div className="flex items-center gap-3 text-center md:text-left">
          <Image
            src="/daily/3.png"
            alt="Quick Delivery"
            width={50}
            height={50}
          />
          <div>
            <h4 className="text-lg font-bold text-orange-600">Quick</h4>
            <p className="text-lg font-bold text-orange-600">Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
