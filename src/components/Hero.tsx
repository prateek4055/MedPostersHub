// src/components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
          {/* Left: heading + CTA */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Professional{" "}
              <span className="font-caveat gradient-text">Medical</span>{" "}
              &{" "}
              <span className="font-caveat gradient-text">Clinical</span>{" "}
              Posters
            </h1>

            <p className="text-muted text-lg md:text-xl mb-6 max-w-xl">
              High-resolution, clinically accurate anatomical and educational posters for clinics, hospitals and teaching institutions — designed for medical professionals, not children.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* use a simple anchor so Vite/rollup doesn't need next/link */}
              <a
                href="/catalog"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow hover:opacity-95"
                aria-label="Browse catalog"
              >
                Browse catalogue
              </a>

              <a
                href="/contact"
                className="inline-block border border-primary px-6 py-3 rounded-lg font-medium text-primary hover:bg-primary/5"
                aria-label="Contact us"
              >
                Contact us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="bg-surface p-4 rounded-lg text-center min-w-[120px]">
                <div className="text-2xl font-extrabold text-primary">500+</div>
                <div className="text-sm text-muted">Clinics served</div>
              </div>

              <div className="bg-surface p-4 rounded-lg text-center min-w-[120px]">
                <div className="text-2xl font-extrabold text-primary">50+</div>
                <div className="text-sm text-muted">Poster designs</div>
              </div>

              <div className="bg-surface p-4 rounded-lg text-center min-w-[120px]">
                <div className="text-2xl font-extrabold text-primary">4.9★</div>
                <div className="text-sm text-muted">Customer rating</div>
              </div>
            </div>
          </div>

          {/* Right: example poster / image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <img
                src="/hero-poster.jpg"
                alt="Sample anatomical poster"
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
