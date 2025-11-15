'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Standard = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Irrigation & Agriculture",
            points: [
                "Suited for watering fields, crops, or orchards",
                "Easily pairs with portable pumps for quick field deployment",
            ],
        },
        {
            title: "Construction & Site Dewatering",
            points: [
                "Ideal for draining flood areas or pumping out water from excavation sites",
                "Lightweight design makes it easy to move across a jobsite",
            ],
        },
        {
            title: "Industrial Water Transfer",
            points: [
                "Transfers water and non-corrosive fluids in factories, processing plants, or shipyards",
                "Hose lies flat when not in use, saving storage space",
            ],
        },
        {
            title: "Temporary Water Supply Lines",
            points: [
                "Can serve as a temporary line for distributing water at outdoor events, fairs, or emergency relief efforts",
            ],
        },
    ];

    const highlights = [
        {
            title: "Lightweight & Portable",
            points: [
                "Collapsible flat profile for efficient storage and transportation",
                "Minimizes space requirements compared to rigid or braided hoses",
            ],
        },
        {
            title: "Durable PVC Construction",
            points: [
                "Standard-duty PVC layers reinforced with synthetic yarn for enhanced burst strength",
                "Resistant to kinking, abrasion, and mild chemicals in typical water transfer operations",
            ],
        },
        {
            title: "Easy Deployment & Recoil",
            points: [
                "Lays flat on the ground for easy pumping without frequent repositioning",
                "Quick to roll up after use, ensuring minimal downtime",
            ],
        },
        {
            title: "Smooth Inner Surface",
            points: [
                "Minimizes friction losses to maintain steady flow rates",
                "Reduces residue buildup and simplifies cleaning",
            ],
        },
    ];

    const details = [
        {
            title: "Material",
            description: "PVC with synthetic textile reinforcement",
        },
        {
            title: "Diameter Range",
            description:
                'Commonly from 1" (25 mm) up to 8" (200 mm); exact range may vary by manufacturer',
        },
        {
            title: "Wall Thickness",
            description:
                "Varies by diameter and pressure rating; standard duty construction ensures consistent 4 bar performance",
        },
        {
            title: "Length Rolls",
            description: "Typically in 50 m (164 ft) or 100 m (328 ft) coils",
        },
        {
            title: "Temperature Range",
            description:
                "−10°C to +60°C (14°F to 140°F), depending on usage and fluid",
        },
        {
            title: "Color",
            description:
                "Commonly blue, although other colors (red, yellow, green) may be available",
        },
    ];

    const data = [
        { sizeMM: 50, sizeIn: 2, diaMM: 52, diaIn: 2.047, wallMM: 1.4, wallIn: 0.055, lengthM: 100, lengthFt: 300, pressureKg: 4.5, pressurePsi: 65 },
        { sizeMM: 75, sizeIn: 3, diaMM: 77, diaIn: 3.031, wallMM: 1.5, wallIn: 0.0549, lengthM: 100, lengthFt: 300, pressureKg: 4, pressurePsi: 55 },
        { sizeMM: 100, sizeIn: 4, diaMM: 103, diaIn: 4.055, wallMM: 1.5, wallIn: 0.059, lengthM: 100, lengthFt: 300, pressureKg: 4, pressurePsi: 55 },
        { sizeMM: 150, sizeIn: 6, diaMM: 153, diaIn: 6.024, wallMM: 1.8, wallIn: 0.071, lengthM: 100, lengthFt: 300, pressureKg: 3, pressurePsi: 45 },
        { sizeMM: 200, sizeIn: 8, diaMM: 205, diaIn: 8.15, wallMM: 2.1, wallIn: 0.083, lengthM: 100, lengthFt: 300, pressureKg: 3, pressurePsi: 45 },
        { sizeMM: 250, sizeIn: 10, diaMM: 250.2, diaIn: 10.197, wallMM: 2.3, wallIn: 0.091, lengthM: 50, lengthFt: 100, pressureKg: 2, pressurePsi: 30 },
        { sizeMM: 300, sizeIn: 12, diaMM: 302, diaIn: 12.126, wallMM: 2.5, wallIn: 0.098, lengthM: 50, lengthFt: 100, pressureKg: 2, pressurePsi: 30 },
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
                                <a href="/" className="hover:text-blue-400">Home</a>
                                <span className="mx-2">/</span>
                                <a href="#" className="hover:text-blue-400">Rubber & PVC Hoses</a>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    PVC Lay Flat Hose - Standard Duty
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                                PVC Lay Flat Hose <br className="hidden sm:block" /> - Standard Duty
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
                                        src="/products/standard.webp" // replace with your image path
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
                                    PVC Lay Flat Hose – Standard Duty 4 Bar is a lightweight, flexible water discharge hose made from high-strength PVC material. Commonly referred to as “lay flat” or “flat discharge” hose, this product is designed for intermediate pressure applications up to 4 bar (58 psi). Thanks to its collapsible design and robust construction, it's widely used in agriculture, construction, mining, and industrial water transfer projects.
                                </p>

                                <p className="text-base font-semibold text-gray-800 mb-3">
                                    Pressure Rating:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm md:text-base mb-5">
                                    <li>
                                        <span className="font-medium">Working Pressure:</span> Up to 4 bar (58 psi)
                                    </li>
                                    <li>
                                        <span className="font-medium">Burst Pressure:</span> Typically 3× the working pressure (varies by diameter)
                                    </li>
                                </ul>

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
                            Technical Highlights
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
            <section className="w-full py-16 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2a2a2a] inline-block relative pb-2">
                            Technical Specifications
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[4px] w-16 bg-red-500 rounded-full"></span>
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 bg-white">
                        <table className="min-w-full border-collapse text-center text-sm md:text-base">
                            <thead className="bg-[#2a2a2a] text-white">
                                <tr>
                                    <th className="py-4 px-3 border-r border-white" colSpan={2}>
                                        NOMINAL SIZE
                                    </th>
                                    <th className="py-4 px-3 border-r border-white" colSpan={2}>
                                        INSIDE DIAMETER
                                    </th>
                                    <th className="py-4 px-3 border-r border-white" colSpan={2}>
                                        WALL THICKNESS
                                    </th>
                                    <th className="py-4 px-3 border-r border-white" colSpan={2}>
                                        LENGTH
                                    </th>
                                    <th className="py-4 px-3" colSpan={2}>
                                        WORKING PRESSURE
                                    </th>
                                </tr>
                                <tr className="bg-[#2a2a2a]/95 text-gray-200 text-xs md:text-sm">
                                    <th className="py-2 border-r border-white">mm</th>
                                    <th className="py-2 border-r border-white">inch</th>
                                    <th className="py-2 border-r border-white">mm</th>
                                    <th className="py-2 border-r border-white">inch</th>
                                    <th className="py-2 border-r border-white">mm</th>
                                    <th className="py-2 border-r border-white">inch</th>
                                    <th className="py-2 border-r border-white">Mtr</th>
                                    <th className="py-2 border-r border-white">Feet</th>
                                    <th className="py-2 border-r border-white">Kg/cm²</th>
                                    <th className="py-2">Psi</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-white text-black" : "bg-gray-50 text-black"
                                            } border-b border-gray-200`}
                                    >
                                        <td className="py-3">{row.sizeMM}</td>
                                        <td className="py-3">{row.sizeIn}</td>
                                        <td className="py-3">{row.diaMM}</td>
                                        <td className="py-3">{row.diaIn}</td>
                                        <td className="py-3">{row.wallMM}</td>
                                        <td className="py-3">{row.wallIn}</td>
                                        <td className="py-3">{row.lengthM}</td>
                                        <td className="py-3">{row.lengthFt}</td>
                                        <td className="py-3">{row.pressureKg}</td>
                                        <td className="py-3">{row.pressurePsi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Standard