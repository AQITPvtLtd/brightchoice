import React from "react";
import Image from "next/image";

const Royal = () => {
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
                        Royal Fire Hoses
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
                                Royal Fire Hoses
                            </h1>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our Fire Hose is manufactured after extensive research and development by our team and obtaining test certifications. Our 25-meter long hose is made from the highest grade of PVC, specializing in being heat-resistant and designed after carefully analyzing the situations firefighters encounter.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our hoses are engineered to withstand high water pressure, making them stand out in the market while ensuring uninterrupted and forceful water output to combat flames efficiently.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                The lightweight and flexible build of the hose provides simplicity and comfort, enabling firefighters to maneuver in critical and challenging conditions.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Suitable for both trained and untrained individuals during fire emergencies.
                            </p>

                            <p className="text-gray-900 font-semibold mt-6">
                                <strong>Note:</strong> All our hoses are UAE made with certification and include 6 months manufacturing defect warranty.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div>
                            <Image
                                src="/products/fire-hoses-royal.jpg"
                                alt="Royal Fire Hose"
                                width={600}
                                height={600}
                                className="w-full h-100 object-cover rounded-xl shadow-lg border"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Royal;
