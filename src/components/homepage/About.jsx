"use client";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#2a2a2a] mb-8" style={{ fontFamily: "Roboto Slab, serif" }}>
          ABOUT US
        </h2>

        {/* Paragraphs */}
        <div className="max-w-5xl mx-auto space-y-6 text-gray-800 leading-relaxed">
          <p>
            Rav Group being established in 1992 has a portfolio of diversified business into Real
            Estate Sector, Construction Activities, Production of High Grade Hoses, Marble And
            Granite and Building Material Trading.
          </p>

          <p>
            Rav Group is a fully family owned Business. Our core competencies lies in the
            Manufacturing & Distribution of a range of products including all kind of PVC Pipes and
            Hoses, Marble And Granite Factory, Warehousing Units, Property & Real Estate Development.
          </p>

          <p>
            Having been in business for over 30 years, the experience of our Chairman, have
            contributed to the growth of the Group.
          </p>
        </div>

        {/* Button */}
        <div className="mt-10">
          <Link
            href="/about-us"
            className="inline-block bg-[#2a2a2a] border-2 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg"
          >
            KNOW MORE
          </Link>

        </div>
      </div>
    </section>
  );
}
