'use client';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Bauer = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Agricultural Irrigation",
            points: [
                "Facilitates quick connection of lay-flat or rigid pipes in irrigation setups. Handles water distribution for fields, orchards, and ranching operations.",
            ],
        },
        {
            title: "Construction & Dewatering",
            points: [
                "Drains flooded trenches, excavations, or foundations. Rapid coupling and uncoupling saves time on busy worksites.",
            ],
        },
        {
            title: "Municipal & Emergency Services",
            points: [
                "Temporary water supply lines or flood-control measures. Ideal for portable pumping setups, both during planned events and emergencies.",
            ],
        },
        {
            title: "Mining & Industrial Slurry",
            points: [
                "Moves water, sludge, or slurries with moderate solids content. Sturdy build and secure locking mechanism can handle rough handling on job sites.",
            ],
        },
        {
            title: "Marine & Dockside Applications",
            points: [
                "Bilge pumping, harbor cleanup, or dredging lines. Corrosion-resistant variants available for saltwater environments.",
            ],
        },
    ];

    const highlights = [
        {
            title: "Ball-and-Socket Design",
            points: [
                "Offers quick, single-handed coupling and decoupling. Allows slight angular deflection for better alignment in uneven or shifting terrains.",
            ],
        },
        {
            title: "Robust Construction",
            points: [
                "Typically made from galvanized steel or other corrosion-resistant materials. Stands up to harsh outdoor conditions and repeated use.",
            ],
        },
        {
            title: "Sealed Connection",
            points: [
                "Gasketed joint ensures a watertight seal under vacuum or positive pressure. Minimizes leakage or contamination in fluid transfer lines.",
            ],
        },
        {
            title: "Size Range",
            points: [
                "Common diameters range from 2&quot; to 8&quot;, though larger and smaller sizes are also available. Suits a wide range of flow rates, from small agricultural tasks to large industrial setups.",
            ],
        },
        {
            title: "Compatibility",
            points: [
                "Standard Bauer profiles couple interchangeably if they share the same nominal diameter. Adaptable to different hose types (lay-flat, suction/discharge) via clamp or ferrule attachments.",
            ],
        },
    ];
    const details = [
        {
            title: "Materials",
            description: "Galvanized Steel, Stainless Steel (for corrosive environments)",
        },
        {
            title: "Size Range",
            description:
                '~2&quot; (50 mm) up to ~8&quot; (200 mm) nominal bore diameters',
        },
        {
            title: "Working Pressure",
            description:
                "Typically ~4–16 bar (58–232 psi), depending on size & material",
        },
        {
            title: "Temperature Range",
            description:
                "-20°C to +80°C (-4°F to 176°F) standard (varies with gasket material)",
        },
        {
            title: "Connection Style",
            description:
                "Ball-and-socket clamp system with retaining latch",
        },
        {
            title: "Gasket Material",
            description:
                "NBR (nitrile) common; EPDM or other elastomers for specialized fluids",
        },
        {
            title: "Finish",
            description: "Galvanized or Painted; Stainless available for some models",
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
                                    Bauer Couplings
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Bauer Couplings
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
                                        src="/products/bauercoupling.webp" // replace with your image path
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
                                    Bauer Couplings are quick-connect style pipe and hose couplings characterized by their distinctive ball-and-socket connection. Widely used in agricultural irrigation, construction dewatering, and general fluid handling, these couplings provide a tight, leak-resistant fit while allowing for a small degree of angular misalignment. This flexibility ensures ease of assembly in applications where terrain or hose alignment cannot be perfectly controlled.
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

export default Bauer