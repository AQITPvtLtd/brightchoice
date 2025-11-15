"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";
import { form } from "@/services/user";

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await form(formDataToSend);

            if (response.success) {
                await Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });

                setFormData({
                    fullname: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full rounded-full text-gray-700 border border-gray-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                    required
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-full text-gray-700 border border-gray-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                    required
                />
            </div>

            {/* Contact No */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact No. <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter contact number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-full text-gray-700 border border-gray-300 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                    required
                />
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    rows="4"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl text-gray-700 border border-gray-300 px-5 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-700"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className={`w-full bg-black border-2 border-black text-white text-lg font-medium py-3 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                    }`}
            >
                {loading ? <ClipLoader size={20} /> : "Submit"}
            </button>
        </form>
    )
}

export default Form