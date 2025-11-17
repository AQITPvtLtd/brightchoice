'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Single = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Dewatering & Drainage",
            points: [
                "Securing suction hoses to pumps or couplings for groundwater or trench dewatering",
                "Used in wellpoint headers, discharge hoses, or manifold lines",
                "Ensures leak-free operations",
            ],
        },
        {
            title: "Construction & Earthworks",
            points: [
                "Fastening lay-flat hoses or rigid piping in temporary pump installations",
                "Adjusting hose lengths or relocations on busy job sites",
                "Minimal downtime during adjustments",
            ],
        },
        {
            title: "Municipal & Emergency",
            points: [
                "Tightening and stabilizing temporary water transfer hoses",
                "Quick assembly/disassembly for rapid deployment",
                "Effective for flood mitigation scenarios",
            ],
        },
        {
            title: "Industrial & Mining",
            points: [
                "Attaching large-diameter hoses for slurry and wastewater",
                "Suitable for dredging applications",
                "Withstands moderate pressures in pumping operations",
            ],
        },
        {
            title: "Agricultural & Irrigation",
            points: [
                "Clamping irrigation lines onto barbed or beaded pipe fittings",
                "Ensures robust connections for variable terrain",
                "Tolerates movement in agricultural settings",
            ],
        },
    ];

    const features = [
        {
            title: "High-Strength Metal Construction",
            points: [
                "Typically galvanized steel or stainless steel band for corrosion resistance",
                "Resists rust and damage in damp environments",
                "Withstands exposed outdoor conditions",
            ],
        },
        {
            title: "Single Bolt Tightening Mechanism",
            points: [
                "Quick, straightforward installation—just one bolt to tighten",
                "Minimal tools required; usually a single socket or wrench",
                "Provides uniform compression around the hose",
            ],
        },
        {
            title: "Wide Clamping Range",
            points: [
                "Available in multiple diameters to fit hoses from 1 to large industrial sizes",
                "Accommodates varying hose thicknesses",
                "Suitable for reinforced suction hoses",
            ],
        },
        {
            title: "Low Profile Design",
            points: [
                "Slim band profile reduces interference in confined spaces",
                "Less chance of snagging or catching on adjacent equipment",
                "Ribbed or perforated pattern for better friction",
            ],
        },
    ];
    const details = [
        {
            title: "Clamp Type",
            description: "Single Bolt Hose Clamp",
        },
        {
            title: "Material Options",
            description:
                'Galvanized Steel, Stainless Steel (304/316 options)',
        },
        {
            title: "Size Range",
            description:
                "Commonly fits hoses from 1 up to 10 diameter (model-dependent)",
        },
        {
            title: "Band Width",
            description:
                "~20–40 mm (depends on size and manufacturer)",
        },
        {
            title: "Bolt Size",
            description:
                "Ranges from M6 to M10 (metric) or ¼ to 3/8 (imperial)",
        },
        {
            title: "Tightening Torque",
            description:
                "Varies by size (typical range 10–30 Nm for standard clamps)",
        },
        {
            title: "Corrosion Protection",
            description: "Galvanized / Zinc-Plated / Stainless Steel",
        },
        {
            title: "Operating Temperature",
            description:
                "-20°C to +200°C (material-dependent)",
        },
        {
            title: "Max. Working Pressure",
            description:
                "Application-dependent; typically suitable for moderate pressures in dewatering lines",
        },
    ];
    const clampData = [
        { sizeInch: '1"', sizeMm: "25mm", od: "31-35mm", bolt: "M6", band: "20mm", material: "SS304/Galv." },
        { sizeInch: '1-1/4"', sizeMm: "32mm", od: "38-43mm", bolt: "M6", band: "20mm", material: "SS304/Galv." },
        { sizeInch: '1-1/2"', sizeMm: "38mm", od: "44-49mm", bolt: "M6", band: "20mm", material: "SS304/Galv." },
        { sizeInch: '2"', sizeMm: "50mm", od: "56-61mm", bolt: "M6", band: "20mm", material: "SS304/Galv." },
        { sizeInch: '2-1/2"', sizeMm: "63mm", od: "69-74mm", bolt: "M8", band: "24mm", material: "SS304/Galv." },
        { sizeInch: '3"', sizeMm: "75mm", od: "81-86mm", bolt: "M8", band: "24mm", material: "SS304/Galv." },
        { sizeInch: '4"', sizeMm: "100mm", od: "106-112mm", bolt: "M8", band: "26mm", material: "SS304/Galv." },
        { sizeInch: '5"', sizeMm: "125mm", od: "131-137mm", bolt: "M8", band: "26mm", material: "SS304/Galv." },
        { sizeInch: '6"', sizeMm: "150mm", od: "156-162mm", bolt: "M10", band: "28mm", material: "SS304/Galv." },
        { sizeInch: '8"', sizeMm: "200mm", od: "206-212mm", bolt: "M10", band: "32mm", material: "SS304/Galv." },
        { sizeInch: '10"', sizeMm: "250mm", od: "256-262mm", bolt: "M10", band: "32mm", material: "SS304/Galv." }
    ];
    const benifits = [
        {
            title: "Quick Installation",
            points: [
                "Single bolt mechanism simplifies setup, minimizing labor and downtime on the job site",
            ],
        },
        {
            title: "Durable & Reliable",
            points: [
                "Withstands vibration, moderate pressures, and environmental exposure common in dewatering tasks",
            ],
        },
        {
            title: "Cost-Effective",
            points: [
                "Typically cheaper than more complex multi-bolt or specialized clamps, reusable if properly maintained",
            ],
        },
        {
            title: "Versatile",
            points: [
                "Fits a wide range of hose diameters, making it a versatile stock item for contractors",
            ],
        },
        {
            title: "Adaptable to High Moisture",
            points: [
                "Galvanized or stainless steel variants resist rust in wet or muddy conditions",
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
                                <a href="#" className="hover:text-blue-400">Clamps</a>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    Single Bolt Clamps
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Single Bolt Clamps
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
                                        src="/products/singlebolt.webp" // replace with your image path
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
                                    Single Bolt Clamps (often referred to as Band Clamps or Hose Clamps) are designed to secure hoses—particularly suction and discharge lines—onto fittings or couplings. Constructed from high-strength materials (usually galvanized or stainless steel), these clamps enable a tight, leak-resistant connection in dewatering, construction, and general fluid transfer setups.
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
                        Product Features
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#2a2a2a] mb-3">
                                {feature.title}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">
                                {feature.points.map((point, i) => (
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
            <section className="w-full px-4 md:px-10 lg:px-20 py-10">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Technical Specification
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[#2a2a2a] text-white text-sm md:text-base">
                                <th className="py-3 px-4">SIZE (INCH)</th>
                                <th className="py-3 px-4">SIZE (MM)</th>
                                <th className="py-3 px-4">MIN-MAX OD</th>
                                <th className="py-3 px-4">BOLT SIZE</th>
                                <th className="py-3 px-4">BAND WIDTH</th>
                                <th className="py-3 px-4">MATERIAL</th>
                            </tr>
                        </thead>

                        <tbody>
                            {clampData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 transition text-sm md:text-base text-black"
                                >
                                    <td className="py-3 px-4">{row.sizeInch}</td>
                                    <td className="py-3 px-4">{row.sizeMm}</td>
                                    <td className="py-3 px-4">{row.od}</td>
                                    <td className="py-3 px-4">{row.bolt}</td>
                                    <td className="py-3 px-4">{row.band}</td>
                                    <td className="py-3 px-4">{row.material}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Benefits & Advantages */}
            <section className="py-10 px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Benefits & Advantages
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
        </section>
    )
}

export default Single