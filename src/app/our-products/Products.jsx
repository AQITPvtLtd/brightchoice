"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Fade + Slide Up Animation
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.15, // Stagger for each item
        },
    }),
};

const products = [
    {
        id: 1,
        title: "PVC Lay Flat Hose - Standard Duty",
        description:
            "Cancer treatment has evolved significantly over the years, with systemic anti-cancer therapy playing a vital role in patient care.",
        image: "/products/standard.webp",
        link: "/our-products/houses/pvc-lay-flat-hose-standard",
    },

    {
        id: 2,
        title: "PVC Lay Flat Hose - Heavy Duty 10 Bar",
        image: "/products/heavy.webp",
        link: "/our-products/houses/pvc-lay-flat-hose-heavy",
    },
    {
        id: 3,
        title: "Layflat Discharge Hose",
        image: "/products/layflat-discharge-hose.jpg",
        link: "/our-products/layflat-discharge-hose",
    },
    {
        id: 4,
        title: "Layflat Dewatering Royal Hose",
        image: "/products/layflat-dewatering-royal-hose.jpg",
        link: "/our-products/layflat-dewatering-royal-hose",
    },
    {
        id: 5,
        title: "Rubber Water Suction & Delivery Hoses",
        description:
            "Cancer diagnosis and staging are crucial steps in understanding the extent of the disease and planning the best treatment approach.",
        image: "/products/rubberwatersuction.webp",
        link: "/our-products/houses/rubber-water-suction-delivery-hoses",
    },
    {
        id: 6,
        title: "PVC Green Suction Hose",
        image: "/products/suction.webp",
        link: "/our-products/houses/pvc-green-suction-hose",
    },
    {
        id: 7,
        title: "PVC Steel Wire Reinforced Clear Hose",
        image: "/products/steelwire.webp",
        link: "/our-products/houses/pvc-steel-wire-reinforced-hose",
    },
    {
        id: 8,
        title: "Air Hose",
        image: "/products/air-hose.webp",
        link: "https://docs.google.com/document/d/1rwJWIldj53OjH1eDt9a7JDKizLRutnl8/edit?tab=t.0",
    },
    {
        id: 9,
        title: "Hydraulic Hose",
        image: "/products/hydraulic-hose.webp",
        link: "https://docs.google.com/document/d/1rwJWIldj53OjH1eDt9a7JDKizLRutnl8/edit?tab=t.0",
    },
    {
        id: 10,
        title: "Gas Hose",
        image: "/products/gas-hose.jpg",
        link: "/our-products/gas-hose",
    },
    {
        id: 11,
        title: "Pteroleum Hose",
        image: "/products/pteroleum-hose.webp",
        link: "https://docs.google.com/document/d/1rwJWIldj53OjH1eDt9a7JDKizLRutnl8/edit#heading=h.4166nxr3b5lo",
    },
    {
        id: 12,
        title: "Garden Hose High Pressure",
        image: "/products/garden-hose-high-pressure.jpg",
        link: "/our-products/royal-reinforced-hose-high-pressure",
    },
    {
        id: 13,
        title: "Level Royal Hose",
        image: "/products/level-royal-hose.jpg",
        link: "/our-products/level-royal-hose",
    },
    {
        id: 14,
        title: "Fire Hoses Royal",
        image: "/products/fire-hoses-royal.jpg",
        link: "/our-products/royal-fire-hoses",
    },
    {
        id: 55,
        title: "Reinforced Garden Hose",
        image: "/products/reinforced-garden-hose1.png",
        link: "/our-products/reinforced-garden-hose",
    },
    {
        id: 16,
        title: "Millar Couplings",
        image: "/products/millarcouplings.webp",
        link: "/our-products/fittings/millar-couplings",
    },
    {
        id: 17,
        title: "Bauer Couplings",
        image: "/products/bauercoupling.webp",
        link: "/our-products/fittings/bauer-couplings",
    },
    {
        id: 18,
        title: "King Nipples & Ferrules",
        image: "/products/kingnipples.webp",
        link: "/our-products/fittings/king-nipples-ferrules",
    },
    {
        id: 19,
        title: "Hex Nipples",
        image: "/products/hexnipples.webp",
        link: "/our-products/fittings/hex-nipples",
    },
    {
        id: 20,
        title: "Hose Mender",
        image: "/products/hosemender.webp",
        link: "/our-products/fittings/hose-menders",
    },
    {
        id: 21,
        title: "Hose Clips",
        image: "/products/hoseclip.webp",
        link: "/our-products/clamps/hose-clips",
    },
    {
        id: 22,
        title: "Single Bolt Clamps",
        image: "/products/singlebolt.webp",
        link: "/our-products/clamps/single-bolt-clamps",
    },
    {
        id: 23,
        title: "Double Bolt Clamps",
        image: "/products/doublbolt.webp",
        link: "/our-products/clamps/double-bolt-clamps",
    },
    {
        id: 24,
        title: "Submersible Pumps",
        image: "/products/multi.webp",
        link: "/our-products/pumps/submersible-pumps-with-motor-multistage",
    },
    {
        id: 25,
        title: "Centrifugal Pumps",
        image: "/products/dwp.webp",
        link: "/our-products/pumps/diesel-driven-centrifugal-pumps",
    },
];

const Products = () => {
    return (
        <div>
            <section className="bg-white">
                <section className="py-10 px-5 md:px-16 bg-gray-50 mt-20 overflow-x-hidden">
                    <div className="text-center mb-10">
                        <h2
                            className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                            Our Products
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.2 }}
                                custom={index * 0.15}
                            >
                                <Link
                                    href={product.link}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="relative w-full aspect-[4/3]">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-contain bg-white p-4"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between flex-grow p-6">
                                        <h3
                                            className="text-lg font-semibold text-gray-900 text-center mb-6 min-h-[56px]"
                                            style={{ fontFamily: "Roboto Slab, serif" }}
                                        >
                                            {product.title}
                                        </h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Products