'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import QuoteModal from '../../quotemodal/QuoteModal';
import ModalForm from '../../modalform/ModalForm';

const Double = () => {
    const [open, setOpen] = useState(false);

    const uses = [
        {
            title: "Dewatering & Drainage",
            points: [
                "Securing high-capacity suction hoses in wellpoint systems or large-scale pump installations",
                "Reliable under moderate to high vacuum pressures and frequent site relocations",
            ],
        },
        {
            title: "Construction & Earthworks",
            points: [
                "Fastening lay-flat discharge hoses, rigid suction pipes, and couplings on busy worksites",
                "Offers extra assurance of leak-free performance in harsh or vibrating conditions",
            ],
        },
        {
            title: "Mining & Industrial Slurry",
            points: [
                "Withstands higher pressures and heavier hose wall thickness commonly seen in slurry pumping",
                "Double bolt tensioning ensures hoses remain fixed, even when pumping abrasive materials",
            ],
        },
        {
            title: "Agricultural Irrigation",
            points: [
                "Firmly clamps PVC or rubber hoses for large-volume irrigation lines",
                "Minimizes hose slippage under strong water flow or variable terrain stress",
            ],
        },
        {
            title: "Municipal & Flood Control",
            points: [
                "Deployed in emergency setups for floodwater diversion or storm drainage",
                "Double bolt design helps maintain a tight seal over prolonged pumping operation",
            ],
        },
    ];

    const highlights = [
        {
            title: "High-Strength Metal Construction",
            points: [
                "Typically made from galvanized steel or stainless steel (304/316) for corrosion resistance",
                "Thicker band material for added rigidity compared to single bolt clamps",
            ],
        },
        {
            title: "Two Bolt Tightening Mechanism",
            points: [
                "Allows more uniform compression around the hose's circumference",
                "Distributes clamping force evenly, reducing the chance of leaks or hose damage",
            ],
        },
        {
            title: "Heavy-Duty Band Width",
            points: [
                "Often wider than single bolt clamps, providing increased surface contact",
                "Ideal for thicker-walled or large-diameter hoses found on high-flow jobs",
            ],
        },
        {
            title: "Excellent Vibration Resistance",
            points: [
                "Two bolts mitigate loosening under mechanical vibration or pump pulsations",
                "Suitable for demanding industrial or construction environments",
            ],
        },
        {
            title: "Multiple Size Ranges",
            points: [
                "Manufactured for hose diameters from ~2 up to 12 (or larger, model-dependent)",
                "Versatile inventory solution for contractors handling a range of fluid transfer tasks",
            ],
        },
    ];
    const details = [
        {
            title: "Clamp Type",
            description: "Double Bolt Hose Clamp",
        },
        {
            title: "Material",
            description:
                'Galvanized Steel, Stainless Steel (304/316)',
        },
        {
            title: "Size Range",
            description:
                "Typically 2 – 12 outer diameter coverage (other sizes on request)",
        },
        {
            title: "Band Width",
            description:
                "~30–50 mm (depends on clamp size and mfr.)",
        },
        {
            title: "Bolt Size",
            description:
                "Often M6, M8, or M10 (metric) or ¼, 5/16, 3/8 (imperial)",
        },
        {
            title: "Corrosion Protection",
            description: "Zinc-plated, Galvanized, or Polished Stainless Finish",
        },
        {
            title: "Torque Rating",
            description:
                "Dependent on clamp diameter & bolt size (e.g. 15–40 Nm typical)",
        },
        {
            title: "Operating Temp",
            description:
                "-20°C to +200°C (material-dependent)",
        },
        {
            title: "Max. Pressure",
            description:
                "Application-dependent; handles higher pressures than single bolt clamps",
        },
    ];
    const benifits = [
        {
            title: "Enhanced Clamping Force",
            points: [
                "Two bolt points apply uniform circumferential pressure, reducing leak risk even under higher pressures",
            ],
        },
        {
            title: "Robust & Durable",
            points: [
                "Thicker band and double bolt design resist mechanical stresses and fluctuations in pump suction/discharge lines",
            ],
        },
        {
            title: "Versatile Usage",
            points: [
                "Ideal for heavier or larger diameter hoses in dewatering, oilfield, or industrial applications",
            ],
        },
        {
            title: "Reduced Hose Slippage",
            points: [
                "More contact area and dual locking points minimize the chance of the hose loosening over time",
            ],
        },
        {
            title: "Longer Service Life",
            points: [
                "Corrosion-resistant finishes and sturdy construction allow repeated reuse across multiple projects",
            ],
        },
    ];
    const sizeSpecs = [
        { inch: '2"', mm: "50mm", od: "58–65mm", bolt: "M8", band: "30mm", material: "304 SS, Galvanized" },
        { inch: '3"', mm: "75mm", od: "83–91mm", bolt: "M8", band: "30mm", material: "304 SS, Galvanized" },
        { inch: '4"', mm: "100mm", od: "108–116mm", bolt: "M8", band: "35mm", material: "304 SS, Galvanized" },
        { inch: '6"', mm: "150mm", od: "159–167mm", bolt: "M10", band: "40mm", material: "304 SS, Galvanized" },
        { inch: '8"', mm: "200mm", od: "209–217mm", bolt: "M10", band: "45mm", material: "304 SS, Galvanized" },
        { inch: '10"', mm: "250mm", od: "260–268mm", bolt: "M10", band: "50mm", material: "304 SS, Galvanized" },
        { inch: '12"', mm: "300mm", od: "310–318mm", bolt: "M10", band: "50mm", material: "304 SS, Galvanized" },
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
                                <Link href="/" className="hover:text-blue-400">Clamps</Link>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-white">
                                    Double Bolt Clamps
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Double Bolt Clamps
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
                                        src="/products/doublbolt.webp" // replace with your image path
                                        alt="Rubber Hose"
                                        width={350}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div>
                                <h2 className="text-2xl font-bold text-[#2a2a2a] mb-3" style={{ fontFamily: "Roboto Slab, serif" }}>Overview</h2>
                                <div className="h-1 w-16 bg-red-500 mb-4"></div>

                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Double Bolt Clamps (sometimes called Heavy-Duty Band Clamps) are robust hose-clamping solutions designed for more demanding or higher-pressure applications than single bolt alternatives. With two bolts providing uniform tension around the hose, these clamps ensure a secure and leak-resistant connection—a critical requirement in dewatering, construction, industrial fluid transfer, and other heavy-duty setups.
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
                        Product Highlights
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-500 rounded"></span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
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

            {/* Technical Specifications */}
            <section className="w-full mt-10 bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-12">
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
                                <div className="md:w-1/3 text-[#2a2a2a] font-medium text-lg">
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
                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
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

            {/* sizes */}
            <section className="w-full px-4 md:px-10 lg:px-20 py-10">

                {/* Centered Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#2a2a2a] inline-block relative" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Size Specification
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
                                <th className="py-3 px-4">MIN–MAX OD</th>
                                <th className="py-3 px-4">BOLT SIZE</th>
                                <th className="py-3 px-4">BAND WIDTH</th>
                                <th className="py-3 px-4">MATERIAL</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sizeSpecs.map((item, i) => (
                                <tr
                                    key={i}
                                    className="border-b hover:bg-gray-50 text-black transition text-sm md:text-base"
                                >
                                    <td className="py-3 px-4">{item.inch}</td>
                                    <td className="py-3 px-4">{item.mm}</td>
                                    <td className="py-3 px-4">{item.od}</td>
                                    <td className="py-3 px-4">{item.bolt}</td>
                                    <td className="py-3 px-4">{item.band}</td>
                                    <td className="py-3 px-4">{item.material}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </section >
    )
}

export default Double