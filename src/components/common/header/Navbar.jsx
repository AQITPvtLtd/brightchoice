"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [links, setLinks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLinks([
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Our Products", href: "https://royalehoses.ravgrp.com/" },
      { name: "Contact Us", href: "/contact-us" },
    ]);
  }, []);

  // ✅ Automatically close menu when switching to large screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm py-4 z-[60]">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center z-[70]">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={80}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex bg-[#2a2a2a] rounded-full px-8 py-3 space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-medium hover:text-gray-300 transition" style={{ fontFamily: "Roboto Slab, serif" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/contact-us"
            className="bg-[#2a2a2a] border border-black text-white px-6 py-2 rounded-full font-medium hover:bg-black transition" style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Call Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden z-[70]">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-2xl text-black focus:outline-none"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu (below navbar only) */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-b-2xl z-[50] overflow-hidden animate-slideDown">
          <div className="max-h-[70vh] overflow-y-auto px-6 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-black transition" style={{ fontFamily: "Roboto Slab, serif" }}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="bg-[#2a2a2a] mt-2 border border-black text-white py-2 px-6 w-fit rounded-full font-medium hover:bg-black transition" style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Call Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}