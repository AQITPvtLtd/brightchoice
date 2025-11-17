"use client";
import Image from "next/image";
import Link from "next/link"; // <-- Import Link
import { useState, useEffect } from "react";

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: "Bright Choice Trading LLC",
          image: "/companies/img.png",
          link: "/bright-choice-trading-llc",
        },
        {
          id: 2,
          name: "Royal Hoses",
          image: "/companies/img1.png",
          link: "https://royalehoses.ravgrp.com/",
        },
        {
          id: 3,
          name: "Marble Art LLC",
          image: "/companies/img2.png",
          link: "/marble-art-llc",
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
                <Link
                  href={company.link}
                  className="text-lg font-medium text-gray-800 hover:text-gray-900 transition" style={{ fontFamily: "Roboto Slab, serif" }}
                >
                  {company.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
