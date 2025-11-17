'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Clips = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Two Ear 'O' Clips & Jubilee® Juniors",
            points: [
                "Two Ear 'O' Clips: Small, crimp-style clamps ideal for lightweight hoses or tubing",
                "Jubilee® Juniors (Nut & Bolt Clamps): A more compact alternative for tight spaces, delivering consistent compression",
            ],
        },
        {
            title: "High Torque & Super Clamps",
            points: [
                "Built for heavy-duty performance when extra clamping force is required",
                "Often used in demanding applications, such as industrial machinery or high-pressure hoses",
            ],
        },
        {
            title: "Multiband Systems",
            points: [
                "Versatile banding solutions for on-site customization",
                "Ideal for securing large-diameter or irregular-shaped objects where conventional clamps won't fit",
            ],
        },
    ];

    const highlights = [
        {
            title: "Automotive & Aftermarket",
            points: [
                "Fuel lines",
                "Coolant hoses",
                "Air intake connections",
            ],
        },
        {
            title: "Agricultural",
            points: [
                "Irrigation systems",
                "Farm machinery",
                "General fluid transfer",
            ],
        },
        {
            title: "Industrial & Pneumatic",
            points: [
                "Hydraulic lines",
                "Compressed air hoses",
                "Light chemical handling",
            ],
        },
        {
            title: "Hardware & Construction",
            points: [
                "General plumbing",
                "HVAC duct connections",
                "DIY projects",
            ],
        },
    ];
    const specData = [
        { part: "000MS", bs: 12, adjMM: "9.5-12", adjIn: "3.8-4.8", band: 9.9, thick: "0.762", rec: 3.4, max: 4.5, psi: 203 },
        { part: "M00MS", bs: 16, adjMM: "11–16", adjIn: "1.2-5.8", band: 9.9, thick: "0.762", rec: 3.4, max: 4.5, psi: 203 },
        { part: "00MS", bs: 20, adjMM: "13–20", adjIn: "1.2-8.4", band: 9.9, thick: "0.762", rec: 3.4, max: 4.5, psi: 203 },
        { part: "0MS", bs: 22, adjMM: "16–22", adjIn: "5.8-7.8", band: 13.0, thick: "0.914", rec: 4.2, max: 5.6, psi: 203 },
        { part: "0XMS", bs: 25, adjMM: "18–25", adjIn: "3.4-1", band: 13.0, thick: "0.914", rec: 4.2, max: 5.6, psi: 203 },
        { part: "1AMS", bs: 30, adjMM: "22–30", adjIn: "7.5-11.8", band: 13.0, thick: "0.914", rec: 5.1, max: 6.8, psi: 203 },
        { part: "1MS", bs: 35, adjMM: "26–35", adjIn: "10-14", band: 13.0, thick: "0.914", rec: 5.1, max: 6.8, psi: 102 },
        { part: "1XMS", bs: 40, adjMM: "30–40", adjIn: "11.8-15.8", band: 13.0, thick: "0.914", rec: 5.1, max: 6.8, psi: 102 },
        { part: "1MMS", bs: 45, adjMM: "35–45", adjIn: "14-18", band: 13.0, thick: "0.914", rec: 5.1, max: 6.8, psi: 102 },
        { part: "2AMS", bs: 50, adjMM: "35–50", adjIn: "13-8.2", band: 13.0, thick: "0.914", rec: 5.9, max: 7.9, psi: 102 },
        { part: "2MS", bs: 55, adjMM: "40–55", adjIn: "15.8-21.8", band: 13.0, thick: "0.914", rec: 5.9, max: 7.9, psi: 102 },
        { part: "2XMS", bs: 60, adjMM: "45–60", adjIn: "13.4-3.8", band: 13.0, thick: "0.914", rec: 5.9, max: 7.9, psi: 102 },
        { part: "3MS", bs: 70, adjMM: "55–70", adjIn: "	21.8-23.4", band: 13.0, thick: "0.914", rec: 6.7, max: 9, psi: 44 },
        { part: "3XMS", bs: 80, adjMM: "60–80", adjIn: "23.4-31.4", band: 13.0, thick: "0.914", rec: 6.7, max: 9, psi: 44 },
        { part: "4MS", bs: 90, adjMM: "70–90", adjIn: "23.4-31.4", band: 13.0, thick: "0.914", rec: 6.7, max: 9, psi: 44 },
        { part: "4XMS", bs: 100, adjMM: "80–100", adjIn: "31.4-31.4", band: 13.0, thick: "0.914", rec: 6.7, max: 9, psi: 44 },
        { part: "5MS", bs: 120, adjMM: "100–120", adjIn: "38.4-43.4", band: 13.0, thick: "0.914", rec: 6.7, max: 9, psi: 44 },
        { part: "6XMS", bs: 140, adjMM: "120–150", adjIn: "43.4-57.8", band: 13.0, thick: "0.914", rec: 5.9, max: 7.9, psi: 18 },
        { part: "7MS", bs: 165, adjMM: "135–165", adjIn: "53.1-65.0", band: 13.0, thick: "0.914", rec: 5.9, max: 7.9, psi: 18 },
        { part: "8MS", bs: 216, adjMM: "184–216", adjIn: "72.4-85.0", band: 13.0, thick: "0.914", rec: 5.9, max: 7.9, psi: 18 },
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
                                <a href="#" className="hover:text-blue-400">Hose Clamps & Clips</a>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    Hose Clips
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Hose Clips
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
                                        src="/products/hoseclip.webp" // replace with your image path
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
                                    Founded in 1921, Jubilee® Clips pioneered the worm-drive hose clamp—obtaining the first-ever patent for this design. Manufactured in Great Britain ever since, the Jubilee® brand name remains a registered trademark worldwide, synonymous with quality and reliability in clamping solutions. Over the decades, the company has expanded its product line beyond the original worm-drive clip, offering an extensive array of clamps and strapping systems to meet diverse industry needs.
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

            {/* Key Uses & Applications / Product Features */}
            <section className="bg-gray-50 py-10 px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Comprehensive Clamping Solutions
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>


                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
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
                        Original Range: Mild Steel Zinc Protected
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-4 max-w-6xl mx-auto">
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

            {/* sizes */}
            <section className="w-full px-4 md:px-10 lg:px-20 py-10">
                {/* Centered Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Specifications Table
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[#2a2a2a] text-white text-sm md:text-base">
                                <th className="py-3 px-4">PART NO.</th>
                                <th className="py-3 px-4">BS NO.</th>
                                <th className="py-3 px-4">ADJUSTMENT (MM)</th>
                                <th className="py-3 px-4">ADJUSTMENT (INCHES)</th>
                                <th className="py-3 px-4">BAND WIDTH (MM)</th>
                                <th className="py-3 px-4">BAND THICKNESS (MM)</th>
                                <th className="py-3 px-4">REC. TORQUE (NM)</th>
                                <th className="py-3 px-4">MAX TORQUE (NM)</th>
                                <th className="py-3 px-4">MAX PRESSURE (PSI)</th>
                            </tr>
                        </thead>

                        <tbody>
                            {specData.map((row, i) => (
                                <tr
                                    key={i}
                                    className="border-b hover:bg-gray-50 text-black text-sm md:text-base transition"
                                >
                                    <td className="py-3 px-4">{row.part}</td>
                                    <td className="py-3 px-4">{row.bs}</td>
                                    <td className="py-3 px-4">{row.adjMM}</td>
                                    <td className="py-3 px-4">{row.adjIn}</td>
                                    <td className="py-3 px-4">{row.band}</td>
                                    <td className="py-3 px-4">{row.thick}</td>
                                    <td className="py-3 px-4">{row.rec}</td>
                                    <td className="py-3 px-4">{row.max}</td>
                                    <td className="py-3 px-4">{row.psi}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    )
}

export default Clips