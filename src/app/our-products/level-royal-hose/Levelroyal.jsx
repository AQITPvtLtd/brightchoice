"use client";
import React, { useState } from "react";
import Image from "next/image";
import QuoteModal from "../quotemodal/QuoteModal";
import ModalForm from "../modalform/ModalForm";
const Levelroyal = () => {
    const [open, setOpen] = useState(false);
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
                        Level Royal Hose
                    </h1>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* PAGE HEADER */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Level Royal Hose
                            </h1>

                            <p className="text-gray-700 mb-3">
                                This transparent PVC Level Hose is a clear and flexible hose that is
                                researched and designed to precisely measure liquid levels in various
                                situations. Made of high-quality, non-toxic PVC material, this hose is
                                weather-resistant and durable.
                            </p>

                            <p className="text-gray-700 mb-3">
                                The transparent material permits a clear view of the liquid for ease
                                of use and ensures accurate level readings.
                            </p>

                            <p className="text-gray-700 mb-3">
                                This product is suitable for construction sites, interiors, swimming pools,
                                spas, water tanks, and more.
                            </p>

                            <p className="text-gray-900 font-semibold">
                                <strong>Note:</strong> All our hoses are UAE-made with certification and come
                                with a 6-month manufacturing defect warranty.
                            </p>

                            <button onClick={() => setOpen(true)} className="bg-[#2a2a2a] cursor-pointer transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg text-white font-semibold px-6 py-3 rounded-md mt-6">
                                GET A QUOTE
                            </button>
                        </div>
                        {/* Popup Modal */}
                        <QuoteModal isOpen={open} onClose={() => setOpen(false)}>
                            <h2 className="text-xl font-bold mb-4">Get a Quote</h2>

                            {/* Your Contact Form here */}
                            <ModalForm />

                        </QuoteModal>
                        {/* <div className="p-2 md:p-2 bg-white rounded-xl shadow-md">
                            <Image
                                src="/products/level-royal-hose.jpg"
                                alt="Level Royal Hose"
                                width={600}
                                height={600}
                                className="w-full h-80 object-contain"
                            />
                        </div> */}
                        <div>
                            <Image
                                src="/products/level-royal-hose1.jpg"
                                alt="Reinforced Garden Hose"
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain rounded-xl shadow-lg border"
                            />
                        </div>
                    </div>

                    {/* SPECIFICATIONS HEADER */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mt-16 mb-6 text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Specifications
                    </h2>

                    {/* PRODUCT SPECIFICATIONS TABLE */}
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-6 border">

                        {/* TOP SPECIFICATIONS */}
                        <table className="w-full text-sm mb-10 border text-black">
                            <tbody>
                                <tr className="border">
                                    <td className="font-semibold p-3 border w-48">TYPE</td>
                                    <td className="p-3">TRANSPARENT CLEAR HOSE</td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">SIZE</td>
                                    <td className="p-3">FROM 6mm TO 50mm</td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">MATERIAL</td>
                                    <td className="p-3">POLY VINYL CHLORIDE (P.V.C)</td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">FEATURES</td>
                                    <td className="p-3">ONE LAYER OF HIGH QUALITY TRANSPARENT MATERIAL</td>
                                </tr>
                                <tr className="border">
                                    <td className="font-semibold p-3 border">APPLICATIONS</td>
                                    <td className="p-3">LIQUIDS DELIVERY · LEVELING</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* MAIN SIZE TABLE */}
                        <table className="w-full text-sm border text-black">
                            <thead className="bg-gray-100">
                                <tr className="text-center">
                                    <th className="border p-3">HOSE I.D.</th>
                                    <th className="border p-3">HOSE I.D.</th>
                                    <th className="border p-3">HOSE O.D.</th>
                                    <th className="border p-3">ROLL LENGTH</th>
                                </tr>

                                <tr className="text-center">
                                    <th className="border p-2">INCH</th>
                                    <th className="border p-2">MM</th>
                                    <th className="border p-2">MM</th>
                                    <th className="border p-2">METER</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                <tr>
                                    <td className="border p-2">1/4"</td>
                                    <td className="border p-2">6</td>
                                    <td className="border p-2">8</td>
                                    <td className="border p-2">50</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">5/16"</td>
                                    <td className="border p-2">8</td>
                                    <td className="border p-2">10</td>
                                    <td className="border p-2">50</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">3/8"</td>
                                    <td className="border p-2">10</td>
                                    <td className="border p-2">13</td>
                                    <td className="border p-2">50</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">1/2"</td>
                                    <td className="border p-2">12.5</td>
                                    <td className="border p-2">16</td>
                                    <td className="border p-2">50</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">5/8"</td>
                                    <td className="border p-2">16</td>
                                    <td className="border p-2">20</td>
                                    <td className="border p-2">50</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">3/4"</td>
                                    <td className="border p-2">19</td>
                                    <td className="border p-2">23</td>
                                    <td className="border p-2">50</td>
                                </tr>
                                <tr>
                                    <td className="border p-2">1"</td>
                                    <td className="border p-2">25</td>
                                    <td className="border p-2">30</td>
                                    <td className="border p-2">50</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Levelroyal;
