"use client";
import { FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Form from "./form/Form";

export default function Contact() {

    return (
        <section className="bg-[#fafafa] mt-20">
            <div className="bg-[#2a2a2a] py-16 text-center mb-10">
                <h1 className="text-4xl font-semibold text-white">Contact Us</h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
                {/* Left Section */}
                <div className="relative rounded-3xl overflow-hidden">
                    <Image
                        src="/about/img.png"
                        alt="Green Hose"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
                        <h2 className="text-3xl font-semibold mb-6">Reach Out to Us</h2>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center gap-3">
                                <FaUser />
                                <Link href="https://maps.app.goo.gl/vLd5Y6T51F3m75Ux6" target="_blank" className="hover:text-gray-200 transition-colors">
                                    Bright Choice Trading LLC
                                </Link>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1" />
                                <Link
                                    href="https://maps.app.goo.gl/jd3cvHSE3PPinGvq6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-200 transition-colors"
                                >
                                    Jebel Ali Industrial Area - 1, Dubai - U.A.E
                                </Link>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaPhoneAlt />
                                <Link href="tel:0097148856117" className="hover:text-gray-200 transition-colors">
                                    009714-8856117
                                </Link>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaPhoneAlt />
                                <Link href="tel:00971554812800" className="hover:text-gray-200 transition-colors">
                                    0097155-4812800
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="bg-[#f9f9f9] rounded-2xl shadow-sm p-8">
                    <h2 className="text-3xl font-semibold mb-8 text-[#0e0e0e]">
                        Reach Out to Us
                    </h2>

                    <Form />
                </div>
            </div>
        </section>
    );
}
