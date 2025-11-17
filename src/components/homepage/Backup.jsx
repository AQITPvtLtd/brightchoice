import React from 'react'

const Backup = () => {
    return (
        <section className="bg-white mt-20">
            <div className="bg-[#2a2a2a] py-16 text-center mb-10">
                <h1 className="text-4xl font-semibold text-white" style={{ fontFamily: "Roboto Slab, serif" }}>Bright Choice Trading LLC</h1>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-5">

                <div className="md:order-1 order-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-gray-900 mb-6">
                        WHO WE ARE?
                    </h2>
                    <p className="font-semibold text-gray-800 mb-4">
                        Extensive Storage Company – Trusted Storage Solutions in Dubai for
                        Over 17 Years
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Founded in 2008, Extensive Storage Company has proudly served
                        thousands of individuals and businesses across Dubai, offering
                        secure and reliable storage solutions with a premium,
                        customer-first approach.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        With over 17 years of industry experience, we go beyond just
                        providing space — we offer peace of mind. From high-grade packing
                        materials that keep your belongings safe and intact, to a carefully
                        selected, well-trained crew who handle every item with care, we are
                        committed to delivering an experience that sets us apart.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Our state-of-the-art, meticulously maintained facility ensures your
                        possessions are stored in optimal conditions — whether you need
                        short-term flexibility, long-term assurance, or complete packaging
                        solutions.
                    </p>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        At Extensive Storage, we don’t just store your items — we protect
                        what matters to you.
                    </p>

                    <button className="bg-gray-900 border-2 border-gray-900 cursor-pointer text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
                        KNOW MORE
                    </button>
                </div>


                <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg md:order-2 order-1">
                    <Image
                        src="/companies/img3.png"
                        alt="Storage worker carrying boxes"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Backup