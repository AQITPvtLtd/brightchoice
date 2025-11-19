'use client';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Centrifugal = () => {
    const [open, setOpen] = useState(false);

    const features = [
        "Easy Maintenance: Most dewatering pumps require minimal upkeep, primarily involving regular checks of oil levels and filters.",
        "Durability: Constructed from high-quality materials such as stainless steel and cast iron, these pumps are designed to withstand harsh conditions and ensure a long operational life.",
        "Versatility: Capable of handling sewage, slurries, and liquids with solids up to 2.0 inches in diameter, these pumps are adaptable to various applications.",
        "Advanced Sealing: Equipped with dry-running high-pressure liquid bath double mechanical seals made from solid silicon carbide, these pumps ensure reliability during operation.",
        "Centrifugal Pump Design: Many models utilize a centrifugal pump with a dry-prime system, which can be coupled with either diesel engines or electric motors for flexible power options.",
        "Customizable Options: Pumps can be tailored to specific customer needs, including different impeller types (closed or open), drive systems (diesel or electric), and mounting configurations (skid-mounted or trailer-mounted)."
    ];

    const tableData = [
        {
            spec: "Max Water Flow",
            c4: "200 m³/hr",
            c6: "350 m³/hr",
            c8: "550 m³/hr",
            c12: "1250 m³/hr",
        },
        {
            spec: "Suction x Discharge",
            c4: '4" x 4" (100 mm x 100 mm)',
            c6: '6" x 6" (150 mm x 150 mm)',
            c8: '8" x 8" (200 mm x 200 mm)',
            c12: '12" x 12" (300 mm x 300 mm)',
        },
        {
            spec: "Max Head",
            c4: "40 m",
            c6: "40 m",
            c8: "40 m",
            c12: "30 m",
        },
        {
            spec: "Max Suction Lift",
            c4: "9 m",
            c6: "9 m",
            c8: "9 m",
            c12: "9 m",
        },
        {
            spec: "Max Solid Handling",
            c4: '2"',
            c6: '2"',
            c8: '2"',
            c12: '3"',
        },
        {
            spec: "Engine",
            c4: "Kirloskar HA 394, 3-Cylinder",
            c6: "Kirloskar HA 394, 3-Cylinder",
            c8: "Kirloskar HA 494, 4-Cylinder",
            c12: "Kirloskar HA 694, 6-Cylinder",
        },
        {
            spec: "Engine Capacity",
            c4: "32 HP",
            c6: "38 HP",
            c8: "52 HP",
            c12: "78 HP",
        },
        {
            spec: "Engine Speed",
            c4: "1500 RPM",
            c6: "1800 RPM",
            c8: "1800 RPM",
            c12: "1800 RPM",
        },
        {
            spec: "Fuel Tank Capacity",
            c4: "120 liters",
            c6: "160 liters",
            c8: "183 liters",
            c12: "220 liters",
        },
        {
            spec: "Weight Without Engine",
            c4: "550 kg",
            c6: "550 kg",
            c8: "600 kg",
            c12: "700 kg",
        },
        {
            spec: "Weight With Engine",
            c4: "950 kg",
            c6: "950 kg",
            c8: "1100 kg",
            c12: "1200 kg",
        },
        {
            spec: "Dimensions (L × W × H)",
            c4: "214 × 213 × 153 cm",
            c6: "214 × 213 × 153 cm",
            c8: "214 × 213 × 153 cm",
            c12: "214 × 213 × 153 cm",
        },
        {
            spec: "Container Capacity (20 ft)",
            c4: "6 units",
            c6: "6 units",
            c8: "4 units",
            c12: "4 units",
        },
        {
            spec: "Container Capacity (40 ft)",
            c4: "12 units",
            c6: "12 units",
            c8: "8 units",
            c12: "4 units",
        },
        {
            spec: "Size Range",
            c4: '2" to 12" discharge sizes',
            c6: '',
            c8: '',
            c12: '',
        },
        {
            spec: "Flow Rates",
            c4: "Up to 2000 m³/hr (8800 US GPM) depending on model",
            c6: "",
            c8: "",
            c12: "",
        },
        {
            spec: "Head",
            c4: "Up to 150 meters (492 ft) depending on model",
            c6: "",
            c8: "",
            c12: "",
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
                                <Link href="/" className="hover:text-blue-400">Pumps</Link>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    Diesel Driven Centrifugal Pumps
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Diesel driven centrifugal pumps
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
                                        src="/products/dwp.webp" // replace with your image path
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
                                    Dewatering pumps are specialized devices designed to remove excess water from various environments, including construction sites, sewage systems, and irrigation applications. They are crucial for preventing flooding and managing groundwater levels effectively. These pumps can handle a range of liquids, including those containing solids, making them versatile tools in many industries.
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

            {/* Benefits & Advantages */}
            <section className="px-4 py-10 md:px-8 lg:px-16 bg-[#f9fafb]">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Features & Benefits
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>

                {/* Features List */}
                <ul className="list-disc pl-5 space-y-4 text-gray-700 leading-relaxed">
                    {features.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

            </section>

            {/* Technical Specifications */}
            <section className="w-full bg-white mb-5 px-4 sm:px-6 lg:px-12 mt-5">
                <div className="max-w-7xl mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Technical Specifications
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="w-full px-4 py-5">
                        <div className="overflow-x-auto rounded-lg shadow-md">
                            <table className="min-w-full text-left border border-gray-300 border-collapse">

                                {/* Header */}
                                <thead className="bg-[#2a2a2a] text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold border border-gray-300">SPECIFICATION</th>
                                        <th className="px-6 py-4 font-semibold border border-gray-300">4" Pump (Tusker 100)</th>
                                        <th className="px-6 py-4 font-semibold border border-gray-300">6" Pump (Tusker 150)</th>
                                        <th className="px-6 py-4 font-semibold border border-gray-300">8" Pump (Tusker 200)</th>
                                        <th className="px-6 py-4 font-semibold border border-gray-300">12" Pump (Tusker 300)</th>
                                    </tr>
                                </thead>

                                {/* Dynamic Rows */}
                                <tbody className="text-gray-700">
                                    {tableData.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
                                        >
                                            <td className="px-6 py-4 font-medium border border-gray-300">{row.spec}</td>
                                            <td className="px-6 py-4 border border-gray-300">{row.c4}</td>
                                            <td className="px-6 py-4 border border-gray-300">{row.c6}</td>
                                            <td className="px-6 py-4 border border-gray-300">{row.c8}</td>
                                            <td className="px-6 py-4 border border-gray-300">{row.c12}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Centrifugal