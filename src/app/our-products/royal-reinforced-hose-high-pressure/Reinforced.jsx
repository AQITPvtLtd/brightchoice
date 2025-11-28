import React from "react";
import Image from "next/image";

const Reinforced = () => {
    return (
        <div>

            <section className="relative w-full h-[200px] md:h-[200px] flex items-center">
                {/* Background Image */}
                <Image
                    src="/products/productbg.jpg"   // ← Replace with your actual image path
                    alt="Banner"
                    fill
                    className="object-cover brightness-[0.65]"
                    priority
                />

                {/* Content Overlay */}
                <div className="relative z-10 mx-10 px-5 text-center justify-center w-full">
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-5"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        Royal Reinforced Hose High Pressure
                    </h1>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* PAGE HEADER */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Royal Reinforced Hose High Pressure
                            </h1>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our High Pressure Hose are Suitable for multipurpose use for lawns, landscaping,
                                cleaning, washing and removing stubborn debris from any flooring.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                This flexible garden hose is specially manufactured from complex materials and PVC
                                for ensuring no leakage or damage is caused.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Flexible Hose are easy to operate and store for residential, yachts, landscaping,
                                pest control, ship cleaning and washing.
                            </p>

                            <p className="text-gray-900 font-semibold mt-6">
                                <strong>Note:</strong> All our hoses are UAE made with certification and
                                6 months manufacturing defect warranty.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div>
                            <Image
                                src="/products/garden-hose-high-pressure.jpg"
                                alt="Royal Reinforced Hose High Pressure"
                                width={600}
                                height={600}
                                className="w-full h-96 object-cover rounded-xl shadow-lg border"
                            />
                        </div>
                    </div>

                    {/* SPECIFICATION TABLE SECTION */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8" style={{ fontFamily: "Roboto Slab, serif" }}>
                            Specifications
                        </h2>

                        {/* PRODUCT SPECIFICATION TABLE */}
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm text-black">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th
                                            colSpan="2"
                                            className="border border-gray-300 py-3 text-center text-gray-900 font-semibold"
                                        >
                                            PRODUCT SPECIFICATIONS
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-3 font-semibold">TYPE</td>
                                        <td className="border px-4 py-3">
                                            Multipurpose hose, liquid delivery, gardening
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border px-4 py-3 font-semibold">SIZE</td>
                                        <td className="border px-4 py-3">From 12.5mm to 25mm</td>
                                    </tr>

                                    <tr>
                                        <td className="border px-4 py-3 font-semibold">MATERIAL</td>
                                        <td className="border px-4 py-3">Poly Vinyl Chloride (P.V.C)</td>
                                    </tr>

                                    <tr>
                                        <td className="border px-4 py-3 font-semibold">REINFORCEMENT</td>
                                        <td className="border px-4 py-3">High tensile textile reinforcement</td>
                                    </tr>

                                    <tr>
                                        <td className="border px-4 py-3 font-semibold">FEATURES</td>
                                        <td className="border px-4 py-3">
                                            Four layers inside are in different colors and outer layer is transparent
                                            plus two color line in the outer layer. 15 year lifetime.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border px-4 py-3 font-semibold">APPLICATION</td>
                                        <td className="border px-4 py-3">
                                            For gardening or light industrials. Oil and sun heat resistant. High pressure.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* SECOND DATA TABLE */}
                        <div className="mt-10 overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm text-black">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-900">
                                        <th className="border px-4 py-3">HOSE I.D. (INCH)</th>
                                        <th className="border px-4 py-3">HOSE I.D. (MM)</th>
                                        <th className="border px-4 py-3">HOSE O.D. (MM)</th>
                                        <th className="border px-4 py-3">WORKING PRESSURE (BAR)</th>
                                        <th className="border px-4 py-3">WORKING PRESSURE (PSI)</th>
                                        <th className="border px-4 py-3">ROLL LENGTH (METER)</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-3 text-center">1/2"</td>
                                        <td className="border px-4 py-3 text-center">13</td>
                                        <td className="border px-4 py-3 text-center">17</td>
                                        <td className="border px-4 py-3 text-center">4</td>
                                        <td className="border px-4 py-3 text-center">60</td>
                                        <td className="border px-4 py-3 text-center">25,50</td>
                                    </tr>

                                    <tr>
                                        <td className="border px-4 py-3 text-center">3/4"</td>
                                        <td className="border px-4 py-3 text-center">19</td>
                                        <td className="border px-4 py-3 text-center">24</td>
                                        <td className="border px-4 py-3 text-center">4</td>
                                        <td className="border px-4 py-3 text-center">60</td>
                                        <td className="border px-4 py-3 text-center">25,50</td>
                                    </tr>

                                    <tr>
                                        <td className="border px-4 py-3 text-center">1"</td>
                                        <td className="border px-4 py-3 text-center">25</td>
                                        <td className="border px-4 py-3 text-center">30</td>
                                        <td className="border px-4 py-3 text-center">4</td>
                                        <td className="border px-4 py-3 text-center">60</td>
                                        <td className="border px-4 py-3 text-center">25,50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Reinforced;
