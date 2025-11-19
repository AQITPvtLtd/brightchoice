'use client';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Motor = () => {
    const [open, setOpen] = useState(false);

    const benifits = [
        {
            title: "Robust Construction",
            points: [
                "Available in stainless steel and thermoplastic materials",
            ],
        },
        {
            title: "High Efficiency",
            points: [
                "Low energy consumption with consistent performance",
            ],
        },
        {
            title: "Easy Installation",
            points: [
                "Minimal maintenance requirements",
            ],
        },
        {
            title: "Versatile Operation",
            points: [
                "Capable of operating under a wide range of voltages",
            ],
        },
    ];

    const applications = [
        {
            title: "Water Supply",
            points: [
                "Efficient water extraction from deep sources for residential, commercial, and municipal use",
            ],
        },
        {
            title: "Irrigation",
            points: [
                "Perfect for agricultural applications, providing necessary pressure for sprinkler and drip systems",
            ],
        },
        {
            title: "Pressure Boosting",
            points: [
                "Enhances water pressure in facilities like hotels and high-rise buildings",
            ],
        },
        {
            title: "Industrial Use",
            points: [
                "Supports operations in mining, manufacturing, and processing industries",
            ],
        },
        {
            title: "Firefighting",
            points: [
                "Delivers required water flow and pressure for firefighting systems",
            ],
        },
        {
            title: "Environmental Management",
            points: [
                "Employed in groundwater management and leachate extraction",
            ],
        },
    ];

    const tableData = [
        {
            spec: "Diameter",
            inch2: "2 inches",
            inch3: "3 inches",
            inch4: "4 inches",
        },
        {
            spec: "Motor Power",
            inch2: "0.5 to 2 HP",
            inch3: "1 to 5 HP",
            inch4: "2 to 10 HP",
        },
        {
            spec: "Flow Rate",
            inch2: "5 to 40 GPM",
            inch3: "10 to 90 GPM",
            inch4: "20 to 140 GPM",
        },
        {
            spec: "Max Head",
            inch2: "Up to 200 feet",
            inch3: "Up to 300 feet",
            inch4: "Often exceeding 400 feet",
        },
        {
            spec: "Material",
            inch2: "Stainless steel or thermoplastic",
            inch3: "Stainless steel",
            inch4: "Stainless steel",
        },
        {
            spec: "Voltage",
            inch2: "Typically 220V",
            inch3: "220V or 380V",
            inch4: "220V or 380V",
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
                                    Submersible pumps with motor - multi stage
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Submersible pumps with <br /> motor - multi stage
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
                                        src="/products/multi.webp" // replace with your image path
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
                                    Our range of Multistage Submersible Pumps is designed to deliver exceptional performance for a variety of applications. These pumps are engineered to operate efficiently deep below the surface, providing reliable water extraction from wells, boreholes, and reservoirs. With their multistage design, they ensure consistent pressure and flow rate, suitable for both residential and industrial applications. <br /> <br /> Each pump is manufactured with robust construction and options in stainless steel and thermoplastic materials, ensuring optimal performance with low energy consumption.
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
            <section className="py-10 px-4 md:px-10 bg-[#f9fafb]">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Features and Benefits
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>


                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                    {benifits.map((benifit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#2a2a2a] mb-3">
                                {benifit.title}
                            </h3>
                            <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                                {benifit.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits & Advantages */}
            <section className="py-10 px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Applications
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>


                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                    {applications.map((application, index) => (
                        <div
                            key={index}
                            className="bg-[#f9fafb] rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#2a2a2a] mb-3">
                                {application.title}
                            </h3>
                            <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                                {application.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="w-full bg-[#f9fafb] py-5 px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
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
                                        <th className="px-6 py-4 font-semibold border border-gray-300">2-INCH</th>
                                        <th className="px-6 py-4 font-semibold border border-gray-300">3-INCH</th>
                                        <th className="px-6 py-4 font-semibold border border-gray-300">4-INCH</th>
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
                                            <td className="px-6 py-4 border border-gray-300">{row.inch2}</td>
                                            <td className="px-6 py-4 border border-gray-300">{row.inch3}</td>
                                            <td className="px-6 py-4 border border-gray-300">{row.inch4}</td>
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

export default Motor