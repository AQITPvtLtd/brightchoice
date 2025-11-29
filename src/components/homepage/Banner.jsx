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
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[80vh] mt-20 overflow-hidden">

      {/* 🔹 Mobile Background Image */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/banner/mob.jpg"
          alt="Mobile Background"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* 🔹 Desktop Background Image */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/banner/banner.jpg"
          alt="Desktop Background"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div
        className="
          relative z-10 
          flex flex-col 
          justify-start md:justify-center 
          h-full 
          px-6 sm:px-12 md:px-20 lg:px-28 
          pt-10 md:pt-0 
          text-white 
          max-w-3xl
        "
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          custom={0.2}
          className="text-4xl md:text-5xl font-semibold mb-6 text-[#2a2a2a]"
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
          className="text-sm md:text-sm lg:text-sm xl:text-sm leading-relaxed mb-4 md:mb-8 text-black"
        >
          Since our inception, Rav Group has built a strong business &nbsp;
          <br className="hidden md:inline" />
          model rooted in long-term relationships, quality commitment,
          <br className="hidden md:inline" />
          and reliable service. Trusted across the Middle East and &nbsp;
          <br className="hidden md:inline" />
          North Africa, we proudly serve multiple industries as a
          <br className="hidden md:inline" />
          preferred supplier known for timely delivery and excellence.
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
            className="
              inline-block 
              border border-[#2a2a2a] 
              bg-[#2a2a2a] 
              text-white 
              px-6 py-3 
              rounded-full 
              text-sm md:text-base 
              font-medium 
              transition-all duration-300 
              hover:bg-black 
              hover:text-white 
              hover:-translate-y-1 
              hover:shadow-lg
              w-fit
            "
          >
            KNOW MORE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
