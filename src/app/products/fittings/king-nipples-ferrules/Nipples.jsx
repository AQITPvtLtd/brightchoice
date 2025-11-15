'use client';
import Image from 'next/image';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Nipples = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Water Suction & Discharge",
            points: [
                "Irrigation, dewatering, and general fluid transfer. Commonly seen on construction sites or farms where robust hose connections are needed.",
            ],
        },
        {
            title: "Petroleum & Chemical Transfer",
            points: [
                "Suitable for low- to medium-pressure oil and chemical hoses. Typically used in fuel delivery, tanker truck lines, and industrial chemical handling.",
            ],
        },
        {
            title: "Mining & Quarry Operations",
            points: [
                "Durable connections for high-volume slurry or water transfer. Maintain a tight seal even in harsh, abrasive environments.",
            ],
        },
        {
            title: "Marine & Dredging",
            points: [
                "Connect large-diameter hoses for dredging sediment or pumping water in marine projects. Resilient design handles exposure to saltwater.",
            ],
        },
    ];

    const highlights = [
        {
            title: "Rugged Construction",
            points: [
                "Typically manufactured from carbon steel or stainless steel, designed to handle high vibration, moderate pressure, and rough handling.",
            ],
        },
        {
            title: "Versatile Connection",
            points: [
                "Suited for clamp-style attachments, widely compatible with standard band clamps, bolt clamps, or crimp ferrules. Nipple ends often feature tapered pipe threads (NPT) or beaded ends.",
            ],
        },
        {
            title: "Secure Grip",
            points: [
                "Ferrules provide a strong compression fit around the hose. King Nipples feature serrated or barbed shanks that help prevent hose slippage.",
            ],
        },
        {
            title: "Multiple Finishes",
            points: [
                "Options may include zinc plating, galvanization, or plain steel. Corrosion-resistant coatings extend the service life in challenging environments.",
            ],
        },
        {
            title: "Wide Size Range",
            points: [
                "Available in diameters from 2&quot; to 12&quot;, accommodating heavy-duty large-bore hoses.",
            ],
        },
    ];
    const details = [
        {
            title: "Sizes",
            description: "2&quot; to 12&quot;",
        },
        {
            title: "Material Options",
            description:
                'Carbon Steel, Stainless Steel (304 or 316)',
        },
        {
            title: "Surface Finish",
            description:
                "Plain, Galvanized, or Zinc-Plated",
        },
        {
            title: "Thread Type",
            description:
                "NPT (National Pipe Taper) or BSPT (where specified)",
        },
        {
            title: "Shank Profile",
            description:
                "Serrated or barbed for enhanced hose grip",
        },
        {
            title: "Working Pressure",
            description:
                "Varies by diameter and wall thickness (commonly < 250 PSI)",
        },
        {
            title: "Temperature Range",
            description: "-20°C to +180°C (approx., subject to material limits)",
        },
        {
            title: "End Connections",
            description:
                "Threaded one end, hose shank another end",
        },
    ];
    const ferrules = [
        {
            title: "Sizes",
            description: "2&quot; to 12&quot;",
        },
        {
            title: "Material Options",
            description:
                'Carbon Steel or Stainless Steel',
        },
        {
            title: "Wall Thickness",
            description:
                "Engineered per diameter for appropriate compression strength",
        },
        {
            title: "Surface Finish",
            description:
                "Plain, Galvanized, or Zinc-Plated",
        },
        {
            title: "Compatibility",
            description:
                "Designed to match hose OD and shank design for secure fit",
        },
        {
            title: "Application Method",
            description:
                "Typically crimped or swaged onto the hose end",
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
                                    King Nipples & Ferrules
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                                King Nipples & Ferrules
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
                                    src="/products/kingnipples.webp" // replace with your image path
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
                                King Nipples & Ferrules are essential fittings used in fluid handling systems, designed to create secure connections between hoses and equipment. These components are manufactured to precise specifications, ensuring reliable performance in demanding applications across various industries.
                            </p>

                            <button onClick={() => setOpen(true)}  className="bg-[#2a2a2a] cursor-pointer transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-md">
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
                            <ul className="space-y-2 text-gray-700 text-sm md:text-base list-none">
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
                            <ul className="list-none space-y-2 text-gray-700 text-sm md:text-base">
                                {highlight.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="w-full mt-10 bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative">
                            Technical Specifications
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                        </h2>
                    </div>

                    <p className='text-black text-center text-xl font-semibold mb-5'>King Nipples (KC Nipples)</p>

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

                    <p className='text-black text-center text-xl font-semibold mb-5 mt-5'>Ferrules</p>

                    {/* Table */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        {ferrules.map((item, index) => (
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

export default Nipples