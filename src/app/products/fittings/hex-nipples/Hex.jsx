'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Hex = () => {
    const [open, setOpen] = useState(false);

    const details = [
        {
            title: "Size Range",
            description: "2&quot; to 12&quot;",
        },
        {
            title: "Materials",
            description:
                'Stainless Steel, Brass, PVC',
        },
        {
            title: "Thread Type",
            description:
                "NPT (National Pipe Tapered)",
        },
        {
            title: "Pressure Rating",
            description:
                "Up to 1000 PSI (material dependent)",
        },
        {
            title: "Applications",
            description:
                "Water, Oils, Gases",
        },
    ];
    const benifits = [
        {
            title: "Easy Installation",
            points: [
                "Hexagonal shape enables easy use with standard wrenches.",
            ],
        },
        {
            title: "Material Variety",
            points: [
                "Multiple material options suitable for different fluids and environments.",
            ],
        },
        {
            title: "Reliable Sealing",
            points: [
                "NPT threading ensures tight, effective seals.",
            ],
        },
        {
            title: "Wide Application",
            points: [
                "Versatile application in water, oil, and gas systems.",
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
                                <a href="#" className="hover:text-blue-400">Home</a>
                                <span className="mx-2">/</span>
                                <a href="#" className="hover:text-blue-400">Fittings</a>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    Hex Nipples
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                                Hex Nipples
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
                                    src="/products/hexnipples.webp" // replace with your image path
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
                                Hex Nipples are precision-engineered pipe fittings featuring hexagonal sections for easy installation and removal. These versatile components are essential in various fluid handling applications, providing secure connections while allowing for future maintenance or modifications.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative">
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
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative">
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

export default Hex