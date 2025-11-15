'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Suction = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Agricultural Water Pumping & Irrigation",
            points: [
                "Ideal for suction and discharge of water on farms for crop irrigation or livestock watering",
                "Handles typical agricultural irrigation chemicals with proper compatibility checks",
            ],
        },
        {
            title: "Construction & Dewatering",
            points: [
                "Widely used for pumping water out of trenches, excavation sites, and drainage ditches",
                "Rigid PVC helix prevents hose collapse under vacuum pressures commonly encountered in construction dewatering tasks",
            ],
        },
        {
            title: "Industrial & Light Chemical Transfer",
            points: [
                "Transfers mild chemicals, wastewater, and other non-abrasive fluids in industrial operations",
                "Smooth interior aids in efficient flow and quick cleaning",
            ],
        },
        {
            title: "Municipal & Marine Applications",
            points: [
                "Suction for fire hydrant connections (non-fire-rated) and emergency water services",
                "Suitable for bilge pumping or general marine use with moderate suction requirements",
            ],
        },
    ];

    const highlights = [
        {
            title: "Rigid PVC Helix",
            points: [
                "Reinforced spiral helix embedded throughout the hose wall provides robust crush resistance",
                "Maintains structural shape under partial vacuum, preventing collapse",
            ],
        },
        {
            title: "Flexible & Lightweight",
            points: [
                "Easier to maneuver and install compared to heavier rubber hoses or rigid piping systems",
                "Can bend around obstacles or corners, reducing the need for multiple fittings",
            ],
        },
        {
            title: "Green Color Coding",
            points: [
                "Easily identifiable on worksites or among other hoses, which simplifies management and deployment",
            ],
        },
        {
            title: "Smooth Inner Surface",
            points: [
                "Promotes optimum flow rates and reduces clogging risks",
                "Streamlines cleaning and maintenance, especially for water-based fluids",
            ],
        },
        {
            title: "Temperature Range",
            points: [
                "Typically from -5°C to +60°C (23°F to 140°F), depending on fluid characteristics and ambient conditions",
            ],
        },
    ];
    const details = [
        {
            title: "Material",
            description: "PVC construction with rigid PVC helix reinforcement",
        },
        {
            title: "Diameter Range",
            description:
                '2" (50 mm), 2.5" (63 mm), 3" (75 mm), 4" (100 mm), 6" (150 mm)',
        },
        {
            title: "Wall Thickness",
            description:
                "Varies with hose diameter; designed for moderate vacuum & pressure",
        },
        {
            title: "Working Pressure",
            description:
                "Up to ~4–6 bar (58–87 psi) depending on hose size & temp",
        },
        {
            title: "Vacuum Rating",
            description:
                "Up to ~610 mmHg (24 inHg) at ambient temperature",
        },
        {
            title: "Burst Pressure",
            description:
                "Typically 3× working pressure",
        },
        {
            title: "Length Rolls",
            description: "Commonly supplied in 30 m or 50 m coils, custom lengths available",
        },
        {
            title: "Color",
            description:
                "Green outer layer with embedded white or green helix",
        },
    ];
    const tableData = [
        { size: "2", mm:50, id: 50.8, od: 57.5, length: 122, wp: 4, bp: 16, weight: 30 },
        { size: "3", mm:75, id: 76.2, od: 85, length: 272, wp: 3.5, bp: 15, weight: 30 },
        { size: "4", mm:100, id: 101.2, od: 112.2, length: 290, wp: 3.5, bp: 15, weight: 15/30 },
        { size: "6", mm:150, id: 152.4, od: 169.4, length: 375, wp: 2.5, bp: 9, weight: 30 },
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
                                    PVC Green Suction Hose
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                                PVC Green Suction Hose
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
                                    src="/products/suction.webp" // replace with your image path
                                    alt="Rubber Hose"
                                    width={350}
                                    height={300}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Overview</h2>
                            <div className="h-1 w-16 bg-red-600 mb-4"></div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                PVC Green Suction Hose is a flexible, crush-resistant suction hose used in various applications, from general water pumping to light chemical transfer. Constructed with a rigid PVC helix embedded within durable PVC walls, this hose exhibits excellent structural integrity while remaining relatively lightweight. Its signature green color helps differentiate it from other hoses in a fleet or worksite, aiding in quick identification and routing.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative">
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
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] text-center relative inline-block">
                        Technical Specifications
                        <span className="block w-20 h-1 bg-red-500 mx-auto mt-2"></span>
                    </h2>
                </div>


                {/* Table */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[#2a2a2a] text-white text-sm md:text-base">
                                <th className="py-3 px-4">SIZE (INCH)</th>
                                <th className="py-3 px-4">SIZE (MM)</th>
                                <th className="py-3 px-4">ID (MM)</th>
                                <th className="py-3 px-4">OD (MM)</th>
                                <th className="py-3 px-4">Bending Radius (mm)</th>
                                <th className="py-3 px-4">WP (bar)</th>
                                <th className="py-3 px-4">BP (bar)</th>
                                <th className="py-3 px-4">Length (M)</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 text-gray-700 transition text-sm md:text-base"
                                >
                                    <td className="py-3 px-4">{row.size}</td>
                                    <td className="py-3 px-4">{row.mm}</td>
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
                    <h3 className="text-xl text-[#2a2a2a] font-semibold mb-4">
                        Sizing & Flow Rates
                    </h3>

                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                        <li className="flex items-start gap-2">
                            <span className="text-[#2a2a2a] text-xl">•</span>
                            2" (50 mm): Suitable for small-scale pumping, irrigation lines, and general dewatering tasks.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#2a2a2a] text-xl">•</span>
                            2.5" (63 mm) & 3" (75 mm): Popular for moderate jobsite dewatering or medium-flow irrigation.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#2a2a2a] text-xl">•</span>
                            4" (100 mm): Often used in larger construction pumping setups, municipal tasks, or high-volume water transfers.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#2a2a2a] text-xl">•</span>
                            6" (150 mm): Heavy-flow jobs for large-scale irrigation, municipal pumping, and industrial fluid transfer.
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Suction