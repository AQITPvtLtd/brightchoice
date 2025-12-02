"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function AboutUs() {
  return (
    <section className="relative w-full text-white mt-20 overflow-hidden">

      {/* 🔥 Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/companies/newbrightchoice.jpg"
          alt="About Background"
          fill
          priority
          className="object-cover object-center brightness-[0.90]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
     
      <div className="relative py-20 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-semibold tracking-wide"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          About Us
        </motion.h1>
      </div>

   
      <div className="relative max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl text-sm leading-relaxed space-y-4"
        >
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
            <strong className="font-semibold">
              WATER DELIVERY, DEWATERING, CONSTRUCTION, IRRIGATION &amp; DELIVERY HOSES SOLUTIONS.
            </strong>
          </p>

          <div>
            <h3 className="font-semibold text-white mt-6 mb-3 text-lg">
              Our Core Values:
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Credibility</li>
              <li>Quality Consciousness</li>
              <li>Commitment to moral values</li>
              <li>Passion to grow</li>
              <li>Integrity</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
