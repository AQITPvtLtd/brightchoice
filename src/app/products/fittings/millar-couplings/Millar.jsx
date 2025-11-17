'use client';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Millar = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Water Transfer & Dewatering",
            points: [
                "Connect hoses in flood control, trench dewatering, irrigation, and general water transfer systems. Typical in construction sites, farms, and emergency response operations.",
            ],
        },
        {
            title: "Agriculture & Irrigation",
            points: [
                "Secure fittings for delivering water, liquid fertilizers, or mild chemicals to fields. Used with lay-flat hoses and overhead spray systems.",
            ],
        },
        {
            title: "Industrial Fluid Handling",
            points: [
                "Handles moderate to high-pressure liquid lines in factories, refineries, and process plants. Transfers water, coolants, or non-corrosive chemicals in production environments.",
            ],
        },
        {
            title: "Petroleum & Chemical Transfer",
            points: [
                "Suitable for some petrochemical applications (check material compatibility). Used for oil, diesel, and various industrial chemicals in tanker trucks or storage terminals.",
            ],
        },
        {
            title: "Municipal & Marine",
            points: [
                "Ideal for potable water lines (if made from food-grade materials) or raw water intake. Maritime use includes bilge pumping, salvage operations, and dredging lines (material-dependent).",
            ],
        },
    ];

    const highlights = [
        {
            title: "Precision Engineering",
            points: [
                "Manufactured with tight tolerances to ensure consistent, leak-resistant connections.",
            ],
        },
        {
            title: "Durable Construction",
            points: [
                "Typically available in steel, stainless steel, brass, or aluminum, depending on model. Corrosion-resistant materials extend product life under demanding conditions.",
            ],
        },
        {
            title: "Multiple Connection Types",
            points: [
                "Threaded ends (NPT, BSPT), hose shanks (barbed/smooth), or flanged ends. Wide range of coupling methods: clamp-on, crimp, or bolt-style attachments.",
            ],
        },
        {
            title: "User-Friendly Designs",
            points: [
                "Serrated or beaded shank profiles ensure a strong grip within the hose. Easy assembly and disassembly for routine maintenance or hose replacement.",
            ],
        },
        {
            title: "Varied Pressure Ratings",
            points: [
                "Engineered for moderate to high-pressure lines, depending on size and material. Check exact model specifications for maximum working/burst pressure details.",
            ],
        },
    ];
    const details = [
        {
            title: "Size Range",
            description: "Commonly 1&quot; to 12&quot; (larger or custom sizes may be available)",
        },
        {
            title: "Materials",
            description:
                'Steel (carbon or galvanized), Stainless Steel (304/316), Brass, Aluminum',
        },
        {
            title: "Working Pressure",
            description:
                "Typically ~150–300 PSI (10–20 bar) for standard lines (exact rating varies by size/material)",
        },
        {
            title: "Temperature Range",
            description:
                "-20°C to +200°C (-4°F to +392°F), material-dependent",
        },
        {
            title: "End Connections",
            description:
                "Threaded (NPT/BSPT), Hose Shank, Camlock Adaptors, Flanged",
        },
        {
            title: "Surface Finishes",
            description:
                "Plain, Zinc-plated, Galvanized, or Polished (stainless)",
        },
        {
            title: "Compliance",
            description: "Some variations meet industry-specific standards (e.g., ISO, ANSI, FDA for food-grade fittings)",
        },
    ];
    return (
        <section className='bg-white'>
            {/* Specifications */}
            <main className="min-h-screen bg-white mt-20">
                {/* Breadcrumb Section */}
                <section className="relative min-h-[240px] sm:min-h-[280px] flex items-center bg-gray-200 overflow-hidden pt-[80px]">
                    {/* 🔹 Background Image */}
                    <div className="absolute inset-0 bg-[url('/banner/hero.webp')] bg-cover bg-center bg-no-repeat z-0"></div>

                    {/* 🔹 Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-0"></div>

                    {/* 🔹 Foreground Content */}
                    <div className="relative z-10 w-full">
                        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 text-white">
                            {/* Breadcrumb */}
                            <div className="text-sm text-gray-200 mb-2">
                                <Link href="/" className="hover:text-blue-400">Home</Link>
                                <span className="mx-2">/</span>
                                <Link href="/" className="hover:text-blue-400">Fittings</Link>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    Millar Couplings
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Millar Couplings
                            </h1>

                            {/* Accent Line */}
                            <div className="mt-3 h-1 w-20 bg-blue-500"></div>
                        </div>
                    </div>
                </section>

                {/* Product Overview Section */}
                <>
                    <section className="py-12 sm:py-16">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 items-center">
                            {/* Product Image */}
                            <div className="flex justify-center">
                                <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                                    <Image
                                        src="/products/millarcouplings.webp" // replace with your image path
                                        alt="Rubber Hose"
                                        width={350}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Roboto Slab, serif" }}>Overview</h2>
                                <div className="h-1 w-16 bg-red-600 mb-4"></div>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Millar Couplings are heavy-duty, precision-engineered hose fittings designed to form secure, leak-proof connections in high-demand fluid handling systems. Often used in construction, agriculture, oil & gas, municipal services, and various industrial operations, Millar Couplings are compatible with a wide range of hoses—such as lay-flat, suction, or discharge hoses. They come in different configurations, materials, and sizes, giving end users the flexibility to tackle diverse pumping and fluid transfer tasks.
                                </p>

                                <button onClick={() => setOpen(true)} className="bg-[#2a2a2a] cursor-pointer transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-md">
                                    GET A QUOTE
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* Popup Modal */}
                    <QuoteModal isOpen={open} onClose={() => setOpen(false)}>
                        <h2 className="text-xl font-bold mb-4">Get a Quote</h2>

                        {/* Your Contact Form here */}
                        <ModalForm />

                    </QuoteModal>
                </>
            </main>

            {/* Key Uses & Applications / Product Highlights */}
            <section className="bg-gray-50 py-10 px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Key Uses & Applications
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>


                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                    {uses.map((use, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#2a2a2a] mb-3">
                                {use.title}
                            </h3>
                            <ul className="space-y-2 text-gray-700 text-sm md:text-base list-none">
                                {use.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Heading */}
                <div className="text-center mt-10 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Product Highlights
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#2a2a2a] mb-3">
                                {highlight.title}
                            </h3>
                            <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                                {highlight.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="w-full mt-10 bg-white py-16 px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Technical Specifications
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        {details.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 last:border-0 px-6 py-4 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <div className="md:w-1/3 text-gray-800 font-medium text-lg">
                                    {item.title}
                                </div>
                                <div className="md:w-2/3 text-gray-600 mt-1 md:mt-0 text-base leading-relaxed">
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Millar