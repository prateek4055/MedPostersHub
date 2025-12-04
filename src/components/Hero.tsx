// src/components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section className="bg-background pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Single left-aligned content block */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Professional{" "}
            <span className="font-caveat gradient-text">Medical</span>{" "}
            <br className="hidden sm:block" />
            &{" "}
            <span className="font-caveat gradient-text">Clinical</span>{" "}
            Posters
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            High-resolution, clinically accurate anatomical and educational
            posters for clinics, hospitals and teaching institutes — designed
            for medical professionals, not children.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#catalog"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow hover:opacity-95"
            >
              Browse catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
