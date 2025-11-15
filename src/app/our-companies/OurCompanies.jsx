"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function OurCompanies() {
  // ✅ Dynamic data (you can replace with API fetch)
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Simulated dynamic data load
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: "Bright Choice Trading LLC",
          image: "/companies/img.png", // Add image in /public/images
        },
        {
          id: 2,
          name: "Royal Hoses",
          image: "/companies/img1.png",
        },
        {
          id: 3,
          name: "Marble Art LLC",
          image: "/companies/img2.png",
        },
      ];
      setCompanies(data);
    };
    fetchData();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-full h-64 sm:h-72 lg:h-80">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="py-4 text-center bg-[#f9f9f9]">
                <h3 className="text-lg font-medium text-gray-800">
                  {company.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
