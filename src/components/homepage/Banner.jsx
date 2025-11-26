"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

export default function Banner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] mt-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner/banner1.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 lg:px-28 text-white max-w-3xl">

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          custom={0.2}
          className="text-4xl md:text-5xl font-semibold mb-6"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          PVC Hoses
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          custom={0.4}
          className="text-base md:text-sm lg:text-sm xl:text-sm leading-relaxed mb-8"
        >
          Since inception, We at Rav Group have established & built our business model by
          maintaining long term relationships with our clients, suppliers & business partners.
          Highly trusted for our commitment to quality, customer service and timely delivery,
          we at Rav Group pride ourselves at being a preferred supplier to the Middle Eastern
          And North Africa Region with multiple industries in UAE and Middle East.
        </motion.p>

        {/* Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          custom={0.6}
        >
          <Link
            href="/about-us"
            className="inline-block border border-white text-white px-6 py-3 rounded-full 
            text-sm md:text-base font-medium hover:bg-white hover:text-black 
            transition-all duration-300 w-fit"
          >
            KNOW MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
