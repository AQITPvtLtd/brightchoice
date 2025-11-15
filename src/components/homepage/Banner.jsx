"use client";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh] mt-20">
      {/* Background Image */}
      <Image
        src="/banner/banner1.png" // 🟢 Replace with your image
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 lg:px-28 text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">PVC Hoses</h1>

        <p className="text-base md:text-sm lg:text-sm xl:text-sm leading-relaxed mb-8">
          Since inception, We at Rav Group have established & built our business model by
          maintaining long term relationships with our clients, suppliers & business partners.
          Highly trusted for our commitment to quality, customer service and timely delivery,
          we at Rav Group pride ourselves at being a preferred supplier to the Middle Eastern
          And North Africa Region with multiple industries in UAE and Middle East.
        </p>

        <Link
          href="/about-us"
          className="inline-block border border-white text-white px-6 py-3 rounded-full text-sm md:text-base font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit"
        >
          KNOW MORE
        </Link>
      </div>
    </section>
  );
}
