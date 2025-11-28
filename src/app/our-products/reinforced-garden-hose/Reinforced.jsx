import React from 'react'
import Image from 'next/image'
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
                        Reinforced Garden Hose
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
                                Reinforced Garden Hose
                            </h1>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Manufacturers of PVC double layer reinforced garden hose is use for residential use on daily basis for gardening , domestic low pressure washing of cars , lawns , interlocking and tiles.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Ultra light duty component of this hose provides easy of use to customers with extra durability and to make sure the hose are long lasting we have added durable components to our ultra light duty hoses.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Sizes from 1/2″ to 2″ with green , yellow and clear colours are available.
                            </p>

                            <p className="text-gray-900 font-semibold mt-6">
                                <strong>Note:</strong> All our hoses are UAE made with certification and 6 months manufacturing defect warranty
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div>
                            <Image
                                src="/products/reinforced-garden-hose.jpg"
                                alt="Reinforced Garden Hose"
                                width={600}
                                height={600}
                                className="w-full h-100 object-cover rounded-xl shadow-lg border"
                            />
                        </div>
                    </div>


                    {/* PRODUCT SPECIFICATIONS TABLE */}
                    <div className="mt-10 border border-gray-300 rounded-lg overflow-hidden">
                        <h2 className="text-center font-semibold text-lg py-3 border-b bg-gray-100 text-black" style={{ fontFamily: "Roboto Slab, serif" }}>
                            PRODUCT SPECIFICATIONS
                        </h2>

                        <table className="w-full text-sm text-black">
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3 font-semibold w-1/3 border-r">TYPE</td>
                                    <td className="p-3">MULTIPURPOSE HOSE, WATER DELIVERY, GARDENING</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3 font-semibold border-r">SIZE</td>
                                    <td className="p-3">FROM 12.5MM TO 25MM</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3 font-semibold border-r">MATERIAL</td>
                                    <td className="p-3">POLY VINYL CHLORIDE (P.V.C)</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3 font-semibold border-r">REINFORCEMENT</td>
                                    <td className="p-3">HIGH TENSILE TEXTILE REINFORCEMENT</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-3 font-semibold border-r">FEATURES</td>
                                    <td className="p-3">
                                        TWO LAYER INSIDE IS BLACK AND OUTER LAYER IS YELLOW OR GREEN PLUS TWO COLOR LINE IN THE OUTER LAYER
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-3 font-semibold border-r">APPLICATION</td>
                                    <td className="p-3">
                                        FOR GARDENING OR LIGHT INDUSTRIALS, OIL AND SUN HEAT RESISTANT
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* TECHNICAL SPECIFICATIONS TABLE */}
                    <div className="mt-10 border border-gray-300 rounded-lg overflow-hidden text-black">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100">
                                <tr className="border-b">
                                    <th className="p-3 border-r">HOSE I.D.</th>
                                    <th className="p-3 border-r">HOSE I.D.</th>
                                    <th className="p-3 border-r">HOSE O.D.</th>
                                    <th className="p-3 border-r">WORKING PRESSURE</th>
                                    <th className="p-3 border-r">WORKING PRESSURE</th>
                                    <th className="p-3">ROLL LENGTH</th>
                                </tr>

                                <tr className="border-b">
                                    <th className="p-2 border-r">INCH</th>
                                    <th className="p-2 border-r">MM</th>
                                    <th className="p-2 border-r">MM</th>
                                    <th className="p-2 border-r">BAR</th>
                                    <th className="p-2 border-r">PSI</th>
                                    <th className="p-2">METER</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b text-center">
                                    <td className="p-3 border-r">1/2"</td>
                                    <td className="p-3 border-r">12.5</td>
                                    <td className="p-3 border-r">15.5</td>
                                    <td className="p-3 border-r">4</td>
                                    <td className="p-3 border-r">60</td>
                                    <td className="p-3">25, 30, 50</td>
                                </tr>

                                <tr className="border-b text-center">
                                    <td className="p-3 border-r">3/4"</td>
                                    <td className="p-3 border-r">19</td>
                                    <td className="p-3 border-r">23</td>
                                    <td className="p-3 border-r">4</td>
                                    <td className="p-3 border-r">60</td>
                                    <td className="p-3">25, 30, 50</td>
                                </tr>

                                <tr className="text-center">
                                    <td className="p-3 border-r">1"</td>
                                    <td className="p-3 border-r">25</td>
                                    <td className="p-3 border-r">29</td>
                                    <td className="p-3 border-r">4</td>
                                    <td className="p-3 border-r">60</td>
                                    <td className="p-3">25, 30, 50</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Reinforced