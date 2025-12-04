// src/components/Hero.tsx
import React from "react";
import Link from "next/link"; // remove if not using Next.js

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ---------------- TEXT AREA ---------------- */}
          <div className="space-y-6">

            {/* ======= MAIN HEADING WITH GRADIENT WORDS ======= */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">

              Professional{" "}
              <span className="font-caveat text-5xl bg-gradient-to-r from-[#0B4DB0] via-[#3AAFFF] to-[#12D8FA] bg-clip-text text-transparent">
                Medical
              </span>{" "}
              Posters &{" "}
              <span className="font-caveat text-5xl bg-gradient-to-r from-[#0B4DB0] via-[#3AAFFF] to-[#12D8FA] bg-clip-text text-transparent">
                Clinical
              </span>{" "}
              Reference Charts
            </h1>

            {/* ======= SUBHEADING ======= */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              High-precision anatomical and clinical visuals designed for healthcare environments.
              Printed on premium 250gsm matte stock with UV-resistant inks — ideal for consultation
              rooms, teaching spaces and patient education.
            </p>

            {/* ======= BUTTONS ======= */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/catalog" legacyBehavior>
                <a className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-95">
                  Browse Catalog
                </a>
              </Link>

              <Link href="/contact" legacyBehavior>
                <a className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Bulk & Institutional Orders
                </a>
              </Link>
            </div>

            {/* ======= TRUST LINE ======= */}
            <div className="mt-6 text-sm text-gray-500">
              <strong className="text-gray-700">Quality</strong> — 250gsm matte stock · UV-resistant inks · Clinic-grade printing.
            </div>
          </div>

          {/* ---------------- HERO IMAGE SECTION ---------------- */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
              <img
                src="/hero/medical-poster-preview.jpg"
                alt="Professional medical posters preview"
                className="w-full h-auto rounded"
              />

              <div className="mt-4 text-xs text-gray-500">
                Example poster preview — available in A3 • A2 • A1. Custom sizes also available.
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- FEATURES ROW ---------------- */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-gray-900">Premium Printing</div>
            <div className="text-sm text-gray-600 mt-1">Clinic-grade, long-lasting quality</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-gray-900">Educational Accuracy</div>
            <div className="text-sm text-gray-600 mt-1">Clear clinical diagrams for professionals</div>
          </div>

          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-gray-900">Institutional Orders</div>
            <div className="text-sm text-gray-600 mt-1">Bulk pricing & customization available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
