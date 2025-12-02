"use client";
import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import QuoteModal from "../quotemodal/QuoteModal";
import ModalForm from "../modalform/ModalForm";
const Layflat = () => {
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
                        Layflat Dewatering Royal Hose
                    </h1>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* PAGE HEADER */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5" style={{ fontFamily: "Roboto Slab, serif" }}>
                                Layflat Dewatering Royal Hose
                            </h1>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Royal Hose Dewatering Hose is designed specially by our research and development team with crafting a different pattern and by using high grade raw materials for the purpose of ensuring success and smoothness in Dewatering process at the highest temperature of the Mena region.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                This high-pressure lay flat PVC hose made in the UAE with 2 layers and reinforcement of a particular pattern designed by our team making it extra tensile and durable for all high pressure and long distance applications specifically designed for Dewatering plants, Construction Sites, Oil Industry, Water Treatment Plants, Ships and Aviation Industry.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                6 -7 kgf/cm2 working pressure
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                100 meter continuous, coiled
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Size range from 2″ to 8″ diameters.
                            </p>

                            <p className="text-gray-900 font-semibold mt-6">
                                <strong>Note:</strong> All our hoses are UAE made with certification and 6 months manufacturing defect warranty
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
                        {/* RIGHT IMAGE */}
                        <div>
                            <Image
                                src="/products/layflat-dewatering-royal-hose.jpg"
                                alt="Layflat Dewatering Royal Hose"
                                width={600}
                                height={600}
                                className="w-full h-100 object-cover rounded-xl shadow-lg border"
                            />
                        </div>

                    </div>

                    {/* SPECIFICATIONS TABLE */}
                    <section className="py-10">
                        <h2 className="text-2xl font-semibold text-center mb-6 text-black" style={{ fontFamily: "Roboto Slab, serif" }}>Specifications</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 text-sm text-black">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-900 font-semibold">
                                        <th colSpan="2" className="border border-gray-300 px-4 py-2 text-center">
                                            PRODUCT SPECIFICATIONS
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-medium">TYPE</td>
                                        <td className="border border-gray-300 px-4 py-2">LAY FLAT (DISCHARGE) HOSE</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-medium">SIZE</td>
                                        <td className="border border-gray-300 px-4 py-2">FROM 2 INCH UP TO 6 INCH</td>
                                    </tr>

                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-medium">MATERIAL</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            POLYESTER - POLY VINYL CHLORIDE (P.V.C.)
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-medium">FEATURES</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            TWO LAYERS INSIDE AND OUTSIDE WITH REINFORCED YARN IN BETWEEN
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2 font-medium">APPLICATIONS</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            AGRICULTURE, SURFACE IRRIGATION, SPRINKLER IRRIGATION, SUPPLY LINE
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* SECOND TABLE */}
                        <div className="overflow-x-auto mt-10">
                            <table className="w-full border border-gray-300 text-sm text-black">
                                <thead className="bg-gray-100 text-gray-900 font-semibold">
                                    <tr className="text-center">
                                        <th className="border border-gray-300 px-4 py-2">SIZE</th>
                                        <th className="border border-gray-300 px-4 py-2">APPROX WALL THICKNESS</th>
                                        <th className="border border-gray-300 px-4 py-2">WORKING PRESSURE</th>
                                        <th className="border border-gray-300 px-4 py-2">ROLL LENGTH</th>
                                    </tr>
                                    <tr className="text-gray-700 text-center">
                                        <th className="border border-gray-300 px-4 py-2 text-sm">INCH</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm">MM</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm">KG/CM2</th>
                                        <th className="border border-gray-300 px-4 py-2 text-sm">METER</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">2″</td>
                                        <td className="border border-gray-300 px-4 py-2">1.60</td>
                                        <td className="border border-gray-300 px-4 py-2">7.0</td>
                                        <td className="border border-gray-300 px-4 py-2">50 OR 100</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">3″</td>
                                        <td className="border border-gray-300 px-4 py-2">1.90</td>
                                        <td className="border border-gray-300 px-4 py-2">6.0</td>
                                        <td className="border border-gray-300 px-4 py-2">50 OR 100</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">4″</td>
                                        <td className="border border-gray-300 px-4 py-2">2.15</td>
                                        <td className="border border-gray-300 px-4 py-2">6.0</td>
                                        <td className="border border-gray-300 px-4 py-2">50 OR 100</td>
                                    </tr>

                                    <tr className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">6″</td>
                                        <td className="border border-gray-300 px-4 py-2">2.60</td>
                                        <td className="border border-gray-300 px-4 py-2">6.0</td>
                                        <td className="border border-gray-300 px-4 py-2">50 OR 100</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </section>
                </div>
            </section>
        </div >
    )
}

export default Layflat