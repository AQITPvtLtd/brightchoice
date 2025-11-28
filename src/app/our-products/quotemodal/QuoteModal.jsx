"use client";

import React from "react";

export default function QuoteModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pt-25 p-4">

      {/* Background Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Box */}
      <div
        className="
          relative w-full max-w-xl mx-4
          bg-white/10 backdrop-blur-2xl
          border border-white/20 shadow-2xl
          rounded-2xl p-8
          opacity-0 scale-95
          animate-fadePopup
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-white/80 hover:text-white text-xl"
        >
          ✕
        </button>

        <div>{children}</div>
      </div>

      {/* Animation WITHOUT tailwind.config */}
      <style>{`
        @keyframes fadePopup {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadePopup {
          animation: fadePopup 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
