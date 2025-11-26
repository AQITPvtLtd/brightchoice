"use client";
import { FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Form from "./form/Form";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};


const parentVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};


export default function Contact() {
    return (
        <section className="bg-[#fafafa] mt-20">
            <div className="bg-[#2a2a2a] py-16 text-center mb-10">
                <h1
                    className="text-4xl font-semibold text-white"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Contact Us
                </h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

                {/* LEFT SECTION WITH ANIMATION */}
                {/* LEFT SECTION (IMAGE STATIC — ONLY CONTENT ANIMATED) */}
                <div className="relative rounded-3xl overflow-hidden h-[380px] sm:h-[450px]">
                    <Image
                        src="/about/img.png"
                        alt="Green Hose"
                        fill
                        className="object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* CONTENT AREA WITH ANIMATION */}
                    {/* CONTENT AREA WITH ANIMATION */}
                    <motion.div
                        className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 text-white"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={parentVariants}   // 👈 IMPORTANT
                    >
                        {/* Heading */}
                        <motion.h2
                            className="text-2xl sm:text-3xl font-semibold mb-6"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                            variants={fadeUp}
                        >
                            Reach Out to Us
                        </motion.h2>

                        <ul className="space-y-3 text-base sm:text-lg">

                            <motion.li className="flex items-center gap-3" variants={fadeUp}>
                                <FaUser />
                                <Link href="https://maps.app.goo.gl/vLd5Y6T51F3m75Ux6" target="_blank">
                                    Bright Choice Trading LLC
                                </Link>
                            </motion.li>

                            <motion.li className="flex items-start gap-3" variants={fadeUp}>
                                <FaMapMarkerAlt className="mt-1" />
                                <Link href="https://maps.app.goo.gl/jd3cvHSE3PPinGvq6" target="_blank">
                                    Jebel Ali Industrial Area - 1, Dubai - U.A.E
                                </Link>
                            </motion.li>

                            <motion.li className="flex items-center gap-3" variants={fadeUp}>
                                <FaPhoneAlt />
                                <Link href="tel:0097148856117">009714-8856117</Link>
                            </motion.li>

                            <motion.li className="flex items-center gap-3" variants={fadeUp}>
                                <FaPhoneAlt />
                                <Link href="tel:00971554812800">0097155-4812800</Link>
                            </motion.li>

                        </ul>
                    </motion.div>

                </div>


                {/* RIGHT SECTION (NO ANIMATION) */}
                <div className="bg-[#f9f9f9] mb-10 rounded-2xl shadow-sm p-8">
                    <h2
                        className="text-3xl font-semibold mb-8 text-[#0e0e0e]"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        Reach Out to Us
                    </h2>
                    <Form />
                </div>

            </div>
        </section>
    );
}
