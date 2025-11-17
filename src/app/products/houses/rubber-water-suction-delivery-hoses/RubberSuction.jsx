'use client';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

export default function RubberSuction() {
    const [open, setOpen] = useState(false);

    const features = [
        "Made of 100% Polyester Yarn",
        "High Quality Synthetic EPDM Rubber Lining",
        "Light and Flexible",
        "Sea Water and Weather Resistant",
        "Aging and Ozone Resistant",
    ];

    const specs = [
        { id: "38", inch: "1.5", wpBar: "18", wpKg: "260", bpBar: "60", bpKg: "870" },
        { id: "52", inch: "2", wpBar: "17", wpKg: "250", bpBar: "55", bpKg: "800" },
        { id: "65", inch: "2.5", wpBar: "17", wpKg: "250", bpBar: "55", bpKg: "800" },
    ];

    return (
        <section className='bg-white'>
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
                                <Link href="/" className="hover:text-blue-400">Rubber & PVC Hoses</Link>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    Rubber Water Suction & Delivery Hoses
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Rubber Water Suction <br className="hidden sm:block" /> & Delivery Hoses
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
                                        src="/products/rubberwatersuction.webp"
                                        alt="Rubber Hose"
                                        width={350}   // 👈 size chota
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
                                    Premium Quality Rubber-lined Single Jacket Hose designed for medium-duty suction and
                                    delivery of water for irrigation purposes in agriculture, saline water, light acids,
                                    alkalies, and other chemicals except solvents. UL Listed and German IS Lloyds approved,
                                    conforming to B6391BS6391: 2009 Type-1.
                                </p>

                                <button onClick={() => setOpen(true)} className="bg-[#2a2a2a] transition-all cursor-pointer duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-md">
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

            {/* Features & Benefits */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Features & Benefits
                        </h2>
                        <div className="h-1 w-16 bg-red-600 mx-auto"></div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-white shadow-sm rounded-xl px-6 py-5 border border-gray-100 hover:shadow-md transition-all"
                            >
                                <span className="w-2 h-2 bg-[#2a2a2a] rounded-full mr-4"></span>
                                <p className="text-gray-800 text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="mt-10 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Centered Title */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Technical Specifications
                        </h2>
                        <div className="h-1 w-16 bg-red-600 mx-auto"></div>
                    </div>

                    {/* Table Wrapper */}
                    <div className="overflow-x-auto shadow-md rounded-xl bg-white">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-[#2a2a2a] text-white text-left border-b border-gray-300">
                                    <th className="border border-gray-300 px-6 py-4 text-sm md:text-base font-semibold">ID (MM)</th>
                                    <th className="border border-gray-300 px-6 py-4 text-sm md:text-base font-semibold">INCH</th>
                                    <th
                                        colSpan={2}
                                        className="border border-gray-300 px-6 py-4 text-center text-sm md:text-base font-semibold"
                                    >
                                        WORKING PRESSURE (WP)
                                    </th>
                                    <th
                                        colSpan={2}
                                        className="border border-gray-300 px-6 py-4 text-center text-sm md:text-base font-semibold"
                                    >
                                        BURST PRESSURE (BP)
                                    </th>
                                </tr>
                                <tr className="bg-[#2a2a2a] text-white text-left border-b border-gray-300">
                                    <th className="border border-gray-300"></th>
                                    <th className="border border-gray-300"></th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">BAR</th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">KG/CM²</th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">BAR</th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">KG/CM²</th>
                                </tr>
                            </thead>

                            <tbody>
                                {specs.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-t border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
                                    >
                                        <td className="border border-gray-300 px-6 py-4">{item.id}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.inch}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.wpBar}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.wpKg}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.bpBar}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.bpKg}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>

            {/* Brand Premier Extra Specifications */}
            <section className="mt-10 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Centered Title */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Brand Premier Extra Specifications
                        </h2>
                        <div className="h-1 w-16 bg-red-600 mx-auto"></div>
                    </div>

                    {/* Table Wrapper */}
                    <div className="overflow-x-auto shadow-md rounded-xl bg-white">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-[#2a2a2a] text-white text-left border-b border-gray-300">
                                    <th className="border border-gray-300 px-6 py-4 text-sm md:text-base font-semibold">ID (MM)</th>
                                    <th className="border border-gray-300 px-6 py-4 text-sm md:text-base font-semibold">INCH</th>
                                    <th
                                        colSpan={2}
                                        className="border border-gray-300 px-6 py-4 text-center text-sm md:text-base font-semibold"
                                    >
                                        WORKING PRESSURE (WP)
                                    </th>
                                    <th
                                        colSpan={2}
                                        className="border border-gray-300 px-6 py-4 text-center text-sm md:text-base font-semibold"
                                    >
                                        BURST PRESSURE (BP)
                                    </th>
                                </tr>
                                <tr className="bg-[#2a2a2a] text-white text-left border-b border-gray-300">
                                    <th className="border border-gray-300"></th>
                                    <th className="border border-gray-300"></th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">BAR</th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">KG/CM²</th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">BAR</th>
                                    <th className="border border-gray-300 px-6 py-2 text-sm font-medium">KG/CM²</th>
                                </tr>
                            </thead>

                            <tbody>
                                {specs.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-t border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
                                    >
                                        <td className="border border-gray-300 px-6 py-4">{item.id}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.inch}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.wpBar}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.wpKg}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.bpBar}</td>
                                        <td className="border border-gray-300 px-6 py-4">{item.bpKg}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
        </section>
    );
}
