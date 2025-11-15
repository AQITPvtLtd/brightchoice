"use client";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/about/about.png" // 🟢 Replace with your actual image (place in public folder)
              alt="PVC Hose Field"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-gray-900">
          <p className="text-sm md:text-base mb-2 text-gray-700">
            As Rav Group, we are proud of being a big manufacturer of
          </p>

          <h2 className="text-2xl md:text-3xl font-serif font-semibold leading-snug mb-6">
            Pvc & PE Lay Flat Hose in the World
            and building effective
          </h2>

          <p className="text-gray-800 mb-6 leading-relaxed">
            As Rav Group, we are proud of being one of the largest manufacturers of PVC Industrial
            and High Pressure Hoses in the UAE.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Our company contributes to the Dewatering, Agriculture, Oil, Construction, and Shipping
            Industry with high-quality products for irrigation, high pressure cleaning & dewatering
            systems with efficient & reliable customer service throughout the year.
          </p>
        </div>
      </div>
    </section>
  );
}
