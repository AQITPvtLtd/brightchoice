"use client";
import { FaPhoneAlt, FaMapMarkerAlt, FaUser, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-[#0e0e0e] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Rav Group Logo"
              width={120}
              height={50}
              className="mb-3"
            />
          </Link>

          <p className="text-sm leading-relaxed text-gray-700">
            <span className="font-semibold">Rav Group</span> was created to
            manage the company’s manufacturing, trading, retail & real estate
            businesses and to provide for strategic direction for their growth.
          </p>
        </div>

        {/* Sub-Companies */}
        <div>
          <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "Roboto Slab, serif" }}>Sub-Companies</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <Link href="https://royalehoses.ravgrp.com/" className="hover:text-gray-900 transition">
                Bright Choice Trading LLC
              </Link>
            </li>
            <li>
              <Link
                href="https://royalehoses.ravgrp.com/"
                target="_blank"
                className="hover:text-gray-900 transition"
              >
                Royale Hoses
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "Roboto Slab, serif" }}>Quick Links</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><Link href="/" className="hover:text-gray-900 transition">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-gray-900 transition">About Us</Link></li>
            <li><Link href="https://royalehoses.ravgrp.com/" className="hover:text-gray-900 transition">Our Products</Link></li>
            <li><Link href="/contact-us" className="hover:text-gray-900 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "Roboto Slab, serif" }}>Reach Out to Us</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            
            <li className="flex items-center gap-2">
              <FaUser className="text-gray-900" />
              <Link href="https://maps.app.goo.gl/oFM717mUQrRWVJcQ9" target="_blank" className="hover:text-gray-900 transition">
                Bright Choice Trading LLC
              </Link>
            </li>

            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-gray-900" />
              <Link
                href="https://maps.app.goo.gl/QXnkKyDkb4EonyuL8"
                target="_blank"
                className="hover:text-gray-900 transition"
              >
                Jebel Ali Industrial Area - 1, Dubai - U.A.E
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-900" />
              <Link href="tel:0097148856117" className="hover:text-gray-900 transition">
                009714-8856117
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-900" />
              <Link href="tel:00971554812800" className="hover:text-gray-900 transition">
                0097155-4812800
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <Link
              href="https://www.facebook.com/people/Royal-Hoses/61583936131671/"
              className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition transform duration-200"
              target="_blank"
            >
              <FaFacebookF color="#1877F2" size={18} />
            </Link>

            <Link
              href="https://www.instagram.com/royal_hoses/"
              className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition transform duration-200"
              target="_blank"
            >
              <FaInstagram color="#E1306C" size={18} />
            </Link>

            <Link
              href="https://maps.app.goo.gl/sgSaGsnUNdQuY3d77"
              className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition transform duration-200"
              target="_blank"
            >
              <FcGoogle size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2a2a2a] text-white text-center py-4 text-sm">
        Design & Developed By{" "}
        <Link
          href="https://tekbooster.com"
          className="hover:text-gray-300 transition"
          target="_blank"
        >
          Tek Booster (Digital Marketing Company)
        </Link>
      </div>
    </footer>
  );
}
