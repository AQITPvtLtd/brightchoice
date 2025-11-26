"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};

export default function About() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          custom={0.1}
          variants={fadeUp}
          className="text-2xl md:text-3xl font-semibold tracking-wide text-[#2a2a2a] mb-8"
          style={{ fontFamily: "Roboto Slab, serif" }}
        >
          ABOUT US
        </motion.h2>

        {/* Paragraphs */}
        <div className="max-w-5xl mx-auto space-y-6 text-gray-800 leading-relaxed">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            custom={0.2}
            variants={fadeUp}
          >
            Rav Group being established in 1992 has a portfolio of diversified business into Real
            Estate Sector, Construction Activities, Production of High Grade Hoses, Marble And
            Granite and Building Material Trading.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            custom={0.3}
            variants={fadeUp}
          >
            Rav Group is a fully family owned Business. Our core competencies lies in the
            Manufacturing & Distribution of a range of products including all kind of PVC Pipes and
            Hoses, Marble And Granite Factory, Warehousing Units, Property & Real Estate Development.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            custom={0.4}
            variants={fadeUp}
          >
            Having been in business for over 30 years, the experience of our Chairman, have
            contributed to the growth of the Group.
          </motion.p>
        </div>

        {/* Button */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          custom={0.55}
          variants={fadeUp}
        >
          <Link
            href="/about-us"
            className="inline-block bg-[#2a2a2a] border-2 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg"
          >
            KNOW MORE
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
