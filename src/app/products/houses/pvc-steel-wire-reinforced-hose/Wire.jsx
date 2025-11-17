'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Wire = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Water Suction & Discharge",
            points: [
                "General water transfer for agriculture, construction, landscaping, and light industrial tasks",
                "Ideal for pump suction lines where visibility of flow is beneficial (e.g., checking for blockages)",
            ],
        },
        {
            title: "Food & Beverage (Non-FDA/Non-Pharmaceutical)",
            points: [
                "Suitable for raw water, light juices, or certain non-edible liquids in a food-processing environment when FDA-grade PVC is not required",
                "Transparent walls allow operators to verify cleanliness and detect air pockets or contaminants",
            ],
        },
        {
            title: "Chemical & Industrial Fluid Transfer",
            points: [
                "Handles mild chemicals, oils, and other industrial liquids where PVC compatibility is acceptable",
                "Steel wire reinforcement helps maintain hose shape under suction conditions",
            ],
        },
        {
            title: "Aquariums & Pond Systems",
            points: [
                "Often used in large aquarium setups, koi ponds, and aquaponics due to its clear construction and moderate pressure handling",
            ],
        },
    ];

    const highlights = [
        {
            title: "Transparent Construction",
            points: [
                "Allows for visual flow inspection, quick detection of blockages, and fluid level checks",
                "Enhances safety by easily spotting contaminants or irregularities",
            ],
        },
        {
            title: "Steel Wire Reinforced",
            points: [
                "High-tensile steel helix imbedded within the hose wall",
                "Prevents kinking and collapsing under vacuum or suction",
                "Provides stability under moderate positive pressure",
            ],
        },
        {
            title: "Flexible & Lightweight",
            points: [
                "Easier to handle than rigid piping, enabling quick setup and repositioning in the field",
                "Good bend radius for tight installation spaces",
            ],
        },
        {
            title: "Smooth Inner Surface",
            points: [
                "Promotes efficient flow and reduces friction losses",
                "Minimizes residue buildup for easier cleaning",
            ],
        },
    ];
    const details = [
        {
            title: "Material",
            description: "Clear PVC tubing with embedded high-tensile steel wire helix",
        },
        {
            title: "Diameter Range",
            description:
                '1.5" (38 mm) up to 6" (152 mm) inner diameter',
        },
        {
            title: "Wall Thickness",
            description:
                "Varies by size; thicker walls on larger diameters",
        },
        {
            title: "Working Pressure",
            description:
                "~4–8 bar (58–116 psi) depending on diameter & wall thickness",
        },
        {
            title: "Vacuum Rating",
            description:
                "Up to ~ 610 mmHg (24 inHg) vacuum (size-dependent)",
        },
        {
            title: "Burst Pressure",
            description:
                "Typically 3× the working pressure",
        },
        {
            title: "Temperature Range",
            description:
                "~ -5°C to +65°C (23°F to 149°F)",
        },
        {
            title: "Length Rolls",
            description: "Usually in 30 m, 50 m, or custom lengths",
        },
        {
            title: "Color",
            description:
                "Transparent with visible steel wire spiral",
        },
    ];
    const tableData = [
        { size: "1.5", id: 38, od: 48, length: 50, wp: 5, bp: 15, weight: 1000 },
        { size: "3-1/4", id: 19.5, od: 26, length: 50, wp: 7, bp: 21, weight: 350 },
        { size: "2", id: 50, od: 62, length: 50, wp: 5, bp: 15, weight: 1600 },
        { size: "3", id: 76, od: 90, length: 30, wp: 4, bp: 12, weight: 3000 },
        { size: "4", id: 102, od: 116, length: 30, wp: 4, bp: 12, weight: 4300 },
        { size: "6", id: 152, od: 168, length: 30, wp: 4, bp: 12, weight: 6500 },
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
                                <a href="#" className="hover:text-blue-400">Home</a>
                                <span className="mx-2">/</span>
                                <a href="#" className="hover:text-blue-400">Rubber & PVC Hoses</a>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    PVC Steel Wire Reinforced Clear Hose
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                PVC Steel Wire <br className="hidden sm:block" /> Reinforced Clear Hose
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
                                        src="/products/steelwire.webp" // replace with your image path
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
                                    PVC Steel Wire Reinforced Clear Hose is a transparent, flexible hose that incorporates a high-tensile steel wire helix embedded within the PVC walls. It is designed primarily for suction and discharge applications where visual monitoring of the conveyed fluid is beneficial. The hose's spiral wire reinforcement provides enhanced structural integrity to withstand vacuum pressures and light to moderate positive pressures.
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
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
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
                <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#2a2a2a] mb-3">
                                {highlight.title}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                                {highlight.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Details */}
            <section className="w-full mt-10 bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Technical Details
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

            {/* Technical Specifications */}
            <section className="w-full px-4 md:px-10 lg:px-20 py-10 bg-white">
                {/* Heading */}
                <div className="mb-6 flex justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center relative inline-block" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Technical Specifications
                        <span className="block w-20 h-1 bg-red-600 mx-auto mt-2"></span>
                    </h2>
                </div>


                {/* Table */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[#2a2a2a] text-white text-sm md:text-base">
                                <th className="py-3 px-4">SIZE (INCH)</th>
                                <th className="py-3 px-4">ID (MM)</th>
                                <th className="py-3 px-4">OD (MM)</th>
                                <th className="py-3 px-4">LENGTH (MTR)</th>
                                <th className="py-3 px-4">MAX WP (BAR)</th>
                                <th className="py-3 px-4">MAX BP (BAR)</th>
                                <th className="py-3 px-4">WEIGHT (GMS/MTR)</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 text-gray-700 transition text-sm md:text-base"
                                >
                                    <td className="py-3 px-4">{row.size}</td>
                                    <td className="py-3 px-4">{row.id}</td>
                                    <td className="py-3 px-4">{row.od}</td>
                                    <td className="py-3 px-4">{row.length}</td>
                                    <td className="py-3 px-4">{row.wp}</td>
                                    <td className="py-3 px-4">{row.bp}</td>
                                    <td className="py-3 px-4">{row.weight}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Notes */}
                <div className="mt-10 bg-gray-100 p-6 md:p-8 rounded-xl">
                    <h3 className="text-xl text-[#2a2a2a] font-semibold mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Pressure & Vacuum Notes
                    </h3>

                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                        <li className="flex items-start gap-2">
                            <span className="text-[#2a2a2a] text-xl">•</span>
                            Working pressure decreases as hose diameter increases.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#2a2a2a] text-xl">•</span>
                            Vacuum rating may vary based on temperature and specific wall construction.
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Wire