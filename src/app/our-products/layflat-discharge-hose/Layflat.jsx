import React from "react";
import Image from "next/image";

const Layflat = () => {
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
                        Layflat Discharge Hose
                    </h1>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* PAGE HEADER */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Layflat Discharge Hose
                            </h1>

                            <p className="text-gray-700 mb-3">
                                We manufacture an extensive range of lay flat hoses that resist entanglement,
                                bursting and twisting.
                            </p>

                            <p className="text-gray-700 mb-3">
                                Our lay flat discharge hoses are used for water discharge in industrial,
                                construction, swimming pools, water clogging, landscaping, and flooding applications.
                            </p>

                            <p className="text-gray-700 mb-3">
                                Layflat Hoses are economical, lightweight and compact for easy storage and rolling.
                            </p>

                            <p className="text-gray-700 mb-3">
                                4.5 - 3 kgf/cm² working pressure
                            </p>

                            <p className="text-gray-700 mb-3">
                                100 meter continuous, coiled
                            </p>

                            <p className="text-gray-700 mb-3">
                                Size range from 2″ to 8″ diameters.
                            </p>

                            <p className="text-gray-900 font-semibold">
                                <strong>Note:</strong> All our hoses are UAE made with certification and come
                                with 6 months manufacturing defect warranty.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="/products/layflat-discharge-hose.jpg"
                                alt="Layflat Discharge Hose"
                                width={600}
                                height={600}
                                className="w-full h-80 object-cover rounded-xl shadow-md"
                            />
                        </div>
                    </div>

                    {/* SPECIFICATIONS HEADER */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mt-16 mb-6 text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Specifications
                    </h2>

                    {/* PRODUCT SPECIFICATIONS TABLE */}
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-6 border">

                        {/* TOP DETAILS TABLE */}
                        <table className="w-full text-sm mb-10 border text-black">
                            <tbody>
                                <tr className="border">
                                    <td className="font-semibold p-3 border w-48">TYPE</td>
                                    <td className="p-3">LAY FLAT (DISCHARGE) HOSE</td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">SIZE</td>
                                    <td className="p-3">FROM 50MM TO 150MM</td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">MATERIAL</td>
                                    <td className="p-3">POLYESTER - POLY VINYL CHLORIDE (P.V.C.)</td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">FEATURES</td>
                                    <td className="p-3">
                                        THREE LAYERS INSIDE AND OUTSIDE WITH REINFORCED YARN IN BETWEEN
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">APPLICATIONS</td>
                                    <td className="p-3">
                                        DRIP IRRIGATION, CONSTRUCTION, INDUSTRIAL AND AGRICULTURAL
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* MAIN SIZE CHART TABLE */}
                        <table className="w-full text-sm border text-black">
                            <thead className="bg-gray-100">
                                <tr className="text-center">
                                    <th className="border p-3">SIZE</th>
                                    <th className="border p-3">APPROX WALL THICKNESS</th>
                                    <th className="border p-3">WORKING PRESSURE</th>
                                    <th className="border p-3">ROLL LENGTH</th>
                                </tr>

                                <tr className="text-center">
                                    <th className="border p-2">INCH</th>
                                    <th className="border p-2">MM</th>
                                    <th className="border p-2">KG/CM²</th>
                                    <th className="border p-2">METER</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                <tr>
                                    <td className="border p-2">2″</td>
                                    <td className="border p-2">1</td>
                                    <td className="border p-2">3.5</td>
                                    <td className="border p-2">50 OR 100</td>
                                </tr>

                                <tr>
                                    <td className="border p-2">3″</td>
                                    <td className="border p-2">1.35</td>
                                    <td className="border p-2">3</td>
                                    <td className="border p-2">50 OR 100</td>
                                </tr>

                                <tr>
                                    <td className="border p-2">4″</td>
                                    <td className="border p-2">1.40</td>
                                    <td className="border p-2">3</td>
                                    <td className="border p-2">50 OR 100</td>
                                </tr>

                                <tr>
                                    <td className="border p-2">6″</td>
                                    <td className="border p-2">1.65</td>
                                    <td className="border p-2">2.5</td>
                                    <td className="border p-2">50 OR 100</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Layflat;
