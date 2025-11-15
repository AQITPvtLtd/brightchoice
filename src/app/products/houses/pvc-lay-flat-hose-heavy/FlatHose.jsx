'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const FlatHose = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "High-Pressure Irrigation & Agriculture",
            points: [
                "Ideal for extended irrigation runs or higher-pressure pumping systems",
                "Handles challenging on-farm pumping where strong water pressure is needed",
            ],
        },
        {
            title: "Construction & Heavy-Duty Dewatering",
            points: [
                "Drains excavation sites with substantial water volumes at higher pressure",
                "Rugged construction holds up under tough site conditions and frequent movement",
            ],
        },
        {
            title: "Industrial & Mining Operations",
            points: [
                "Suited for transferring water or slurry in demanding industrial environments",
                "Reinforced design resists abrasion and handles intermittent pressure surges",
            ],
        },
        {
            title: "Municipal & Utility Projects",
            points: [
                "Supports emergency water distribution lines or firefighting support",
                "Ideal for more rigorous municipal cleanup, flood control, or hydrant usage",
            ],
        },
    ];

    const highlights = [
        {
            title: "Enhanced Pressure Rating",
            points: [
                "Withstands working pressures up to 10 bar (116 psi), offering a step up from standard-duty hoses",
            ],
        },
        {
            title: "Reinforced PVC Construction",
            points: [
                "Multiple layers of robust PVC with high-tensile polyester yarn reinforcement",
                "Designed to resist elongation or deformation under heavy water flow",
            ],
        },
        {
            title: "Flexible & Collapsible",
            points: [
                "Hose can be rolled flat for compact transport and storage",
                "Lies flat on ground during operation; minimal kinking even around corners",
            ],
        },
        {
            title: "Abrasion & UV Resistance",
            points: [
                "Heavy-duty PVC outer coating endures dragging, rough surfaces, and moderate exposure to sunlight",
            ],
        },
        {
            title: "Smooth Inner Lining",
            points: [
                "Maintains consistent, efficient flow rates and minimizes friction losses",
                "Resists buildup of algae or mineral deposits, aiding easy maintenance",
            ],
        },
    ];
    const details = [
        {
            title: "Material",
            description: "Premium PVC with high-tensile polyester reinforcement",
        },
        {
            title: "Diameter Range",
            description:
                'Commonly from 1.5" (38 mm) up to 8" (200 mm); availability may differ by manufacturer',
        },
        {
            title: "Wall Thickness",
            description:
                "Heavier gauge PVC layers compared to standard-duty hoses, ensuring stable performance at 10 bar",
        },
        {
            title: "Length Rolls",
            description: "Typically 50 m (164 ft) or 100 m (328 ft) rolls, other lengths on request",
        },
        {
            title: "Temperature Range",
            description:
                "-10°C to +60°C (14°F to 140°F), subject to fluid and working environment",
        },
        {
            title: "Color",
            description:
                "Often red or blue (heavy-duty lines frequently come in red, though colors can vary)",
        },
    ];
    const data = [
        { sizeMM: 50, sizeIn: 2, diaMM: 53.1, diaIn: 2.09, wallMM: 2, wallIn: 0.079, lengthM: 100, lengthFt: 300, pressureKg: 10.5, pressurePsi: 150 },
        { sizeMM: 75, sizeIn: 3, diaMM: 78.5, diaIn: 3.09, wallMM: 2.3, wallIn: 0.09, lengthM: 100, lengthFt: 300, pressureKg: 10.5, pressurePsi: 150 },
        { sizeMM: 100, sizeIn: 4, diaMM: 105, diaIn: 4.134, wallMM: 2.5, wallIn: 0.098, lengthM: 100, lengthFt: 300, pressureKg: 10, pressurePsi: 142 },
        { sizeMM: 150, sizeIn: 6, diaMM: 157, diaIn: 6.0181, wallMM: 2.7, wallIn: 0.0106, lengthM: 100, lengthFt: 300, pressureKg: 8, pressurePsi: 100 },
        { sizeMM: 200, sizeIn: 8, diaMM: 207, diaIn: 8.149, wallMM: 3, wallIn: 0.118, lengthM: 100, lengthFt: 300, pressureKg: 7, pressurePsi: 85 },
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
                                    PVC Lay Flat Hose - Heavy Duty
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                                PVC Lay Flat Hose <br className="hidden sm:block" /> - Heavy Duty 10 Bar
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
                                    src="/products/heavy.webp" // replace with your image path
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
                                PVC Lay Flat Hose – Heavy Duty 10 bar is a robust, flexible water discharge hose engineered for higher-pressure applications compared to standard-duty hoses. Constructed from thick PVC material reinforced with high-tensile synthetic yarn, this heavy-duty lay flat hose can reliably handle pressures up to 10 bar (116 psi). Due to its durable yet collapsible design, it's widely used in professional irrigation, construction, mining, industrial, and municipal water transfer tasks where a more demanding water pressure rating is required.
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

export default FlatHose