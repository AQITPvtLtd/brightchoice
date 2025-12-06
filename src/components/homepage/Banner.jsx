"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TRANSITION_MS = 1000;
const AUTO_MS = 4000;

export default function Banner() {
  const desktopImages = [
    "/banner/banner4.png",
    "/banner/banner.jpg",
    "/banner/banner2.png",
  ];

  const mobileImages = [
    "/banner/mob1.png",
    "/banner/mob.jpg",
    "/banner/mob2.png",
  ];

  // SLIDE-WISE CONTENT
  const slideContent = [
    {
      title: "LAY FLAT HOSES",
      description:
        "Our Lay Flat Hoses are lightweight, durable, and easy to handle ideal for dewatering, agriculture, and industrial use.<span class='hidden sm:inline'><br /></span>Designed to withstand tough UAE conditions, they ensure reliable performance with fast delivery support.",
    },
    {
      title: "Reliable Industrial Solutions",
      description:
        "Rav Group provides reliable PVC hose solutions with consistent quality, trusted service, and timely delivery across the Middle East and North Africa backed by years of expertise.",
    },
    {
      title: "Strong Couplings Connect",
      description:
        "Our couplings and nipples ensure secure, leak-free connections for hose and pipeline systems. Built for heavy-duty field use, they offer superior grip, long-lasting durability, and smooth compatibility trusted by industries across the UAE.",
    },
  ];

  // Clone arrays for smooth infinite loop
  const extendedDesktop = [...desktopImages, ...desktopImages];
  const extendedMobile = [...mobileImages, ...mobileImages];
  const originalLength = desktopImages.length;

  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const intervalRef = useRef(null);

  // Auto Play
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_MS);

    return () => clearInterval(intervalRef.current);
  }, []);

  // FIX: Reset when switching tabs
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setTransitionEnabled(false);
        setIndex(0);

        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
          setIndex((prev) => prev + 1);
        }, AUTO_MS);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const handleTransitionEnd = () => {
    if (index === originalLength) {
      setTransitionEnabled(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIndex(0);
          setTimeout(() => setTransitionEnabled(true), 20);
        });
      });
    }
  };

  const trackStyle = (idx) => ({
    transform: `translateX(-${idx * 100}%)`,
    transition: transitionEnabled
      ? `transform ${TRANSITION_MS}ms ease-in-out`
      : "none",
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay },
    }),
  };

  const contentIndex = index % originalLength;

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[80vh] mt-20 overflow-hidden">
      {/* Desktop Track */}
      <div className="absolute inset-0 hidden md:block overflow-hidden">
        <div
          className="flex h-full"
          style={trackStyle(index)}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedDesktop.map((img, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image src={img} alt="" fill className="object-fill" priority />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Track */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        <div
          className="flex h-full"
          style={trackStyle(index)}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedMobile.map((img, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image src={img} alt="" fill className="object-fill" priority />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* CONTENT */}
      <div
        className={`
    relative z-10 
    flex flex-col 
    justify-start
    h-full 
    pt-10 md:pt-12
    text-white 
    transition-all duration-500

    ${contentIndex === 0
            ? "items-center text-center px-0 w-full"
            : "items-start text-left px-4 sm:px-6 md:px-10 lg:px-12 max-w-lg"}
  `}
      >

        {/* TITLE */}
        <motion.h1
          key={contentIndex + "-title"}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-3xl md:text-4xl font-semibold mb-6 text-[#2a2a2a]"
          style={{ fontFamily: 'Roboto Slab, serif' }}
        >
          {slideContent[contentIndex].title}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          key={contentIndex + "-desc"}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="text-sm md:text-sm leading-relaxed mb-6 text-black text-justify"
          dangerouslySetInnerHTML={{
            __html: slideContent[contentIndex].description
          }}
        />

        {/* BUTTON */}
        <motion.div
          key={contentIndex + "-btn"}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.6}
        >
          <Link
            href="/about-us"
            className="
        inline-block border border-[#2a2a2a] bg-[#2a2a2a] text-white 
        px-6 py-3 rounded-full text-sm md:text-base font-medium 
        transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-lg
      "
          >
            KNOW MORE
          </Link>
        </motion.div>

      </div>

    </section>
  );
}
