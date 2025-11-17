'use client';
import Image from 'next/image';
import { useState } from "react";
import Link from 'next/link';
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Mender = () => {
    const [open, setOpen] = useState(false);

    const details = [
        {
            title: "Size Range",
            description: "2&quot; to 12&quot;",
        },
        {
            title: "Material",
            description:
                'Stainless Steel, Brass, Plastic',
        },
        {
            title: "Connection Type",
            description:
                "Barbed ends with clamp securing",
        },
        {
            title: "Working Pressure",
            description:
                "Up to 150 PSI (material and size dependent)",
        },
        {
            title: "Primary Applications",
            description:
                "Dewatering, Emergency Repairs, Routine Maintenance",
        },
        {
            title: "Media Compatibility",
            description: "Water, Oil, Select Chemicals (material dependent)",
        },
    ];
    const benifits = [
        {
            title: "Multiple Material Options",
            points: [
                "Available in stainless steel, brass, and plastic to suit different environments",
            ],
        },
        {
            title: "Easy Installation",
            points: [
                "Most types require no special tools for plastic and brass versions",
            ],
        },
        {
            title: "Versatile Applications",
            points: [
                "Works with water, oil, and certain chemicals based on material type",
            ],
        },
        {
            title: "Secure Connection",
            points: [
                "Features barbed ends for reliable, leak-proof performance",
            ],
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
                                    Hose Mender
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Hose Mender
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
                                    src="/products/hosemender.webp" // replace with your image path
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
                                Hose Menders are essential repair fittings designed to quickly and effectively restore damaged or cut hoses to working condition. Available in various materials and sizes, these fittings provide a reliable solution for emergency repairs and routine maintenance across different industries. <br /> For optimal performance, ensure the hose mender matches the inner diameter and material of the hose for a secure, efficient connection. Stainless steel versions may require metal clamps and a crimping tool for installation.
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
            <section className="py-10 px-4 md:px-10">
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

export default Mender