import React from "react";
import Image from "next/image";

const ImageFeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Daily Discounts */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="/daily-discounts.jpg" // Replace with your image path
                alt="Daily Discounts"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Daily Discounts
            </h3>
            <p className="mt-2 text-gray-600">
              Enjoy amazing discounts every day on selected products.
            </p>
          </div>

          {/* Live Tracing */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="/live-tracing.jpg" // Replace with your image path
                alt="Live Tracing"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Live Tracing</h3>
            <p className="mt-2 text-gray-600">
              Track your order in real-time from dispatch to delivery.
            </p>
          </div>

          {/* Quick Delivery */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="/quick-delivery.jpg" // Replace with your image path
                alt="Quick Delivery"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Quick Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              Get your products delivered at lightning speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFeaturesSection;
