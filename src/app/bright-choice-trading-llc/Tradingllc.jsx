"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
    {
        id: 1,
        title: "Rubber Water Suction & Delivery Hoses",
        description:
            "Cancer diagnosis and staging are crucial steps in understanding the extent of the disease and planning the best treatment approach.",
        image: "/products/rubberwatersuction.webp",
        link: "/products/houses/rubber-water-suction-delivery-hoses",
    },
    {
        id: 2,
        title: "PVC Lay Flat Hose - Standard Duty",
        description:
            "Cancer treatment has evolved significantly over the years, with systemic anti-cancer therapy playing a vital role in patient care.",
        image: "/products/standard.webp",
        link: "/products/houses/pvc-lay-flat-hose-standard",
    },
    {
        id: 3,
        title: "PVC Lay Flat Hose - Heavy Duty 10 Bar",
        image: "/products/heavy.webp",
        link: "/products/houses/pvc-lay-flat-hose-heavy",
    },
    {
        id: 4,
        title: "PVC Steel Wire Reinforced Clear Hose",
        image: "/products/steelwire.webp",
        link: "/products/houses/pvc-steel-wire-reinforced-hose",
    },
    {
        id: 5,
        title: "PVC Green Suction Hose",
        image: "/products/suction.webp",
        link: "/products/houses/pvc-green-suction-hose",
    },
    {
        id: 6,
        title: "King Nipples & Ferrules",
        image: "/products/kingnipples.webp",
        link: "/products/fittings/king-nipples-ferrules",
    },
    {
        id: 7,
        title: "Hose Mender",
        image: "/products/hosemender.webp",
        link: "/products/fittings/hose-menders",
    },
    {
        id: 8,
        title: "Hex Nipples",
        image: "/products/hexnipples.webp",
        link: "/products/fittings/hex-nipples",
    },
    {
        id: 9,
        title: "Millar Couplings",
        image: "/products/millarcouplings.webp",
        link: "/products/fittings/millar-couplings",
    },
    {
        id: 10,
        title: "Bauer Couplings",
        image: "/products/bauercoupling.webp",
        link: "/products/fittings/bauer-couplings",
    },
    {
        id: 11,
        title: "Single Bolt Clamps",
        image: "/products/singlebolt.webp",
        link: "/products/clamps/single-bolt-clamps",
    },
    {
        id: 12,
        title: "Double Bolt Clamps",
        image: "/products/doublbolt.webp",
        link: "/products/clamps/double-bolt-clamps",
    },
    {
        id: 13,
        title: "Hose Clips",
        image: "/products/hoseclip.webp",
        link: "/products/clamps/hose-clips",
    },
];

const Tradingllc = () => {
    return (
        <section className="bg-white">
            <section className="bg-white mt-20">
                <div className="bg-[#2a2a2a] py-16 text-center mb-10">
                    <h1 className="text-4xl font-semibold text-white" style={{ fontFamily: "Roboto Slab, serif" }}>Bright Choice Trading LLC</h1>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-5">
                    {/* LEFT SIDE - TEXT */}
                    <div className="md:order-1 order-2">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-6">
                            WHO WE ARE?
                        </h2>
                        <p className="font-semibold text-gray-800 mb-4">
                            Extensive Storage Company – Trusted Storage Solutions in Dubai for
                            Over 17 Years
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Founded in 2008, Extensive Storage Company has proudly served
                            thousands of individuals and businesses across Dubai, offering
                            secure and reliable storage solutions with a premium,
                            customer-first approach.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            With over 17 years of industry experience, we go beyond just
                            providing space — we offer peace of mind. From high-grade packing
                            materials that keep your belongings safe and intact, to a carefully
                            selected, well-trained crew who handle every item with care, we are
                            committed to delivering an experience that sets us apart.
                        </p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Our state-of-the-art, meticulously maintained facility ensures your
                            possessions are stored in optimal conditions — whether you need
                            short-term flexibility, long-term assurance, or complete packaging
                            solutions.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            At Extensive Storage, we don’t just store your items — we protect
                            what matters to you.
                        </p>

                        {/* <button className="bg-gray-900 border-2 border-gray-900 cursor-pointer text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                        KNOW MORE
                    </button> */}
                    </div>

                    {/* RIGHT SIDE - IMAGE */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg md:order-2 order-1">
                        <Image
                            src="/companies/img3.png" // Replace with your actual image path
                            alt="Storage worker carrying boxes"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="py-10 px-5 md:px-16 bg-gray-50 mt-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Our Products
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products.map((product) => (
                        <Link
                            key={product.id}
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
                                <h3 className="text-lg font-semibold text-gray-900 text-center mb-6 min-h-[56px]" style={{ fontFamily: "Roboto Slab, serif" }}>
                                    {product.title}
                                </h3>
                            </div>
                        </Link>
                    ))}

                </div>
            </section>
        </section>
    );
};

export default Tradingllc;
