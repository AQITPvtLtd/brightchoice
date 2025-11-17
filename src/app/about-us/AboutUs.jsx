"use client";
import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full bg-white text-[#0e0e0e] mt-20">
      {/* Top Dark Section */}
      <div className="bg-[#2a2a2a] py-16 text-center">
        <h1 className="text-4xl font-semibold text-white" style={{ fontFamily: "Roboto Slab, serif" }}>About Us</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left Content */}
        <div className="lg:w-[55%] text-gray-700 text-sm leading-relaxed space-y-4 lg:pl-10">
          <p>
            Since 1982, Rav Group continues to take a leading role in the irrigation industry by
            offering products, services and projects on world standards.
          </p>

          <p>
            We are proud of being one of the biggest manufacturer of PVC &amp; Lay Flat Delivery &
            Dewatering Hoses in the MENA Region.
          </p>

          <p>
            Our company contributes to the irrigation, construction, infrastructural and
            agricultural industries with several products and solutions in the region.
          </p>

          <p>
            Rav Group established its first industry in the Middle East region in 1992 and since
            then it has expanded to other regions of the gulf including UAE with a factory size of
            106,000 SQFT adding manufacturing lines of industrial grade Level hose, Reinforced hose,
            Lay flat dewatering hose, Industrial Grade Suction hoses, high grade Reinforced hoses
            and Steel wire hose.
          </p>

          <p>
            Rav Group in cooperation with its sister concern Bright Choice Trading LLC &amp;
            Ravankar Plastic LLC in UAE has achieved being a one stop shop solution for all your{" "}
            <strong className="text-[#0e0e0e] font-semibold">
              WATER DELIVERY, DEWATERING, CONSTRUCTION, IRRIGATION &amp; DELIVERY HOSES SOLUTIONS.
            </strong>
          </p>

          <div>
            <h3 className="font-semibold text-[#0e0e0e] mt-6 mb-3">Our Core Values:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Credibility</li>
              <li>Quality Consciousness</li>
              <li>Commitment to moral values</li>
              <li>Passion to grow</li>
              <li>Integrity</li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-[45%] flex justify-center items-stretch">
          <Image
            src="/about/img.png" // <-- replace with your actual image path
            alt="Green Hose on Grass"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-full max-h-[1000px]"
          />
        </div>
      </div>
    </section>
  );
}
